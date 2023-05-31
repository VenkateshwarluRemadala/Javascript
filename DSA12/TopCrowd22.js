// Given a string, find all possible palindromic substrings in it.
// The problem differs from the problem of finding the possible palindromic subsequence. Unlike subsequences, substrings are required to occupy consecutive positions within the original string.
// For example,
// Input:  str = google
// Output: e l g o oo goog

// function palindromicSubString(string){
//     string = string.split('');
//     let palindromicSubStringArray = []
//     for(let i=0; i<string.length; i++){
//         for(let j=i; j<string.length; j++){
//             let dummyStrArr = [...string];
//             let subString = dummyStrArr.splice(i,j-i+1);
//             if(subString.join('')==subString.reverse().join('')){
//                 if(palindromicSubStringArray.indexOf(subString.join('')) == -1){
//                     palindromicSubStringArray.push(subString.join(''))
//                 }
//             };
//         }
//     }
//     return palindromicSubStringArray
// }
// console.log(palindromicSubString("google"));




// Define a method which accepts an integer array as argument, return the sum of modified elements.
// Explanation
// Add the sum of all the elements in the array, if the value is even double it's value, if it is odd half the value and add to sum.
// Example
// Input:
//  int[] a1 = {1, 2, 3, 4, 5, 6, 7, 8}
// Output: 46 (0 + 4 + 1 + 8 + 2 + 12 + 3 + 16)
// Write the method with the following specifications
// Name of method getSumOfModifiedElements() // which accepts an integer array as argument and return the sum of modified elements.
// Arguments: One argument of integer array
// Return Type: an integer array
// Specifications: The value returned by the method getSumOfModifiedElements() is determined by the following rules
// if size of an array is zero, return -1,
// if any of the array element is negative, return -2
// if any of the array element is zero, return -3
// if none of the above, return  sum of the modified values.
// Example
// Input:
//  int[] a1 = {10, 15, 20, 25, 30, 35, 40, 45, 50};
// Output: 358

// function getSumOfModifiedElements(a) {
//   let finalevensum = 0;
//   let finaloddsum = 0;
//   if (a.length == 0) {
//     return -1;
//   } else {
//     for (i of a) {
//       if (i == 0) {
//         return -3;
//       } else if (i < 0) {
//         return -2;
//       } else {
//         if (i % 2 == 0) {
//           let seqval = i + i;
//           finalevensum += seqval;
//         } else {
//           let newvalue = i / 2;
//           let halfodd = parseInt(newvalue);
//           finaloddsum += halfodd;
//         }
//       }
//     }
//   }
//   let newsum = finalevensum + finaloddsum;
//   return newsum;
// }
// let result = getSumOfModifiedElements([10, 15, 20, 25, 30, 35, 40, 45, 50]);
// console.log(result);




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
//   let sumofevennum = 0;
//   if (a.length == 0) {
//     return -3;
//   } else {
//     for (i of a) {
//       if (i == 0) {
//         return -2;
//       } else if (i < 0) {
//         return -1;
//       } else if (i % 2 == 0) {
//         sumofevennum += i;
//       }
//     }
//   }
//   return sumofevennum;
// }
// let result = getSumOfEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
// console.log(result);




// Define a method which accepts string as argument indicating the time in 24hr format, return true if the given time is valid, else return false.
// Note: Make sure that the time, entered is in the form of "hh:mm:ss" 24hrs format , saperating them with ":".
// Write the method with the following specifications
// Name of method : isValidTime()
// Arguments: One argument of string value.
// Return Type: A boolean value
// Specifications: The value returned by the method isValidTime() is determined by the following rules
// If time is valid, return true
// If time is in-valid, return false.
// Example
// Input: "12:44:22"
// Output: true
// Input: "00:00:01"
// Output: true
// Input: "00:00:00"
// Output: true
// Input: "24:00:00"

// function isValidTime(string) {
//   string = string.split(":");
//   let timeCheck = true;
//   function timeCheckfunction(val, start, end) {
//     if (val < start || val > end) {
//       timeCheck = false;
//     }
//   }
//   timeCheckfunction(+string[0], 0, 23);
//   timeCheckfunction(+string[1], 0, 59);
//   timeCheckfunction(+string[2], 0, 59);
//   return timeCheck;
// }
// console.log(isValidTime("23:59:62"));




