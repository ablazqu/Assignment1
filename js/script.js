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

/* DISPLAY FOR THE CONTACT BUTTON */
const button = document.querySelector(".show-contact");
const p = document.querySelector(".email");

p.style.display = "none";

button.addEventListener("click", showEmail);
function showEmail() {
  if (p.style.display === "none") {
    p.style.display = "flex";
  } else {
    p.style.display = "none";
  }
}

/* AMOUNT OF COPIES */
const reduceButton = document.querySelector(".reduce-button");
const increaseButton = document.querySelector(".increase-button");
const amountNumber = document.querySelector(".amount");

/* Reducing copies */
reduceButton.addEventListener("click", reducingCopies);

function reducingCopies() {
  let numberOfCopies = parseInt(amountNumber.value, 10 || 1);
  if (numberOfCopies > 1) {
    amountNumber.value = numberOfCopies - 1;
  }
}

/* Increasing copies */
increaseButton.addEventListener("click", increaseCopies);
function increaseCopies() {
  let numberOfCopies = parseInt(amountNumber.value, 10 || 1);
  amountNumber.value = numberOfCopies + 1;
}

/* REFERENCE FOR CHATGPT HELP!
https://chatgpt.com/c/69a2d1a7-16a0-8393-a7fc-640a1180baf1 */

/* CREATING THE NEEDED SO POSTERS WOULD APPEAR IN THE SHOPPING CART */

/* 
we need:
- to create an array where to storage the info for each product we want to buy  --- DONE ---
- an eventlistener so when we click the product would appear in the shopping page as part of the array --- DONE---
- to create and object with the data from the product. --- DONE --- 
- to make a loop so the array would iterate --- DONE ---
- retrieve values, use JSON, parse, DOM, etc --- DONE---
- making them appear in a row. --- DONE ---
- making it possible to remove products 
 */

/* create an empty array where product would be storage*/

let cartArray;

/* making it exist in the local storage */

if (localStorage.shopping) {
  cartArray = JSON.parse(localStorage.shopping);
} else {
  cartArray = [];
}

/* make the button clickable */

const buyButton = document.querySelectorAll(".buy-button");

/* making possible to add more than one product */

for (let i = 0; i < buyButton.length; i++) {
  buyButton[i].addEventListener("click", addToCart);
}
/* creating the function so it works */
function addToCart(event) {
  const button = event.target;
  const product = button.closest(".price-page");

  const picture = product.querySelector(".product1").src; /* image */
  const price = parseInt(
    document
      .querySelector(".quicksand-txt-price")
      .innerText.replace(" SEK", ""),
  ); /* price */
  const copies = parseInt(document.querySelector(".amount").value); /* amount */

  /* creating the object with the product info */
  let posterObj = {
    image: picture,
    price: price,
    amount: copies,
  };

  /* preventing to have the same product many times */
  for (let i = 0; i < cartArray.length; i++) {
    if (picture === cartArray[i].image) {
      cartArray.splice(i, 1);
    }
  }
  cartArray.push(posterObj);
  localStorage.shopping = JSON.stringify(cartArray);
}
