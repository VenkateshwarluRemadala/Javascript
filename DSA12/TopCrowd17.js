// Define a static Method that counts and returns the number of odd numbers from a given input
// array as a string.
// Write the method with the following specifications
// Name of method: getOddCount()
// Arguments: One Integer Array
// Return Type: A String value
// The array parameter can be of exact size 5 only, otherwise return -1 as a string.
// If any of the array elements is 0 or negative then return -2 as a string.
// If all array elements are even then return -3 as a string.
// If the array is null then return -4 as a string.
// Example
//  input :  { 1,2,3,4,5 }
//  output: "3"
//  input : {2,4}
//  output: "-1"

// function getOddCount(input_array){
//     let evennumberCount = 0;
//     let getOddNumberCount = 0
//     if(input_array.length<5||input_array>5){
//         return "-1"
//     }else if(input_array == null){
//         return "-4"
//     }else if(input_array.length == 5){
//         for(let i of input_array){
//             if(i<=0){
//                 return "-2"
//             }else if(i%2 == 0){
//                 evennumberCount = evennumberCount + 1
//             }else if(i%2 == 1){
//                 getOddNumberCount = getOddNumberCount + 1
//             }
//         }
//         if(evennumberCount == input_array.length){
//             return "-3"
//         }else {
//             return String(getOddNumberCount)
//         }
//     }
// }
// console.log(getOddCount([2,4]));

// Define a static Method that searches and returns the maximum number from an array.
// The array is given as a parameter to the function.
// Write the method with the following specifications
// Name of method: findMax()
// Arguments: One integer array
// Return Type: int
// Return -1 if the input is not containing at least 3 negative numbers.
// Return 0 if the input array is null
// Example
//  input :  {1,2,3,-3,-6,-6}
//  output : 3

// function findMax(num) {
//   let negitiveCount = 0;
//   if (num == null) {
//     return 0;
//   } else {
//     for (let i of num) {
//       if (i < 0) {
//         negitiveCount = negitiveCount + 1;
//       }
//     }
//     if (negitiveCount < 3) {
//       return -1;
//     } else {
//       return num.sort((a, b) => {
//         return b - a;
//       })[0];
//     }
//   }
// }
// console.log(findMax([1,2,3,-3,-6,-6]));

// Define a static Method that creates and returns an array of numbers for a given integer as a parameter.
// Write the method with the following specifications
// Name of method: getIncreaseDecrease()
// Arguments: One Integer
// Return Type: int Array
// Return null if the input is 1 or less.
// Return null if the input is more than 20.
// Example
//  input:  5
//  return array with values: {1,5,2,4,3}
//  input: 8
//  return array with values: {1,8,2,7,3,6,4,5}
//  input: -29
//  return: null

// function getIncreaseDecrease(arr) {
//   if (arr <= 1 || arr > 20) {
//     return null;
//   } else {
//     let arr1 = [];
//     let val = arr + 1;
//     let val1 = 0;
//     for (let i = 0; i < arr; i++) {
//       if (i % 2 == 0) {
//         val1 = val1 + 1;

//         arr1.push(val1);
//       } else if (i % 2 == 1) {
//         val = val - 1;
//         arr1.push(val);
//       }
//     }
//     return arr1;
//   }
// }
// console.log(getIncreaseDecrease(8));

// Define a method that returns "FIZZ" if the input is a multiple of 3 prints "BIZZ" if the input is a multiple
// of 5 and prints "FIZZBIZZ" if the input is a multiple of 3 and 5. Print the given input if it is a multiple of
// neither 3 nor 5.
// Write the method with the following specifications
// Name of method: getFizzBizz() // which accepts an integer value as an argument
// // and returns the sum of its digits.
// Arguments: one argument of type integer
// Return Type: string
// Specifications: The value returned by the method getFizzBizz() is determined by the following rules
// If the input is a multiple of 3 return "FIZZ" (Ex:- Input 33 output FIZZ)
// If the input is a multiple of 5 return "BIZZ" (Ex:- Input 5 output BIZZ)
// If the input is a multiple of 3 and 5 return "FIZZBIZZ" (Ex:- Input 15 output FIZZBIZZ)
// if the input is not a multiple of 3 or 5, return the number itself in the form of a string
// If the given value is negative or zero, return "Error";

