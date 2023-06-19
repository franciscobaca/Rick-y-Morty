import {
  GET_CHARACTERS,
  ADD_CHARACTER_TO_FAVORITE,
  REMOVE_CHARACTER_FROM_FAVORITE,
  SEARCH_CHARACTER,
} from "../actions/types";

let initialState = {
  characters: [],
  allCharacters: [],
  favoriteCharacters: [],
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_CHARACTERS:
      return {
        ...state,
        allCharacters: action.payload,
      };

    case ADD_CHARACTER_TO_FAVORITE:
      const characterId = action.payload;
      const newFavoriteCharacter = state.allCharacters.find(
        (character) => character.id === characterId
      );
      const currentFavorites = state.favoriteCharacters.filter(
        (character) => character.id !== characterId
      );
      const favorites = [...currentFavorites, newFavoriteCharacter];
      console.log(favorites);
      return {
        ...state,
        favoriteCharacters: favorites,
      };

    case REMOVE_CHARACTER_FROM_FAVORITE:
      const removedfavorites = state.favoriteCharacters.filter(
        (character) => character.id !== action.payload
      );

      return {
        ...state,
        favoriteCharacters: removedfavorites,
      };

    case SEARCH_CHARACTER:
      return {
        ...state,
        allCharacters: [...action.payload],
      };

    default:
      return {
        ...state,
      };
  }
}

export default rootReducer;
