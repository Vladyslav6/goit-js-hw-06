const registerForm = document.querySelector(".login-form");

registerForm.addEventListener("submit", handleSubmit);

function handleSubmit(evt) {
  evt.preventDefault();
  console.dir(evt.currentTarget);
  const registerForm = evt.target;
  const email = registerForm.elements.email.value;
  const password = registerForm.elements.password.value;

  if (email === "" || password === "") {
    return console.log("alert! Please input your email and password");
  }
  const EmeilandPass = {
    Emeil: email,
    Password: password,
  };
  console.log(EmeilandPass);
  console.log(`email: ${email}, Password: ${password}`);
  registerForm.reset();
}
