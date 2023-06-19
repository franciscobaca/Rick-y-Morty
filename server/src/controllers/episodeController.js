const { Episode } = require("../db");
const axios = require("axios");

const getAllEpisodes = async () => {
  const episodes = await axios
    .get("https://rickandmortyapi.com/api/episode")
    .then((response) =>
      response.data.results.map(async (episode) => {
        await Episode.findOrCreate({
          where: {
            id: episode.id,
            name: episode.name,
          },
        });
      })
    );

  const allEpisodes = await Episode.findAll();
  return allEpisodes;
};

module.exports = {
  getAllEpisodes,
};
