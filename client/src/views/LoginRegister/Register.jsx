import React from "react";
import style from "./LoginRegister.module.css";
import swal from "sweetalert";

import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { registerUser } from "../../redux/actions/actions";

export default function Register() {
  const [register, setRegister] = React.useState({
    name: "",
    email: "",
    password: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleChange(event) {
    let value = event.target.value;
    let name = event.target.name;

    setRegister({
      ...register,
      [name]: value,
    });

    console.log(register);
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (!register.email || !register.password || !register.name) {
      swal({
        title: "Error!",
        text: "Invalid name or password",
        icon: "error",
      });
    } else {
      dispatch(registerUser(register));
      swal({
        title: "Success!",
        text: "User created succesfully",
        icon: "success",
      });
      navigate("/login");
    }
  }

  return (
    <main className={style.main}>
      <Link to="/home">
        <button>Go back</button>
      </Link>

      <form className={style.formContainer}>
        <div>
          <label htmlFor="name" name="name">
            Name
          </label>
          <input type="text" name="name" onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="email" name="email">
            Email
          </label>
          <input type="text" name="email" onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="text" name="password" onChange={handleChange} />
        </div>

        <button onClick={handleSubmit}>REGISTER</button>
      </form>
    </main>
  );
}
