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

let cartArray;

// making it exist in the local storage
if (localStorage.shopping) {
  cartArray = JSON.parse(localStorage.shopping);
} else {
  cartArray = [];
}


function updateWhatsInTheBag() {
  const whatsInTheBag = document.querySelector(".bag-has-products");
  whatsInTheBag.textContent = cartArray.length;
  if (cartArray.length > 0) {
    whatsInTheBag.style.display = "flex";
  } else {
    whatsInTheBag.style.display = "none";
  }
} 
updateWhatsInTheBag();

function updateWhatsInTheBagMobile() {
  const whatsInTheBag = document.querySelector(".bag-with-products");
  whatsInTheBag.textContent = cartArray.length;
  if (cartArray.length > 0) {
    whatsInTheBag.style.display = "flex";
  } else {
    whatsInTheBag.style.display = "none";
  }
} 
updateWhatsInTheBagMobile();

