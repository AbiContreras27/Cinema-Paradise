// const { createMovie } = require("../../../front/scripts/form");
const {getAllMoviesService, postMoviesService} = require("../services");


async function movie(req, res){
    try {
        const response = await getAllMoviesService()
        res.status(200).json(response);
    }
    catch (error) {
        console.error("Error al obtener películas: ", error);
        res.status(500).json(error);
        
    }
};

 async function postMoviesController(req, res) {
    try {  
        const newMovie = await postMoviesService(req.body);
        const response = {
            message: "Movie Created Successfully",
            status: "OK",
            error: false,
            data: newMovie
        }
        res.status(201).json(response);
    } catch (error) {
        console.error("Error al crear Películas - controllers: ", error);
        res.status(500).json(error);
    }
}

module.exports = {movie, postMoviesController};