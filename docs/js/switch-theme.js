const switchBtn = document.querySelector(".theme-switch-btn");

let darkMode = false;

if (localStorage.getItem("theme")) {
  document.body.classList.add("dark-mode");
  switchBtn.innerHTML = '<i class="fas fa-sun" title="switch theme"></i>';
  darkMode = true;
}

switchBtn.addEventListener("click", () => {
  if (darkMode) {
    document.body.classList.remove("dark-mode");
    localStorage.removeItem("theme");
    switchBtn.innerHTML = '<i class="fas fa-moon" title="switch theme"></i>';

    darkMode = false;
  } else {
    document.body.classList.add("dark-mode");
    localStorage.setItem("theme", "dark");
    switchBtn.innerHTML = '<i class="fas fa-sun" title="switch theme"></i>';

    darkMode = true;
  }
});
