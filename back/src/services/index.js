// const axios = require("axios");
// const URL = "https://students-api.up.railway.app/movies";
const {moviesSchema} = require("../models/movieSchema");

/* Obtener todas las peliculas */
async function getAllMoviesService() {
    try {
        const movies = await moviesSchema.find();
        return movies;
        //const {data} = await axios(URL);
        // return data;
    } catch (error) {
        console.error(error);
        throw error
    }
}

/* Crear una nueva pelicula */
async function postMoviesService(movie) {
    try {
        const newMovie = new moviesSchema(movie);
        const resp = await newMovie.save();
        return resp;
    } catch (error) {
        console.error("Error al crear la película - services: ",error)
        throw error;
    }
}




module.exports = {getAllMoviesService, postMoviesService};