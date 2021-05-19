// My first failed attempt
// function cleanString(s) {
//   let sArray = s.split("");
//   for (let i = sArray.length - 1; i >= 0; i--) {
//     console.log(i);
//     if (sArray[i] == "#") {
//       console.log(i);
//       console.log(sArray.splice(i, 1));
//       let j = i-1;
//       while (sArray[j] == "#") {
//         j--;
//       }
//       if (sArray[j] != "#") {
//         sArray.splice(j, 1);
//         i--;
//       } else if (i <= 0) {
//         console.log('here');
//         sArray.splice(0, 1);
//       }
//     }
//   }
//   return sArray.join("");
// }

// Mine
function cleanString(s) {
  let reg = /[^#]#/g;
  while (reg.test(s)) {
    s = s.replace(reg, "");
  }
  return s.replace(/^#*/, "");
}

// top clever
// function cleanString(s) {
//   const result = [];
//   for (const c of s) {
//     if (c === "#") {
//       result.pop();
//     } else {
//       result.push(c);
//     }
//   }
//   return result.join("");
// }

// console.log(cleanString("abc#d##c"), "ac");
// console.log(cleanString('abc####d##c#'), "" )
console.log(cleanString("###abc"), "abc");
//https://www.codewars.com/kata/5727bb0fe81185ae62000ae3/train/javascript
