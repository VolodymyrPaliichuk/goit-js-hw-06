const input = document.querySelector("#validation-input");
console.log(Number(input.getAttribute("data-length")));
const dataLength = Number(input.getAttribute("data-length"));
input.addEventListener("blur", (event) => {
  console.log(event.target.value.length);
  if (event.target.value.length === dataLength) {
    input.classList.remove("invalid");
    input.classList.add("valid");
  } else {
    input.classList.remove("valid");
    input.classList.add("invalid");
  }
});
