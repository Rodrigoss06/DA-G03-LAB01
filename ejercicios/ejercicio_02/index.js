const selectRegisterForm = document.getElementById("selectRegisterForm");
const selectLoginForm = document.getElementById("selectLoginForm");

const registerForm = document.getElementById("registerForm");
const loginForm = document.getElementById("loginForm");

selectRegisterForm.addEventListener("click", () => {
  if (registerForm.classList.contains("hidden")) {
    loginForm.classList.add("hidden");
    loginForm.classList.remove("login-form");
    registerForm.classList.remove("hidden");
    registerForm.classList.add("register-form");
  }
});

selectLoginForm.addEventListener("click", () => {
  if (loginForm.classList.contains("hidden")) {
    registerForm.classList.add("hidden");
    registerForm.classList.remove("register-form");
    loginForm.classList.remove("hidden");
    loginForm.classList.add("login-form");
  }
});

registerForm.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(22222222222222222)
  const userName = document.getElementById("userName");
  const email = document.getElementById("email");
  const password = document.getElementById("password");

  const userNameError = document.getElementById("userNameError");
  const emailError = document.getElementById("emailError");
  const passwordError = document.getElementById("passwordError");

  // Reset messages
  userNameError.textContent = "";
  emailError.textContent = "";
  passwordError.textContent = "";

  let isValid = true;

  // Validate userName
  if (userName.validity.valueMissing) {
    userNameError.textContent = "El nombre de usuario es obligatorio.";
    isValid = false;
  } else if (userName.validity.patternMismatch) {
    userNameError.textContent = "El nombre de usuario solo debe contener letras y espacios.";
    isValid = false;
  } else if (userName.validity.tooShort || userName.validity.tooLong) {
    userNameError.textContent = "El nombre de usuario debe tener entre 6 y 50 caracteres.";
    isValid = false;
  }

  // Validate email
  if (email.validity.valueMissing) {
    emailError.textContent = "El correo electrónico es obligatorio.";
    isValid = false;
  } else if (email.validity.typeMismatch) {
    emailError.textContent = "Por favor, introduce un correo electrónico válido.";
    isValid = false;
  }

  // Validate password
  if (password.validity.valueMissing) {
    passwordError.textContent = "La contraseña es obligatoria.";
    isValid = false;
  } else if (password.validity.patternMismatch) {
    passwordError.textContent = "La contraseña debe tener al menos 8 caracteres, incluyendo una mayúscula, una minúscula y un número.";
    isValid = false;
  }

  if (isValid) {
    form.submit();
  }
});