import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import HotMemes from "../pages/HotMemes";
import RegularMemes from "../pages/RegularMemes";

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
        </ul>
      </aside>
      <section>
        <Routes>
          <Route path="/hot" element={<HotMemes />} />
          <Route path="/" element={<RegularMemes />} />
        </Routes>
      </section>
    </div>
  </Router>
);

export default Navigation;
