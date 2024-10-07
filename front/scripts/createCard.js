
const createCard = (movie) => {
    const card = document.createElement("div");
    card.classList.add("moviesCard");

    const imgPoster = document.createElement('img');
    imgPoster.src = movie.poster;
    imgPoster.classList.add('cardImg');

    const titleMovie = document.createElement('h3');
    titleMovie.classList.add("movieCardtitle");
    titleMovie.innerHTML = movie.title;

    const yearMovie = document.createElement('span');
    yearMovie.classList.add("yearSpan");
    yearMovie.innerHTML = '<span class="subtitle">Year:</span> ' + movie.year;

    const directorMovie = document.createElement('span');
    directorMovie.classList.add("directorSpan");
    directorMovie.innerHTML = '<span class="subtitle">Director:</span> ' + movie.director;

    const duracionMovie = document.createElement('span');
    duracionMovie.classList.add("duracionSpan");
    duracionMovie.innerHTML = '<span class="subtitle">Duration:</span> ' + movie.duration;

    const rateMovie = document.createElement('span');
    rateMovie.classList.add("rateSpan");
    rateMovie.innerHTML = '<span class="subtitle">Rate:</span> ' + movie.rate;

    const titleTags = document.createElement('span');
    titleTags.classList.add('subtitle');
    titleTags.textContent = "Gender:"

    const tags = document.createElement('div');
    tags.classList.add('tagsMovies');

    const genresTags = movie.genre.map((genero) => {
        const tag = document.createElement('span');
        tag.classList.add('tag');
        tag.innerHTML = genero;
        return tag;
    });
    
    genresTags.forEach((element) => {
        tags.appendChild(element);
    });

    card.appendChild(imgPoster);
    card.appendChild(titleMovie);
    card.appendChild(yearMovie);
    card.appendChild(directorMovie);
    card.appendChild(duracionMovie);
    card.appendChild(rateMovie);
    card.appendChild(titleTags);
    card.appendChild(tags);

    return card;
};

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

module.exports = {createCard};