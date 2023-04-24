const input = document.querySelector("#validation-input");
console.log(Number(input.getAttribute("data-length")));
const dataLength = Number(input.getAttribute("data-length"));
input.addEventListener("blur", (event) => {
  console.log(event.target.value.length);
  if (event.target.value.length === dataLength) {
    if (input.classList.contains("invalid")) {
      input.classList.remove("invalid");
    }
    input.classList.add("valid");
  } else {
    if (input.classList.contains("valid")) {
      input.classList.remove("valid");
    }
    input.classList.add("invalid");
  }
});
