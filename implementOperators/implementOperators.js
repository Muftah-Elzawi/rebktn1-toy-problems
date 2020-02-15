/*
Implement Operators

Write three functions to replace the multiply, divide, and modulo operators. 
The only operators you may only use in your solution are addition and subtraction. 
Your functions will only have to handle integer math.

EXAMPLES:
  multiply(5, 2) // 10
  divide(5, 2) // 2
  modulo(5, 2) // 1
*/

var multiply = function(x, y) {
  // your code here...
  var result = 0;
  for (let index = 0; index < y; index++) {
    result += x;
  }
  return result;
};

var divide = function(x, y) {
  // your code here...
  var result = 0;
  while (0 < x) {
    x = x - y;
    result++;
  }

  return result;
};

var modulo = function(x, y) {
  // your code here...
  var result = 0;
  while (y < x) {
    x = x - y;
    result++;
  }
  return x;
};
