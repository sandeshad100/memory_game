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
const resultDisplay =  document.querySelector('#score');
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
       
        gridDisplay.appendChild(card);
    }
}
createBoard();

function checkMatch() {
    const cards = document.querySelectorAll('#grid img');
    const firstClickId = cardChosenIds[0];
    const secondClickId = cardChosenIds[1];

   if(firstClickId == secondClickId){
    cards[firstClickId].setAttribute('src', 'images/blank.png');
    cards[secondClickId].setAttribute('src', 'images/blank.png');
    alert("You clicked on same card!");
   }

  else if(cardChosen[0] == cardChosen[1]) {
        alert('you found a match!');
        cards[firstClickId].setAttribute('src', 'images/white.png');
        cards[secondClickId].setAttribute('src', 'images/white.png');
        cards[firstClickId].removeEventListener('click', flipCard);
        cards[secondClickId].removeEventListener('click', flipCard);

        cardsWon.push(cardChosen);
        resultDisplay.textContent = cardsWon.length;
    }else{
        cards[firstClickId].setAttribute('src', 'images/blank.png');
        cards[secondClickId].setAttribute('src', 'images/blank.png');
    }
    //restarting the process to check for match
    cardChosen = [];
    cardChosenIds = [];

    if(cardsWon.length == cardArray.length/2){

        resultDisplay.textContent = "Congratulations, you found them all!";
    }
}

function flipCard() {
    cardId = this.getAttribute('data-id');
    cardChosen.push(cardArray[cardId].name);
    cardChosenIds.push(cardId);

    

    this.setAttribute('src', cardArray[cardId].img);

    if (cardChosen.length === 2) {
        setTimeout(checkMatch, 350);
    }

}


