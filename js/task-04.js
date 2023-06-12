const buttonDecrement = document.querySelector('[data-action="decrement"]');
const buttonIncrement = document.querySelector('[data-action="increment"]');
const valueElem = document.querySelector("#value");

const counterValue = {
  value: 0,
  decrement(value) {
    this.value -= 1;
  },
  increment(value) {
    this.value += 1;
  },
};

buttonDecrement.addEventListener("click", (e) => {
  counterValue.decrement();
  valueElem.textContent = counterValue.value;
});

buttonIncrement.addEventListener("click", (e) => {
  counterValue.increment();
  valueElem.textContent = counterValue.value;
});