// function getFizzBizz(number){
//     if(number<=0){
//         return "Error"
//     }
//     else if(number>0){
//         if(number%3 == 0 && number%5 == 0){
//             return "FIZZBIZZ"
//         }else if(number%3 == 0){
//             return "FIZZ"
//         }else if(number%5 == 0){
//             return "BIZZ"
//         }else if(number%3 !=0 || number%5 !=0){
//             return String(number)
//         }
//     }
// }
// console.log(getFizzBizz(15))

// Define a static Method that makes the sum of all odd numbers from a given input array and sends an integer.
// Write the method with the following specifications
// Name of method: getOddSum
// Arguments: One Integer Array
// Return Type: Integer
// The array parameter can be of exact size 5 only, otherwise, return -1.
// If any of the array elements is 0 or negative then return -2
// If all array elements are even then return -3.
// If the array is null then return -4.
// Example
//  input :  { 1,2,3,4,5 }
//  output: 9
//  input : {25,32,4}
//  output: -1

// function getOddSum(input_array){
//     let evennumberCount = 0;
//     let getOddNumberCount = 0
//     if(input_array.length<5||input_array>5){
//         return -1
//     }else if(input_array == null){
//         return -4
//     }else if(input_array.length == 5){
//         for(let i of input_array){
//             if(i<=0){
//                 return -2
//             }else if(i%2 == 0){
//                 evennumberCount = evennumberCount + 1
//             }else if(i%2 == 1){
//                 getOddNumberCount = getOddNumberCount + i
//             }
//         }
//         if(evennumberCount == input_array.length){
//             return -3
//         }else {
//             return getOddNumberCount
//         }
//     }
// }
// console.log(getOddSum([1,2,3,4,5 ]));

// Define a method that returns the string containing twin primes between given two numbers.
// Output Format: 11,13;17,19; (Each prime should be separated by a comma and each pair or primes should be
// separated by a semi-colon)
// Write the method with the following specifications
// Name of method: getTwinPrimes()
// Arguments: two arguments of type integer
// Return Type: an integer array value
// Specifications: The value returned by the method getTwinPrimes() is determined by the following rules
// Twin primes are two prime numbers with a difference of 2. For example, 11 and 13 are twin primes.
// But 13 and 17 are not.
// This method should return the list of twin primes in the following format
// Ex:- 11,13;17,19; (Each prime should be separated by a comma and each pair or primes should be separated by
// a semi-colon)
// if the given inputs are negative, return "Error"
// if the given inputs are greater than 100, return "Error"
// if the inputs num1 is greater than or equal to num2 return "Error"
// if there are no primes between the given inputs return the String "No Twin Primes Found"
// Note: that a pair of primes should be listed only if BOTH the numbers fall inside the given range,
//If only one number falls in the given range, do not list that pair

// function getTwinPrimes(number1, number2){
//     let twinPrimeNumbersArray = []
//     if(number1<0 || number2<0){
//         return "Error"
//     }
//     else if(number1>100 || number2>100){
//         return "Error"
//     }
//     else if(number1>=number2){
//         return "Error"
//     }
//     else{
//         let isprime = false;
//         let primeNumbersArray = [];
//         for(let i=number1+1; i<number2; i++){
//                for(let j=2; j<i; j++){
//                     if(i%j == 0){
//                     isprime = true
//                     }
//                 }
//                 if(isprime){
//                     isprime = false;
//                 }else{
//                     primeNumbersArray.push(i)
//                 }
//         }
//         for(let i in primeNumbersArray){
//             if(primeNumbersArray[+i+1]-primeNumbersArray[+i] == 2){
//                 twinPrimeNumbersArray.push(primeNumbersArray[+i], primeNumbersArray[+i+1]);
//                 twinPrimeNumbersArray.push(';')
//             }
//         }
//         if(twinPrimeNumbersArray.length<=1){
//             return "No Twin Primes Found"
//         }else{
//             return twinPrimeNumbersArray
//         }
//     }
// }
// console.log(getTwinPrimes(10, 20));

// Define a method that returns the Odd palindrome numbers as a string.
// Example
// If Input: 100, 200
// Output: 101,111,121,131,141,151,161,171,181,191
// Write the method with the following specifications
// Name of method: getOddPalindromeList()
// Arguments: Two arguments of type integer
// Return Type: A String value
// Specifications: The value returned by the method getOddPalindromeList() is determined by the following rules
// If the given number is negative or zero, return "Error"
// If the input is not in between 100 and 999 (including both), then return the String "Error".
// If the numbers are not in this range OR if startNum is greater than endNum, then return the String "Error".
// If there are no palindromes in between the given numbers, then return an empty string.

