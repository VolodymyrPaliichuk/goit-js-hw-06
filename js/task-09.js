function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const colorChangeButton = document.querySelector(".change-color");
const currentColor = document.querySelector(".color");

colorChangeButton.addEventListener("click", () => {
  const color = getRandomHexColor();
  document.body.style.backgroundColor = color;
  currentColor.textContent = color;
  console.log(color);
});
