const {Router} = require("express");
const {movie} = require("../controllers");

const router = Router();

router.get("/movies", movie);

module.exports = {router};