// function getOddPalindromeList(number1, number2){
//     let palindrome_String = ""
//     if(number1<=0||number2<=0){
//         return "Error"
//     }else if(number1 <100 || number2>999){
//         return "Error"
//     }else if(number1>=number2){
//         return "Error"
//     }else{
//         for(let i=number1; i<=number2; i++){
//             let val = String(i).split('').reverse().join('');
//             if(i%2 == 1 && String(i) == val){
//                 palindrome_String = palindrome_String + val+",";
//             }
//         };
//         let val = palindrome_String.split(',');
//         val.splice(val.length-1, 1);
//         palindrome_String = val.join(',');
//         return palindrome_String
//     }
// }
// console.log(getOddPalindromeList(100,200));

// Define a method that returns Collatz sequence for a given input value.
// Note: To get a Collatz sequence from a number, if it's even, divides it by two, and if it's odd,
//  multiply it by three and add one. Continue the operation on the result of the previous operation until the number becomes 1.
// Write the method with the following specifications
// Name of method: getCollatzSequence(int num) // which accepts an integer value as an argument and returns a string.
// Arguments: one argument of type integer
// Return Type: string
// Specifications: The value returned by the method getCollatzSequence() is determined by the following rules
// If the given value is 5, return a string of Collatz Sequence as 5 16 8 4 2 1
// If the given value is negative, return "Error"
// Note
// At each stage, you must add the numbers to the output string and form the output as shown above.
// The numbers in the output string must be separated by a space as shown above.
// The output must include the given number and 1.
// If the number does not converge to 1 in 100 tries the return the String "Does not Converge".

// let output_String = ""
// let Input_number = 5;
// let duplicatingInput_numbet = Input_number
// function getCollatzSequence(number){
//     if(number<0){
//         return "Error"
//     }
//     else if(number%2 == 1){
//         number = number*3+1;
//         if(number<1 || number>100){
//             output_String = "Does not Converge"
//             return output_String
//         }else{
//             output_String = output_String+number+" ";
//         }
//         if(number>1){
//             getCollatzSequence(number)
//         }
//     }else if(number%2 == 0){
//         number =number/2;
//         if(number<1 || number>100){
//             output_String = "Does not Converge"
//             return output_String
//         }else{
//             output_String = output_String+number+" ";
//         }
//         if(number>1){
//             getCollatzSequence(number)
//         }
//     }
//     if(number == 1){
//         output_String = duplicatingInput_numbet +" "+ output_String;
//     }
//     return output_String
// }
// console.log(getCollatzSequence(Input_number))

// In Cricket-one day or T20, we often state the required score and the scoring rate. there are two ways to say it
// a) 127 runs in 21.4 overs
// b) 56 runs in 48 balls
// The rule to decide which way to do it is as follows: if the number of runs required or the number of balls
// remaining is less than 100 use type (b), else use type (a).
// A class called CricketScores is given to you. Implement a method called getDisplayDetails(int runs, float Overs)
// .This method should take the runs remaining and overs remaining.It should calculate the remaining overs and runs
// as per the logic given above and return the result String.
// int runs: the required runs
// float overs: a decimal number in the format overs. balls (example 21.4)
// This function must return a string of the right type, combined with the run rate required.
// Thus the output will be either:
// "XXX runs in ZZZ Overs @ YYY runs per over"
// or
// "XXX runs in WW balls @ YYY runs per ball"
// NOTE:  21.4 overs implies 21 overs and 4 balls. The 0.4 is not to be taken as a regular fraction of an over.
// The XXX is an integer number, ZZZ is overs.balls figure, WW is integer number and YYY is a floating point
// number upto two decimals.
// An example output would be
// 33 runs in 20 balls @ 1.5 runs per ball
// 130 runs in 20.4 Overs @ 6.12 runs per over

// function getDisplayDetails(a, b) {
//   let c = String(b).split(".");
//   let balls = Number(c[0]) * 6 + Number(c[1]);
//   let runrate = a / b;
//   if (a > 100 || balls > 100) {
//     return (
//       a +
//       " " +
//       "runs in" +
//       " " +
//       b +
//       " " +
//       "overs @" +
//       " " +
//       runrate +
//       " " +
//       "runs per over"
//     );
//   } else {
//     return (
//       a +
//       " " +
//       "runs in" +
//       " " +
//       b +
//       " " +
//       "balls @" +
//       " " +
//       runrate +
//       " " +
//       "runs per ball"
//     );
//   }
// }
// let res = getDisplayDetails(130, 20.4);
// console.log(res);

