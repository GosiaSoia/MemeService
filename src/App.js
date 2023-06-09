import "./App.css";
import Header from "./components/Header";
import { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import memesData from "./memesData";
import GeneratorMeme from "./pages/GeneratorMeme";
import Memes from "./components/Memes";

function App() {
  const [memes, setMemes] = useState(memesData);

  const handleFavoriteToggle = (memeId, isFavourite) => {
    const updatedMemes = memes.map((meme) => {
      if (meme.id === memeId) {
        return { ...meme, favourite: isFavourite };
      }
      return meme;
    });

    setMemes(updatedMemes);
  };

  return (
    <div>
      <Header />
      <Router>
        <hr />
        <div className="main">
          <aside className="sidebar">
            <ul>
              <li>
                <NavLink exact="true" to="/" activeclassname="active">
                  REGULAR MEMES
                </NavLink>
              </li>
              <li>
                <NavLink to="/hot" activeclassname="active">
                  HOT MEMES
                </NavLink>
              </li>
              <li>
                <NavLink to="/generator" activeclassname="active">
                  MEME GENERATOR
                </NavLink>
              </li>
              <li>
                <NavLink to="/favourite" activeclassname="active">
                  FAVOURITE MEMES
                </NavLink>
              </li>
            </ul>
          </aside>
          <section>
            <Routes>
              <Route
                path="/hot"
                element={
                  <Memes
                    memes={memes}
                    setMemes={setMemes}
                    isHot={true}
                    isFavourite={false}
                    onFavoriteToggle={handleFavoriteToggle}
                  />
                }
              />
              <Route
                path="/"
                element={
                  <Memes
                    memes={memes}
                    setMemes={setMemes}
                    isHot={false}
                    isFavourite={false}
                    onFavoriteToggle={handleFavoriteToggle}
                  />
                }
              />
              <Route path="/generator" element={<GeneratorMeme />} />
              <Route
                path="/favourite"
                element={
                  <Memes
                    memes={memes}
                    setMemes={setMemes}
                    isHot={false}
                    isFavourite={true}
                    onFavoriteToggle={handleFavoriteToggle}
                  />
                }
              />
            </Routes>
          </section>
        </div>
      </Router>
    </div>
  );
}

export default App;
