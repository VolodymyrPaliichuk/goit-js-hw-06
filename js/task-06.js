const input = document.querySelector("#validation-input");

console.log(input.getAttribute("data-length"));
input.addEventListener("blur", (e) => {
  if (
    e.currentTarget.value.length ===
    Number.parseInt(input.getAttribute("data-length"))
  ) {
    input.classList.add("valid");
    input.classList.remove("invalid");
  } else {
    input.classList.add("invalid");
    input.classList.remove("valid");
  }
});
