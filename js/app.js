/*
 * Create a list that holds all of your cards
 */

let cards = [
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

cards = shuffle(cards);

// Looping through each card and creating its HTML and adding to the DOM

cards.forEach(function(item, index, array) {

    // Creating the <li> element:
    const createLiTag = document.createElement('li');

    // Setting the <li>´s class attribute 'card':
    createLiTag.setAttribute('class', 'card');

    // Creating the <img> element as the child element of the <li class="card">:
    createLiTag.innerHTML = '<img src=\"img/' + cards[index] + '\"' + ' alt=\"animal card\">';

    // Selecting the <ul class="deck">:
    const ulDeck = document.querySelector('.deck');

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

//Setting up the event listener for cards:

let ulDeck = document.getElementById('decks');

ulDeck.addEventListener('click', function (event) {
    // The event target is the clicked item:
    let clicked = event.target;
    // Do not allow the <ul> itself to be selected; only select cards inside the <li>:
    if (clicked.nodeName === 'UL') {
        return;
    };
    if (counter < 2) {
      counter++;
      // Add selected class
      clicked.classList.add('selected');
    };
 });

// Variables to store two selected by the player cards:
let firstCardClicked = '';
let secondCardClicked = '';

// Let's store the counter:
let counter = 0;

// A function for matching elements:
const match = () => {
  let selected = document.querySelectorAll('.selected');
  selected.forEach(card => {
    card.classList.add('match');
  });
}
