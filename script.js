const inputs = document.querySelectorAll("input[required]");

for (const input of inputs) {
  if (input.getAttribute("id") === "firstname") {
    setErrorMessage(input, "Enter your first name");
  }
  if (input.getAttribute("id") === "lastname") {
    setErrorMessage(input, "Enter your last name");
  }
  if (input.getAttribute("id") === "age") {
    setErrorMessage(input, "Enter your age (from 18 and up)");
  }
  if (input.getAttribute("id") === "email") {
    setErrorMessage(input, "Enter your email");
  }
  if (input.getAttribute("id") === "password") {
    setPasswordErrorMessage(input, "Enter a password");
  }
  if (input.getAttribute("id") === "confirm-password") {
    confirmPassword(input);
  }
}

function setErrorMessage(input, message) {
  input.addEventListener("input", () => {
    input.setCustomValidity("");
    input.checkValidity();
  });

  input.addEventListener("invalid", () => {
    input.setCustomValidity(message);
  });
}

function setPasswordErrorMessage(input, message) {
  let initialMes = message;
  const badPassword = "The password must have one lowercase letter, one uppercase letter, and one number";

  input.addEventListener("input", () => {
    input.setCustomValidity("");
    input.checkValidity();
  });

  input.addEventListener("invalid", () => {
    if (input.validity.patternMismatch) {
      input.setCustomValidity(badPassword);
    } else if (input.value === "") input.setCustomValidity(initialMes);
  });
}

function confirmPassword(input) {
  input.addEventListener("input", () => {
    var password = document.querySelector('input[id="password"]');
    var passwordValue = password.value;
    if (input.value === passwordValue && password.validity.valid) {
      input.setCustomValidity("");
      input.checkValidity();
    } else
      input.setCustomValidity(
        "This password doesn't match with your current password."
      );
  });
}
