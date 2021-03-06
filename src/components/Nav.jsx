import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function Nav() {
  const [isOpen, setIsOpen] = useState(true);
  const [styles, setStyles] = useState("hidden");
  const handleStyles = () => {
    if (isOpen) {
      setStyles("");
    } else setStyles("hidden");
  };

  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div
            className="absolute inset-y-0 left-0 flex items-center sm:hidden "
            onClick={() => {
              setIsOpen(!isOpen);
              handleStyles();
            }}
          >
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>

              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>

              <svg
                className="hidden h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex-shrink-0 flex items-center">
              <NavLink to="/">
                <h1 className="cursor-pointer ml-2 text-gray-300 text-center font-small tracking-tight uppercase text-3xl">
                  My <span className="font-black text-gray-100">Anime</span>{" "}
                  List DB
                </h1>
              </NavLink>
            </div>

            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4">
                <NavLink
                  to="/"
                  className="focus:bg-gray-900 focus:text-white hover:bg-gray-700 text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Anime List
                </NavLink>
                <NavLink
                  to="/top-anime"
                  className="focus:bg-gray-900 focus:text-white text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Top Anime
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="sm:hidden" id="mobile-menu">
        <div className={`px-2 pt-2 pb-3 space-y-1 ${styles}`}>
          <NavLink
            to="/"
            className="focus:bg-gray-900 focus:text-white hover:bg-gray-700 text-gray-300 hover:text-white  block px-3 py-2 rounded-md text-base font-medium"
          >
            Anime List
          </NavLink>
          <NavLink
            to="/top-anime"
            className="focus:bg-gray-900 focus:text-white text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            Top Anime
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
