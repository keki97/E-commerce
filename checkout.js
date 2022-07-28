"use strict";
const nameCheckoutPrint = `<div class='name-printed'>${localStorage.getItem(
  "name"
)}</div>`;
const priceCheckoutPrint = `<div class='price-printed'>${localStorage.getItem(
  "price"
)}</div>`;
const quantityCheckoutPrint = `<div class='quantity-printed'>${localStorage.getItem(
  "quantity"
)}</div>`;
const totalPriceCheckoutPrint = `<div class='total-price-printed'>${localStorage.getItem(
  "total-price"
)}</div>`;

// console.log(nameCheckoutPrint);
console.log(localStorage);
document
  .querySelector(".main-checkout")
  .insertAdjacentHTML("beforeend", nameCheckoutPrint);
document
  .querySelector(".main-checkout")
  .insertAdjacentHTML("beforeend", priceCheckoutPrint);
document
  .querySelector(".main-checkout")
  .insertAdjacentHTML("beforeend", quantityCheckoutPrint);
document
  .querySelector(".main-checkout")
  .insertAdjacentHTML("beforeend", totalPriceCheckoutPrint);

document.querySelector(".nav-bar-icon").style.display = "none";
