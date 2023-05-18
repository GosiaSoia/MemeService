import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HotMemes from "../pages/HotMemes";
import RegularMemes from "../pages/RegularMemes";

const Navigation = () => (
  <Router>
    <hr />
    <nav>
      <ul>
        <li>
          <Link to="/hot">HOT</Link>
        </li>
        <li>
          <Link to="/">REGULAR</Link>
        </li>
      </ul>
    </nav>

    <Routes>
      <Route path="/hot" element={<HotMemes />} />
      <Route path="/" element={<RegularMemes />} />
    </Routes>
  </Router>
);

export default Navigation;
