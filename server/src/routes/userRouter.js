const { Router } = require("express");
const {
  getUsersHandler,
  createUserHandler,
  loginUserHandler,
} = require("../handlers/userHandler");

const userRouter = Router();

userRouter.get("/", getUsersHandler);
userRouter.post("/register", createUserHandler);
userRouter.post("/login", loginUserHandler);

module.exports = userRouter;