// Define a method that returns the string starting with a given number reverses it and adds it to the number.
// This procedure when repeated leads to a palindromic number for almost all numbers.
// Example
// if the input is 165
// Output is 165, 561, 726, 627, 1353, 3531, 4884
// The last number is a PALINDROME
// The logic to use in this method is
// 1. Take the given input number
// 2. Stop if the number is a palindrome. Otherwise, go to Step 3
// 3. Reverse that number and add it to the number. Go to Step 2.
// At each stage, you must add the numbers to the output string and form the output as shown above.
// The numbers in the output string must be separated by a comma as shown above.
// Write the method with the following specifications
// Name of method: getPalindromeList()
// Arguments: one argument of type integer
// Return Type: a string value
// Specifications: The value returned by the method getPalindromeList() is determined by the following rules
// If the given number is negative or zero, return "Error"
// If the input is not in this between 100 and 999 (including both), then return the String "Error".
// If the input number is not a 3-digit number it should print "Error"
// If a number does not converge to a palindrome within 10 tries, the program should print the 20 values and stop.
// If the input number is already a palindrome, the program should print it once and stop.

// function getPalindromeList(a) {
//     let b = String(a);
//     if (a <= 0) {
//       return "Error1";
//     } else if (a < 100 || a > 999) {
//       return "Error";
//     } else if (b.length != 3) {
//       return "Error";
//     } else {
//       let newarray = [];
//       newarray.push(a);
//       let pallinfromarray='';
//       pallinfromarray += a + ",";
//       result = Number(String(a).split("").reverse().join(""));
//       pallinfromarray += result + ",";
//       newarray.push(result);
//       if (a == result) {
//         pallinfromarray += result + ",";
//       } else {
//         let f = a + result;
//         pallinfromarray += f + ",";
//         newarray.push(f);
//         pallin(f);
//       }
//       function pallin(H) {
//         result = Number(String(H).split("").reverse().join(""));
//         if (H != result) {
//           pallinfromarray += result + ",";
//           newarray.push(result);
//         }
//         if (H == result) {
//         } else {
//           let j = H + result;
//           pallinfromarray += j + ",";
//           newarray.push(j);
//           if (newarray.length != 20) {
//             pallin(j);
//           } else {
//             console.log(newarray);
//             return newarray;
//           }
//         }
//       }
//       if (newarray.length != 20) {
//         return pallinfromarray;
//       } else {
//         return newarray;
//       }
//     }
//   }
//   console.log(getPalindromeList(165));

// Just unlikely merge Sort, QuickSort is a divide and conquer algorithm. It picks an element as a pivot and
// partitions the given array around the picked pivot. There are many different versions of quickSort that pick
// pivot in different ways.
// Always pick the first element as a pivot
// Always pick the last element as a pivot
// Pick a random element as a pivot
// Pick median as a pivot
// Here we will be picking the last element as a pivot. The key process in quickSort is partition().
// Target of partitions is, given an array and an element ‘x’ of array as a pivot, put x at its correct
//  position in a sorted array and put all smaller elements (smaller than x) before x, and put all greater
//   elements (greater than x) after x. All this should be done in linear time.

// function quicksort(array) {
// 	if (array.length <= 1) {
// 		return array;
// 	} else {
// 		let pivot = array[0];
// 		let left = [];
// 		let right = [];
// 		for (let i = 1; i < array.length; i++) {
// 			if (array[i] < pivot) {
// 				left.push(array[i]);
// 			} else {
// 				right.push(array[i]);
// 			}
// 		}
// 		return quicksort(left).concat(pivot, quicksort(right));
// 	}
// }
// let array = [10, 5, 2, 3, 7, 6, 8, 9, 1, 4];
// let sortedArray = quicksort(array);
// console.log(sortedArray);

// Python Program for Recursive Insertion Sort(python)
// Insertion sort is a simple sorting algorithm that works the way we sort playing cards in our hands.
// Below is an iterative algorithm for insertion sort

