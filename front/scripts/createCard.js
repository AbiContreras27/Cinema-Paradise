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
    yearMovie.innerHTML = 'Year: ' + movie.year;

    const directorMovie = document.createElement('span');
    directorMovie.classList.add("directorSpan");
    directorMovie.innerHTML = 'Director: ' + movie.director;

    const duracionMovie = document.createElement('span');
    duracionMovie.classList.add("duracionSpan");
    duracionMovie.innerHTML = 'Duración: ' + movie.duration;

    const tags = document.createElement('div');
    tags.classList.add('tagsMovies');


    const genresTags = movie.genre.map((genero) => {
        const tag = document.createElement('span');
        tag.classList.add('tag');
        tag.innerHTML = genero;
        return tag;
    });

    const rateMovie = document.createElement('span');
        rateMovie.classList.add("rateSpan");
        rateMovie.innerHTML = 'Rate: ' + movie.rate;

    genresTags.forEach((element) => {
        tags.appendChild(element);
    });

    card.appendChild(imgPoster);
    card.appendChild(titleMovie);
    card.appendChild(yearMovie);
    card.appendChild(directorMovie);
    card.appendChild(duracionMovie);
    card.appendChild(tags);
    card.appendChild(rateMovie);

    return card;

};

module.exports = {createCard};