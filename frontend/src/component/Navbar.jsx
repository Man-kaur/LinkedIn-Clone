"use client";

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faNewspaper,
  faUser,
  faGraduationCap,
  faBriefcase,
  faGamepad,
  faMobileAlt,
} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <>
      <header className="bg-white shadow">
        <div className="container mx-auto px-48 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold">
            <span style={{ color: "#0077B5", backgroundColor: "#FFFFFF" }}>
              Linked
            </span>
            <span
              style={{
                color: "#FFFFFF",
                backgroundColor: "#0077B5",
                padding: "0px 1px", // Adjusted padding
                lineHeight: "1", // Adjusted line-height
                border: "1px solid #0077B5",
                borderRadius: "3px",
                display: "inline-block", // Ensures better height control
              }}
            >
              in
            </span>
          </div>
          <nav className="space-x-4">
            <a href="#" className="text-gray-600 hover:text-gray-950">
              <FontAwesomeIcon icon={faNewspaper} /> Articles
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-950">
              <FontAwesomeIcon icon={faUser} /> People
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-950">
              <FontAwesomeIcon icon={faGraduationCap} /> Learning
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-950">
              <FontAwesomeIcon icon={faBriefcase} /> Jobs
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-950">
              <FontAwesomeIcon icon={faGamepad} /> Games
            </a>
            <span className="border-l-2 border-gray-200 h-6 mx-2"></span>
            <a href="" className="text-gray-600 hover:text-gray-950">
              <FontAwesomeIcon icon={faMobileAlt} /> Get the app
            </a>
            <span className="border-l-2 border-gray-200 h-6 mx-2"></span>
            <button className="text-md bg-white text-gray-800 px-4 py-2 font-semibold rounded-full hover:bg-gray-100">
              Join Now
            </button>
            <button className="text-md text-blue-600 font-semibold px-4 py-2 rounded-full border border-blue-700 hover:bg-blue-50">
              Sign In
            </button>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Navbar;
