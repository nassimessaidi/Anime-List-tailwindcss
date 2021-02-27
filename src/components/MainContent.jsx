import React, { useState, useEffect } from "react";
import AnimeCard from "./AnimeCard";

function MainContent(props) {
  const [animeList, setAnimeList] = useState([]);
  const [search, setSearch] = useState("");

  const fetchAnime = async (query) => {
    const data = await fetch(
      `https://api.jikan.moe/v3/search/anime?q=${query}$order_by=title&sort=asc&limit=10`
    ).then((res) => res.json());

    setAnimeList(data.results);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    fetchAnime(search);
  };

  return (
    <main className="flex flex-col items-center w-full m-auto my-5 space-y-4">
      <form
        className="flex w-4/5 items-center justify-center"
        onSubmit={handleSearch}
      >
        {console.log(animeList)}
        <input
          className="w-full px-4 py-2 border border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent shadow-md"
          type="search"
          placeholder="Search for an Anime"
          required
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </form>
      <section className="max-w-5xl grid grid-cols-auto md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6">
        {animeList.map((_anime) => (
          <AnimeCard _anime={_anime} />
        ))}
      </section>
    </main>
  );
}

export default MainContent;
