/* ---- DISPLAY OF HAMBURGER MENU ---- */
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
/* REFENCE:  chat gpt & youtube videos 
 - https://chatgpt.com/c/69a18c6c-ba00-832b-bfcb-efa62e87b1c5
 - https://www.youtube.com/watch?v=pBv7igaxfQE
 - https://www.youtube.com/watch?v=aNDqzlAKmZc */

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

/* --- MAKING THE PRODUCTS TO APPEAR IN THE SHOPPING CART --- */

const shopGrid = document.querySelector(".shopping-products"); // we create the grid where the products would be appearing

let cartArray = JSON.parse(localStorage.getItem("shopping")) || []; //we get the item from the array according with the array created in script

let finalPrice = 0; //if there is no products inside te cart then the price would be 0

// Show a message of "empty cart" when there's no products 
let emptyCart = document.createElement("h4");
emptyCart.textContent = "THIS IS EMPTY!";
if (cartArray.length !== 0) {
  emptyCart.style.display = "none";}
shopGrid.appendChild(emptyCart);

//if we click the button for "check out" the cart would be empty (in a real ecommerce people would get to the page for paying)
 const soldOut= document.querySelector("#check-out");
 soldOut.addEventListener("click", checkOut);
 function checkOut(){
    cartArray.length=0;    
    localStorage.shopping = JSON.stringify(cartArray);
    location.reload();
 }


//loop for when we add products to the cart 
for (let i = 0; i < cartArray.length; i++) {
  /* for the image to appear */
  let buyProduct = document.createElement("img");
  buyProduct.src = cartArray[i].image;
  buyProduct.style.width = "100%";

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
  removeButton.style.color = "#b10000";
  removeButton.style.background = "none";
  removeButton.style.border = "none";
  removeButton.style.fontWeight="900";
  removeButton.addEventListener("click", deleteProduct);

  /* this would make it possible to delete items that we don't want anymore inside the cart */
  function deleteProduct() {
    cartArray.splice(i, 1);
    localStorage.shopping = JSON.stringify(cartArray);
    location.reload(); /* this make it possible to update the page instantly */
  }

  /* make the button, products and info appear in the page */
  shopGrid.appendChild(removeButton);
  shopGrid.appendChild(buyProduct);
  shopGrid.appendChild(productInfo);
  shopGrid.appendChild(copieAmount);
  shopGrid.appendChild(amountPrice);
  updateWhatsInTheBag();
}

/* this would show the final price at the bottom of the list */
const totalPrice = document.querySelector(".total-price");
totalPrice.innerText = finalPrice + "SEK";

/* reference for make it possible 
https://chatgpt.com/c/69a83d7f-f540-832a-bb95-817cdb2929d6
*/
