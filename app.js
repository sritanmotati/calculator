//Selectors
const numBtns = document.querySelectorAll(".num");
const operatorBtns = document.querySelectorAll(".operator");
const negBtn = document.querySelector(".neg");
const decBtn = document.querySelector(".dec");
const equalBtn = document.querySelector(".equal");
const delBtn = document.querySelector(".del");
const acBtn = document.querySelector(".ac");

//Event Listeners
numBtns.forEach(function (numBtn) {
  numBtn.addEventListener("click", updateScreen);
});
operatorBtns.forEach(function (operatorBtn) {
  operatorBtn.addEventListener("click", updateScreen);
});
negBtn.addEventListener("click", updateScreen);
decBtn.addEventListener("click", updateScreen);
equalBtn.addEventListener("click", calculate);
delBtn.addEventListener("click", deleteChar);
acBtn.addEventListener("click", clear);

//Functions
let screen = document.getElementById("screen");
let operator;

function updateScreen(e) {
  let targetBtn = e.target;
  let newChar = targetBtn.innerText;
  let text = screen.innerText;
  if (newChar === "(-)") {
    if (screen.innerText.charAt(0) === "-") {
      screen.innerText = screen.innerText.substring(1);
    } else {
      screen.innerText = "-" + screen.innerText;
    }
  } else {
    screen.innerText = screen.innerText + newChar;
  }
  if (targetBtn.classList.contains("operator")) {
    operator = newChar;
  }
}

function calculate(e) {
  let text = screen.innerText;
  let firstNum;
  let secondNum;
  try {
    firstNum = parseFloat(text.substring(0, text.lastIndexOf(operator)));
    secondNum = parseFloat(text.substring(text.lastIndexOf(operator) + 1));
    switch (operator) {
      case "+":
        screen.innerText = (firstNum + secondNum).toString();
        break;
      case "-":
        screen.innerText = (firstNum - secondNum).toString();
        break;
      case "*":
        screen.innerText = (firstNum * secondNum).toString();
        break;
      case "/":
        screen.innerText = (firstNum / secondNum).toString();
        break;
    }
    if (isNaN(screen.innerText)) {
      screen.innerText = "";
      alert("ERROR: Invalid input. Please try re-inputting the calculation.");
    }
  } catch (err) {
    alert("ERROR: Invalid input. Please try re-inputting the calculation.");
  }
  firstNum = secondNum = operator = undefined;
}

function deleteChar(e) {
  screen.innerText = screen.innerText.substring(0, screen.innerText.length - 1);
}

function clear(e) {
  screen.innerText = "";
}
