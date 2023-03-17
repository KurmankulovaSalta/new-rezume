import React from "react";
import { Link } from "react-router-dom";
import "./newStyle.css";

const SaidBar = () => {
  return (
    <div>
      <div class="sidebar">
        <Link to="/">
          <a href="#">Home</a>
        </Link>

        <Link to="/skills">
          <a href="#">Skills</a>
        </Link>

        <Link to="/education">
          <a href="#">Education</a>
        </Link>

        <Link to="/hobby">
          <a href="#">Hobby</a>
        </Link>

        <Link to="/contacts">
          <a href="#">Contact</a>
        </Link>
      </div>
    </div>
  );
};

export default SaidBar;
