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

/* ljh */

const shopGrid = document.querySelector(".shopping-products");

let cartArray = JSON.parse(localStorage.getItem("shopping")) || [];

let finalPrice = 0;

for (let i = 0; i < cartArray.length; i++) {
  let buyProduct = document.createElement("img");
  buyProduct.src = cartArray[i].image;
  buyProduct.style.width = "15%";

  let productInfo = document.createElement("p");
  productInfo.innerText = cartArray[i].price + " SEK";

  let copieAmount = document.createElement("input");
  copieAmount.value = cartArray[i].amount;
  copieAmount.style.width = "10%";
  copieAmount.style.height = "15%";

  const amountPrice = document.createElement("p");

  let copiePrice = cartArray[i].price * cartArray[i].amount;
  amountPrice.innerText = copiePrice;

  finalPrice += copiePrice;

  shopGrid.appendChild(buyProduct);
  shopGrid.appendChild(productInfo);
  shopGrid.appendChild(copieAmount);
  shopGrid.appendChild(amountPrice);
}

/* what we need for the total price button */
/*const priceGrid = document.querySelector(".final-price");*/

const totalPrice = document.querySelector(".total-price");
  totalPrice.innerText = finalPrice + "SEK";


/*priceGrid.appendChild(totalPrice);*/

/*shopGrid.appendChild(totalPrice)*/
