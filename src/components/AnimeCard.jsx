import React from "react";

function AnimeCard({ _anime }) {
  return (
    <div className="transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105  relative cursor-pointer hover:bg-gray-50 pb-3 flex flex-col items-center space-y-2 h-96 w-56 shadow-lg bg-gray-100">
      <div className="relative h-3/4">
        <a href={_anime.url} target="_blank" rel="noreferrer">
          <svg
            className="absolute inset-y-0 top-2 right-2 h-8 w-8 text-white bg-black bg-opacity-50 rounded-full p-1 transition duration-300 ease-in-out transform  hover:scale-125"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
            <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
          </svg>
        </a>
        <img
          className="h-full w-full object-cover"
          src={_anime.image_url}
          alt={_anime.title}
        />
      </div>
      <div className="flex flex-col w-full space-y-4 px-1">
        <h1 className="font-bold text-sm text-gray-900 text-center cursor-text">
          {_anime.title}
        </h1>
        <div className="absolute inset-x-1 bottom-3 w-full flex items-center justify-evenly">
          <h3 className="bg-blue-400 text-white p-1 font-semibold rounded-sm text-xs">
            Ep: {_anime.episodes}
          </h3>
          <h3 className="flex items-center space-x-1 text-xs">
            <svg
              className="h-5 w-5 text-blue-900"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
              />
            </svg>{" "}
            <span>Score: {_anime.score}</span>
          </h3>
        </div>
      </div>
    </div>
  );
}

export default AnimeCard;
