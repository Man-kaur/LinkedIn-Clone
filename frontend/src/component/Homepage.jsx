import React from "react";
import Navbar from "./Navbar";

const Homepage = () => {
  return (
    <div className="relative">
      <Navbar />
      <div className="absolute left-16 top-64">
        <h1 className="text-6xl text-gray-700 w-1/2">Welcome to LinkedIn, Your professional community</h1>
        <div className="mt-8">
            <button className="bg-blue-500 text-white py-2 px-4 rounded-full mb-4 w-5/12 font-semibold"> Continue With Google</button>
        </div>
      </div>
      <img src="/assets/dxf91zhqd2z6b0bwg85ktm5s4.svg" alt="img" className="absolute -right-16 top-32 h-auto w-1/2" />
    </div>
  );
};

export default Homepage;
