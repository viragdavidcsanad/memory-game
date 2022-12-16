const $memoCard = document.querySelectorAll(".js_memo_card");
let hasFlippedCard = false;
let firstCard, secondCard;

function flipCard() {
  this.classList.toggle("flip");
  if (!hasFilppedCard) {
    hasFlippedCard = true;
    firstCard = this;
  } else {
    hasFlippedCard = false;
    secondCard = this;
  }
}

$memoCard.forEach((card) => {
  card.addEventListener("click", flipCard);
});
