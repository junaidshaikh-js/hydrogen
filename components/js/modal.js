const modalCTA = document.querySelector(".modal-cta");
const modalCloseBtn = document.querySelector("#close-modal-demo");
const demoModal = document.querySelector("#example-modal");

modalCTA.addEventListener("click", showModal);
modalCloseBtn.addEventListener("click", hideModal);

function showModal() {
  demoModal.classList.add("show");

  document.body.style.position = "fixed";
}

function hideModal() {
  demoModal.classList.remove("show");

  document.body.style.position = "static";
}
