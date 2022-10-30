const cardArray = [
    {
        name: 'fries',
        img: 'images/fries.png'
    },
    {
        name: 'cheeseburger',
        img: 'images/cheeseburger.png'
    },
    {
        name: 'hotdog',
        img: 'images/hotdog.png'
    },

    {

        name: 'milkshake',
        img: 'images/milkshake.png'
    },
    {

        name: 'pizza',
        img: 'images/pizza.png'
    },
    {

        name: 'ice_cream',
        img: 'images/ice-cream.png'
    },

    {
        name: 'fries',
        img: 'images/fries.png'
    },
    {
        name: 'cheeseburger',
        img: 'images/cheeseburger.png'
    },
    {
        name: 'hotdog',
        img: 'images/hotdog.png'
    },

    {

        name: 'milkshake',
        img: 'images/milkshake.png'
    },
    {

        name: 'pizza',
        img: 'images/pizza.png'
    },
    {

        name: 'ice_cream',
        img: 'images/ice-cream.png'
    },
];

console.log(cardArray);
const gridDisplay = document.getElementById('grid');
cardArray.sort(() => 0.5 - Math.random());
var cardChosen = [];
var cardChosenIds = [];
var cardId;
var cardsWon= [];
console.log(cardArray);

function createBoard() {
    for (var i = 0; i < cardArray.length; i++) {
        card = document.createElement('img');
        card.setAttribute('src', 'images/blank.png');
        card.setAttribute('data-id', i);
        card.addEventListener('click', flipCard);
        console.log(card);
        gridDisplay.appendChild(card);
    }
}
createBoard();

function checkMatch() {
    const cards = document.querySelectorAll('#grid img');
    if (cardChosen[0] == cardChosen[1]) {
        alert('you found a match!');
        cards[cardChosenIds[0]].setAttribute('src', 'images/white.png');
        cards[cardChosenIds[1]].setAttribute('src', 'images/white.png');
        cards[cardChosenIds[0]].removeEventListener('click', flipCard);
        cards[cardChosenIds[1]].removeEventListener('click', flipCard);

        cardsWon.push(cardChosen);
    }
    //restarting the process to check for match
    cardChosen = [];
    cardChosenIds = [];
}

function flipCard() {
    cardId = this.getAttribute('data-id');
    cardChosen.push(cardArray[cardId].name);
    cardChosenIds.push(cardId);

    console.log(cardChosen);

    this.setAttribute('src', cardArray[cardId].img);

    if (cardChosen.length === 2) {
        setTimeout(checkMatch, 500);
    }

}

// function test(){
//     cardArra[0],
// }
