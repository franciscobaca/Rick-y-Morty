import React from "react";
import style from "./CardsContainer.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getCharacters } from "../../redux/actions/actions";
import Card from "../Card/Card";

export default function CardsContainer() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getCharacters());
  }, [dispatch]);

  const allCharacters = useSelector((state) => state.allCharacters);

  return (
    <div className={style.container}>
      {allCharacters.length > 0 ? (
        allCharacters.map((character) => {
          return (
            <Card
              key={character.id}
              id={character.id}
              name={character.name}
              species={character.species}
              gender={character.gender}
              status={character.status}
              image={character.image}
            />
          );
        })
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
}
