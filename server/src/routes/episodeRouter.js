const { Router } = require("express");

const { getEpisodesHandler } = require("../handlers/episodesHandler");

const episodeRouter = Router();
episodeRouter.get("/", getEpisodesHandler);

module.exports = episodeRouter;
