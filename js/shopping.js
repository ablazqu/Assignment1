const shopGrid = document.querySelector(".shopping-products");

let cartArray = JSON.parse(localStorage.getItem("shopping")) || [];

for (let i = 0; i < cartArray.length; i++) {
  let buyProduct = document.createElement("img");
  buyProduct.src = cartArray[i].image;
  buyProduct.style.width = "15%";

  let productInfo = document.createElement("p");
  productInfo.innerText = cartArray[i].price;
  
  let copieAmount = document.createElement("input");
  copieAmount.value = cartArray[i].amount;
  copieAmount.style.width = "10%";

 const amountPrice= document.createElement("p");
 let copiePrice=cartArray[i].price*cartArray[i].amount;
  copiePrice=cartArray[i].amountPrice;
  amountPrice.innerText=copiePrice;

  shopGrid.appendChild(buyProduct);
  shopGrid.appendChild(productInfo);
  shopGrid.appendChild(copieAmount);
  shopGrid.appendChild(amountPrice);
}