// let insertionSorted_Array = []
// function insertionSort(arr, n)
// {
// 	let i, key, j;
// 	for (i = 1; i < n; i++)
// 	{
// 		key = arr[i];
// 		j = i - 1;
// 		while (j >= 0 && arr[j] > key)
// 		{
// 			arr[j + 1] = arr[j];
// 			j = j - 1;
// 		}
// 		arr[j + 1] = key;
// 	}
// }
// function printArray(arr, n){
// 	let i;
// 	for (i = 0; i < n; i++)
//         insertionSorted_Array.push(arr[i])
//     return insertionSorted_Array
// }
// let arr = [12, 11, 13, 5, 6 ];
// let n = arr.length;
// insertionSort(arr, n);
// console.log(printArray(arr, n))

// The Insertion sort is a straightforward and more efficient algorithm than the previous bubble sort algorithm.
// The insertion sort algorithm concept is based on the deck of the card where we sort the playing card according
// to a particular card. It has many advantages, but there are many efficient algorithms available in the data
// structure.
// While the card-playing, we compare the hands of cards with each other. Most of the player likes to sort
// the card in the ascending order so they can quickly see which combinations they have at their disposal.
// The insertion sort implementation is easy and simple because it's generally taught in the beginning
// programming lesson. It is an in-place and stable algorithm that is more beneficial for nearly-sorted
// or fewer elements.
// The insertion sort algorithm is not so fast because of it uses nested loop for sort the elements.

// function insertionSort(arr) {
//     for (let i = 1; i < arr.length; i++) {
//       let currentValue = arr[i]
//       let j
//       for (j = i - 1; j >= 0 && arr[j] > currentValue; j--) {
//         arr[j + 1] = arr[j]
//       }
//       arr[j + 1] = currentValue
//     }
//     return arr
//   }
//   console.log(insertionSort([2, 1, 3, 7, 5]))

// Write code for decrypting given text
// Explanation
// The plain Text string is  "abcdefghijklmnopqrstuvwxyz";
// The Cipher Text string is "zyxwvutsrqponmlkjihgfedcba";
// if the input is "zyx", that need to be changed to "abc".
// Input: zyx
// Output: abc
// index of "z" in cipher text is equal to the index of "a" in plain text
// index of "y" is cipher text equal to the index of "b" in plain text and so on.
// The cipher text character from the given string should be changed to a plain text character with the same index.
// Method details are as follows
// Method name : decrypt() // accepts a string and returns plain text
// Arguments  : one String
// return type: one String
// The method should meet the following functional requirements
// 1. Return decoded string for a given string
// 2. Return null, if the input contains special characters or digits

// function decrypt(a) {
//   let apphastr = "abcdefghijklmnopqrstuvwxyz";
//   let alphArr = apphastr.split("");
//   let specialArr = ["@", "#", "!", "#$", "%", "^", "&", "*"];
//   let numberstr = "0123456789";
//   let numArr = numberstr.split("");
//   let outStr = "";
//   for (i of a) {
//     if (specialArr.includes(i) || numArr.includes(i)) {
//       return null;
//     } else {
//       let newIndex = alphArr.indexOf(i);
//       let findvalue = alphArr.length - newIndex;
//       outStr += alphArr[findvalue - 1]; //  console.log(findvalue)
//     }
//   }
//   return outStr;
// }
// let res = decrypt("abc");
// console.log(res);

// Write a method that returns given a number of terms of the Fibonacci Sequence.
// Explanation
// Fibonacci Sequence: The Fibonacci Sequence is the series of numbers: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...
// The next number is found by adding up the two numbers before it.
// The method needs to be defined as follows
// Name of Method: getFibonacciSeries() // accepts an integer that is no of terms, and returns a string containing terms

// Arguments: one integer
// Return type: one String 
// The method should meet the following functional expectations
// 1. Method should return a string that contains given numbers terms of the Fibonacci Sequence.
// 2. Numbers must be separated by commas.
// 3. Method should be able to generate a series of inputs between 1 to 90.
// 4. Return null, If the input is zero or negative.


// let output_String = []
// function febonic(a) {
//   let count = 0;
//   let nextcount = 1;
//   if (a <= 0) {
//     return null;
//   } else {
//     for (let i = 1; i <= a; i++) {
//      output_String.push(count)
//       let data = count + nextcount;
//       count = nextcount;
//       nextcount = data;
//     }
//   }
// }
// febonic(7);
// output_String = output_String.join(',');
// console.log(output_String);



