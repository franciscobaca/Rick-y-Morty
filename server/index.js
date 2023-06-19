const server = require("./src/server");
const { sequelize } = require("./src/db");

const PORT = 3001;

server.listen(PORT, () => {
  sequelize
    .sync({ force: true })
    .then(() => {
      console.log("Server is running on Port 3001");
    })
    .then(() => {
      console.log("Conection established with database");
    })
    .catch((error) => {
      console.log({ error: error.message });
    });
});

// sequelize.sync().then(() => {
//   server.listen(PORT, () => {
//     console.log("Server is running on PORT 3001");
//   });
// });
