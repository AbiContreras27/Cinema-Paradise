// const axios = require("axios");
// const URL = "https://students-api.up.railway.app/movies";
const {moviesSchema} = require("../models/movieSchema");

async function getAllMoviesService() {
    try {
        const movies = await moviesSchema.find({});
        return movies;
        //const {data} = await axios(URL);
        // return data;
    } catch (error) {
        console.error(error);
        throw error
    }
}

module.exports = {getAllMoviesService};