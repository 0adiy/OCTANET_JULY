// Preventing default action and reseting form

const form = document.getElementById("form");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Form submitted!");
  form.reset();
});
