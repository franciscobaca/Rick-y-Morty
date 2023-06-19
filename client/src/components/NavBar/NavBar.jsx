import React from "react";
import style from "./NavBar.module.css";
import SearchBar from "./SearchBar/SearchBar";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className={style.container}>
      <Link style={{ textDecoration: "none" }} to="/home">
        <div>
          <h1>HOME</h1>
        </div>
      </Link>

      <div>
        <SearchBar />
      </div>

      <div className={style.links}>
        <Link style={{ textDecoration: "none" }} to="/create">
          <h1>CREATE</h1>
        </Link>
        <Link style={{ textDecoration: "none" }} to="/favorites">
          <h1>FAVORITES</h1>
        </Link>
        <Link style={{ textDecoration: "none" }} to="/login">
          <h1>REGISTER</h1>
        </Link>
      </div>
    </nav>
  );
}
