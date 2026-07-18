const form = document.querySelector(".early-access__form");
const emailInput = document.querySelector(".early-access__input");
const errorMessage = document.getElementById("error-email");

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

form.addEventListener("submit", handleSubmit);
emailInput.addEventListener("input", clearError);

function handleSubmit(event) {
  event.preventDefault();

  clearError();

  const emailValue = emailInput.value.trim();

  if (!emailValue) {
    showError("This field is required");
    return;
  }

  if (!emailRegex.test(emailValue)) {
    showError("Please enter a valid email address");
    return;
  }

  showSuccess("Your email has been submitted successfully.");
  setTimeout(clearError, 2500);
  form.reset();
}

function showError(message) {
  errorMessage.classList.remove("input-success");
  errorMessage.classList.add("error-message");
  errorMessage.classList.add("input-error");
  errorMessage.classList.remove("sr-only");
  errorMessage.textContent = message;
  emailInput.classList.add("input-error");
}

function showSuccess(message) {
  emailInput.classList.remove("input-error");
  errorMessage.classList.remove("error-message");
  errorMessage.classList.add("input-success");
  errorMessage.classList.remove("sr-only");
  errorMessage.textContent = message;
}

function clearError() {
  errorMessage.textContent = "";
  errorMessage.classList.add("sr-only");
  errorMessage.classList.remove("error-message");
  errorMessage.classList.remove("input-success");
  emailInput.classList.remove("input-error");
}