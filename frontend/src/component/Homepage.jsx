import React from "react";
import Navbar from "./Navbar";
import { FaGoogle, FaMicrosoft } from "react-icons/fa";

const Homepage = () => {
  return (
    <div className="relative">
      <Navbar />
      <div className="absolute left-52 top-52">
        <h1 className="text-5xl text-gray-500 w-3/4">
          Welcome to LinkedIn, Your professional community
        </h1>
        <div className="mt-16 space-y-4">
          <button className="bg-blue-500 text-white py-2 px-4 rounded-full w-5/12 font-semibold hover:bg-blue-400 flex items-center justify-center">
            <FaGoogle className="mr-3" />
            Continue With Google
          </button>
          <button className="bg-white text-gray-800 py-2 px-4 rounded-full w-5/12 font-semibold hover:bg-slate-100 flex items-center justify-center border border-gray-500">
            <FaMicrosoft className="mr-3" />
            Continue With Microsoft
          </button>
          <button className="bg-white text-gray-800 py-2 px-4 rounded-full w-5/12 font-semibold hover:bg-slate-100 flex items-center justify-center border border-gray-500">
            Sign in with email
          </button>
          <div className="w-5/12">
            <p className="text-sm text-gray-500 m-6 p-2">
              By clicking Continue to join or sign in, you agree to LinkedIn's
              <a href="#" className="font-semibold text-blue-600">
                {" "}
                User Agreement
              </a>
              ,{" "}
              <a href="#" className="font-semibold text-blue-600">
                {" "}
                Privacy Policy
              </a>
              , and{" "}
              <a href="#" className="font-semibold text-blue-600">
                {" "}
                Cookie Policy
              </a>
              .
            </p>
          </div>
          <div className="w-5/12 mt-6">
            <p className="text-lg p-6 ml-20">
              New to LinkedIn?{" "}
              <a href="#" className="font-semibold text-blue-600">
                {" "}
                Join Now
              </a>
            </p>
          </div>
        </div>
      </div>
      <img
        src="/assets/home-image.svg"
        alt="img"
        className="absolute -right-16 top-32 h-auto w-1/2"
      />
    </div>
  );
};

export default Homepage;
