document.addEventListener('DOMContentLoaded', () => {

})

// Card Options
const cardArray = [
  {
    name: 'aj_red',
    img: 'img/img01.jpg'
  },
  {
    name: 'aj_red',
    img: 'img/img01.jpg'
  },
  {
    name: 'aj_bblue',
    img: 'img/img2.jpg'
  },
  {
    name: 'aj_bblue',
    img: 'img/img2.jpg'
  },
  {
    name: 'aj_green',
    img: 'img/img3.jpg'
  },
  {
    name: 'aj_green',
    img: 'img/img3.jpg'
  },
  {
    name: 'aj_orange',
    img: 'img/img4.jpg'
  },
  {
    name: 'aj_orange',
    img: 'img/img4.jpg'
  },
  {
    name: 'aj_royal',
    img: 'img/img5.jpg'
  },
  {
    name: 'aj_royal',
    img: 'img/img5.jpg'
  },
  {
    name: 'aj_gold',
    img: 'img/img7.jpg'
  },
  {
    name: 'aj_gold',
    img: 'img/img7.jpg'
  },
]

cardArray.sort(() => 0.5 - Math.random());

const grid = document.querySelector('.grid');
var cardsChosen = [];
var cardsChosedId = [];
const resultDisplay = document.querySelector('#result');
var cardsWon = [];


console.log(grid);
// Create you board

function createBoard() {
  for (let i = 0; i < cardArray.length; i++) {
    let card = document.createElement('img');
    card.setAttribute('src', 'img/img0.jpeg');
    card.setAttribute('data-id', i);
    card.addEventListener('click', flipCard)
    grid.appendChild(card);

  }


}


// Check for matches

function checkForMatch() {
  var cards = document.querySelectorAll('img');
  const optionOneId = cardsChosenId[0];
  const optionTwoId = cardsChosenId[1];
  if (cardsChosen[0] === cardsChosen[1]) {
    alret('You found a match');
    cards[optionOneId].setAttribute('src', 'img/img0.jpeg')
    cards[optionTwoId].setAttribute('src', 'img/img0.jpeg')
    cardsWon.push(cardsChosen);
  } else {
    cards[optionOneId].setAttribute('src', 'img/img8.jpg')
    cards[optionTwoId].setAttribute('src', 'img/img8.jpg')
    alert('sorry, try again');
  }
  cardsChosen = [];
  cardsChosenId = [];
  resultDisplay.textContent = cardsWon.length
  if (cardsWon.length === cardArray.length / 2) {
    resultDisplay.textContent = 'Congratulations'
  }
}



// Flip Your Card
function flipCard() {
  let cardId = this.getAttribute('data-id');
  cardsChosen.push(cardArray[cardId].name);
  // cardsChosenId.push(cardId);
  this.setAttribute('src', cardArray[cardId].img);
  if (cardsChosen.length === 2) {
    setTimeout(checkForMatch, 500)
  }

}


createBoard();