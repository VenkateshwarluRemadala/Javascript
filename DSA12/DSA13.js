
// Define a method that returns the string as "Even" if the given number is an even number, return "Odd" 
// if the given number is an odd number, and return the string as "Invalid Input" if the given number is less than or equal to 0.
// Write the method with the following specifications
// Name of the method isEvenOrOdd() // which accepts an integer value as an argument.
// Arguments: one argument of type integer
// Return Type: a String value (Even/Odd/Invalid Input) 
// Specifications: The value returned by the method isEvenOrOdd() is determined by the following rules
// if the given number is negative or zero, return "Invalid Input"
// if the given number is even, return "Even"
// if the given number is odd, return "Odd"

// function isEvenOrOdd(number){
//     if(number<=0){
//         return "Invalid Input"
//     }else if(number%2 === 0){
//         return "Even"
//     }else if(number%2 == 1){
//         return "Odd"
//     }

// }
// console.log(isEvenOrOdd(10));



// Define a method that returns 1 if the given three-digit number is a palindrome, in other cases returns 0.
// Write the method with the following specifications
// Name of the method isPalindrome()  // which accepts an integer value as an argument 
// and returns true if the given number is a palindrome, else return false.
// Arguments: one argument of type integer
// Return Type: an integer value 
// Specifications: The value returned by the method isPalindrome() is determined by the following rules
// if the given number is a three-digit number, retun 1 if the number is palindrome, else return 0.
// Example: if x = 232, return 1. if x = 345, return 0
// if the given number is negative or zero, return -1
// if the given number is not an three digit number, return -2



// function isPalindrome(number){
//      if(String(number).includes('-')||number == 0){
//         return -1
//     }else if(String(number).length<3){
//         return -2
//     }else{
//         if(String(number).split('').reverse().join('') == String(number)){
//             return 1
//         }else{
//             return 0
//         } 
//     }
// }
// console.log(isPalindrome(232));



// Define a method that returns the 1 if the given number is even, in other cases return 0
// Write the method with the following specifications
// Name of the method isEven() // which accepts an integer 
// value as an argument and return 1 if the given number is even, else returns 0.
// Arguments: one argument of type integer
// Return Type: an integer value 
// Specifications: The value returned by the method isEven() is determined by the following rules
// if the given number is an even number, return 1 else return 0. Example if x = 22, return 1. if x = 35,
//  return 0
// if the given number is negative or zero, return -1

// function isEven(number){
//     if(number<=0){
//         return -1
//     }else if(number%2 == 0){
//         return 1
//     }else{
//         return 0
//     }

// }
// console.log(isEven(123));



// Define a method that returns the least number among two numbers.
// Write the method with the following specifications
// Name of method getLeastNum() // which accepts two integer values as argument and return the least value.
// Arguments: two arguments of type integer
// Return Type: an integer value 
// Specifications: The value returned by the method getLeastNum() is determined by the following rules
// if any of the given numbers are negative, return -1.
// if any of the given numbers are zero, return -2.
// if the given numbers are positive, return the least number.

// function getLeastNum(number1, number2){
//     if(number1<0||number2<0){
//         return -1
//     }else if(number1 == 0 || number2 == 0){
//         return -2
//     }else if(number1<number2){
//         return number1
//     }else if(number2<number1){
//         return number2
//     }
// }
// console.log(getLeastNum(100,111));


// Define a method that returns the number itself if it is an even number, if the number is odd then return the 
// next multiple of 10.
// Write the method with the following specifications
// Name of method oddRounder()  // which accepts an integer value as an argument and returns the same value if 
// it is an even number, if the value is odd then return the next multiple of 10. For example, if x = 24 then return 24, if x = 25 then return 30.
// Arguments: one argument of type integer
// Return Type: an integer value 
// Specifications: The value returned by the method oddRounder() is determined by the following rules
// if any of the given numbers is negative, return -1.
// if any of the given numbers is zero, return -2.
// if the given number is even, return the same number.
// if the given number is odd, return the next multiple of 10.

//  function oddRounder(number){
//     if(number<0){
//         return -1
//     }else if(number == 0){
//         return -2
//     }else if(number%2 == 0){
//         return number
//     }else{
//         number = String(number).split('')
//         number.splice(number.length-1, 1,0);
//         number = number.join('');
//         number = +number+10;
//         return number
//     }
//  }
//  console.log(oddRounder(111));


// Define a method that returns the difference of digits of the given two-digit number.
// Note: You should substract the units position value from tens positon value, the return value may be negative.
// Write the method with the following specifications
// Name of method getDiffOfDigits() // which accepts an integer value as argument and return the difference of it's digits.
// Arguments: one argument of type integer
// Return Type: an integer value
// Specifications: The value returned by the method getDiffOfdigits() is determined by the following rules
// if the given value is in between 10 and 99, return difference of it's digits.
// Example: if x = 83,  8 - 3 return 5. if x = 38, 3 - 8 return -5.
// if the given value is negative, return -3
// if the given value is greater than 99, return -2


// function getDiffOfDigits(number){
//     if(number<0){
//         return -3
//     }else if(number>99){
//         return -2
//     }else if(number>9 && number<100){
//         return +(String(number)[0])- +(String(number)[1])
//     }
// }
// console.log(getDiffOfDigits(38));


