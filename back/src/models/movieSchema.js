const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
    title: {
        type: String, 
        require: [true, "Titulo es Obligatorio"]
    },
    year: {
        type: Number, 
        require: [true, "Año es Obligatorio"]
    },
    director: {
        type: String, 
        require: [true, "Director es Obligatorio"]
    },
    duration: {
        type: String,
        require: [true, "Duración es Obligatorio"]
    },
    genre: [String],
    rate: {
        type: Number,
        require: [true, "Puntuación es Obligatorio"]
    },
    poster: {
        type: String, 
        require: [true, "Poster es Obligatorio"]
    }
});

const moviesSchema = mongoose.model("movie", movieSchema);

module.exports = {moviesSchema};