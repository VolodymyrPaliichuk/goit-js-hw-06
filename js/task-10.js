function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const numberOfBoxes = document.querySelector("input");
const buttonCreate = document.querySelector("button[data-create]");
const divBox = document.querySelector("#boxes");

numberOfBoxes.addEventListener("change", onChangeValue);

let amount = 0;

function onChangeValue(event) {
  amount = event.target.value;
}

function createBoxes(amount) {
  const elements = [];
  for (let i = 0; i < amount; i += 1) {
    const boxes = document.createElement("div");
    boxes.style.width = "30px";
    boxes.style.height = "30px";
    boxes.style.backgroundColor = getRandomHexColor();
    elements.push(boxes);
  }
  divBox.append(...elements);
}

buttonCreate.addEventListener("click", createBoxes);
