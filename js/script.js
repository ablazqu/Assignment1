/* decide which nevigation menu to show! */
/* if the screen size is from 900px above then show 1 design, if its less then show the other */

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
