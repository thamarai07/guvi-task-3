const card_inner = document.querySelectorAll(".card_inner");
const card_back = document.querySelectorAll(".card_back img");
const card_wapper = document.querySelector(".card");
const reset_btn = document.querySelector(".reset-btn");

const arr = [
  "./assets/facebook.png",
  "./assets/instagram.png",
  "./assets/linkedin.png",
];

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

const myArray = [0, 0, 1, 1, 2, 2];
const shuffledArray = shuffleArray(myArray);

card_inner.forEach((card, index) => {
  card.dataset.id = shuffledArray[index];
  const cardImg = card.querySelector(".card_back img");
  if (cardImg) {
    cardImg.src = arr[shuffledArray[index]];
  }
});

reset_btn.addEventListener("click", function () {
  const myArray = [0, 0, 1, 1, 2, 2];
  const shuffledArray = shuffleArray(myArray);

  card_inner.forEach((card, index) => {
    card.parentElement.classList.remove("flip");
    empty = [];
    card.dataset.id = shuffledArray[index];
    const cardImg = card.querySelector(".card_back img");
    if (cardImg) {
      cardImg.src = arr[shuffledArray[index]];
    }
  });
});

let empty = [];
card_inner.forEach((card, index) => {
  card.addEventListener("click", function () {
    empty.push(card.dataset.id);
    card.parentElement.classList.add("flip");
    if (empty.length >= 2) {
      if (empty[0] == empty[1]) {
        if (empty.length == 6 && card_inner.length == 6) {
          alert("You Won");
        }
      } else {
        card_inner.forEach((values) => {
          setTimeout(() => {
            values.parentElement.classList.remove("flip");
            empty = [];
          }, 1000);

          setTimeout(() => {
            const myArray = [0, 0, 1, 1, 2, 2];
            const shuffledArray = shuffleArray(myArray);

            card_inner.forEach((card, index) => {
              card.dataset.id = shuffledArray[index];
              const cardImg = card.querySelector(".card_back img");
              if (cardImg) {
                cardImg.src = arr[shuffledArray[index]];
              }
            });
          }, 1300);
        });
        if (empty.length == 6 && card_inner.length == 6) {
          alert("Please Reset the game");
          shuffleArray(myArray);
        }
      }
    }
  });
});
