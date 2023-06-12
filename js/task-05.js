const input = document.querySelector("#name-input");
const userName = document.querySelector("#name-output");

input.addEventListener("input", (e) => {
  if (e.currentTarget.value === "") {
    userName.innerHTML = "Anonymous";
  } else {
    userName.innerHTML = e.currentTarget.value;
  }
});
