const axios = require("axios");
const URL = "https://students-api.up.railway.app/movies";

async function getAllMoviesService() {
    try {
        const {data} = await axios(URL);
        return data;
    } catch (error) {
        console.error(error);
        throw error
    }
}

module.exports = {getAllMoviesService};