const { Character, Episode } = require("../db");
const axios = require("axios");

const cleanArray = (array) => {
  const cleanArray = array.map((element) => {
    return {
      id: element.id,
      name: element.name,
      status: element.status,
      species: element.species,
      gender: element.gender,
      image: element.image,
    };
  });

  return cleanArray;
};

const getAllCharacters = async () => {
  const dbCharacters = await Character.findAll({
    include: Episode,
  });

  const apiCharactersRaw = (
    await axios.get("https://rickandmortyapi.com/api/character")
  ).data.results;

  const apiCharacters = cleanArray(apiCharactersRaw);

  return [...dbCharacters, ...apiCharacters];
};

const searchCharacterByName = async (name) => {
  const allCharacters = await getAllCharacters();

  const results = allCharacters.filter((character) =>
    character.name.toLowerCase().includes(name.toLowerCase())
  );

  return results;
};

const getCharacterById = async (id, source) => {
  let character =
    source === "api"
      ? (await axios.get(`https://rickandmortyapi.com/api/character/${id}`))
          .data
      : await Character.findByPk(id, {
          include: [{ model: Episode }],
        });

  return {
    name: character.name,
    status: character.status,
    gender: character.gender,
    species: character.species,
    image: character.image,
  };
};

const createCharacter = async (
  name,
  status,
  species,
  gender,
  image,
  episodes
) => {
  if (!name || !status) {
    throw Error("Data Missing");
  }

  const characterCheck = await Character.findOne({
    where: {
      name,
      status,
    },
  });

  if (characterCheck) {
    throw Error("Character already exists!");
  }

  const newCharacter = await Character.create({
    name,
    status,
    species,
    gender,
    image,
  });

  episodes.forEach(async (episode) => {
    const dbEpisodes = await Episode.findAll({
      where: {
        id: episode,
      },
    });
    await newCharacter.addEpisodes(dbEpisodes);
  });

  return newCharacter;
};

module.exports = {
  createCharacter,
  getCharacterById,
  getAllCharacters,
  searchCharacterByName,
};