// Define a method that returns the greatest number among two numbers.
// Write the method with the following specifications
// Name of method getGreatest()  / / which accepts two integer values as argument and returns the greatest value.
// Arguments: two arguments of type integer
// Return Type: an integer value 
// Specifications: The value returned by the method getGreatest() is determined by the following rules
// if any of the given numbers are negative, return -1.
// if any of the given numbers are zero, return -2.
// if the given numbers are positive, return the greatest.


// function getGreatest(number1, number2){
//     if(number1<0||number2<0){
//         return -1
//     }else if(number1 == 0 || number2 == 0){
//         return -2
//     }else if(number1>number2){
//         return number1
//     }else if(number2>number1){
//         return number2
//     }
// }
// console.log(getGreatest(11,23));



// Define a method that returns 1 if the given number is positive, returns -1 if the given number is negative, 
// and returns 0 if the given number is 0.
// Write the method with the following specifications
// Name of method findSign() // which accepts an integer value as argument and returns 1 
// if the argument value is positive, returns -1 in case of negative value, returns 0 if the argument value is 0.
// Arguments: one argument of type integer
// Return Type: an integer value 
// Specifications: The value returned by the method findSign() is determined by the following rules:
// if any of the given number is positive, return 1.
// if any of the given number is negative, return -1.
// if any of the given number is zero, return 0.

// function findSign(number){
//     if(number<0){
//         return -1
//     }else if(number==0){
//         return 0
//     }else if(number>0){
//         return 1
//     }
// }
// console.log(findSign(10));

// Given an array of positive and negative integers, segregate them without changing the relative order of 
// elements. The output should contain all positive numbers follow negative numbers while maintaining the same 
// relative ordering.
// For example,
// Input:  [9, -3, 5, -2, -8, -6, 1, 3]
// Output: [-3, -2, -8, -6, 9, 5, 1, 3]


// let input_Array = [9, -3, 5, -2, -8, -6, 1, 3];
// let negitiveValues_Array = [];
// let positiveValuesArray = [];
// let Output_Array = []
// for(let i of input_Array){
//     if(i<0){
//         negitiveValues_Array.push(i)
//     }else{
//         positiveValuesArray.push(i)
//     }
// }
// Output_Array = [...negitiveValues_Array, ...positiveValuesArray];
// console.log(Output_Array);



// Binary Search : In computer science, a binary search or half-interval search algorithm finds the position of a
// target value within a sorted array. The binary search algorithm can be classified as a dichotomies divide-and-
// conquer search algorithm and executes in logarithmic time.

// Test Data :
// binary_search([1,2,3,5,8], 6) -> False
// binary_search([1,2,3,5,8], 5) -> True

// function binary_search(array, target){
//     let status = false
//     for(let i of array){
//         if(i == target){
//             status = true
//             return status
//         }
//     };
//     if(!status){
//         return status
//     }
// }
// console.log(binary_search([1,2,3,5,8], 6));



// Given an integer array, find and print a contiguous subarray with the maximum sum in it.
// For example,
// Input:  {-2, 1, -3, 4, -1, 2, 1, -5, 4}
// Output: The contiguous subarray with the largest sum is {4, -1, 2, 1}
// Input:  {8, -7, -3, 5, 6, -2, 3, -4, 2}
// Output: The contiguous subarray with the largest sum is {5, 6, -2, 3}

// let input_Array = [8, -7, -3, 5, 6, -2, 3, -4, 2];
// let highest = 0
// let indexsArray = []
// for(let i=0; i<input_Array.length; i++){
//     let sum = 0
//     for(let j=i; j<input_Array.length; j++){
//         sum = sum +input_Array[j];
//         if(sum>highest){
//             highest = sum
//             indexsArray.push([i,j])
//         }
//     }
// }
// let highestsvalindexsArray= indexsArray[indexsArray.length-1];
// let highestSumValArray = input_Array.splice(highestsvalindexsArray[0], highestsvalindexsArray[1]-highestsvalindexsArray[0]+1);
// console.log(highestSumValArray);


// Write a Python program to get a single string from two given strings, separated by a space and swap the first
//  two characters of each string. 
// Sample String : 'abc', 'xyz'
// Expected Result : 'xyc abz'

// let input_String1 = "abc";
// let input_String2 = "xyz";
// let swappedVal = input_String1.split('').splice(0,input_String1.length-1).join('')+input_String2[input_String2.length-1];
// input_String2 = input_String2.split('').splice(0,input_String2.length-1).join('')+input_String1[input_String1.length-1];
// input_String1 = swappedVal;
// let expected_Output = input_String2+' '+input_String1;
// console.log(expected_Output);


// Define a method that returns the next multiple of 100 for the given number.
// Write the method with the following specifications
// Name of method getNextMultipleOf100() // which accepts an integer value as argument and return the next
//  multiple of 100.
// Arguments: one argument of type integer
// Return Type: an integer value
// Specifications: The value returned by the method getNextMultipleOf100() is determined by the following rules
// if the given value is negative or zero, return -1
// if the given value is positive, return the next multiple of the given number.
// Example: if x = 123, return 200.


// function getNextMultipleOf100(number){
//         if(number<=0){
//         return -1
//     }else{
//         number = String(number).split('')
//         number.splice(number.length-2, 2,0);
//         number = number.join('')+"0";
//         console.log(number);
//         number = +number+100;
//         return number
//     }

// }
// console.log(getNextMultipleOf100(123));



