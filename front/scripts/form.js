/* formulario */

document.addEventListener('DOMContentLoaded', () => {
    llenarSelectYear();
});
/* Declarar variables */

let titleMovie,
yearMovie,
directorMovie,
duracionMovie,
checkboxes,
rateMovie,
imgPoster,
selectedGenres = [],
resulDuration;


/* Funcion otorgando valores */
const addInputsValue = () => {
    titleMovie = document.getElementById('movieTitle').value;
    yearMovie = document.getElementById('movieYear').value;
    directorMovie = document.getElementById('movieDirector').value;
    duracionMovie = document.getElementById('duration').value;
    rateMovie = document.getElementById('inrage').value;
    imgPoster = document.getElementById('imgPoster').value;
};

/* Funcion para cambiar formato de duracion de pelicula */

const convertirMinutosAHoras = (minutos) => {
    const horas = Math.floor(minutos / 60);
    const minRestantes = minutos % 60;

    if ( horas === 0) {
        return minRestantes + "min";
    }

    if (minRestantes === 0) {
        return horas + "h";
    }

    return (resulDuration = horas + "h " + minRestantes + "min");
    
};

/* function para llenar el option de year */
const llenarSelectYear = () => {
    const yearMax = new Date().getFullYear();
    const yearMin = yearMax - 50;
    const year = document.querySelector('#movieYear')

    for(let i = yearMax; i >= yearMin; i--){
        const option = document.createElement('option');
        option.value = i;
        option.textContent = i;

        year.appendChild(option);
    }
};

/* Limpiar los campos o inputs */
const cleanInputs = () => {
    document.getElementById('movieTitle').value = '';
    document.getElementById('movieYear').value = false;
    document.getElementById('movieDirector').value = '';
    document.getElementById('duration').value = '';
    document.getElementById('inrage').value = 0;
    document.getElementById('outrage').value = 0;
    document.getElementById('imgPoster').value = '';

    checkboxes.forEach(checkbox => {
        checkbox.checked = false;
    });
};

/* Validar que todos los campos esten llenos y validaciones personalizadas */
const validateInputs = () => {
    addInputsValue();

    /* validar campos de titulo, año, director, duracion, puntuacion e url de imagen */
    if ( !titleMovie || !yearMovie || !directorMovie || !duracionMovie || !rateMovie || !imgPoster) {
        alert('Todos los campos deben estar Completos.');
        return false;
    };

    /* validar los campos de genero que este seleccionado por lo menos 1 y máximo 4 */
    checkboxes = document.querySelectorAll('#genderForm input[type="checkbox"]');
    selectedGenres = [];
    
    checkboxes.forEach(checkbox => {
         if (checkbox.checked) {
              selectedGenres.push(checkbox.name);
         }
     });
    
     if (selectedGenres.length === 0) {
         alert('Debes de tener por lo menos una categoría de género seleccionada');
         return false;
     } else if  (selectedGenres.length > 4 ){
         alert('Debes de seleccionar un Máximo de 4 Categorías de género de películas');
         return false;
     }

     /* Recordar al usuario si la puntuacion de la película es 0 */
    if (Number(rateMovie) === 0){
        alert('¿Seguro que la puntuación de la película es 0?');
        return false;
       }

     /* Validar que la duracion sea de tres digitos max  */
     if (duracionMovie > 999){
        alert('Debes ingresar el tiempo de duración de la película en unidad de minutos, Formato: (999)');
        return false;
    }

    /* Validar que la URL de la imagen sea valida */
    try {
        new URL(imgPoster); 
    } catch (error) {
        alert('Ingresa una URL válida');
        return false; 
    };

    return true;
};

/* --------------------------------------------------------------------------------------------------- */

/* Crear Movie */
const createMovie = async (event) => {
    event.preventDefault();
    addInputsValue();

    if (validateInputs()) {
        resulDuration = convertirMinutosAHoras(Number(duracionMovie));

        const movie = {
            title: titleMovie,
            year: yearMovie,
            director: directorMovie,
            duration: resulDuration,
            genre: selectedGenres,
            rate: rateMovie,
            poster: imgPoster
        };
        
        try {
            const axios = require("axios");
            await axios.post('http://localhost:3000/movies', movie);
            alert("Película creada exitosamente!");
            cleanInputs();
        } catch (error) {
            console.log('No se envio película a la DB', error)
            alert("Hubo error al crear película");
        }
    }
};


/* botones enviar y limpiar */
const submitButton = document.getElementById("submitButton");
submitButton.addEventListener("click", createMovie);

const clearButton = document.getElementById("clear");
clearButton.addEventListener("click", cleanInputs);
