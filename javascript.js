const form = document.getElementById("emailForm");
const emailInput = document.getElementById("emailInput");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const email = emailInput.value;

  if (email !== "") {
    alert("Welcome to Netflix");
  } else {
    alert("Please enter your email address.");
  }
});
