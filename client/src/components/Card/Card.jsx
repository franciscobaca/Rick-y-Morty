import React from "react";
import style from "./Card.module.css";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useDispatch } from "react-redux";
import {
  addCharacterToFavorite,
  removeCharacterFromFavorite,
} from "../../redux/actions/actions";

export default function Card({ id, name, image, species, status }) {
  const [isFavorite, setIsFavorite] = React.useState(false);

  const dispatch = useDispatch();

  const handleFavorite = () => {
    if (isFavorite === false) {
      dispatch(addCharacterToFavorite(id));
      setIsFavorite(true);
    } else {
      dispatch(removeCharacterFromFavorite(id));
      setIsFavorite(false);
    }
  };

  return (
    <div className={style.container}>
      <h1>{name}</h1>
      <img src={image} alt="asas" width="250px" />
      <h3>{species}</h3>
      <h3>{status}</h3>
      <button onClick={handleFavorite} className={style.heartButton}>
        {isFavorite ? <FaHeart /> : <FaRegHeart />}
      </button>
    </div>
  );
}
