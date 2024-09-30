const {createCard} = require("./createCard");

const rendeCards = (data) => {
    const cards = data.map(createCard);
    const container = document.getElementById('moviesContainer');
    container.classList.add('moviesContainer')
    container.innerHTML = "";
    cards.forEach(element => {container.appendChild(element); 

    });
}; 

module.exports = {rendeCards};