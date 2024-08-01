const displayDiv = document.querySelector(".show-zone")

const one = document.getElementById("1")
const two = document.getElementById("2")
const three = document.getElementById("3")
const four = document.getElementById("4")
const five = document.getElementById("5")
const six = document.getElementById("6")
const seven = document.getElementById("7")
const eight = document.getElementById("8")
const nine = document.getElementById("9")
const zero = document.getElementById("0")
const dot = document.getElementById("dot")

const plus = document.getElementById("plus")
const minus = document.getElementById("minus")
const times = document.getElementById("times")
const divide = document.getElementById("divide")
const clear = document.getElementById("clear")
const equal = document.getElementById("equal")


let currentResult = 0; // 当前的计算结果
let currentInput = ''; // 当前输入的数字
let currentOperation = null; // 当前的运算符
let shouldResetInput = false; // 是否应该重置输入


// 更新显示区域的函数
function updateDisplay() {
  displayDiv.innerText = currentInput || currentResult.toString();
}

// 数字按钮的事件监听器
document.querySelectorAll('.numbers button').forEach(button => {
  button.addEventListener('click', () => {
    if (shouldResetInput) {
      currentInput = '';
      shouldResetInput = false;
    }
    currentInput += button.innerText;
    updateDisplay();
  });
});

// 运算符按钮的事件监听器
document.querySelectorAll('.symbols button').forEach(button => {
  button.addEventListener('click', () => {
    if (button.id === 'clear') {
      // 清除所有输入和结果
      currentResult = 0;
      currentInput = '';
      currentOperation = null;
      shouldResetInput = false;
      updateDisplay(); // 确保更新显示以反映清零
    } else if (button.id === 'equal') {
      if (currentOperation && currentInput) {
        operate();
      }
    } else {
      setOperation(button.innerText);
    }
  });
});

// 设置当前运算符的函数
function setOperation(operator) {
  if (currentOperation !== null && currentInput !== '') {
    operate();
  } else if (currentInput !== '') {
    currentResult = parseFloat(currentInput);
  }
  currentInput = '';
  currentOperation = operator;
  shouldResetInput = true;
}

// 执行计算的函数
function operate() {
  const current = parseFloat(currentInput);
  if (isNaN(current)) return;
  switch (currentOperation) {
    case '+':
      currentResult += current;
      break;
    case '-':
      currentResult -= current;
      break;
    case 'x':
      currentResult *= current;
      break;
    case '/':
      if (current === 0) {
        alert('除数不能为0');
        return;
      }
      currentResult /= current;
      break;
  }
  currentOperation = null;
  currentInput = '';
  shouldResetInput = true;
  updateDisplay(); // 确保在操作后更新显示
}

// 初始化显示区域
updateDisplay();