// Define a method which accepts an integer value as argument, return "True" in the form of string, if the given number is an kaprekar number, in other case return "False" in the form of string.
// Explanation
// In mathematics, a Kaprekar number for a given base is a non-negative integer, the representation of whose square in that base can be split into two parts that add up to the original number again. For instance, 45 is a Kaprekar number, because 45² = 2025 and 20 + 25 = 45.
// For instance, 297 is a Kaprekar number, because 297² = 88209 and 88+209 = 297.
// Write the method with the following specifications
// Name of method : isKaprekarNumber()// accepts an integer value as argument, return "True" if it is an kaprekar number, in other case return "False" in the form of string.
// Arguments: One argument of integer value.
// Return Type: A String value
// Specifications: The value returned by the method isKaprekarNumber() is determined by the following rules
// If the given number is negative, return "-1" as string
// If the given number is zero, return "-2" as string
// in other case return "True" if it is a Kaprekar Number, else return "False".
// Example
// Input: 9
// Output: "True"

// function isKaprekarNumber(val) {
//   if (val < 0) {
//     return -1;
//   } else if (val == 0) {
//     return -2;
//   } else {
//     let ActalNumber = val;
//     val = val * val;
//     val = String(val).split("");
//     let evenOrOddCheck = val.length / 2;
//     evenOrOddCheck = Math.floor(evenOrOddCheck);
//     function getHalfVal(start, endVal) {
//       let str = "";
//       for (let i = start; i < endVal; i++) {
//         str = str + val[i];
//       }
//       return str;
//     }
//     let first = getHalfVal(0, evenOrOddCheck);
//     let second = getHalfVal(evenOrOddCheck, val.length);
//     if (ActalNumber == +first + +second) {
//       return true;
//     } else {
//       return false;
//     }
//   }
// }
// console.log(isKaprekarNumber(45));




// Define the method which accepts the string as argument and return the string indication the Morse Code.
// Explanation
// where the Morse code of the characters are as below:
// a = .-   b = -...  c = -.-.  d = -..   e = .   = ..-.   g = --.  h = ....  i = ..  j = .---

// k = -.-  l = .-..  m = --   n = -.  o = ---  p = .--.  q = --.-  r = .-.  s = ...  t = -  u = ..-

// v = ...-  w = .--  x = -..-  y = -.--  z = --..
// Convert the given text into Morse Code
// Input: "abc"
// Output: .--...-.-.

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




// Given a list of words, efficiently group all anagrams.

// The two strings, X and Y, are anagrams if by rearranging X's letters, we can get Y using all the original letters of X exactly once. For example, all these pairs are anagrams as lhs can be rearranged to rhs and vice-versa.

// actors = costar
// altered = related
// auctioned = education
// aspired = despair
// mastering = streaming
// recurd = secured
// The problem requires the anagrams to be grouped together. For example,

// Input:

// [CARS, REPAID, DUES, NOSE, SIGNED, LANE, PAIRED, ARCS, GRAB, USED, ONES, BRAG, SUED, LEAN, SCAR, DESIGN]

// Output:

// GRAB BRAG
// CARS ARCS SCAR
// REPAID PAIRED
// LANE LEAN
// SIGNED DESIGN
// DUES USED SUED
// NOSE ONES

// function listAnagram(a) {
//   for (i of a) {
//     for (j of a) {
//       if (i != j) {
//         let demo = i.split("").sort().join("");
//         let demo1 = j.split("").sort().join("");
//         if (demo === demo1) {
//           console.log(i, j);
//         }
//       }
//     }
//   }
// }
// let arr = [
//   "CARS",
//   "REPAID",
//   "DUES",
//   "NOSE",
//   "SIGNED",
//   "LANE",
//   "PAIRED",
//   "ARCS",
//   "GRAB",
//   "USED",
//   "ONES",
//   "BRAG",
//   "SUED",
//   "LEAN",
//   "SCAR",
//   "DESIGN",
// ];

// let res = listAnagram(arr);

// console.log(res);



// Write a Python program to convert a list of multiple integers into a single integer.

// Original List:  [11, 33, 50]                                                                                  
// Single Integer:  113350

// function convertToSingleInteger(Input_Array){
//   let singleInteger = '';
//   for(let i of Input_Array){
//     singleInteger = singleInteger + i;
//   };
//   return +singleInteger
// }
// console.log(convertToSingleInteger([11,33,50]));



// Write a Python program to find missing and additional values in two lists.
// list1 = ['a','b','c','d','e','f']
// list2 = ['d','e','f','g','h']
// Missing values in second list:  b,c,a                                                                         
// Additional values in second list:  g,h 

