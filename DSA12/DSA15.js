// Given an integer array, find a subarray having a given sum in it.
// For example,
// Input:  nums[] = {2, 6, 0, 9, 7, 3, 1, 4, 1, 10}, target = 15
// Output: {6, 0, 9};
// Input:  nums[] = {0, 5, -7, 1, -4, 7, 6, 1, 4, 1, 10}, target = 15
// Output: {1, -4, 7, 6, 1, 4} or {4, 1, 10}
// Input:  nums[] = {0, 5, -7, 1, -4, 7, 6, 1, 4, 1, 10}, target = -3
// Output: {1, -4} or {-7, 1, -4, 7}


// let input_Array = [0, 5, -7, 1, -4, 7, 6, 1, 4, 1, 10];
// let target = -3;
// for(let i=0; i<input_Array.length; i++){
//     let initial_Sum = 0
//     for(let j=i; j<input_Array.length; j++){
//         initial_Sum = initial_Sum + input_Array[j];
//         if(initial_Sum == target){
//             let sumSubArray = input_Array.splice(i, j-i+1);
//             console.log(sumSubArray);
//             return
//         }
//     }
// }


// Write a Python program to combine two dictionary by adding values for common keys.
// d1 = {'a': 100, 'b': 200, 'c':300}
// d2 = {'a': 300, 'b': 200, 'd':400}
// Sample output: Counter({'a': 400, 'b': 400, 'd': 400, 'c': 300})

// let d1 = {'a': 100, 'b': 200, 'c':300};
// let d2 = {'a': 300, 'b': 200, 'd':400};
// let output_object = {}
// for(let i in d1){
//     for(let j in d2){
//         if(i == j){
//             output_object[i] = d1[i] + d2[j];
//         }
//     }
// };
// d1 = {...d1, ...d2};
// output_object = {...d1, ...output_object}
// console.log(output_object);


// Given an array where all its elements are sorted in increasing order except two swapped elements,
// sort it in linear time. Assume there are no duplicates in the array.
// For example,
// Input:  A[] = [3, 8, 6, 7, 5, 9] or [3, 5, 6, 9, 8, 7] or [3, 5, 7, 6, 8, 9]
// Output: A[] = [3, 5, 6, 7, 8, 9];


// let input_Array = [3, 8, 6, 7, 5, 9];
// let output_array = input_Array.sort((a,b)=>{return a-b});
// console.log(output_array);



// Write a Python program to multiply all the items in a dictionary.
// i/p: my_dict = {'data1':100,'data2':-54,'data3':247}
// o/p:-1333800 ;

// let my_dict = {'data1':100,'data2':-54,'data3':247};
// let productOfValues = 1;
// Object.values(my_dict).forEach(ele=>{
//     productOfValues = productOfValues * ele
// });
// console.log(productOfValues);


// Define a method that accepts a 4-digit value as a number and checks whether the number is Armstrong.
// Write the method with the following specifications: 
// Name of method checkArmStrong() // which accepts an integer value as an argument and returns the String as specified below.
// Arguments: one argument of type integer
// Return Type: a String value
// Specifications: The value returned by the method checkArmStrong() is determined by the following rules:
// If the input value is negative, return "-1" as a string.
// If the input value is not a 4-digit number, return "-2" as a string.
// If the input value is a 4-digit number and is an Armstrong, return "ArmStrong Number" as a string otherwise return "Not ArmStrong Number" as a string.

// function checkArmStrong(number){  
//     number = String(number).split('');
//     if(number<0){
//         return "-1"
//     }else if(number.length != 4){
//         return "-2"
//     }else if(number.length == 4){
//        let ArmstrongCheck  = 0
//         for(let i of number){
//             ArmstrongCheck = ArmstrongCheck + i**number.length;
//         }
//         if(ArmstrongCheck == +number.join('')){
//             return "ArmStrong Number"
//         }else{
//             return "Not ArmStrong Number"
//         }
//     }
// }
// console.log(checkArmStrong(1634));


// Define a method that accepts 1 numeric argument and returns a String of stars (*).
// For instance, if the given input is 3, then the First line must have One star, Second Line Two stars,
//  Third line has Three Stars.  
// Write the method with the following specifications
// Name of method : createStarPattern()
// Arguments: 1 Integer Argument           // Represents Number of Rows.
// Return Type: A String value
// The value must not be negative. If yes, then return -1 as a string.                        
// The value must not be 0. If yes, then return -2 as a string.                              
// The pattern must be created using a star symbol separated by a single blank space.
// Example :
// Input: 4

