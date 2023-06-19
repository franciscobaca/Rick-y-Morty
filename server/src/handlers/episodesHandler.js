const { getAllEpisodes } = require("../controllers/episodeController");

const getEpisodesHandler = async (req, res) => {
  try {
    const allEpisodes = await getAllEpisodes();
    res.status(200).send(allEpisodes);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

module.exports = {
  getEpisodesHandler,
};
