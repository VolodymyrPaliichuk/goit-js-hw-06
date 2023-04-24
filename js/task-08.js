const loginForm = document.querySelector("form");

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const correctEmailValue = loginForm.elements.email.value;
  const correctPasswordValue = loginForm.elements.password.value;
  const userData = {
    email: correctEmailValue,
    password: correctPasswordValue,
  };
  if (correctEmailValue === "" || correctPasswordValue === "") {
    return alert("Усі поля форми повинні бути заповнені");
  }
  console.log(userData);
  loginForm.reset();
});
