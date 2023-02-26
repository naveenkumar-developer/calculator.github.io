function appendToResult(value) {
  document.getElementById("result").value += value;
}

function clearResult() {
  document.getElementById("result").value = "";
}

function calculateResult() {
  const result = document.getElementById("result").value;
  const operatorIndex = result.search(/[\+\-\*\/\%]/);
  if (operatorIndex === -1) {
    alert("Invalid expression");
    return;
  }
  const operator = result.charAt(operatorIndex);
  const operands = result.split(operator);
  if (operands.length !== 2) {
    alert("Invalid expression");
    return;
  }
  const operand1 = parseFloat(operands[0]);
  const operand2 = parseFloat(operands[1]);
  if (isNaN(operand1) || isNaN(operand2)) {
    alert("Invalid expression");
    return;
  }
  let resultValue;
  switch (operator) {
    case "+":
      resultValue = operand1 + operand2;
      break;
    case "-":
      resultValue = operand1 - operand2;
      break;
    case "*":
      resultValue = operand1 * operand2;
      break;
    case "/":
      resultValue = operand1 / operand2;
      break;
    case "%":
      resultValue = operand1 % operand2;
      break;
    default:
      alert("Invalid expression");
      return;
  }
  document.getElementById("result").value = resultValue;
}