//   function missingValuesAndAdditionalVal(Input_Array1, Input_Array2){
//       let arr = [];
//       for(let i of Input_Array2){
//         if(Input_Array1.indexOf(i) == -1){
//           arr.push(i)
//         }
//       };
//       arr = arr.join(',');
//       return arr
//   }
//  let additionalValues =  missingValuesAndAdditionalVal(['a','b','c','d','e','f'], ['d','e','f','g','h']);
//  let missingVals = missingValuesAndAdditionalVal(['d','e','f','g','h'], ['a','b','c','d','e','f']);
//  console.log("missing values are", missingVals, "and additional values are", additionalValues);



// Write a Python program to move all zero digits to the end of a given list of numbers.
// Expected output:
// Original list:
// [3, 4, 0, 0, 0, 6, 2, 0, 6, 7, 6, 0, 0, 0, 9, 10, 7, 4, 4, 5, 3, 0, 0, 2, 9, 7, 1]
// Move all zero digits to end of the said list of numbers:
// [3, 4, 6, 2, 6, 7, 6, 9, 10, 7, 4, 4, 5, 3, 2, 9, 7, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0]

// function moveAllZerosToEnd(Input_Array){
//   let non_Zeros_array = [];
//   let zeros_array = [];
//   for(let i of Input_Array){
//     if(i>0){
//       non_Zeros_array.push(i)
//     }else{
//       zeros_array.push(i)
//     }
//   }
//   return [...non_Zeros_array, ...zeros_array]

// }
// console.log(moveAllZerosToEnd([3, 4, 0, 0, 0, 6, 2, 0, 6, 7, 6, 0, 0, 0, 9, 10, 7, 4, 4, 5, 3, 0, 0, 2, 9, 7, 1]));


// Write a Python program to sort a list of nested dictionaries

// Original List:                                                                                                
// [{'key': {'subkey': 1}}, {'key': {'subkey': 10}}, {'key': {'subkey': 5}}]                                     
// Sorted List:                                                                                                  
// [{'key': {'subkey': 10}}, {'key': {'subkey': 5}}, {'key': {'subkey': 1}}]


// function sortNestedArrayOfObject(ArrayOfObject){
//   ArrayOfObject.sort((a,b)=>{
//     return b["key"].subkey -a["key"].subkey
//   })
//   return ArrayOfObject

// }
// console.log(sortNestedArrayOfObject([{'key': {'subkey': 1}}, {'key': {'subkey': 10}}, {'key': {'subkey': 5}}]));


// Write a Python program to display a number with a comma separator.
// Original Number:  3000000                                                                                     
// Formatted Number with comma separator: 3,000,000                                                              
// Original Number:  30000000                                                                                    
// Formatted Number with comma separator: 30,000,000 

// function roundnumber(a){
//     return a.toLocaleString("en-US"); 
// }
// let res=roundnumber(3000000 )
// console.log(res);



// Write a Python program to print the following numbers up to 2 decimal places.
// sample output:
// Original Number:  3.1415926                                                                                   
// Formatted Number: 3.14                                                                                        
// Original Number:  12.9999                                                                                     
// Formatted Number: 13.00  

// function twoDecimalPoints(number){
//     return number.toFixed(2)
// }
// console.log(twoDecimalPoints(12.9999));



// Write a Python program to remove existing indentation from all of the lines in a given text.
// i/p: sample_text =  "Python is a widely used high-level, general-purpose, interpreted, 
// dynamic programming language. Its design philosophy emphasizes code readability, 
// and its syntax allows programmers to express concepts in fewer lines of code than possible 
// in languages such as C++ or Java. "

// function removeIndentation(input_String){
//     input_String = input_String.split(', ').join(',  ');
//     input_String = input_String.split(' ').join('  ')
//     return input_String
// }
// console.log(removeIndentation("Python is a widely used high-level, general-purpose, interpreted, dynamic programming language. Its design philosophy emphasizes code readability, and its syntax allows programmers to express concepts in fewer lines of code than possible  in languages such as C++ or Java. "));



// Write a Python program to reverse words in a string.

// i/p: "The quick brown fox jumps over the lazy dog."

// o/p: dog. lazy the over jumps fox brown quick The


// function reverseString(input_String){
//     input_String = input_String.split(' ').reverse().join(' ');
//     return input_String
// }
// console.log(reverseString("The quick brown fox jumps over the lazy dog."));




// Write a Python program to remove characters that have odd index values in a given string.
// i/p :'abcdef'
// o/p: ace
// i/p: python
// o/p:pto;

// function removeOddIndexs(input_String){
//     let notOddIndexString = '';
//     for(let i in input_String){
//         if(+i%2 == 0){
//             notOddIndexString = notOddIndexString + input_String[i]
//         }
//     }
//     return notOddIndexString;
// }
// console.log(removeOddIndexs("python"));
