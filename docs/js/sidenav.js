const dropDownBtn = document.querySelector(".component-dropdown");
const asideNav = document.querySelector(".aside-navigation");
const dropdownArrow = document.querySelector(".dropdown-arrow i");

let isSidebarOpen = false;

dropDownBtn.addEventListener("click", () => {
  if (!isSidebarOpen) {
    isSidebarOpen = true;

    asideNav.style.height = "50vh";
    asideNav.style.overflowY = "scroll";
    dropdownArrow.style.transform = "rotate(90deg)";
  } else {
    isSidebarOpen = false;

    asideNav.style.height = "2rem";

    dropdownArrow.style.transform = "rotate(0)";
  }
});
