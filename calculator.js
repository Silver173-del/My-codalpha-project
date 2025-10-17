const display = document.getElementById("display");

function appendChar(char) {
  display.value += char;
}

function clearDisplay() {
  display.value = "";
}

function deleteChar() {
  display.value = display.value.slice(0, -1);
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch {
    display.value = "Error";
  }
}

// Bonus: Keyboard Support
document.addEventListener("keydown", (event) => {
  if (event.key.match(/[0-9+\-*/%.]/)) {
    appendChar(event.key);
  } else if (event.key === "Enter") {
    calculate();
  } else if (event.key === "Backspace") {
    deleteChar();
  } else if (event.key === "Escape") {
    clearDisplay();
  }
});

