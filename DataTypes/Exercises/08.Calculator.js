function calculator(firstNum, operator, secondNum) {
  let result = 0;

  switch (operator) {
    case '+':
      result = firstNum + secondNum;
      break;
    case '-':
      result = firstNum - secondNum;
      break;
    case '*':
      result = firstNum * secondNum;
      break;
    case '/':
      result = firstNum / secondNum;
  }

  console.log(result.toFixed(2));
}

calculator(5, '+', 5);
