const btnElement = document.querySelector(".btn");
const inputElements = document.querySelector(".input");
const outputElement = document.querySelector(".output");
const baseElement = document.querySelector("#base");

const heightElement = document.querySelector("#height");

btnElement.addEventListener("click", () => {
  hideOutput();
  const base = parseFloat(baseElement.value);
  const height = parseFloat(heightElement.value);

  if (base && height) {
    const area = (1 / 2) * (base * height);
    showOutput(`Area of the triangle is ${area}`);
  } else {
    showOutput("Base and height value should be greater than zero.");
  }
});

function hideOutput() {
  outputElement.style.display = "none";
}
function showOutput(message) {
  outputElement.style.display = "block";
  outputElement.innerText = message;
}
