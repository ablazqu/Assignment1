/* --- DISPLAY OF HAMBURGER MENU --- */
const hambugerMenu = document.querySelector(".menu-icon");
const ul = document.querySelector(".links");
hambugerMenu.addEventListener("click", displayBurgerMenu);
function displayBurgerMenu() {
  if (ul.style.display === "none") {
    ul.style.display = "flex";
  } else {
    ul.style.display = "none";
  }
}

/* --- DISPLAY FOR THE CONTACT BUTTON --- */
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

/* --- AMOUNT OF COPIES --- */
const reduceButton = document.querySelector(".reduce-button");
const increaseButton = document.querySelector(".increase-button");
const amountNumber = document.querySelector(".amount");

//Reducing copies
reduceButton.addEventListener("click", reducingCopies);
function reducingCopies() {
  let numberOfCopies = parseInt(amountNumber.value, 10 || 1);
  if (numberOfCopies > 1) {
    amountNumber.value = numberOfCopies - 1;
  }
}
//Increasing copies
increaseButton.addEventListener("click", increaseCopies);
function increaseCopies() {
  let numberOfCopies = parseInt(amountNumber.value, 10 || 1);
  amountNumber.value = numberOfCopies + 1;
}

/* REFERENCE: chat gpt help
 https://chatgpt.com/c/69a2d1a7-16a0-8393-a7fc-640a1180baf1 */

/* --- CREATING THE NEEDED SO POSTERS WOULD APPEAR IN THE SHOPPING CART --- */
// create an empty array where product would be storage
let cartArray;

// making it exist in the local storage
if (localStorage.shopping) {
  cartArray = JSON.parse(localStorage.shopping);
} else {
  cartArray = [];
}
updateWhatsInTheBag();

// making the "add to cart" button clickable
const buyButton = document.querySelectorAll(".buy-button");

// for when we have thing inside de cart (the icon show how many items we have inside)
function updateWhatsInTheBag() {
  const whatsInTheBag = document.querySelector(".bag-has-products");
  whatsInTheBag.textContent = cartArray.length;
  if (cartArray.length > 0) {
    whatsInTheBag.style.display = "flex";
  } else {
    whatsInTheBag.style.display = "none";
  }
}

/* REFERENCE: chat gpt help
https://chatgpt.com/c/69ab4b1f-cb34-832a-8844-62f8df1d7c75 */

// making possible to add more than one product
for (let i = 0; i < buyButton.length; i++) {
  buyButton[i].addEventListener("click", addToCart);
}

// creating the function so it works
function addToCart(event) {
  // showing "ADDED TO CART" eveytime we add a new product
  let message = document.createElement("h6");
  message.innerText = "ADDED TO CART";
  let showIt = document.querySelector(".added-message");
  setTimeout(messageGone, 2000);
  function messageGone() {
    message.remove();
  }
  showIt.appendChild(message);

  // here we are telling which and from where we want the information
  const button = event.target;
  const product = button.closest(".price-page"); // it will go to the closest ".price-page", so we get the right info
  const picture = product.querySelector(".product1").src; // image
  const price = parseInt(
    document
      .querySelector(".quicksand-txt-price")
      .innerText.replace(" SEK", ""),
  ); // price
  const copies = parseInt(document.querySelector(".amount").value); // amount

  //creating the object with the product info
  let posterObj = {
    image: picture,
    price: price,
    amount: copies,
  };

  for (let i = 0; i < cartArray.length; i++) {
    if (picture === cartArray[i].image) {
      cartArray.splice(i, 1);
    }
  }

  // here we actually add and update and store the array in the right ways
  cartArray.push(posterObj);
  updateWhatsInTheBag();
  localStorage.shopping = JSON.stringify(cartArray);
}
