// App.js
import React, { useState } from "react";
import SearchBar from "../components/SearchBar";
import MovieList from "../components/MovieList";

const API_KEY = "7196c4c1edfc6140e22a16cbe31577e1";
const API_URL = "https://api.themoviedb.org/3/search/movie";

const Search = () => {
  const [movies, setMovies] = useState([]);

  const searchMovies = async (query) => {
    try {
      const response = await fetch(
        `${API_URL}?api_key=${API_KEY}&query=${query}`
      );
      const data = await response.json();
      setMovies(data.results);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="w-ful h-full text-white bg-black">
      <div className="bg-black/50 top-0 left-0 w-full h-screen">
        <div className="flex justify-center p-10">
          <SearchBar onSearch={searchMovies} />
        </div>
       <div className="m-5"><MovieList movies={movies} /></div> 
      </div>
    </div>
  );
};

export default Search;
