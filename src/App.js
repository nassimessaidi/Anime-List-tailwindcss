import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import ListAnime from "./components/ListAnime";
import MainContent from "./components/MainContent";
import { TopAnimeListProvider } from "./contexts/TopAnimeListContext";
import { MyAnimeListProvider } from "./contexts/MyAnimeListContext";

function App() {
  return (
    <Router>
      <Switch>
        <TopAnimeListProvider>
          <MyAnimeListProvider>
            <div className="pb-5 mx-auto font-sans bg-gray-50 min-h-screen">
              <Header />
              <section>
                <Route path="/" exact component={MainContent} />
                <Route path="/top-anime" component={ListAnime} />
              </section>
            </div>
          </MyAnimeListProvider>
        </TopAnimeListProvider>
      </Switch>
    </Router>
  );
}

export default App;
