// FLIP EFFECT

const $memoCard = document.querySelectorAll(".js_memo_card");

function flipCard() {
  this.classList.toggle("flip");
}

$memoCard.forEach((card) => {
  card.addEventListener("click", flipCard);
});
