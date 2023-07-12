import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { UseAuth} from "../context/AuthContext";
import { useNetflixContext } from "../context/Context";
import Footer from "../components/Footer";

const LoginPage = () => {
  const { email, setEmail, password, setPassword } = useNetflixContext();
  const [error, setError] = useState("");
  const Navigate = useNavigate();
  const { logIn } = UseAuth();
  const HandleLogIn = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await logIn(email,password);
      Navigate("/Home");
    } catch (error) {
      console.log(error);
      setError(error.message);
    }
  };
  const HandleSubmit = (e) => {
    e.preventDefault();
    Navigate("/SignUp");
  };
  return (
    <div className="h-full ">
      <div className="bg-[url('./files/login.jpg')] bg-cover h-[120vh]  w-full">
        <div className="bg-black h-full bg-opacity-60 grid place-content-center">
          <form
            onSubmit={HandleLogIn}
            className="flex flex-col justify-center text-white gap-7 p-12 w-[35vw] bg-black bg-opacity-60"
          >
            {error ? <p className="text-red-600">{error}</p> : null}
            <h1 className="font-bold text-3xl">Sign In</h1>
            <input
              onChange={(e) => setEmail(e.target.value)}
              className=" h-12 p-1 rounded-sm bg-customBackGround bg-opacity-60"
              type="email"
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
            <button className="h-12 flex justify-center items-center font-semibold bg-redButton rounded-sm">
              Sign In
            </button>
            <div className="flex">
              <input className="" type="checkbox" />
              <label className="grow">Remember me</label>
              <a href="https://www.netflix.com/in/LoginHelp">Need help?</a>
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex">
                <h1 className="text-gray-400">New to Netflix?</h1>
                <button onClick={HandleSubmit} className="font-semibold">
                  Sign up now.
                </button>
              </div>
              <span className="text-gray-400">
                This page is protected by Google reCAPTCHA to ensure you're not
                a bot. <button className="text-blue-600">Learn more.</button>
              </span>
            </div>
          </form>
        </div>
      </div>
      <div className="bg-black lg:h-[350px] p-2 lg:py-[60px] lg:px-[160px] gap-2 text-[rgba(255,255,255,0.7)]">
        <Footer />
      </div>
    </div>
  );
};

export default LoginPage;
