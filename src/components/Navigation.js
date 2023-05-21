import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import HotMemes from "../pages/HotMemes";
import RegularMemes from "../pages/RegularMemes";
import FavouriteMemes from "../pages/FavouriteMemes";

const Navigation = () => (
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
          <Route path="/hot" element={<HotMemes />} />
          <Route path="/" element={<RegularMemes />} />
          <Route path="/favourite" element={<FavouriteMemes />} />
        </Routes>
      </section>
    </div>
  </Router>
);

export default Navigation;
