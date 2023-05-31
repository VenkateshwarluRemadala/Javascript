// Define the method which accepts the string as argument and return the string indication the Morse Code.
// Explanation
// where the Morse code of the characters are as below:
// a = .-   b = -...  c = -.-.  d = -..   e = .   = ..-.   g = --.  h = ....  i = ..  j = .---
// k = -.-  l = .-..  m = --   n = -.  o = ---  p = .--.  q = --.-  r = .-.  s = ...  t = -  u = ..-
// v = ...-  w = .--  x = -..-  y = -.--  z = --..
// Convert the given text into Morse Code
// Input: "abc"
// Output: .--...-.-.
// Input: "ehis"
// Output: ..........
// Write the method with the following specifications
// Name of method : getMorseCode()// accepts the string, return the Morse code in the form of string
// Arguments: One argument of String value.
// Return Type: A string value
// Specifications: The value returned by the method getMorseCode() is determined by the following rules
// If the string is null, return "Null String"
// If the string length is 0, return "Empty String"
// If the string contains any other letter excluding alphabets, return "Invalid Letters"
// In other case return, the Morse code of the given text.
// Examples
// Input: abcd
// Output: .--...-.-.-..

// function getMorseCode(a) {
//   let Morse_code = "";
//   let apphastr = "abcdefghijklmnopqrstuvwxyz";
//   let newobj = {
//     a: ".-",
//     b: "-...",
//     c: "-.-.",
//     d: "-..",
//     e: ".",
//     f: "..-.",
//     g: "--.",
//     h: "....",
//     i: "..",
//     j: ".---",

//     k: "-.-",
//     l: ".-..",
//     m: "--",
//     n: "-.",
//     o: "---",
//     p: ".--.",
//     q: "--.-",
//     r: ".-.",
//     s: "...",
//     t: "-",
//     u: "..-",

//     v: "...-",
//     w: ".--",
//     x: "-..-",
//     y: "-.--",
//     z: "--..",
//   };
//   if (a == null) {
//     return "Null String";
//   } else if (a.length == 0) {
//     return "Empty String";
//   } else if (!apphastr.includes(a[0])) {
//     for (i of a) {
//       if (!apphastr.includes(i)) {
//         return "Invalid Letters";
//       }
//     }
//   } else {
//     for (let i of a) {
//       for (let j in newobj) {
//         if (i == j) {
//           Morse_code = Morse_code + newobj[j];
//         }
//       }
//     }
//   }
//   return Morse_code;
// }
// let result = getMorseCode("abe");
// console.log(result);




// Define a method which accepts an string (Time in HH:MM:SS format) indicating the 24 hrs format, return the time in 12 hrs format.
// Write the method with the following specifications
// Name of method : convertTime12Hrs()// Accepts a string indicating the time in 24hrs format, return the time in 12 hrs format.
// Arguments: One argument of string value.
// Return Type: A string value
// Specifications: The value returned by the method convertTime12Hrs() is determined by the following rules
// If given time does not contains ':' as separator for HH, MM and SS, return "Invalid Time"
// in other case return the time converted into 12 hrs format.
// Example
// Input: "14:30:25"
// Output: "02:30:25 PM"

// function convertTime12Hrs(string) {
//   if (!a.includes(":")) {
//     return "Invalid Time";
//   } else {
//     let b = a.split(":");

//     if (b[0] < 12) {
//       return a + "AM";
//     } else {
//       let d = b[0] - 12;

//       b[0] = d;

//       a = b.join(":");

//       return a + "PM";
//     }
//   }
// }
// console.log(convertTime12Hrs("23:59:62"));





// A string is considered a positive string, if on moving from left to right each character in the String comes after the previous characters in the Alphabetical order.
// For Example
// ANT is a positive String (Since T comes after N and N comes after A)
// APPLE is not positive since L comes before P in the alphabetical order.
// Note: The input string should not be null.
// Define the below methods with the following specifications
// Name of method isPositiveString()// accepts an string, return true if the given string is positive strig, other case return false
// Arguments: One argument of string value.
// Return Type: an boolean type
// Example
// Input: "abcd" or "ABCD" or "aBcD" or "xYz"
// Output: true

// function isPositiveString(a) {
//   let finalarr = [];

//   let apphastr = "abcdefghijklmnopqrstuvwxyz";

//   let alphArr = apphastr.split("");

//   let newstr = a.toLowerCase();

//   let specialArr = ["@", "#", "!", "#$", "%", "^", "&", "*"];

//   let numberstr = "0123456789";

//   let numArr = numberstr.split("");

//   debugger;

//   for (i of newstr) {
//     if (specialArr.includes(i) || numArr.includes(i)) {
//       return false;
//     } else {
//       for (j of alphArr) {
//         if (i == j) {
//           finalarr.push(alphArr.indexOf(j));
//         }
//       }
//     }
//   }

//   let checkValue = true;

//   for (let k = 0; k < finalarr.length; k++) {
//     if (finalarr[k] > finalarr[k + 1]) {
//       checkValue = false;
//     }
//   }

