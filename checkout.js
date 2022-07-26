"use strict";

document.querySelector(
  ".name-checkout"
).innerHTML = `Name: ${localStorage.getItem("name")}`;
document.querySelector(
  ".price-checkout"
).innerHTML = `Price: ${localStorage.getItem("price")}`;
document.querySelector(
  ".quantity-checkout"
).innerHTML = `Quantity: ${localStorage.getItem("quantity")}`;
console.log(localStorage);

console.log(localStorage);
