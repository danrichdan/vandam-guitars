const menuIcon = document.querySelector(".hamburger");
const menuBars = menuIcon.children;
const mobileMenu = document.querySelector(".mobile-nav");
const mobileNavLinks = document.querySelectorAll(".mobile-nav a");

for (let link of mobileNavLinks) {
  link.addEventListener("click", closeMenuOnLinkClick);
}

menuIcon.addEventListener("click", function (e) {
  showHide();
});

function animateBurger() {
  for (const bar of menuBars) {
    bar.classList.toggle("change");
  }
}

// Mobile Nav Menu
function showHide() {
  mobileMenu.classList.toggle("hide");

  animateBurger();
}

// Closes Dropdown Menu after clicking on a link
function closeMenuOnLinkClick() {
  animateBurger();
  mobileMenu.classList.toggle("hide");
}

// These are used for the copywright year
function calcCurrentYear() {
  let date = new Date();
  return date.getFullYear();
}

function displayCurrentYear(elSelector) {
  document.getElementById(elSelector).textContent = calcCurrentYear();
}

displayCurrentYear("year");
