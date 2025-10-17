// Dark/Light Mode Toggle
const toggleButton = document.getElementById("toggleMode");
const body = document.body;

toggleButton.addEventListener("click", () => {
  body.classList.toggle("dark");

  // Change button icon
  if (body.classList.contains("dark")) {
    toggleButton.textContent = "☀️";
  } else {
    toggleButton.textContent = "🌙";
  }
});
