import { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import ListAnime from "./components/ListAnime";
import MainContent from "./components/MainContent";

function App() {
  const [animeList, setAnimeList] = useState([]);
  const [topAnime, setTopAnime] = useState([]);
  const [search, setSearch] = useState("");

  const getTopAnimes = async () => {
    const data = await fetch(
      `https://api.jikan.moe/v3/top/anime/1/bypopularity`
    ).then((response) => response.json());

    setTopAnime(data.top.slice(0, 5));
  };
  const handleSearch = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    getTopAnimes();
  }, []);

  return (
    <Router>
      <Switch>
        <div className="m-auto font-sans bg-gray-50 min-h-screen">
          <Header />
          <section className="">
            <Route path="/" exact component={() => <MainContent />} />
            <Route
              path="/top-anime"
              component={() => <ListAnime topAnime={topAnime} />}
            />
          </section>
        </div>
      </Switch>
    </Router>
  );
}

export default App;
