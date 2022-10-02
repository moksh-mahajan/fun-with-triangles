const sides = document.querySelectorAll(".side-input");
const hypotenuseButton = document.querySelector("#hypotenuse-btn");
const outputBox = document.querySelector("#output");

hypotenuseButton.addEventListener("click", calculateHypotenuse);

function calculateHypotenuse() {
  const sideA = Number(sides[0].value);
  const sideB = Number(sides[1].value);
  const sumOfSquares = sideA * sideA + sideB * sideB;
  const lengthOfHypotenuse = Math.sqrt(sumOfSquares);

  outputBox.innerText = `The length of hypotenuse is: ${lengthOfHypotenuse.toFixed(
    2
  )}`;
}
