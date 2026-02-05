const registerBtn = document.getElementById("registerBtn");
const registerForm = document.querySelector(".register-container form");
const registerContainer = document.querySelector(".register-container");
const loginContainer = document.querySelector(".login-container");

registerBtn.addEventListener("click", () => {
  // 🔍 trigger built-in validation
  if (!registerForm.checkValidity()) {
    registerForm.reportValidity(); // shows browser error messages
    return;
  }

  // ✅ only runs if inputs are valid
  registerContainer.classList.add("hide");
  loginContainer.classList.add("active");
});
