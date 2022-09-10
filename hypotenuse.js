const btnElement = document.querySelector(".btn");
const inputElements = document.querySelectorAll(".side");
const outputElement = document.querySelector(".output");

btnElement.addEventListener("click", () => {
  hideOutput();
  const side1 = parseFloat(inputElements[0].value);
  const side2 = parseFloat(inputElements[1].value);

  if (side1 && side2) {
    const hypo = Math.sqrt(side1 ** 2 + side2 ** 2);
    showOutput(`Hypotenuse is ${hypo.toFixed(2)}`);
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
