const loginForm = document.querySelector("form");

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const correctEmailValue = loginForm.elements.email.value;
  const correctPasswordValue = loginForm.elements.password.value;
  const userData = {
    email: correctEmailValue,
    password: correctPasswordValue,
  };
  console.log(userData);

  if (correctEmailValue === "" || correctPasswordValue === "") {
    alert("Усі поля форми повинні бути заповнені");
  }
  loginForm.reset();
});
