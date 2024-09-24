console.log(tempData);

class Repository {
    constructor(){
        this.tempData;
        this.currentId = 1;
    }

    createCard(extraerCard) {
        const {title, year, director, duration, genre, rate, poster } = extraerCard;

        const titleMovie = document.createElement('a');
        const yearMovie = document.createElement('p');
        const durationMovie = document.createElement('p');
        const directorMovie = document.createElement('P');
        const genreMovie = document.createElement('p');
        const rateMovie = document.createElement('p');
        const imgPoster = document.createElement('img');
        
        titleMovie.innerHTML = title;
        yearMovie.innerHTML = year;
        directorMovie.innerHTML = director;
        durationMovie.innerHTML = duration;
        genreMovie.innerHTML = genre;
        rateMovie.innerHTML = rate;
        imgPoster.innerHTML = poster;

        const movieElement = document.createElement('div');

        movieElement.appendChild(titleMovie);
        movieElement.appendChild(yearMovie);
        movieElement.appendchild(directorMovie);
        movieElement.appendChild(durationMovie);
        movieElement.appendChild(genreMovie);
        movieElement.appendChild(rateMovie);
        movieElement.appendChild(imgPoster);
    };

    buildCards() {
        const movieContainer = document.getElementById('movieContainer');
        movieContainer.innerHTML = " ";
        
        const movies = this.tempData;
        const cardMovies = movies.map(movie => this.createCard(extraerCard));

        cardMovies.forEach(pelicula => {
            movieContainer.appendChild(pelicula);
        });
    };

};
