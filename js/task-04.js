const buttonDecrement = document.querySelector('[data-action="decrement"]');
const buttonIncrement = document.querySelector('[data-action="increment"]');
const valueElem = document.querySelector("#value");

const counterValue = {
  value: 0,
  decrament(value) {
    this.value -= 1;
  },
  incrament(value) {
    this.value += 1;
  },
};

buttonDecrement.addEventListener("click", () => {
  counterValue.decrament();
  valueElem.textContent = counterValue.value;
});

buttonIncrement.addEventListener("click", () => {
  counterValue.incrament();
  valueElem.textContent = counterValue.value;
});
