import React from "react";

function ListAnime({ topAnime }) {
  return (
    <div className="pb-8 px-5 text-lg font-semibold text-gray-800 flex flex-col  md:min-w-md lg:max-w-3xl  m-auto space-y-5 mt-5">
      <h1 className="text-xl text-blue-400 py-1 font-black uppercase text-center">
        Top {topAnime.length} animes
      </h1>

      {topAnime.map((anime, index) => (
        <a key={anime.mal_id} href={anime.url} target="_blank" rel="noreferrer">
          <div className="flex items-center space-x-3 cursor-pointer p-3 bg-gray-100 hover:bg-purple-100 rounded-md shadow-md capitalize">
            <img
              className="w-10 h-10 rounded-full "
              src={anime.image_url}
              alt=""
            />
            <h1 className="text-sm md:text-base  text-gray-700">
              <span className="font-black text-gray-900">{index + 1} - </span>{" "}
              {anime.title}
            </h1>
          </div>
        </a>
      ))}
    </div>
  );
}

export default ListAnime;
