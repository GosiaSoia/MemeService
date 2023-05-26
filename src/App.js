import "./App.css";

import Header from "./components/Header";
import { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import HotMemes from "./pages/HotMemes";
import RegularMemes from "./pages/RegularMemes";
import FavouriteMemes from "./pages/FavouriteMemes";
import memesData from "./memesData";

function App() {
  const [memes, setMemes] = useState(memesData);

  return (
    <div>
      <Header />
      <Router>
        <hr />
        <div className="main">
          <aside className="sidebar">
            <ul>
              <li>
                <NavLink exact to="/" activeClassName="active">
                  REGULAR MEMES
                </NavLink>
              </li>
              <li>
                <NavLink to="/hot" activeClassName="active">
                  HOT MEMES
                </NavLink>
              </li>
              <li>
                <NavLink to="/favourite" activeClassName="active">
                  FAVOURITE
                </NavLink>
              </li>
            </ul>
          </aside>
          <section>
            <Routes>
              <Route
                path="/hot"
                element={<HotMemes memes={memes} setMemes={setMemes} />}
              />
              <Route
                path="/"
                element={<RegularMemes memes={memes} setMemes={setMemes} />}
              />
              <Route path="/favourite" element={<FavouriteMemes />} />
            </Routes>
          </section>
        </div>
      </Router>
    </div>
  );
}

export default App;
