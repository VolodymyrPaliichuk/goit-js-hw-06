function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const changeColorButtom = document.querySelector(".change-color");
const color = document.querySelector(".color");

changeColorButtom.addEventListener("click", (e) => {
  document.body.style.backgroundColor = getRandomHexColor();
  color.textContent = `- ${getRandomHexColor()}`;
});
