/* DISPLAY OF HAMBURGER MENU */
const headingElement = document.querySelector(".menu-icon");
const ul = document.querySelector(".links");

headingElement.addEventListener("click", displayBurgerMenu);

function displayBurgerMenu() {
  if (ul.style.display === "none") {
    ul.style.display = "flex";
  } else {
    ul.style.display = "none";
  }
}
/* REFENCE CHATGPT AND YOUTUBE VIDEOS */
/* https://chatgpt.com/c/69a18c6c-ba00-832b-bfcb-efa62e87b1c5
 https://www.youtube.com/watch?v=pBv7igaxfQE
 https://www.youtube.com/watch?v=aNDqzlAKmZc */

/* ADDING AND RESTING PRODUCTS TO THE SHOPPING CART PAGE */

const reduceButton = document.querySelector(".reduce-button");
const increaseButton = document.querySelector(".increase-button");
const addingToCartButton = document.querySelector(".buy-button");
const amountNumber = document.querySelector(".amount");

reduceButton.addEventListener("click", reducingCopies);

function reducingCopies() {
  let numberOfCopies = parseInt(amountNumber.value, 10 || 1);
  if (numberOfCopies > 1) {
    amountNumber.value = numberOfCopies - 1;
  }
}

increaseButton.addEventListener("click", increaseCopies);
function increaseCopies() {
  let numberOfCopies = parseInt(amountNumber.value, 10 || 1);
  amountNumber.value = numberOfCopies + 1;
}

addingToCartButton.addEventListener("click", addedToCart);

function addedToCart() {}

/* REFERENCE FOR CHATGPT HELP!
https://chatgpt.com/c/69a2d1a7-16a0-8393-a7fc-640a1180baf1 */

/* CREATING THE NEEDED SO POSTERS WOULD APPEAR IN THE SHOPPING CART */

let posterWanted = document.getElementsByClassName("buy-button");

let shoppingArr;

if (localStorage.shopping) {
  shoppingArr = JSON.parse(localStorage.shopping);
} else {
  shoppingArr = [];
}

for (let i = 0; i < posterWanted.length; i++) {
  posterWanted[i].addEventListener("click", saveToBuy);
}

function saveToBuy() {
  let desiredPoster = {
    id: this.dataset.id,
    img: this.dataset.img,
  };

  shoppingArr.push(desiredPoster);

  localStorage.shopping = JSON.stringify(shoppingArr);

  console.log("product added" + desiredPoster);
}
