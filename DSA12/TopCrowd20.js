// Write logic for finding GCD of two given numbers
// Define following method
// Name of Method : getGCD()
// Arguments :   two integers
// Return type       : integer
// Input : 20  30
// Output  : 10
// Input : -10  30
// Output  : -1
// Input : 10  -30
// Output  : -1
// Input : 123, 345
// Output  : 3

// function getGCD(a, b) {
//   let demo;
//   for (let i = 0; i <= a && i <= b; i++) {
//     if (a % i == 0 && b % i == 0) {
//       demo = i;
//     }
//   }
//   return demo
// }
// let res = getGCD(123, 345);
// console.log(res);

// Write logic for finding LCM of two given numbers
// Define following method
// Name of Method : findLCM()
// Arguments :   two integers
// Return type : integer
// Input : 10  20
// Output  : 20
// Input : 3  5
// Output  : 15
//  Input : 10 -3
// Output  : -1
//  Input : -20  10
// Output  : -1

// function findLCM(a, b) {
//   let min = a > b ? a : b;
//   while (true) {
//     if (min % a == 0 && min % b == 0) {
//       console.log("lcm " + a + " and" + b + " is" + min);
//       break;
//     }
//     min++;
//   }
// }
// findLCM(12, 15);

// Write logic for printing next number as per given below.
// A. Return next even number, if number of even digits are more than odd digits.
// B. Return next odd number , if number of odd digits are more than even digits.
// C. Return given number, if number of even digit and number of odd digits are equal.
// Define following method
// Name of Method : nextNum()
// Arguments :   integer
// Return type : integer
// Input : 12465
// Output  : 12466
// Input : 12466
// Output  : 12468

// function nextNum(b) {
//   a = String(b);
//   let evencount = 0;
//   let oddcount = 0;
//   for (i of a) {
//     if (i % 2 == 0) {
//       evencount++;
//     } else {
//       oddcount++;
//     }
//   }
//   if (evencount == oddcount) {
//     return b;
//   } else if (evencount > oddcount) {
//     if (i % 2 == 0) {
//       return b + 2;
//     } else {
//       return b + 1;
//     }
//   } else if (evencount < oddcount) {
//     if (i % 2 == 1) {
//       return b + 2;
//     } else {
//       return b + 1;
//     }
//   }
// }
// let res = nextNum(123456);
// console.log(res);

// Write logic to return true if if given number is step number otherwise return false
// Step Number
// if the difference between any two adjacent digits is 1 then it is step number.
// Define following method
// Name of Method : isStepNumber()
// Arguments         :   integer
// Return type : boolean
// Input : 1234
// Output  : true

// function isStepNumber(a) {
//   let b = String(a);
//   let c = [];
//   for (let i = 0; i < b.length; i++) {
//     if (b[i + 1] - b[i] == 1 || b[i + 1] - b[i] == -1) {
//       c.push(1);
//     }
//   }

//   if (c.length == b.length - 1) {
//     return true;
//   } else {
//     return false;
//   }
// }
// let res = isStepNumber(1234);
// console.log(res);

// Write logic for counting number of zeros in a given number.
// Define following method
// Name of Method : countZeros()
// Arguments         :   integer
// Return type : integer
// Input : 1234
// Output  : 0

// function countzeros(num) {
//     let count = 0;
//     num = String(num).split('')
//     num.filter((v, i) => (+v == 0 ? (count += 1) : ""));
//     return count
// }
// console.log(countzeros(1000));

// Write logic to return true if sum of alternate digits is same
// Example - 1
// 12345
// 1 + 3 + 5 = 9
// 2 + 4 = 6
// As 9 is not equal to 6 return false
// Example - 2
// 15345
// 1 + 3 + 5 = 9
// 5 + 4 = 9
// As 9 is not equal to 9 return true
// Define following method
// Name of Method : isSameSum()

// function isSameSum(a) {
//   let count = 0;
//   let count2 = 0;
//   for (let i in a) {
//     if (i % 2 == 0) {
//       count += a[i];
//     } else {
//       count2 += a[i];
//     }
//   }
//   if (count == count2) {
//     return true;
//   } else {
//     return false;
//   }
// }
// let res = isSameSum([1, 2, 1, 2, 4, 2]);
// console.log(res);

// let a = {
//   name: "manoj",
//   marksheets: {
//     tenth: {
//       maths: {
//         paper1: 90,
//         paper2: 90,
//       },
//     },
//     intermediate: {
//       maths: {
//         paper1: 60,
//         paper2: 60,
//       },
//     },
//     degree: {
//       maths: 90,
//     },
//   },
// };


// let arr = [];
// for(let i=1; i<=5; i++){
//     arr = [...arr, ...[i]]
// };
// console.log(arr);




// Write a Python program to reverse words in a string.
// i/p: "The quick brown fox jumps over the lazy dog."
// o/p: dog. lazy the over jumps fox brown quick The

// function stringReverse(string){
//     string = string.split(' ').reverse().join(' ');
//     return string;
// }
// console.log(stringReverse("The quick brown fox jumps over the lazy dog."));



// Write a Python program to display a number with a comma separator.
// Original Number:  3000000                                                                                     
// Formatted Number with comma separator: 3,000,000                                                              
// Original Number:  30000000                                                                                    
// Formatted Number with comma separator: 30,000,000 


// function roundnumber(a){
//      return a.toLocaleString(); 
//     }
//     let res=roundnumber(300000001)
// console.log(res);



// Write a Python program to remove characters that have odd index values in a given string.
// i/p :'abcdef'
// o/p: ace
// i/p: python
// o/p:pto

//   function removeOddIndex(string){
//     let notOddIndexString = '';
//     for(let i in string){
//         if(i%2 == 0){
//             notOddIndexString = notOddIndexString + string[i];
//         }
//     };
//     return notOddIndexString
//   }
//   console.log(removeOddIndex("python"));




// Write a Python program to remove existing indentation from all of the lines in a given text.
// i/p: sample_text = ''' Python is a widely used high-level, general-purpose, interpreted, dynamic programming language. Its design philosophy emphasizes code readability, and its syntax allows programmers to express concepts in fewer lines of code than possible in languages such as C++ or Java. '''

// function removeExistingIndentation(string){
//     string = string.split(', ').join(',  ');
//     return string
// }
// console.log(removeExistingIndentation(' Python is a widely used high-level, general-purpose, interpreted, dynamic programming language. Its design philosophy emphasizes code readability, and its syntax allows programmers to express concepts in fewer lines of code than possible in languages such as C++ or Java.'));

