const {Router} = require("express");
const {movie, postMoviesController} = require("../controllers");

const router = Router();

router.get("/movies", movie);
router.post("/movies", postMoviesController);

module.exports = {router};

