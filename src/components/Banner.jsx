import React, { useEffect, useState } from "react";
import Requests from "./Requests";
import axios from "../axios";

// const baseUrl = "http://image.tmdb.org/t/p/original";
export const Banner = () => {
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`${Requests.fetchNetflixOriginals}`);
      setMovie(
        response.data.results[
          Math.floor(Math.random() * response.data.results.length + 1)
        ]
      );
    };
    setInterval(fetchData, 5000);
  }, []);
  return (
    <div className="w-full h-[90vh] text-white font-sans font-semibold bg-black">
      <div className="w-full h-full">
        <img
          className="opacity-[0.27] h-full w-full"
          src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
          alt={movie?.name}
        />

        <div className="absolute top-[30%]">
          <h1 className="text-2xl md:text-4xl">
            {movie?.name || movie?.title}
          </h1>
          <div className="my-4">
            <button className="border bg-gray-300 text-black border-gray-300 py-2 px-7">
              Play
            </button>
            <button className="border border-gray-300 py-2 px-5 ml-4">
              Watch Later
            </button>
            <div className="text-gray-300 my-4 w-full md:max-w-[70%] lg:max-w-[50%]">
              <p className="">Overview:{movie?.overview}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
