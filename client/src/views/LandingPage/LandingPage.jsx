import React from "react";
import style from "./LandingPage.module.css";
import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <div>
      <div className={style.backgroundImage}>
        <div className={style.container}>
          <h1 className={style.title}>RICK Y MORTY</h1>
          <Link to="/home">
            <button className={style.buttonToHome}>Home</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
