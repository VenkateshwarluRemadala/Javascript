// Define a method which accepts an integer array as argument and returns the nearest minimum value which is 
//not present in array.
// Example
// Input: int[] a = {1, 4, 5, -23, 24}
// Output: -24


// function getNearestMinValue(a) {
//   let newValue = a.sort((a, b) => {
//     return a - b;
//   });
//   return newValue[0] - 1;
// }
// let res = getNearestMinValue([-13, -4, -5, -1, -24]);
// console.log(res);



// Define a method which accepts two arguments, an string array and a pattern in the form of string. And return the string array of with set of strings containing the pattern.
// Example
// Input:
// String[] words = {"South Africa", "Afghanistan", "Sri Lanka", "New Zealand", "West Indies", "England", "India", "Australia", "Pakistan", "Bangladesh"};
// String pattern = "an";
// Output:
// AFGHANISTAN
// SRI LANKA
// NEW ZEALAND
// ENGLAND
// PAKISTAN
// BANGLADESH


// function getWordsContainsPattern(a, p) {
//   let finalArr = [];
//   for (i of a) {
//     let res = i.includes(p);

//     if (res) {
//       i = i.toUpperCase();

//       finalArr.push(i);
//     }
//   }
//   return finalArr;
// }
// let res = getWordsContainsPattern(
//   [
//     "South Africa",
//     "Afghanistan",
//     "Sri LaNka",
//     "New Zealand",
//     "West Indies",
//     "England",
//     "India",
//     "Australia",
//     "Pakistan",
//     "Bangladesh",
//   ],
//   "an"
// );
// console.log(res);



// Define a method which accepts two arguments, an array of positive integers(excludin zero) elements and 
// target value, detect whether there is a set of consecutive elements in the array that add up to the target, 
// if found return true else return false.
// Write the methods with the following specifications
// Name of method containsConsecutiveElements() // which accepts an two arguments an integer array and target value integer, return true if detected set of consecutive elements that add up to tareger, else return false.
// Arguments: Two arguments an integer array and integer value
// Return Type: an boolean value
// Example
// Input: int[] a = {1, 3, 5, 7, 9} target = 8
// Output: true as (3, 5) add up to targer.
// Input: int[] a = {1, 3, 5, 7, 9} target = 15
// Output: true as (3, 5, 7) add up to targer.
// Input: int[] a = {1, 3, 5, 7, 9} target = 10
// Output: fasle
// Name of method validateInputs() // which accepts an Integer arraya and integer value as arguments and validate the inputs as sepcified below.
// Arguments: Two arguments an integer array and integer value
// Return Type: an boolean value
// Specifications: The value returned by the method validateInputs() is determined by the following rules
// if size of an array is zero, return -1,
// if any of the array element is negative or zero, return -2
// if the second argument target value is negative or zero, return -3
// in other case, return  1 indicating all the inputs are valid.
// Example
// Input: int[] a = {1, 3, 5, 7, 9} target = 15
// Output: 1

// function containsConsecutiveElements(num, target) {
//   let isconsecutiveEleCheck = false;
//   for (let i in num) {
//     if (num[+i] + num[+i + 1] == target) {
//       isconsecutiveEleCheck = true;
//     }
//   }
//   if (isconsecutiveEleCheck) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(containsConsecutiveElements([1, 3, 5, 7, 9], 10));




// Define a method which accepts an integer array as argument, and to return the sum of all even elements from the array.
// Example
// Input: int[] a = {10, 15, 20, 25, 30, 35, 40, 45, 50}
// Output: 150
// Write the methods with the following specifications
// Name of method: getSumOfEvenNumbers() // which accepts an integer array as argument, return the sum of all even elements.
// Arguments: One argument of integer array
// Return Type: An integer value
// Specifications: The value returned by the method getSumOfEvenNumbers() is determined by the following rules
// If size of an array is zero, return -3,
// If any of the array element is negative, return -1
// If any of the array element is zero, return -2
// If any of the array contains elements that are negative and zero then return -1 for negative and -2 for zero in first cum first serve basis.
// in other case, return sum of all even elements.
// Example
// Input: int[] a = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10}
// Output: 30


