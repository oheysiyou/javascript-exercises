const add = function(num1, num2) {
  answer = num1 + num2;
  return answer;
};

const subtract = function(num1, num2) {
	answer = num1 - num2;
  return answer;
};

const sum = function(list) {
  answer = 0;
	for (i = 0; i < list.length; i++) {
    answer = answer + list[i];
  }
  return answer;
};

const multiply = function(list) {
  answer = 1;
	for (i = 0; i < list.length; i++) {
    answer = answer * list[i];
  }
  return answer;
};

const power = function(num, power) {
	answer = num ** power;
  return answer;
};

const factorial = function(num) {
  answer = 1;
	if (num == 0) {
    return 1;
  } else {
    for (i = num; i > 0; i--) {
      answer = answer * i;
    }
  }
  return answer;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
