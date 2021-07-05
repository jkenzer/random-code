//https://www.codewars.com/kata/52724507b149fa120600031d/train/javascript
let numLookUp = [
  "zero",
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
  "ten",
  "eleven",
  "twelve",
  "thirteen",
  "fourteen",
  "fifteen",
  "sixteen",
  "seventeen",
  "eighteen",
  "nineteen",
];
let tenLookup = [
  "zeros",
  "tens",
  "twenty",
  "thirty",
  "forty",
  "fifty",
  "sixty",
  "seventy",
  "eighty",
  "ninety",
];

function number2words(n) {
  if (n <= 19) return numLookUp[n];
  if (n <= 99) {
    let tensPlace = Math.floor(n / 10);
    let remainder = n - tensPlace * 10;
    if (remainder > 0) {
      return `${tenLookup[tensPlace]}-${number2words(remainder)}`;
    } else {
      return `${tenLookup[tensPlace]}`;
    }
  }
  if (n <= 999) {
    let hundredsPlace = Math.floor(n / 100);
    let remainder = n - hundredsPlace * 100;
    if (remainder > 0) {
      return `${number2words(hundredsPlace)} hundred ${number2words(
        remainder
      )}`;
    } else {
      return `${number2words(hundredsPlace)} hundred`;
    }
  }
  if (n <= 999999) {
    let thousandsPlace = Math.floor(n / 1000);
    let remainder = n - thousandsPlace * 1000;
    if (remainder > 0) {
      return `${number2words(thousandsPlace)} thousand ${number2words(
        remainder
      )}`;
    } else {
      return `${number2words(thousandsPlace)} thousand`;
    }
  }
}

console.log(number2words(0), "zero");
console.log(number2words(1), "one");
console.log(number2words(8), "eight");
console.log(number2words(10), "ten");
console.log(number2words(19), "nineteen");
console.log(number2words(20), "twenty");
console.log(number2words(22), "twenty-two");
console.log(number2words(54), "fifty-four");
console.log(number2words(80), "eighty");
console.log(number2words(98), "ninety-eight");
console.log(number2words(100), "one hundred");
console.log(number2words(301), "three hundred one");
console.log(number2words(793), "seven hundred ninety-three");
console.log(number2words(800), "eight hundred");
console.log(number2words(650), "six hundred fifty");
console.log(number2words(1000), "one thousand");
console.log(number2words(1003), "one thousand three");
