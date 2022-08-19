const guitarsAvailableLink = document.getElementById("guitars-available-link");
const availableGuitarsFigure = document.querySelector(".available-guitars");
const shopGuitarsBtn = document.getElementById("shop-guitars-button");
const shopGuitarsSection = document.querySelector(
  "#past-guitars .past-wrapper"
);

function createOutOfStockParagraph() {
  const outOfStockParagraph = document.createElement("p");
  const outOfStockText = document.createTextNode("Currently Out of Stock");
  outOfStockParagraph.appendChild(outOfStockText);
  outOfStockParagraph.classList.add("out-of-stock");
  return outOfStockParagraph;
}

function removeOutOfStockParagraph(outOfStockParagraph) {
  outOfStockParagraph.classList.remove("out-of-stock");
  outOfStockParagraph.classList.add("hide-no-stock");
  outOfStockParagraph.remove();
}

function addAndRemoveOutOfStockParagraph(parentSection) {
  const outOfStockParagraph = createOutOfStockParagraph();
  parentSection.appendChild(outOfStockParagraph);
  setTimeout(function () {
    removeOutOfStockParagraph(outOfStockParagraph);
  }, 3000);
}

guitarsAvailableLink.addEventListener("click", function (e) {
  e.preventDefault();
  addAndRemoveOutOfStockParagraph(availableGuitarsFigure);
});

shopGuitarsBtn.addEventListener("click", function (e) {
  e.preventDefault();
  addAndRemoveOutOfStockParagraph(shopGuitarsSection);
});
