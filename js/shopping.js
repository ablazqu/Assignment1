const shopGrid = document.querySelector(".shopping-products");

let shoppingArr = JSON.parse(localStorage.shopping);

for (let i = 0; i < shoppingArr.length; i++) {
  let buyProduct = document.createElement("img");
  buyProduct.src = shoppingArr[i].img;
  buyProduct.style.width = "100%";
  shopGrid.appendChild(buyProduct);
}
