import React from "react";
import style from "./LoginRegister.module.css";
import swal from "sweetalert";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginUser } from "../../redux/actions/actions";

export default function Login() {
  const [login, setLogin] = React.useState({
    email: "",
    password: "",
  });

  const dispatch = useDispatch();

  function handleChange(event) {
    let value = event.target.value;
    let name = event.target.name;

    setLogin({
      ...login,
      [name]: value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (!login.email || !login.password) {
      swal({
        title: "Error!",
        text: "Invalid name or password",
        icon: "error",
      });
    } else {
      dispatch(loginUser(login));
      console.log(result);
      swal({
        title: "Success!",
        text: "Logged In!",
        icon: "success",
      });
    }
  }

  return (
    <main className={style.main}>
      <Link to="/home">
        <button>Go back</button>
      </Link>

      <form className={style.formContainer}>
        <div>
          <label htmlFor="email" name="email">
            Email
          </label>
          <input id="email" name="email" onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input id="email" name="password" onChange={handleChange} />
        </div>

        <button onClick={handleSubmit}>LOGIN</button>
        <p>
          Don't have an account? <br />
          <Link to="/register">Register now</Link>
        </p>
      </form>
    </main>
  );
}
