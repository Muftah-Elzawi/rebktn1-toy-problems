// Given a roman numeral as input, write a function that converts the roman numeral to a number and outputs it.

// In a roman numeral, each character adds its value to the total. See the helper object DIGIT_VALUES for the correspondence between roman numeral characters and integers.
// VI = 6 (5 + 1 = 6)
// LXX = 70 (50 + 10 + 10 = 70)
// MCC = 1200 (1000 + 100 + 100 = 1200)

// When a smaller numeral appears before a larger one, it becomes a subtractive operation. You can assume only one smaller numeral may appear in front of larger one.
// IV = 4 (5 – 1 = 4)
// XC = 90 (100 – 10 = 90)
// CM = 900 (1000 – 100 = 900)

// You should return “null” on invalid input.

// You've got Helpers!

var DIGIT_VALUES = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000
};

function translateRomanNumeral(romanNumeral) {
  // Write your code here, and
  // return your final answer.
  var array = [];

  for (let index = 0; index < romanNumeral.length; index++) {
    if (romanNumeral[index] === "I") {
      array.push(DIGIT_VALUES.I);
    }
    if (romanNumeral[index] === "V") {
      array.push(DIGIT_VALUES.V);
    }
    if (romanNumeral[index] === "X") {
      array.push(DIGIT_VALUES.X);
    }
    if (romanNumeral[index] === "L") {
      array.push(DIGIT_VALUES.L);
    }
    if (romanNumeral[index] === "C") {
      array.push(DIGIT_VALUES.C);
    }
    if (romanNumeral[index] === "D") {
      array.push(DIGIT_VALUES.D);
    }
    if (romanNumeral[index] === "M") {
      array.push(DIGIT_VALUES.M);
    }
  }

  for (let index = 0; index < array.length; index++) {
    if (array[index] < array[index + 1]) {
      array[index] = array[index] * -1;
    }
  }

  var result = 0;
  for (let index = 0; index < array.length; index++) {
    result += array[index];
  }
  console.log(result);
}
