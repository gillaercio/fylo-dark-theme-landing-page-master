const form = document.querySelector(".early-access__form");
const emailInput = document.querySelector(".early-access__input");
const errorMessage = document.getElementById("error-email");

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

form.addEventListener("submit", sendButton);

function sendButton(event) {
  event.preventDefault();

  const emailValue = emailInput.value.trim();
  let error = "";

  if (!emailValue) {
    error = "This field is required";
  }
  else if (!emailRegex.test(emailValue)) {
    error = "Please enter a valid email address";
  }

  if (error) {
    showError(error);
    return;
  }
}

function showError(message) {
  errorMessage.textContent = message;
  errorMessage.classList.remove("sr-only");
  errorMessage.classList.add("input-error");

  emailInput.classList.add("input-error");
}