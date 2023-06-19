const { Router } = require("express");
const characterRouter = require("./characterRouter");
const episodeRouter = require("./episodeRouter");
const userRouter = require("./userRouter");

const router = Router();

router.use("/characters", characterRouter);
router.use("/episodes", episodeRouter);
router.use("/users", userRouter);

module.exports = router;
