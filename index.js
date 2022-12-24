"use strict";

// const greetings = prompt("Hello");
// console.log(greetings);
const mainContainer = document.querySelector(".main-container");
const thanksContainer = document.querySelector(".thank-you");
const submitButtton = document.getElementById("submit");
const rateAgain = document.getElementById("rate-again");
const button = document.querySelectorAll(".btn");
const rating = document.getElementById("rating");

submitButtton.addEventListener("click", () => {
  thanksContainer.classList.remove("hidden");
  mainContainer.style.display = "none";
});
rateAgain.addEventListener("click", () => {
  thanksContainer.classList.add("hidden");
  mainContainer.style.display = "block";
});

button.forEach((buttons) => {
  buttons.addEventListener("click", () => {
    rating.innerHTML = buttons.innerHTML;
  });
});

// let x = 0;

// for (let i = 0; i < button.length; i++) {
//   button[i].addEventListener("click", (e) => {
//     x = e.target.textContent;
//     console.log(x);
//   });
// }

// submitButtton.addEventListener("click", (e) => {
//   e.preventDefault();
//   console.log(e);
// });
