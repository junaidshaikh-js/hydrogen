const switchBtn = document.querySelector(".theme-switch-btn");

switchBtn.addEventListener("click", () => {
  console.log("clicked");
  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    switchBtn.innerHTML = '<i class="fas fa-sun" title="switch theme"></i>';
  } else {
    switchBtn.innerHTML = '<i class="fas fa-moon" title="switch theme"></i>';
  }
});
