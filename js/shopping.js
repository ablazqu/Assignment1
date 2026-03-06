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

/* making the products to appear in the shopping cart */

const shopGrid = document.querySelector(".shopping-products");

let cartArray = JSON.parse(localStorage.getItem("shopping")) || [];

let finalPrice = 0;

for (let i = 0; i < cartArray.length; i++) {
  /* for the image to appear */
  let buyProduct = document.createElement("img");
  buyProduct.src = cartArray[i].image;
  buyProduct.style.width = "80%";

  /* for the price to appear*/

  let productInfo = document.createElement("p");
  productInfo.innerText = cartArray[i].price + " SEK";

  /* for the amount of copies to appear */
  let copieAmount = document.createElement("input");
  copieAmount.value = cartArray[i].amount;
  copieAmount.style.width = "15%";
  copieAmount.style.height = "15%";

  /* for the calculation between the amount of copies + how much would be that price */
  const amountPrice = document.createElement("p");
  let copiePrice = cartArray[i].price * cartArray[i].amount;
  amountPrice.innerText = copiePrice;

  /* for the final price, after all the prices from the different products are put together */
  finalPrice += copiePrice;

  /* for the remove button, so we can eliminate unwished products */
  const removeButton = document.createElement("button");
  removeButton.innerText = "X";
  removeButton.style.width = "6%";
  removeButton.addEventListener("click", deleteProduct);

  function deleteProduct() {
    cartArray.splice(i, 1);
    localStorage.shopping = JSON.stringify(cartArray);
    location.reload();
  }

  /* make them happen in the page */

  shopGrid.appendChild(removeButton);

  shopGrid.appendChild(buyProduct);
  shopGrid.appendChild(productInfo);
  shopGrid.appendChild(copieAmount);
  shopGrid.appendChild(amountPrice);
}

/* what we need for the total price button */

const totalPrice = document.querySelector(".total-price");
totalPrice.innerText = finalPrice + "SEK";

/* reference for make it possible 
https://chatgpt.com/c/69a83d7f-f540-832a-bb95-817cdb2929d6
*/
