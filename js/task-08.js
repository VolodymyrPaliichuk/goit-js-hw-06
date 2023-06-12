const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const currentEmailValue = loginForm.elements.email.value;
  const currentPasswordValue = loginForm.elements.password.value;
  const userData = {
    email: currentEmailValue,
    password: currentPasswordValue,
  };
  if (currentEmailValue === "" || currentPasswordValue === "") {
    return alert("Усі поля повинні бути заповнені");
  }
  console.log(userData);
  loginForm.reset();
});
