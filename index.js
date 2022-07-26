// MODAL

const mainImg = document.querySelector(".main-img");
const modalImg = document.querySelector(".modal-img");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const close = document.querySelector(".close");
let quantity = 0;

// IMAGES TOGGLE CLASSES (POSSIBLY COULD BE BETTER, CLEANER)
document.querySelector(".sneaker-two").addEventListener("click", function () {
  document.querySelector(".main-sneaker-two").classList.remove("hidden");
  document.querySelector(".main-sneaker-one").classList.add("hidden");
  document.querySelector(".main-sneaker-three").classList.add("hidden");
  document.querySelector(".main-sneaker-four").classList.add("hidden");
  document.querySelector(".sneaker-one").classList.remove("active");
  document.querySelector(".sneaker-three").classList.remove("active");
  document.querySelector(".sneaker-four").classList.remove("active");
  document.querySelector(".sneaker-two").classList.add("active");
});

document.querySelector(".sneaker-three").addEventListener("click", function () {
  document.querySelector(".main-sneaker-three").classList.remove("hidden");
  document.querySelector(".main-sneaker-one").classList.add("hidden");
  document.querySelector(".main-sneaker-two").classList.add("hidden");
  document.querySelector(".main-sneaker-four").classList.add("hidden");
  document.querySelector(".sneaker-one").classList.remove("active");
  document.querySelector(".sneaker-two").classList.remove("active");
  document.querySelector(".sneaker-four").classList.remove("active");
  document.querySelector(".sneaker-three").classList.add("active");
});

document.querySelector(".sneaker-four").addEventListener("click", function () {
  document.querySelector(".main-sneaker-four").classList.remove("hidden");
  document.querySelector(".main-sneaker-one").classList.add("hidden");
  document.querySelector(".main-sneaker-two").classList.add("hidden");
  document.querySelector(".main-sneaker-three").classList.add("hidden");
  document.querySelector(".sneaker-one").classList.remove("active");
  document.querySelector(".sneaker-two").classList.remove("active");
  document.querySelector(".sneaker-three").classList.remove("active");
  document.querySelector(".sneaker-four").classList.add("active");
});

document.querySelector(".sneaker-one").addEventListener("click", function () {
  document.querySelector(".main-sneaker-one").classList.remove("hidden");
  document.querySelector(".main-sneaker-three").classList.add("hidden");
  document.querySelector(".main-sneaker-two").classList.add("hidden");
  document.querySelector(".main-sneaker-four").classList.add("hidden");
  document.querySelector(".sneaker-three").classList.remove("active");
  document.querySelector(".sneaker-two").classList.remove("active");
  document.querySelector(".sneaker-four").classList.remove("active");
  document.querySelector(".sneaker-one").classList.add("active");
});

mainImg.addEventListener("click", function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
});

close.addEventListener("click", function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
});

overlay.addEventListener("click", function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
});

// QUANTITY OF THE SHOES

document.querySelector(".up").addEventListener("click", function () {
  quantity++;
  document.querySelector(".quantity").value = quantity;
});

document.querySelector(".down").addEventListener("click", function () {
  quantity--;
  if (quantity >= 1) {
    document.querySelector(".quantity").value = quantity;
  } else {
    quantity = 0;
    document.querySelector(".quantity").value = quantity;
  }
});

// MODAL SLIDER
let i = 0;
const modalImages = [
  "sneaker-1.jpg",
  "sneaker-2.jpg",
  "sneaker-3.jpg",
  "sneaker-4.jpg",
];

const slideImagesRight = function () {
  document.slider.src = modalImages[i];
  if (i < modalImages.length - 1) {
    i++;
    modalImages[i];
  } else {
    i = 0;
  }
};

document.querySelector(".btn-right").addEventListener("click", function () {
  slideImagesRight();
});

const slideImagesLeft = function () {
  document.slider.src = modalImages[i];
  if (i > 0) {
    i--;
    modalImages[i];
  } else {
    i = modalImages.length - 1;
  }
};

document.querySelector(".btn-left").addEventListener("click", function () {
  slideImagesLeft();
});

// Local storage

const addToCartBtn = document.querySelector(".cta-div");

addToCartBtn.addEventListener("click", function () {
  const nameCheckout = document.querySelector(".secondary-heading").textContent;
  const priceCheckout = document.querySelector(".price").textContent;
  const quantityCheckout = document.querySelector(".quantity").value;

  localStorage.setItem("name", "Fall Limited Edition Sneakers");
  localStorage.setItem("price", priceCheckout);
  localStorage.setItem("quantity", quantityCheckout);

  localStorage.getItem("name");
  localStorage.getItem("price");
  localStorage.getItem("quantaty");
  console.log(localStorage);
});
