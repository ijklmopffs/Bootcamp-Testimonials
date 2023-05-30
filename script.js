const elements = document.querySelectorAll(".card");
const prev = document.querySelectorAll(".prev");
const next = document.querySelectorAll(".next");
let currentIndex = 0;

prev.forEach((button) => {
  button.addEventListener("click", () => {
    elements[currentIndex].classList.remove("display");
    currentIndex = (currentIndex - 1 + elements.length) % elements.length;
    elements[currentIndex].classList.add("display");
  });
});

next.forEach((button) => {
  button.addEventListener("click", () => {
    elements[currentIndex].classList.remove("display");
    currentIndex = (currentIndex + 1) % elements.length;
    elements[currentIndex].classList.add("display");
  });
});