// function createStarPattern(number){
//     let output_String = ""
//     if(number<0){
//         return "-1"
//     }else if(number == 0){
//         return "-2"
//     }else{
//         for(let i=1; i<=number; i++){
//            let star = generateStars(i);
//            output_String = output_String + star+'\n'
//         }
//         return output_String
//     }
//     function generateStars(number){
//         let generatingStar = ''
//         for(let i=0; i<number; i++){
//             generatingStar = generatingStar+"*"+" "
//         }
//         return generatingStar
//     }
// }
// console.log(createStarPattern(4));


// Define a method that accepts 1 numeric argument and returns a pattern of numbers as a string.
// Write the method with the following specifications
// Name of method: NumberPattern4()
// Arguments: 1 Integer Argument // Represents Number of Rows.
// Return Type: A String value
// The value must not be negative. If yes, then return -1 as a string.
// The value must not be 0. If yes, then return -2 as a string.
// Value is rows.
// The pattern must be created using numbers separated by single blank space 
// Example :
// Input: 5


// function NumberPattern4(number){
//     let output_String = ""
//     if(number<0){
//         return "-1"
//     }else if(number == 0){
//         return "-2"
//     }else{
//         for(let i=1; i<=number; i++){
//            let individualString = generateSingilePattern(i);
//            output_String = output_String + individualString+'\n'
//         }
//         return output_String
//     }
//     function generateSingilePattern(number){
//         let generatingSinglelineString = ''
//         for(let i=1; i<=number; i++){
//             generatingSinglelineString = generatingSinglelineString+String(number*i)+" "
//         }
//         return generatingSinglelineString
//     }
// }
// console.log(NumberPattern4(5));


// Define a method that accepts 2 values as numbers and returns the even numbers between the 2 values.
// Note: If the first argument value is greater than the second value, generate even numbers from the first value to the second value. 
//If the second value is less than the first value, generate even numbers from the second value to the first.
// Write the method with the following specifications
// Name of method getEvenNumbers() // which accepts 2 integer values as arguments and return the even numbers between the range.
// Arguments: Two arguments of type integer
// Return Type: String value
// Specifications: The value returned by the method getEvenNumbers() is determined by the following rules
// Values must not be negative. If yes, then return   -1 as a string.                                                   
// The value must not be 0 or the same. If yes, then return -2 as a string.                                            
// The values must be returned as a single string where each value is separated by a single blank space.
// For Example:
// Input: 10 20
// Output: 10 12 14 16 18 20
// Input: 20 10
// Output: 10 12 14 16 18 20;

// function getEvenNumbers(number1, number2){
//     let output_String = ""
//     if(number1 <0 || number2 <0){
//         return "-1"
//     }else if(number1 == 0 || number2 == 0){
//         return "-2"
//     }else if(number1<number2){
//         for(let i=number1; i<=number2; i++){
//             if(i%2 == 0){
//                 output_String = output_String + String(i) + " "
//             }
//         }
//     }else if(number2<number1){
//         for(let i=number2; i<=number1; i++){
//             if(i%2 == 0){
//                 output_String = output_String + String(i) + " "
//             }
//         }
//     }
//     return output_String
// }
// console.log(getEvenNumbers(10, 20));


// Define a method that accepts an integer value as argument and returns the factors of the given value.
// Write the method with the following specifications:
// Name of method getFactors() // which accepts an integer value as an argument and return a String.
// Arguments: one argument of type integer
// Return Type: String value
// Input: 28
// Output: "1 2 4 7 14 28"
// Input: -20
// Output: "-1"
// Input: 0
// Output: "-2"
// Specifications: The value returned by the method getFactors() is determined by the following rules:
// 1) If the value is negative, return "-1" as a string
// 2) If the value is zero, return "-2" as a string
// 3) In other cases, return the string, concatenating all the factors of the given number separating each factor with a blank space.


// function getFactors(number){
//     let output_String = "";
//     if(number<0){
//         return "-1"
//     }else if(number == 0){
//         return "-2"
//     }else{
//         for(let i=1; i<=number; i++){
//             if(number%i == 0){
//                 output_String = output_String + String(i) + ' '
//             }
//         }
//         return output_String
//     }
// }
// console.log(getFactors(28));

