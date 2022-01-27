const navbar = document.querySelector(".navbar");
const logoWrapper = document.querySelector(".logo-wrapper");

const menuBtn = document.querySelector(".menu-btn");
const menuCloseBtn = document.querySelector(".navbar-close-btn");

menuBtn.addEventListener("click", showNavbar);
menuCloseBtn.addEventListener("click", hideNavbar);

// ****************

function showNavbar(e) {
  e.preventDefault();
  navbar.classList.add("show-navbar");
}

function hideNavbar() {
  navbar.classList.remove("show-navbar");
}
