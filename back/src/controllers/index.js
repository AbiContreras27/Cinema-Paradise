const {getAllMoviesService} = require("../services");

async function movie(req, res){
    try {
        const response = await getAllMoviesService()
        res.send(response);
    }
    catch (error) {
        console.error(error)
    }
};

module.exports = {movie,};