// Define a Method that checks for whether a given input is a prime number or not, and return a string.
// Write the method with the following specifications
// Name of method: checkPrime()
// Arguments: 1 Integer Argument 
// Return Type: A String value
// The value must not be negative. If yes, then return -1 as a string.
// The value must not be 0 or 1. If yes, then return -2 as a string.
// If the value is a prime number, then return true as a string otherwise return false as a string.

// function checkPrime (number) {
//     let isprime = false;
//     if(number<0){
//         return "-1"
//     }else if(number == 0 || number == 1){
//         return "-2"
//     }else{
//         for(let i=2; i<number; i++){
//             if(number%i == 0){
//                 isprime = true
//             }
//         }
//     }
//     if(isprime){
//         return "false"
//     }else{
//         return "true"
//     }
// }
// console.log(checkPrime(7));


// Define a method that accepts a value as a number and returns the factorial of the value.
// Write the method with the following specifications
// Name of method getFactorial() which accepts an integer value as an argument and return the factorial of the
//  given value.
// Arguments: one argument of type integer
// Return Type: an integer value
// Specifications: The value returned by the method getFactorial() is determined by the following rules
// Value must not be negative. If yes, then return   -1           
// Value must not be 0. If yes, then return -2


// function getFactorial(number){
//     let factorial = 1;
//     if(number<0){
//         return "-1"
//     }else if(number == 0){
//         return "-2"
//     }else{
//         for(let i =1; i<=number; i++){
//             factorial = factorial*i
//         }
//         return factorial
//     }
// }
// console.log(getFactorial(5));

// Define a method that accepts a value as a number and returns the sum of factors of the value.

// Write the method with the following specifications

// Name of method getSumOfFactors() // which accepts an integer value as an argument and returns an Integer.

// Arguments: one argument of type integer

// Return Type: integer value

// Specifications: The value returned by the method getSumOfFactors() is determined by the following rules

// The value must not be negative. If yes, then return   -1             

// The value must not be 0. If yes, then return -2.



// function getSumOfFactors(number){
//     let factorial = 0;
//     if(number<0){
//         return "-1"
//     }else if(number == 0){
//         return "-2"
//     }else{
//         for(let i =1; i<=number; i++){
//             factorial = factorial +i
//         }
//         return factorial
//     }
// }
// console.log(getSumOfFactors(2));


// Define a method that accepts 2 numeric arguments and returns a box of the same size as a string with an asterisk '*' symbol.
// Write the method with the following specifications
// Name of method: createBoxPattern()
// Arguments: 2 Integer Arguments // 1st argument represents Number of Rows.
//                              // 2nd argument represents Numbe of Columns.
// Return Type : A String value
// Value must not be negative. If yes, then return -1 as string.                    
// 2) Value must not be 0. If yes, then return -2 as string.                            
// 1st value is rows and 2nd value is columns.
// Box must be created using star symbol separated using a single blankspace for e.g. 
// 1st value=4 & 2nd value=5 then output must be        

//  *  *  *  *  *

//  *              *

//  *              *

//  *  *  *  *  *

// function createBoxPattern(number1, number2){
//     let output_String = "";
//     for(let i=0; i<number1; i++){
//         let str = ""
//         if(i == 0){
//             for(let j=0; j<number2; j++){
//                 str = str + "*"+" "
//             }
//             output_String = output_String + str+ '\n'+'\n'
//             str = ""
//         }
//         else if(i == number1 -1){
//             for(let j=0; j<number2; j++){
//                 str = str + "*"+" "      
//             }
//             output_String = output_String + str+ '\n'
//             str = ""
//         }
//         else{
//             console.log(number2);
//             for(let j=0; j<number2; j++){
//                 if(j == 0 ){
//                     str = str + "*"+' '
//                 }else if(j == number2-1){
//                     str = str + "*"+" "
//                 }else{
//                     str = str + " "+ " "
//                 } 
//             }
//             output_String = output_String + str+'\n'+'\n';
//             str = ''
//         }
//     }   
//     return output_String 
// }
// console.log(createBoxPattern(4,5));

// const firstArray = [

//     "8/2020",

//     "9/2020",

