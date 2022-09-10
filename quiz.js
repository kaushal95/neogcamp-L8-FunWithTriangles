const formElement = document.querySelector(".quiz-form");
const btnElement = document.querySelector("button");
const outputElement = document.querySelector(".output");

const answers = [
  "60°",
  "right angled",
  "right angle",
  "one right angle",
  "12, 16, 20",
  "60°",
];

btnElement.addEventListener("click", () => {
  hideOutput();
  let score = 0;
  let iter = 0;
  const formData = new FormData(formElement);
  for (const value of formData.values()) {
    if (value == answers[iter]) {
      score += 1;
    }
    iter += 1;
  }
  showOutput(`Your score is ${score}`);
});
function hideOutput() {
  outputElement.style.display = "none";
}
function showOutput(message) {
  outputElement.style.display = "block";
  outputElement.innerText = message;
}