//   return checkValue;
// }

// let res = isPositiveString("BCDGA");

// console.log(res);




// Define the method, which accepts an string indicating the emailid, check the email ID is valid or not.
// Define the below method with the following specifications
// Name of method isValidMailID()//accept the string indicating the emailID, check the ID is valid or not.
// Arguments: One argument of string value.
// Return Type: an string value
// Specifications: The value returned by the method isValidMailID() is determined by the following rules
// If the email id does not start with lowercase letter, return -1
// If the email id does not contains symbol @, return -2
// If the email id contains symbol @ more than once, return -3
// If the email id does not ends with ".com" or ".co.in" in lower case, return -4
// If the email id contains other than lower case letters, numbers, underscore(_) or dot (.), return -5
// If the email id entered is valid, return "Valid"

// function isvalid(email) {
//   let dotcoin =
//     email[email.length - 6] +
//     email[email.length - 5] +
//     email[email.length - 4] +
//     email[email.length - 3] +
//     email[email.length - 2] +
//     email[email.length - 1];
//   let dotcom =
//     email[email.length - 4] +
//     email[email.length - 3] +
//     email[email.length - 2] +
//     email[email.length - 1];
//   let lowerdotcoin = dotcoin.toLowerCase();
//   let lowerdotcom = dotcom.toLowerCase();
//   if (email[0] != email[0].toLowerCase()) {
//     return -1;
//   } else if (!email.includes("@")) {
//     return -2;
//   } else {
//     let atratecount = 0;
//     let valcheck = false;
//     if (dotcoin != lowerdotcoin) {
//       valcheck = true;
//     } else if (dotcom != lowerdotcom) {
//       valcheck = true;
//     }
//     if (valcheck) {
//       return -4;
//     } else {
//       for (let i of email) {
//         if (i == "@") {
//           atratecount = atratecount + 1;
//         } else if (i == i.toLowerCase() || i == +i || i == "." || i == "_") {
//         } else {
//           return -5;
//         }
//       }

//       if (atratecount > 1) {
//         return -3;
//       } else {
//         return "Valid";
//       }
//     }
//   }
// }
// console.log(isvalid("durgaprasad02@gmail.com"));




// Define the below methods with the following specifications
// Name of method concateSumOfDigits()//accept double number and finds the sum of the digits to the left and right of the decimal point
// Arguments: One argument of double value.
// Return Type: an string value
// Example
// Input :1205.5204
// Output: 8:11
// Name of method getSumOfDigits()//accepts integer value as argument and return the sum of digits of the given number
// Arguments: One argument of integer value.
// Return Type: an integer value
// Example
// Input: 28
// Output: 10

// function getSumOfDigits(str) {
//   if (String(str).includes(".")) {
//     str = String(str).split(".");

//     let firstVal = str[0];

//     let secondVal = str[1];

//     function addivals(string) {
//       let count = 0;

//       for (let i of string) {
//         count = count + +i;
//       }

//       return count;
//     }

//     let firstValCount = addivals(firstVal);

//     let secondValCount = addivals(secondVal);

//     let outputString = String(firstValCount) + ":" + String(secondValCount);

//     return outputString;
//   } else {
//     // console.log(str, "else");

//     let sumOfNumbers = 0;

//     for (let i of String(str)) {
//       sumOfNumbers = sumOfNumbers + +i;
//     }

//     return sumOfNumbers;
//   }
// }

// console.log(getSumOfDigits(1241.1208));





// Write the program which accepts an integer value, and check the given number is an perfect, abundant or deficient number.

// Explanation

// A number is called perfect if the sum of its proper divisors is equal to the number. If the

// sum is less, it is called a deficient number. If the sum is more than the number, it is called

// an abundant number.

// Example

// The proper divisors of 28 are 1, 2, 4, 7, 14. The sum of those factors 1 + 2 + 4 + 7 + 14 is

// 28, which equal to the number. Hence it is called a perfect number.

// Similarly if the sum is less than the number, it is called a deficent number. If the sum is

// greater than the number, it is called an abundant number.

// Note: A number is not a proper divisor of itself. Proper divisors of 6 are 1, 2 and 3 only.

// Define the below methods with the following specifications

// Name of method sumOfProperDivisors()// accepts an integer value, return 0 if the given number is an perfect number, -1 if it is an deficient, return 1 if it is an abundant number

// function sumOfProperDivisors(a) {
//   let finalArr = [];

//   let finalsum = 0;

//   if (a < 0) {
//     return -2;
//   } else if (a == 0) {
//     return -3;
//   } else {
//     for (i = 0; i < a; i++) {
//       if (a % i == 0) {
//         finalArr.push(i);
//       }
//     }

//     for (j of finalArr) {
//       finalsum += j;
//     }

//     if (finalsum == a) {
//       return 0;
//     } else if (finalsum > a) {
//       return 1;
//     } else if (finalsum < a) {
//       return -1;
//     }
//   }
// }

// let res = sumOfProperDivisors(23);

// console.log(res);
