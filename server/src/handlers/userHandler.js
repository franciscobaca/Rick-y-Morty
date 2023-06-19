const {
  getUsers,
  createUser,
  loginUser,
} = require("../controllers/userControllers");

async function getUsersHandler(req, res) {
  try {
    const users = await getUsers();
    res.status(200).send(users);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
}

async function createUserHandler(req, res) {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    console.log("data missing");
    res.status(400).send("Data Missing");
  }

  try {
    await createUser(name, email, password);
    res.status(200).send("User created succesfully");
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
}

async function loginUserHandler(req, res) {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(400).send("Data missing");
  }

  try {
    const response = await loginUser(email, password);
    res.status(200).send(response);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
}

module.exports = {
  getUsersHandler,
  createUserHandler,
  loginUserHandler,
};
