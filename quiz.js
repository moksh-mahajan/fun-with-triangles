const quizForm = document.querySelector(".quiz-form");
const submitButton = document.querySelector("#submit-answer-btn");
const outputBox = document.querySelector("#output");

const correctAnswers = {
  Question1: "90°",
  Question2: "right angled",
};

submitButton.addEventListener("click", submitAnswers);

function submitAnswers() {
  let score = 0;
  let index = 0;
  const formResults = new FormData(quizForm);

  for (let key of formResults.keys()) {
    if (correctAnswers[key] === formResults.get(key)) {
      score++;
    }
  }
  output.innerText = "Your score is " + score;
}
