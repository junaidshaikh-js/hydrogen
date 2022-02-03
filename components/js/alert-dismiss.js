const closeBtn = document.querySelector(".close-alert");

closeBtn.addEventListener("click", function closeAlert() {
  const alert = closeBtn.parentElement;

  const demoContainer = alert.parentElement;

  alert.remove();

  // for doc website
  demoContainer.innerHTML = "Alert Gone!";

  demoContainer.style.color = "var(--primary-color)";
});
