const {rendeCards }= require("./rendeCards");

const fetchData = (URL) => {$.get(URL, (data) => {rendeCards(data);}).fail(() => {
    alert("Error al obtener el listado de peliculas");
});
};

module.exports = {fetchData};