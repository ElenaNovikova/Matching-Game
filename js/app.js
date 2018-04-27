/*
 * Create a list that holds all of your cards
 */

let cards = ['frog', 'dog', 'sheep', 'muravied', 'antelope', 'baboon', 'chimpanzee', 'leopard', 'frog2', 'dog2', 'sheep2', 'muravied2',
'antelope2', 'baboon2', 'chimpanzee2', 'leopard2'];

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
 * To call the Shuffle method: (shuffle(cards));
 * Shuffling the list of cards using the "shuffle" method:
 */

cards = shuffle(cards);

// Looping through each card and creating its HTML

cards.forEach(function(item, index, array) {

    // Creating the <li> element:
    let createLiTag = document.createElement('li');

    // Setting the <li>´s class attribute:
    createLiTag.setAttribute('class', 'card');

    // Creating the <img> element:
    let createImgTag = document.createElement('img');

    createImgTag.setAttribute('src', 'img/back1.jpg');

    // Adding the <img> element as the last child element of the <li class="card">:
    createLiTag.appendChild(createImgTag);

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
