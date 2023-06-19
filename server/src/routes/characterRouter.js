const { Router } = require("express");
const {
  getCharactersHandler,
  getCharacterHandler,
  createCharactersHandler,
} = require("../handlers/charactersHandler");

const characterRouter = Router();

characterRouter.get("/", getCharactersHandler);

characterRouter.get("/:id", getCharacterHandler);

characterRouter.post("/", createCharactersHandler);

module.exports = characterRouter;