// function getSumOfEvenNumbers(a) {
//   let finalevensum = 0;
//   if (a.length == 0) {
//     return -3;
//   }
//   for (i of a) {
//     if (i < 0) {
//       return -1;
//     } else if (i == 0) {
//       return -1;
//     } else if (i % 2 == 0) {
//       finalevensum += i;
//     }
//   }
//   return finalevensum;
// }
// let result = getSumOfEvenNumbers([10, 15, 20, 25, 30, 35, 40, 45, 50]);
// console.log(result);




// Define a method which accepts two string values as arguments and return true if two strings are anagrams otherwise return false. 
// Explanation
// Two words are called as anagrams if they contains same number of letters and same type of letters.
//  Example
// "listen" and "silent" are anagrams as they contains same number and same type of letters.
// "spet" and "pest" are also anagrams.
// "cat", "tac" and "act" are also anagrams.
// Write the methods with the following specifications 
// Name of method isAnagrams() // which accepts two strings as arguments, return true if they are anagrams else return false.
// Arguments: Two arguments of type string
// Return Type: a boolean value
//  Example
// Input: listen slient
// Output: true


// function isAnagrams(str1, str2) {
//   if (str1.length !== str2.length || str1.includes(" ") || str2.includes(" ")) {
//     return -1;
//   }
//   let demo = str1.split("").sort().join("");
//   let demo1 = str2.split("").sort().join("");
//   if (demo === demo1) {
//     return true;
//   } else if (demo.length == demo1.length && demo !== demo1) {
//     return 1;
//   } else {
//     return false;
//   }
// }
// console.log(isAnagrams("abc", "xyz"));



// Given n lists of words, print all combinations of phrases that can be formed by picking one word from
// each list.
// For example,
// Input:
// list 1 —> [John, Emma]
// list 2 —> [Plays, Hates, Watches]
// list 3 —> [Cricket, Soccer, Chess]


// function combinatoins(a, b, c) {
//   for (let i of a) {
//     for (let j of b) {
//       for (let k of c) {
//         console.log(i + " " + j + " " + k);
//       }
//     }
//   }
// }
// let listone = ["John", "Emma"];
// let listtwo = ["Plays", "Hates", "Watches"];
// let listthree = ["Cricket", "Soccer", "Chess"];
// combinatoins(listone, listtwo, listthree);



// Given an integer array, count the total number of strictly increasing subarrays in it.
// For example,
// Input:  A[] = { 1, 2, 4, 4, 5}
// Output: The total number of strictly increasing subarrays is 4
// { 1, 2 }, { 1, 2, 4 }, { 2, 4 }, { 4, 5 }


// function subarrasArraysCount(a) {
//   let count = 0;
//   for (let i = 0; i < a.length; i++) {
//     for (let j = i; j < a.length; j++) {
//       let val = [...a];
//       let subArraay = val.splice(i, j - i + 1);
//       if (subArraay.length > 1) {
//         let vall = [];
//         for (let i in subArraay) {
//           if (subArraay[+i] < subArraay[+i + 1]) {
//             vall.push(1);
//           }
//         }
//         if (vall.length == subArraay.length - 1) {
//           count = count + 1;
//           console.log(subArraay);
//         }
//       }
//     }
//   }
//   return count;
// }
// let res = subarrasArraysCount([1, 2, 4, 4, 5]);
// console.log(res);



// Write a program to check the given number is and adam number are not.
// Explanation
// If a number when reversed, the square of the number and the square of the reversed number should be number which are reverse to each other, is Adam number.
// Example: 
// Input: 12
// 12 ^ 2 = 144
// 21 ^ 2 = 441
// The reverse of 144 is equal to 441 and reverse of 441 is equal to 144 so., 12 is an Adam number.
// 11, 12, 13, 21, 22, 31, 101, 102, 103, 111, 112, 113, 121 ... are Adam numbers.
// Write the methods with the following specifications
// Name of method isAdamNumber() // which accepts an integer as argument and return true if it is an adam number else return false.
// Arguments: One argument an integer value
// Return Type: an boolean value
// Example
// Input: 121
// Output: true

// function isAdamNumber(a) {
//   let checkedvalue = false;
//   let sequrevaleone = a * a;
//   let b = String(a);
//   let revseqvalue = b.split("").reverse().join("");
//   let c = revseqvalue * revseqvalue;
//   let sequrevaletwo = String(c);
//   let newrev = sequrevaletwo.split("").reverse().join("");
//   if (sequrevaleone == newrev) {
//     checkedvalue = true;
//   }
//   return checkedvalue;
// }
// let result = isAdamNumber(17);
// console.log(result);