const card_inner = document.querySelectorAll(".card_inner");
const card_back = document.querySelectorAll(".card_back img");
const card = document.querySelectorAll(".card");
const reset_btn = document.querySelector(".reset-btn");

const arr = [
  "./assets/facebook.png",
  "./assets/instagram.png",
  "./assets/linkedin.png"
];

let myArray = [0, 0, 1, 1, 2, 2];
let sArray = shuffleArray([...myArray]); 
let flippedCards = [];
let canFlip = true;
let i = 0;

function initGame() {
  flippedCards = [];
  canFlip = true;
  i = 0;
  sArray = shuffleArray([...myArray]);
  
  card.forEach((c) => {
    c.classList.remove("flip");
    c.style.pointerEvents = "auto"; 
  });
  
  ArraddImage(card_back);
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function AddClass(element, cls) {
  element.classList.add(cls);
}

function RemoveClass(element, cls) {
  element.classList.remove(cls);
}

function handleCardFlip(cardElement) {
  if (!canFlip || flippedCards.includes(cardElement) || flippedCards.length >= 2) {
    return;
  }
  
  AddClass(cardElement, "flip");
  flippedCards.push(cardElement);
  
  if (flippedCards.length === 2) {
    canFlip = false;
    setTimeout(checkForMatch, 1000);
  }
}

function checkForMatch() {
  const [card1, card2] = flippedCards;
  const img1 = card1.querySelector('.card_back img').src;
  const img2 = card2.querySelector('.card_back img').src;
  
  if (img1 === img2) {
    flippedCards = [];
  } else {
    flippedCards.forEach(card => RemoveClass(card, "flip"));
    flippedCards = [];
  }
  
  canFlip = true;
}

function ArraddImage(elements) {
  elements.forEach((element, index) => {
    element.src = arr[sArray[index]];
  });
}

card.forEach(c => {
  c.addEventListener("click", () => handleCardFlip(c));
});

reset_btn.addEventListener("click", initGame);

initGame();