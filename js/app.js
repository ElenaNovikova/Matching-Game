/*
 * Create a list that holds all of your cards
 */

const cardsPack3 = [
    'frog.jpg',
    'dog.jpg',
    'sheep.jpg',
    'muravied.jpg',
    'antelope.jpg',
    'baboon.jpg',
    'chimpanzee.jpg',
    'leopard.jpg',
    'frog.jpg',
    'dog.jpg',
    'sheep.jpg',
    'muravied.jpg',
    'antelope.jpg',
    'baboon.jpg',
    'chimpanzee.jpg',
    'leopard.jpg'
];

const cardsPack = [
    'Bathing_of_a_Red_Horse_(Petrov-Vodkin).jpg',
    'Mona_Lisa_Leonardo_da_Vinci.jpg',
    'Pieter_Bruegel_the_Elder_-_Hunters_in_the_Snow.jpg',
    'Pieter_Bruegel_the_Elder_-_The_Tower_of_Babel.jpg',
    'Sandro_Botticelli_-_La_nascita_di_Venere.jpg',
    'The_Scream_Munk.jpg',
    'Three_Bogatyrs_(Vasnetsov).jpg',
    'Starry_Night_Over_the_Rhone2.jpg',
    'Bathing_of_a_Red_Horse_(Petrov-Vodkin).jpg',
    'Mona_Lisa_Leonardo_da_Vinci.jpg',
    'Pieter_Bruegel_the_Elder_-_Hunters_in_the_Snow.jpg',
    'Pieter_Bruegel_the_Elder_-_The_Tower_of_Babel.jpg',
    'Sandro_Botticelli_-_La_nascita_di_Venere.jpg',
    'The_Scream_Munk.jpg',
    'Three_Bogatyrs_(Vasnetsov).jpg',
    'Starry_Night_Over_the_Rhone2.jpg'
];

/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */

// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

/*
 * Shuffling the list of cards using the "shuffle" method:
 */

let cards = shuffle(cardsPack);

// Variables to store two cards selected by the player:
let firstCardClicked = '';
let secondCardClicked = '';

// Variables to prevent selecting the same card element twice:
let previousTarget = null;

// Let's store the counter:
let counter = 0;

// Looping through each card and creating its HTML and adding to the DOM

cards.forEach(function(item, index, array) {

    // Creating the <li> element for the card:
    const createLiTag = document.createElement('li');
    // Setting the <li>´s class attribute 'card':
    createLiTag.setAttribute('class', 'card');

    /* Creating the front of the card:
    */
    // Creating the 1st <img> element as the child element of the <li>:
    createLiTag.innerHTML = '<img class=\"face\"' + ' src=\"img/' + cards[index] + '\"' + ' data-img-name=\"' + cards[index] + '\"' + ' alt=\"animal card\">';

    /* Creating the back of the card:
    */
    // Creating the 2nd <img> element for back-side of the card:
    const cardBack = document.createElement('img');
    createLiTag.appendChild(cardBack);
    // Setting the <li>´s classes attributes 'card' and 'back':
    cardBack.setAttribute('class', 'back');
    cardBack.setAttribute('src', 'img/back1.jpg');
    cardBack.setAttribute('alt', 'back of the card');

    // Selecting the <ul class="deck">:
    let ulDeck = document.querySelector('.deck');

    // Adding the <li> element as the last child element of the <ul class="deck">:
    ulDeck.appendChild(createLiTag);

});

/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */

// Setting up the event listener for cards:

let ulDeck = document.getElementById('decks');

ulDeck.addEventListener('click', function (event) {
    // The event target is the clicked item:
    let clicked = event.target;
    // Do not allow the <ul> itself to be selected; only select cards inside the <li>:
    if (clicked.nodeName === 'UL' || clicked === previousTarget || clicked.parentNode.classList.contains('selected')) {
        return;
    }
    if (counter < 2) {
        counter++;
        if (counter === 1) {
            // Assigning the first card guess:
            firstCardClicked = clicked.dataset.imgName;
            // Add selected class
            clicked.classList.add('selected');
        } else {
            // Assigning the second card guess:
            secondCardClicked = clicked.dataset.imgName;
            clicked.classList.add('selected');
        }
        // Now let's compare if the 1st and the 2nd clicked cards are matched:
        if (firstCardClicked !== '' && secondCardClicked !== '') {
            if (firstCardClicked === secondCardClicked && ((firstCardClicked) && secondCardClicked !== '.back')) {
                setTimeout(doMatch, delay);
                setTimeout(discard, delay);
            } else {
                setTimeout(discard, delay);
            }
        }

        // Set previous target to clicked:
        previousTarget = clicked;
    }
 });

// A function for matching elements:
function doMatch() {
    let selected = document.querySelectorAll('.selected');
    selected.forEach(createLiTag => {
        createLiTag.classList.add('matched');
        createLiTag.classList.add('flip-scale-down-hor');
    });
};

// A function to discard the guesses:
function discard() {
    firstCardClicked = '';
    secondCardClicked = '';
    counter = 0;
    let selected = document.querySelectorAll('.selected');
    selected.forEach(createLiTag => {
        createLiTag.classList.remove('selected');
    });
};

// Adding the delay of 1.4 seconds to opened cards before they'll be flipped over:
let delay = 1400;
