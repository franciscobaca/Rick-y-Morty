const {
  createCharacter,
  getCharacterById,
  getAllCharacters,
  searchCharacterByName,
} = require("../controllers/characterControllers");

const getCharactersHandler = async (req, res) => {
  const { name } = req.query;

  const result = name
    ? await searchCharacterByName(name)
    : await getAllCharacters();

  try {
    res.status(200).send(result);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//Esta funcion sugar sirve para cuando consumimos informacion de una api y de una db.
//Esto se debe a que los Ids de la api generalmente son numericos y los de la db son uuid.
const getCharacterHandler = async (req, res) => {
  const { id } = req.params;
  const source = isNaN(id) ? "db" : "api";
  try {
    const character = await getCharacterById(id, source);
    res.status(200).json(character);
  } catch (error) {
    res.json({ error: error.message });
  }
};

const createCharactersHandler = async (req, res) => {
  try {
    const { name, status, species, gender, image, episodes } = req.body;
    const newCharacter = await createCharacter(
      name,
      status,
      species,
      gender,
      image,
      episodes
    );
    res.status(200).send(newCharacter);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getCharactersHandler,
  getCharacterHandler,
  createCharactersHandler,
};
