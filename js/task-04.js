const buttonDecrement = document.querySelector('[data-action="decrement"]');
const buttonIncrement = document.querySelector('[data-action="increment"]');
const counterValue = document.querySelector("#value");

buttonIncrement.addEventListener("click", () => {
  counterValue.innerHTML++;
});

buttonDecrement.addEventListener("click", () => {
  counterValue.innerHTML--;
});
