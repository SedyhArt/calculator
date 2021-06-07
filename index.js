const resultBlock = document.getElementById("result");
const resetBtn = document.getElementById("reset");

const btn1 = document.getElementById("1");
const btn2 = document.getElementById("2");
const btn3 = document.getElementById("3");
const btn4 = document.getElementById("4");
const btn5 = document.getElementById("5");
const btn6 = document.getElementById("6");
const btn7 = document.getElementById("7");
const btn8 = document.getElementById("8");
const btn9 = document.getElementById("9");
const btn0 = document.getElementById("0");

const btnDiv = document.getElementById("div");
const btnSub = document.getElementById("sub");
const btnPlus = document.getElementById("plus");
const btnMult = document.getElementById("multipl");
const btnResult = document.getElementById("equally");
const btnDot = document.getElementById("dot");

let firstParametr = null;
let secondParametr = null;
let currentAction = null;
let result = null;

doesItHasDot = (num) => num.toString().includes(".");

const numberClick = function () {
  if (result && firstParametr && !secondParametr && !currentAction) {
    resetBtn.click();
  }
  const num = this.getAttribute("data-value");
  if (firstParametr === null) {
    firstParametr = num;
    resultBlock.textContent = firstParametr;
  } else if (!currentAction) {
    if (num == 0 && firstParametr == 0 && !doesItHasDot(firstParametr)) {
      firstParametr = null;
    } else {
      firstParametr += num;
      resultBlock.textContent = firstParametr;
    }
  } else if (
    secondParametr === null &&
    currentAction &&
    firstParametr !== null
  ) {
    secondParametr = num;
    resultBlock.textContent = secondParametr;
  } else if (
    secondParametr !== null &&
    currentAction &&
    firstParametr !== null
  ) {
    if (num == 0 && secondParametr == 0 && !doesItHasDot(secondParametr)) {
      secoondParametr = null;
    } else {
      secondParametr += num;
      resultBlock.textContent = secondParametr;
    }
  } else if (currentAction && result) {
    secondParametr = num;
    resultBlock.textContent = secondParametr;
  }
};

const signClick = function () {
  const sign = this.getAttribute("data-value");

  if (result !== null) {
    btnResult.click();
    currentAction = null;
    secondParametr = null;
    result = null;
  } else if (secondParametr) {
    btnResult.click();
    secondParametr = null;
  } else {
  }
  secondParametr = null;
  currentAction = sign;
};

resetBtn.addEventListener("click", () => {
  firstParametr = null;
  secondParametr = null;
  currentAction = null;
  result = null;
  resultBlock.textContent = "0";
});

btnDot.addEventListener("click", function () {
  if (firstParametr === null) {
    firstParametr = "0.";
    resultBlock.textContent = firstParametr;
  }
  if (!currentAction && !doesItHasDot(firstParametr)) {
    firstParametr += ".";
    resultBlock.textContent = firstParametr;
  }
  if (secondParametr === null && currentAction) {
    secondParametr = "0.";
    resultBlock.textContent = secondParametr;
  }
  if (currentAction && result) {
    firstParametr = "0.";
    resultBlock.textContent = firstParametr;
  }
  if (secondParametr !== null && !doesItHasDot(secondParametr)) {
    secondParametr += ".";
    resultBlock.textContent = secondParametr;
  }
});

btnResult.addEventListener("click", function () {
  if (secondParametr !== null) {
    if (currentAction === "+") {
      result = (Number(firstParametr) + Number(secondParametr)).toFixed(8);
      resultBlock.textContent = Number(result);
      firstParametr = result;
    }

    if (currentAction === "-") {
      result = (Number(firstParametr) - Number(secondParametr)).toFixed(8);
      resultBlock.textContent = Number(result);
      firstParametr = result;
    }

    if (currentAction === "*") {
      result = (Number(firstParametr) * Number(secondParametr)).toFixed(8);
      resultBlock.textContent = Number(result);
      firstParametr = result;
    }

    if (currentAction === "/") {
      if (secondParametr === "0") {
        resultBlock.textContent = "На 0 делить нельзя";
      } else {
        result = (Number(firstParametr) / Number(secondParametr)).toFixed(8);
        resultBlock.textContent = Number(result);
        firstParametr = result;
      }
    }
    currentAction = null;
    secondParametr = null;
  }

  console.log("1", firstParametr);
  console.log("2", secondParametr);
  console.log("res", result);
  console.log("action", currentAction);
});

btn1.addEventListener("click", numberClick);
btn2.addEventListener("click", numberClick);
btn3.addEventListener("click", numberClick);
btn4.addEventListener("click", numberClick);
btn5.addEventListener("click", numberClick);
btn6.addEventListener("click", numberClick);
btn7.addEventListener("click", numberClick);
btn8.addEventListener("click", numberClick);
btn9.addEventListener("click", numberClick);
btn0.addEventListener("click", numberClick);

btnPlus.addEventListener("click", signClick);
btnDiv.addEventListener("click", signClick);
btnSub.addEventListener("click", signClick);
btnMult.addEventListener("click", signClick);

document.addEventListener("keydown", (e) => {
  if (e.key == 1) btn1.click();
  if (e.key == 2) btn2.click();
  if (e.key == 3) btn3.click();
  if (e.key == 4) btn4.click();
  if (e.key == 5) btn5.click();
  if (e.key == 6) btn6.click();
  if (e.key == 7) btn7.click();
  if (e.key == 8) btn8.click();
  if (e.key == 9) btn9.click();
  if (e.key == 0) btn0.click();
  if (e.key == "+") btnPlus.click();
  if (e.key == "/") btnDiv.click();
  if (e.key == "*") btnMult.click();
  if (e.key == "-") btnSub.click();
  if (e.key == ".") btnDot.click();
  if (e.key == "=") btnResult.click();
  if (e.key == "Backspace") resetBtn.click();
});
