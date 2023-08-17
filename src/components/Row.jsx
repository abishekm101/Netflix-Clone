import React, { useEffect, useState } from "react";
import { IoMdHeart, IoMdHeartEmpty } from "react-icons/io";
import { arrayUnion, doc, onSnapshot, updateDoc } from "firebase/firestore";
import { db } from "../firebase";
import { UseAuth } from "../context/AuthContext";
import instance from "../axios/axios";

const baseUrl = "http://image.tmdb.org/t/p/original";
const Row = ({ title, fetchUrl, isLargeRow }) => {
  const [movies, setMovies] = useState([]);
  const [isLiked, setIsLiked] = useState(false);
  const [favourite, setFavourite] = useState([]);
  const { user } = UseAuth();
  const docRef = doc(db, "users", `${user?.email}`);
  useEffect(() => {
    const fetchData = async () => {
      const response = await instance.get(`${fetchUrl}`);
      setMovies(response.data.results);
    };
    fetchData();
    onSnapshot(docRef, (doc) => {
      setFavourite(doc.data()?.FavMovies);
    });
  }, [setFavourite]);

  const HandleAddMovie = async (movie) => {
    setIsLiked(!isLiked);
    await updateDoc(docRef, {
      FavMovies: arrayUnion({
        id: movie.id,
        title: movie?.name || movie.title,
        backdrop_path: movie?.backdrop_path,
      }),
    });
  };
  const HandleRemoveMovie = async (movie) => {
    setIsLiked(!isLiked);
    try {
      const result = favourite.filter((item) => item.id !== movie.id);
      await updateDoc(docRef, { FavMovies: result });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="bg-black h-full">
        <h1 className="text-white font-bold text-xl p-2">{title}</h1>
        <div className="flex overflow-x-auto">
          {movies.map((movie) => (
            <div key={movie.id} className="relative flex-shrink-0">
              <img
                className={`${isLargeRow ? "max-h-60" : "w-[260px]"} mr-4`}
                src={`${baseUrl}${
                  isLargeRow ? movie.poster_path : movie.backdrop_path
                }`}
                alt={movie.name || movie.title}
              />
              <div className="text-white absolute top-0 left-0 w-full h-full opacity-0 hover:bg-black/80 hover:opacity-100 grid place-content-center grid-flow-row">
                <p className="whitespace-normal text-sm md:text-sm font-bold ">
                  {movie.title || movie.name}
                </p>
                <p>
                  {favourite?.some((favMovie) => favMovie.id === movie.id) ? (
                    <IoMdHeart
                      className="absolute top-4 left-4"
                      onClick={() => HandleRemoveMovie(movie)}
                    />
                  ) : (
                    <IoMdHeartEmpty
                      className="absolute top-4 left-4"
                      onClick={() => HandleAddMovie(movie)}
                    />
                  )}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Row;
