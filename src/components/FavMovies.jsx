import React, { useEffect, useState } from "react";
import { UseAuth } from "../context/AuthContext";
import { db } from "../firebase";
import { doc, onSnapshot, updateDoc } from "firebase/firestore";
import { IoMdHeart } from "react-icons/io";

const baseUrl = "http://image.tmdb.org/t/p/original";

const FavMovies = ({ isLargeRow }) => {
  const { user } = UseAuth();
  const [movies, setMovies] = useState([]);
  const docRef = doc(db, "users", `${user?.email}`);
  useEffect(() => {
    onSnapshot(doc(db, "users", `${user?.email}`), (doc) =>
      setMovies(doc.data()?.FavMovies)
    );
  }, [user?.email]);

  const HandleRemoveMovie = async (movie) => {
    try {
      const result = movies.filter((item) => item.id !== movie.id);
      await updateDoc(docRef, { FavMovies: result });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="h-full flex flex-col">
        <h1 className="text-white font-bold text-3xl p-6">My Favourites</h1>
        <div className="grid grid-cols-5 gap-3">
          {movies?.map((movie) => (
            <div key={movie.id} className="relative flex-shrink-0">
              <img
                className={`${isLargeRow ? "max-h-60" : "w-[250px]"} mr-4`}
                src={`${baseUrl}${
                  isLargeRow ? movie.poster_path : movie.backdrop_path
                }`}
                alt={movie.name || movie.title}
              />
              <div className="text-white absolute top-0 left-0 w-[250px] h-full opacity-0 hover:bg-black/50 hover:opacity-100 flex flex-wrap justify-center items-center">
                <p>{movie.title || movie.name}</p>

                <IoMdHeart
                  className="absolute top-4 left-4"
                  onClick={() => HandleRemoveMovie(movie)}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default FavMovies;
