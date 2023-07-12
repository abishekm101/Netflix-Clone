import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useNetflixContext } from "../context/Context";
import { UseAuth } from "../context/AuthContext";
import Footer from "../components/Footer";

const SignUpPage = () => {
  const { email, setEmail, password, setPassword } = useNetflixContext();
  const { signUp } = UseAuth();
  const [error, setError] = useState(false);
  const Navigate = useNavigate();
  const HandleOnSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signUp(email, password);
      Navigate("/Home");
    } catch (error) {
      console.log(error);
      setError(error.message);
    }
  };
  return (
    <div className="h-full ">
      <div className="bg-[url('./files/login.jpg')] bg-cover h-[120vh]  w-full">
        <div className="bg-black h-full bg-opacity-60 grid place-content-center text-white">
          <form
            onSubmit={HandleOnSubmit}
            className="flex flex-col justify-center gap-7 p-12 w-[35vw] bg-black bg-opacity-60"
          >
            <h1 className="text-white font-bold text-3xl">Sign Up</h1>
            {error ? <p>{error}</p> : null}
            <input
              onChange={(e) => setEmail(e.target.value)}
              className=" h-12 p-1 rounded-sm bg-customBackGround bg-opacity-60"
              type="email"
              value={email}
              required
              placeholder="Email address"
            />
            <input
              onChange={(e) => setPassword(e.target.value)}
              className=" h-12 p-1 rounded-sm bg-customBackGround bg-opacity-60"
              type="password"
              required
              placeholder="password"
            />
            <button className="h-12 flex justify-center items-center text-white font-semibold bg-redButton rounded-sm">
              Sign Up
            </button>
          </form>
          <div className="flex justify-center p-3 gap-2">
            <h1 className="text-gray-400">Already subscriped to netflix?</h1>
            <button
              onClick={() => Navigate("/Login")}
              className="font-semibold"
            >
              Sign in now.
            </button>
          </div>
        </div>
      </div>
      <div className="bg-black lg:h-[350px] p-2 lg:py-[60px] lg:px-[160px] gap-2 text-[rgba(255,255,255,0.7)]">
        <Footer />
      </div>
    </div>
  );
};

export default SignUpPage;
