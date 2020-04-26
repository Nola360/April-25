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

const grid = document.querySelector('.grid');

// Create you board
for (let i = 0; i < cardArray.length; i++) {
  let card = document.createElement('img');
  card.setAttribute('src', 'img/img0.jpeg');
  card.setAttribute('data-id', i);
  card.addEventListener('click', flipcard)
  grid.appendChild(card);

}

