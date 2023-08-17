// MovieList.js
import React from "react";

const baseUrl = "http://image.tmdb.org/t/p/original";
const MovieList = ({ movies, isLargeRow }) => {
  return (
    <>
      <div className="h-full bg-black">
        <div className="grid grid-cols-5 gap-3">
          {movies?.map((movie) => (
            <div key={movie.id} className="relative">
              <img
                className={`${isLargeRow ? "max-h-60" : "w-[250px]"} mr-4`}
                src={`${baseUrl}${
                  isLargeRow ? movie.poster_path : movie.backdrop_path
                }`}
                alt={movie.name || movie.title}
              />
              <div className="text-white absolute top-0 left-0 w-[250px]  h-full opacity-0 hover:bg-black/50 hover:opacity-100 flex flex-wrap justify-center items-center">
                <p>{movie.title || movie.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default MovieList;
