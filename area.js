const input = document.querySelectorAll(".side-input");
const calculateAreaBtn = document.querySelector("#calculate-area");
const output = document.querySelector("#output");

calculateAreaBtn.addEventListener("click", checkArea);

function checkArea() {
    if (Number(input[0].value) <=0||Number(input[1].value) <= 0) {
      output.innerText = "The value should be greater than zero and it can't be empty";
    }else{
      const areaOfTriangle =
        (Number(input[0].value) * Number(input[1].value)) / 2;
      output.innerText = "Area of triangle is: " + areaOfTriangle;
    }
  }
  