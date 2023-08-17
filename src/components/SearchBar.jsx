// SearchBar.js
import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <h1 className="text-2xl">Movie Search...</h1>

      <div className="flex gap-4">
        <input
          className="text-black h-8 rounded-sm w-60"
          type="text"
          placeholder="Search movies..."
          value={query}
          onChange={handleInputChange}
        />
        <button className="h-8 bg-redButton w-20  rounded-sm" type="submit">
          Search
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