// Write code for encrypting given text 
// Explanation
// The plain text string is  "abcdefghijklmnopqrstuvwxyz";
// The Cipher Text string is "zyxwvutsrqponmlkjihgfedcba";
// if the input is "abc", that needs to be changed to "zyx".
// index of "a" in plain text is equal to the index of "z" in cipher text
// index of "b" in plain text is equal to the index of "y" in cipher text and so on.
// Plain text characters from the given string should be changed to cipher text characters with the same index.
// Method details are as follows
// Name of Method: encrypt() // accepts a string and returns an encoded string.
// Arguments: one String
// return type: one String
// The method should meet the following functional requirements
// 1. Return encoded string for a given string
// 2. Return null, if the input contains anything other than a-z.

// function encrypt(a) {
//   let apphastr = "abcdefghijklmnopqrstuvwxyz";
//   let alphArr = apphastr.split("");
//   let specialArr = ["@", "#", "!", "#$", "%", "^", "&", "*"];
//   let numberstr = "0123456789";
//   let numArr = numberstr.split("");
//   let outStr = "";
//   for (i of a) {
//     if (specialArr.includes(i) || numArr.includes(i)) {
//       return null;
//     } else {
//       let newIndex = alphArr.indexOf(i);
//       let findvalue = alphArr.length - newIndex;
//       outStr += alphArr[findvalue - 1]; //  console.log(findvalue)
//     }
//   }
//   return outStr;
// }
// let res = encrypt("abc");
// console.log(res);


// Fibonacci Sequence: The Fibonacci Sequence is a series of numbers: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ... 
// The next number is found by adding up the two numbers before it.
// The method needs to be defined as follows
// Name of Method: getNthTermOfFibonacciSeries() // accepts an integer and returns Nth term in the sequence
// Arguments: integer    
// Return type: integer     
// The method should meet the following functional expectations
// 1. Method should return the Nth term of the Fibonacci Sequence.
// 2. Return -1, If the input is zero or negative.
// Sample I/O
// Input : 4
// Output : 2
// Input : 7
// Output : 8 


// let output_String = []
// function getNthTermOfFibonacciSeries(a) {
//   let count = 0;
//   let nextcount = 1;
//   if (a <= 0) {
//     return null;
//   } else {
//     for (let i = 1; i <= a; i++) {
//      output_String.push(count)
//       let data = count + nextcount;
//       count = nextcount;
//       nextcount = data;
//     }
//   }
// }
// getNthTermOfFibonacciSeries(7);
// output_String = output_String[output_String.length-1];
// console.log(output_String);




// In Cricket-one day or T20, we often state the required score and the scoring rate. there are two ways to say
//  it
// a) 127 runs in 21.4 overs
// b) 56 runs in 48 balls
// The rule to decide which way to do it is as follows: if the number of runs required or the number of balls 
// remaining is less than 100 use type (b), else use type (a).
// A class called CricketScores is given to you. Implement a method called getDisplayDetails(int runs, float Overs). 
// This method should take the runs remaining and overs remaining.It should calculate the remaining overs and runs as 
// per the logic given above and return the result String.
// int runs: the required runs
// float overs: a decimal number in the format overs. balls (example 21.4)
// This function must return a string of the right type, combined with the run rate required. 
// Thus the output will be either:
// "XXX runs in ZZZ Overs @ YYY runs per over"
// or
// "XXX runs in WW balls @ YYY runs per ball"
// NOTE:  21.4 overs implies 21 overs and 4 balls. The 0.4 is not to be taken as a regular fraction of an over.
//  The XXX is an integer number, ZZZ is over. balls figure, WW is an integer number and YYY is a floating point
// number up to two decimals.
// An example output would be
// 33 runs in 20 balls @ 1.5 runs per ball
// 130 runs in 20.4 Overs @ 6.12 runs per over


// function getDisplayDetails(a, b) {
//   let c = String(b).split(".");
//   let balls = Number(c[0]) * 6 + Number(c[1]);
//   let runrate = a / b;
//   if (a > 100 || balls > 100) {
//     return (
//       a +
//       " " +
//       "runs in" +
//       " " +
//       b +
//       " " +
//       "overs @" +
//       " " +
//       runrate +
//       " " +
//       "runs per over"
//     );
//   } else {
//     return (
//       a +
//       " " +
//       "runs in" +
//       " " +
//       b +
//       " " +
//       "balls @" +
//       " " +
//       runrate +
//       " " +
//       "runs per ball"
//     );
//   }
// }
// let res = getDisplayDetails(130, 20.4);
// console.log(res);


let arr = [1,20,3,7,4,5,8,10];
// let output =[];
// let val = arr.sort((a,b)=>{return a-b});
// for(let i = val[0]; i<=val[val.length-1]; i++){
//     console.log(i);
    
// }



