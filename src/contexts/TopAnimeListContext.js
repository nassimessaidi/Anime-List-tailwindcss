import React, { useState, useEffect, createContext } from "react";

export const TopAnimeListContext = createContext();

export const TopAnimeListProvider = ({ children }) => {
  const [topAnime, setTopAnime] = useState([]);

  const getTopAnimes = async () => {
    const data = await fetch(
      `https://api.jikan.moe/v3/top/anime/1/bypopularity`
    ).then((response) => response.json());

    setTopAnime(data.top.slice(0, 10));
  };

  useEffect(() => {
    getTopAnimes();
  }, []);

  return (
    <TopAnimeListContext.Provider value={topAnime}>
      {children}
    </TopAnimeListContext.Provider>
  );
};
