import React from "react";
import style from "./Form.module.css";
import NavBar from "../../components/NavBar/NavBar";

export default function Form() {
  return (
    <div className={style.main}>
      <NavBar />

      <h1>Create your Character!</h1>

      <form></form>
    </div>
  );
}
