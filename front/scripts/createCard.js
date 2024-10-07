const createCard = (movie) => {
    const card = document.createElement("div");
    card.classList.add("moviesCard");

    const cardFront = document.createElement("div");
    cardFront.classList.add("front");

    const imgPoster = document.createElement('img');
    imgPoster.src = movie.poster;
    imgPoster.classList.add('cardImg');

    const titleMovie = document.createElement('h3');
    titleMovie.classList.add("movieCardtitle");
    titleMovie.innerHTML = movie.title;

    const cardBack = document.createElement("div");
    cardBack.classList.add("back");
    
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

    cardFront.appendChild(imgPoster);
    cardFront.appendChild(titleMovie);
    cardBack.appendChild(yearMovie);
    cardBack.appendChild(directorMovie);
    cardBack.appendChild(duracionMovie);
    cardBack.appendChild(rateMovie);
    cardBack.appendChild(titleTags);
    cardBack.appendChild(tags);

    card.appendChild(cardFront);
    card.appendChild(cardBack);

    return card;
};

module.exports = {createCard};