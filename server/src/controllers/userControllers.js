const { User } = require("../db");
const bcrypt = require("bcrypt");

async function getUsers() {
  const dbUsers = await User.findAll();

  const users = dbUsers.map((user) => {
    return {
      id: user.id,
      name: user.name,
      email: user.email,
      password: user.password,
    };
  });
  return users;
}

async function loginUser(email, password) {
  const checkUser = await User.findOne({
    where: {
      email,
    },
  });

  console.log(checkUser.password);

  if (!checkUser) throw Error("Invalid email");

  if (await bcrypt.compare(password, checkUser.password)) {
    return "Success!";
  } else {
    return "Invalid Password!";
  }
}

async function createUser(name, email, password) {
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  //Tambien podemos ahorrar una linea poniendo:
  // const hashedPassword = await bcrypt.hash(password, 10)

  const userCheck = await User.findOne({
    where: {
      email,
    },
  });

  if (userCheck) throw Error("User already exists!");

  const newUser = await User.create({
    name,
    email,
    password: hashedPassword,
  });

  return newUser;
}

module.exports = {
  getUsers,
  loginUser,
  createUser,
};
