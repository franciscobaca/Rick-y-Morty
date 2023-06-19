import axios from "axios";
import {
  ADD_CHARACTER_TO_FAVORITE,
  GET_CHARACTERS,
  REMOVE_CHARACTER_FROM_FAVORITE,
  SEARCH_CHARACTER,
  LOGIN_USER,
  REGISTER_USER,
} from "./types";

export function loginUser(data) {
  console.log("ESTOY EN LA ACTION");
  return async function (dispatch) {
    const response = await axios.post(
      "http://localhost:3001/users/login",
      data
    );
    const user = response.data;
    console.log(user);
    return dispatch({
      type: LOGIN_USER,
      payload: user,
    });
  };
}

export function registerUser(data) {
  return async function (dispatch) {
    const response = await axios.post(
      "http://localhost:3001/users/register",
      data
    );
    const user = response.data;
    return dispatch({
      type: REGISTER_USER,
      payload: user,
    });
  };
}

export function getCharacters() {
  return async function (dispatch) {
    const response = await axios.get("http://localhost:3001/characters");
    return dispatch({
      type: GET_CHARACTERS,
      payload: response.data,
    });
  };
}

export function addCharacterToFavorite(id) {
  return async function (dispatch) {
    return dispatch({
      type: ADD_CHARACTER_TO_FAVORITE,
      payload: id,
    });
  };
}

export function removeCharacterFromFavorite(id) {
  return async function (dispatch) {
    return dispatch({
      type: REMOVE_CHARACTER_FROM_FAVORITE,
      payload: id,
    });
  };
}

export function searchCharacter(name) {
  return async function (dispatch) {
    const data = (
      await axios.get(`http://localhost:3001/characters?name=${name}`)
    ).data;

    return dispatch({
      type: SEARCH_CHARACTER,
      payload: data,
    });
  };
}
