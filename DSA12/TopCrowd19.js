// Write logic for reversing each word in a given string.
// Define following method
// Name of Method : reverse
// Arguments         :   String

// Return type : String

// function reversestr(a) {
//   a = a.split(" ");
//   let output_String = [];
//   for (let i of a) {
//     i = i.split("").reverse();
//     i.splice(0, 1, i[0].toUpperCase());
//     i = i.join("");
//     output_String.push(i);
//   }
//   return output_String.join(" ");
// }
// let res = reversestr("rooman technologies");
// console.log(res);




// Write logic for moving character of a string from left to right and last character to first position.
// Characters of string need to be moved by given no of positions.
// Define following method
// Name of Method : rotate
// Arguments :   String, integer (i. e no_of_positions)
// Return type       : String

// function rotate(a, b) {
//   let output_String = "";
//   if (b <= 0) {
//     return a;
//   } else if (a.length < b) {
//     return a;
//   } else if (a == null || b == null) {
//     return null;
//   } else {
//     let reversefinalstr = [];
//     let orgstr = "";
//     for (let i = a.length - b; i < a.length; i++) {
//       reversefinalstr.push(a[i]);
//     }
//     orgstr = a.slice(0, a.length - b, a.length);
//     output_String = reversefinalstr.join("") + orgstr;
//   }
//   return output_String;
// }
// let res = rotate("talent", 1);
// console.log(res);



// Write logic for printing Nth Term in Quadratic Sequence as follows.
// Quadratic Sequence
// A quadratic sequence is a sequence of numbers in which the second difference between any two consecutive terms is constant.
// Example
// 1,3,6,10,15,21,28,36,45,55, ...
// Sequence starts with 1 and then incremented by 2, 3, 4, 5, ...
// Define the following method
// Name of Method : getNthTerm()
// Arguments         : integer
// Return type : integer

// function getNthTerm(n) {
//   let count = 0;
//   for (let i = 1; i <= n; i++) {
//     count += i;
//   }
//   return count;
// }
// let res = getNthTerm(10);
// console.log(res);




// Write logic for generating quadratic sequence as follows.
// Quadratic Sequence
// A quadratic sequence is a sequence of numbers in which the second difference between any two consecutive terms is constant.
// Example
// 1,3,6,10,15,21,28,36,45,55, ...
// Sequence starts with 1 and then incremented by 2, 3, 4, 5, ...
// Define the following method
// Name of Method : getQuadricSequence()
// Arguments         : integer

// Return type : String

// function sequnce(a) {
//   if (a <= 0) {
//     return null;
//   } else {
//     let count = 0;
//     for (let i = 1; i <= a; i++) {
//       count += i;
//       console.log(count);
//     }
//   }
// }
// let res = sequnce(10);
// console.log(res);


