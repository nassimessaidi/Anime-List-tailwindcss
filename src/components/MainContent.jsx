import React, { useContext } from "react";
import AnimeCard from "./AnimeCard";
import { MyAnimeListContext } from "../contexts/MyAnimeListContext";

function MainContent(props) {
  const { animeList, search, setSearch, handleSearch } = useContext(
    MyAnimeListContext
  );

  return (
    <main className="pb-6 flex flex-col items-center w-full m-auto my-6 space-y-10 overflow-y-hidden">
      <form
        className="p-1 flex w-4/5 items-center justify-center"
        onSubmit={handleSearch}
      >
        <input
          className="w-full px-4 py-2 border border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent shadow-md"
          type="search"
          placeholder="Search for an Anime"
          required
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </form>
      <section className=" grid grid-cols-auto md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6 gap-6">
        {animeList.map((_anime) => (
          <AnimeCard _anime={_anime} key={_anime.mal_id} />
        ))}
      </section>
    </main>
  );
}

export default MainContent;
