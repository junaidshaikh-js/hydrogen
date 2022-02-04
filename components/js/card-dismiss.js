const cardDismissBtn = document.querySelector(".card-dismiss-btn");

cardDismissBtn.addEventListener("click", function dismissCard() {
  const card = cardDismissBtn.parentElement;

  const cardContainer = card.parentElement;

  card.remove();

  // for doc site

  cardContainer.innerText = "Card is Gone!";
  cardContainer.style.color = "var(--primary-color)";
});
