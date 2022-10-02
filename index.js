const inputs = document.querySelectorAll(".angle-input");
const isTriangleButton = document.querySelector("#is-triangle-btn");
const outputBox = document.querySelector("#output");

isTriangleButton.addEventListener("click", isTriangle);

function sumOfAngles(angle1, angle2, angle3) {
  return angle1 + angle2 + angle3;
}

function isTriangle() {
  const angle1 = Number(inputs[0].value);
  const angle2 = Number(inputs[1].value);
  const angle3 = Number(inputs[2].value);

  if (angle1 && angle2 && angle3) {
    const sum = sumOfAngles(angle1, angle2, angle3);
    if (sum === 180) {
      outputBox.innerText = "Yay! The angles form a triangle!";
    } else {
      outputBox.innerText = "Uh Oh! The angles do not form a triangle!";
    }
  } else {
    outputBox.innerText = "Please enter all the angles!";
  }
}
