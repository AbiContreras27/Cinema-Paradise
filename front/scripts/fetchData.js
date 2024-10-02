const axios = require("axios")
const {rendeCards }= require("./rendeCards");

const fetchData = async(URL) => {

//! con metodo AJAX
//    $.get(URL, (data) => 
//    {rendeCards(data);
//   }).fail(() => {
//     alert("Error al obtener el listado de peliculas");
// });

//!con Axios con promesas

// axios(URL).then(({data}) => {
//     rendeCards(data);
// }).catch((reason) => {
//     console.error(`Error al obtener el listado de películas: ${reason}`);
// })
//! con Axios con async await
try {
    const {data} = await axios(URL); // response trae mucha información, solo se quiere la data
    rendeCards(data);
} catch (reason) {
    console.error(`Error al obtener el listado de películas: ${reason}`);
}
};

module.exports = {fetchData};