//     "10/2020",

//     "11/2020",

//     "12/2020",

//     "1/2021",

//     "2/2021",

//     "3/2021",

//     "4/2021",

//     "5/2021",

//     "6/2021",

//     "7/2021",

//     "8/2021",

//     "9/2021",

//     "10/2021",

//     "11/2021",

//     "12/2021",

//     "1/2022",

//     "2/2022",

//     "3/2022",

//     "4/2022",

//     "5/2022",

//     "8/2022",

//     "9/2022",

//     "10/2022",

//     "11/2022",

//     "12/2022",

//     "1/2023",

//     "2/2023",

//     "3/2023",

//     "4/2023"
// ];

// const secondArray = [

//     {

//         "monthOfYear": "9/2020",

//         "landing_count": 62
//     },

//     {

//         "monthOfYear": "10/2020",

//         "landing_count": 214
//     },

//     {

//         "monthOfYear": "11/2020",

//         "landing_count": 135
//     },

//     {

//         "monthOfYear": "12/2020",

//         "landing_count": 72
//     },

//     {

//         "monthOfYear": "1/2021",

//         "landing_count": 108
//     },

//     {

//         "monthOfYear": "2/2021",

//         "landing_count": 207
//     },

//     {

//         "monthOfYear": "3/2021",

//         "landing_count": 70
//     },

//     {

//         "monthOfYear": "4/2021",

//         "landing_count": 1
//     },

//     {

//         "monthOfYear": "5/2021",

//         "landing_count": 3
//     },

//     {

//         "monthOfYear": "6/2021",

//         "landing_count": 4
//     },

//     {

//         "monthOfYear": "7/2021",

//         "landing_count": 4
//     },

//     {

//         "monthOfYear": "8/2021",

//         "landing_count": 9
//     },

//     {

//         "monthOfYear": "9/2021",

//         "landing_count": 2
//     },

//     {

//         "monthOfYear": "10/2021",

//         "landing_count": 2
//     },

//     {

//         "monthOfYear": "11/2021",

//         "landing_count": 6
//     },

//     {

//         "monthOfYear": "12/2021",

//         "landing_count": 1
//     },

//     {

//         "monthOfYear": "10/2022",

//         "landing_count": 1
//     },

//     {

//         "monthOfYear": "2/2023",

//         "landing_count": 4
//     },

//     {

//         "monthOfYear": "3/2023",

//         "landing_count": 19
//     }

// ];
// let arr = [];
// let obj = {};
// secondArray.map(ele=>{
//     for(let i of firstArray){
//         if(ele.monthOfYear !==i){
//             return ele.monthOfYear
//          }
//         else if(i !== ele.monthOfYear){
           
//            if(arr.indexOf(i) == -1){
//                 arr.push(i)
//            }
//         }
//     }
// });
// console.log(val);
// console.log(val);

// arr.forEach(ele=>{
//     obj["monthOfYear"] = ele;
//     obj["landing_count"] = 0
//     val.push(obj);
//     obj = {}
// });
// console.log(val);

// Given a sorted array of distinct positive integers, print all triplets that forms an arithmetic progression with an integral common difference.

// An arithmetic progression is a sequence of numbers such that the difference between the consecutive terms is constant. For instance, sequence 5, 7, 9, 11, 13, 15, … is an arithmetic progression with a common difference of 2.

 
// For example,

// Input:  A[] = { 5, 8, 9, 11, 12, 15 }
 
// Output:
// 5 8 11
// 9 12 15
 
 
// Input:  A[] = { 1, 3, 5, 6, 8, 9, 15 }
 
// Output:
// 1 3 5
// 1 5 9
// 3 6 9
// 1 8 15
// 3 9 15


// function printAllAPTriplets( arr, n){
// 	const s = new Set()
// 	for (let i = 0; i < n - 1; i++)
// 	{
// 	for (let j = i + 1; j < n; j++)
// 	{
// 		let diff = arr[j] - arr[i];
// 		if (s.has(arr[i] - diff))
// 			console.log(arr[i] - diff +" " + arr[i]
// 				+ " " + arr[j]);
// 	}
// 	s.add(arr[i]);
// 	}
// }
// let arr = [ 1, 3, 5, 6, 8, 9, 15];
// let n = arr.length;
// printAllAPTriplets(arr, n);
