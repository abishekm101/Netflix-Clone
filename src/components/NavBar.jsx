import { NavLink, useNavigate } from "react-router-dom";
import React from "react";
import Img from "../files/Netflix-Logo.wine.svg";
import { UseAuth } from "../context/AuthContext";

const NavBar = () => {
  const Navigate = useNavigate();
  const { user, logOut } = UseAuth();
  const HandleLogOut = async () => {
    try {
      await logOut();
      Navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="absolute bg-transparent left-7 right-7 z-10">
      <div className="flex items-center">
        <img className=" h-20" src={Img} alt=" " />
        <div className="flex flex-grow gap-2 text-white ml-10">
          <h1>
            <NavLink>Home</NavLink>
          </h1>
          <h1>
            <NavLink to="Account">My Favourite</NavLink>
          </h1>
        </div>
        <div className="flex gap-2 text-white">
          <button onClick={()=>Navigate("Account")}>Account</button>
          <button onClick={HandleLogOut} className="">
            LogOut
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
