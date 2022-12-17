const $memoCard = document.querySelectorAll(".js_memo_card");
let hasFlippedCard, lockBoard;
let firstCard, secondCard;

function resetBoard() {
  [hasFlippedCard, lockBoard] = [false, false];
  [firstCard, secondCard] = [null, null];
}

function disableCards() {
  firstCard.removeEventListener("click", flipCard);
  secondCard.removeEventListener("click", flipCard);
  resetBoard();
}

function unflipCards() {
  lockBoard = true;
  setTimeout(() => {
    firstCard.classList.remove("flip");
    secondCard.classList.remove("flip");
    resetBoard();
  }, 1500);
}

function checkIsMatch() {
  let isMatchCards =
    firstCard.dataset.framework === secondCard.dataset.framework;
  isMatchCards ? disableCards() : unflipCards();
}

function flipCard() {
  if (lockBoard || this === firstCard) return;

  this.classList.toggle("flip");

  if (!hasFlippedCard) {
    hasFlippedCard = true;
    firstCard = this;
    return;
  } else {
    hasFlippedCard = false;
    secondCard = this;
    checkIsMatch();
  }
}

$memoCard.forEach((card) => {
  card.addEventListener("click", flipCard);
});

(function randomizer() {
  $memoCard.forEach((card) => {
  rand = Math.floor(Math.random() * 12);
  card.style.order = rand});
})()
