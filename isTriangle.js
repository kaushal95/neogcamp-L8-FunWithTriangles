const inputElements = document.querySelectorAll(".angle-input");
const btnElement = document.querySelector(".btn");
const outputElement = document.querySelector(".output");

function isTriangle(angle1, angle2, angle3) {
  if (angle1 + angle2 + angle3 === 180) {
    return true;
  }
  return false;
}

btnElement.addEventListener("click", () => {
  const angle1 = Number(inputElements[0].value);
  const angle2 = Number(inputElements[1].value);
  const angle3 = Number(inputElements[2].value);
  hideOutput();
  if (angle1 && angle2 && angle3) {
    isTriangle(angle1, angle2, angle3)
      ? showOutput(`Its a Triangle 🔺✅`)
      : showOutput(`It's not a Triangle ❌`);
  } else {
    showOutput(`Please enter valid values for angles 🙄`);
  }
});
function hideOutput() {
  outputElement.style.display = "none";
}
function showOutput(message) {
  outputElement.style.display = "block";
  outputElement.innerText = message;
}
