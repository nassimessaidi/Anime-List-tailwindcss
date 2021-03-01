import React, { useState, useEffect, createContext } from "react";

export const MyAnimeListContext = createContext();

export const MyAnimeListProvider = ({ children }) => {
  const [animeList, setAnimeList] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("naruto");

  const handleSearch = (e) => {
    e.preventDefault();
    setQuery(search);
  };

  const fetchAnime = async (_query) => {
    const data = await fetch(
      `https://api.jikan.moe/v3/search/anime?q=${_query}$order_by=title&sort=asc&limit=10`
    ).then((res) => res.json());

    setAnimeList(data.results);
  };

  useEffect(() => {
    fetchAnime(query);
  }, [query]);

  const value = {
    animeList,
    setAnimeList,
    search,
    setSearch,
    query,
    setQuery,
    handleSearch,
  };

  return (
    <MyAnimeListContext.Provider value={value}>
      {children}
    </MyAnimeListContext.Provider>
  );
};
