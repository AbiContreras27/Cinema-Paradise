/* formulario */

const formData = () => {
   const titleMovie = document.getElementById('movieTitle').value;
   const yearMovie = document.getElementById('movieYear').value;
   const directorMovie = document.getElementById('movieDirector').value;
   const duracionMovie = document.getElementById('duration').value;
   const rateMovie = document.getElementById('inrage').value;
   const imgPoster = document.getElementById('imgPoster').value;


   if ( !titleMovie || !yearMovie || !directorMovie || !duracionMovie || !rateMovie || !imgPoster){
       alert('Todos los campos deben estar Completos.');
       return;
   }

   if (Number(rateMovie) === 0){
    alert('¿Seguro que la puntuación de la película es 0?');
    return;
   }
   
   try {
        new URL(imgPoster); 
    } catch (e) {
        alert('Ingresa una URL válida');
    return; 
    }

   const checkboxes = document.querySelectorAll('#genderForm input[type="checkbox"]');
   let selectedGenres = [];

   checkboxes.forEach(checkbox => {
        if (checkbox.checked) {
             selectedGenres.push(checkbox.name);
        }
    });

    if (selectedGenres.length === 0) {
        alert('Debes de tener por lo menos una categoría de género seleccionada');
        return;
    } else if  (selectedGenres.length > 4 ){
        alert('Debes de seleccionar un Máximo de 4 Categorías de género de películas');
        return;
    }
  
   if (duracionMovie > 999){
       alert('Debes ingresar el tiempo de duración de la película en unidad de minutos, Formato: (999)');
       return;
   }

    // limpiar campos //
    document.getElementById('movieTitle').value = '';
    document.getElementById('movieYear').value = '';
    document.getElementById('movieDirector').value = '';
    document.getElementById('duration').value = '';
    document.getElementById('inrage').value = 0;
    document.getElementById('outrage').value = 0;
    document.getElementById('imgPoster').value = '';

    checkboxes.forEach(checkbox => {
        checkbox.checked = false;
    });

    alert('Agregada nueva Película');

};

//! funcion para llenar el select del año //
document.addEventListener('DOMContentLoaded', () => {
    llenarSelectYear();
})

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

//* Para no recargar la pagina en el evento click del boton
document.getElementById('submitButton').addEventListener('click', function(event) {
    // Prevenir la recarga de la página
    event.preventDefault();
    formData();
});

module.exports = {formData}