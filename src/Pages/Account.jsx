import React from "react";
import FavMovies from "../components/FavMovies";

const Account = () => {
  return (
    <div className="w-ful text-white h-screen bg-black">
      <div className="bg-black/50 fixed top-0 left-0 w-full h-full">
        <div>
          <FavMovies />
        </div>
      </div>
    </div>
  );
};

export default Account;
