// Define a method that accepts 2 values as numbers and returns the prime numbers between the values.

// Write the method with the following specifications
// Name of method getPrimeNumbers() 
// Arguments: two arguments of type integers
// Return Type: String value 
// Specifications: The value returned by the method getPrimeNumbers() is determined by the following rules
// The value must not be negative. If yes, then return -1 as a string.                                                               
// 1st value must not be greater than or equal to 2nd value. If yes, then return -2 as a string.                                       
// Prime Numbers must be returned as one string with every value separated by a single blankspace.

// let getPrimeNumbers_String = ""
// function getPrimeNumbers(number1, number2){
//     let isprime = false;
//     if(number1<0 || number2<0){
//         return "-1"
//     }else if(number1>=number2){
//         return "-2"
//     }else{
//         if(number1 == 1){
//             getPrimeNumbers_String = getPrimeNumbers_String + "1" + " "
//         }else if(number1>1){
//             number1 = number1 +1
//             for(let i=2; i<number1; i++){
//                 if(number1%i == 0){
//                     isprime = true
//                 }
//             }
//             if(!isprime){
//                 getPrimeNumbers_String = getPrimeNumbers_String + String(number1)+" ";
//             }
//             if(number1<number2){
//                 getPrimeNumbers(number1+1, number2)
//             }
//         }
//         return getPrimeNumbers_String
//     }
// }
// console.log(getPrimeNumbers(10,20));


// Define a method that accepts 2 values as strings and returns a weaved string.

// Write the method with the following specifications

// Name of method getWeavedString() 

// Arguments: two arguments of type strings

// Return Type: a string value 

// Specifications: The value returned by the method getWeavedString() is determined by the following rules

// Values must not be blank. If yes, then return -1 as a string.                                          

// If value1 is greater than value2 in length, then return a concatenated string that looks like value2+value1+value2.        

// If value1 is smaller than value2 in length, then return a concatenated string that looks like value1+value2+value1.        

// If value1 is equal to value2 in length, then return a concatenated string that contains each character from both the values at the same position. For e.g."Hello"  "Hello"  result = "HHeelloo"



// function getWeavedString(string1, string2){
//     let outputString = ""
//     if(string1 == ''|| string2 == ''){
//         return "-1"
//     }else if(string1.length>string2.length){
//         outputString = outputString + string2+string1+string2;
//         return outputString
//     }else if(string2.length>string1.length){
//         outputString = outputString + string1+string2+string1;
//         return outputString
//     }else if(string1 == string2){
//         let str = ""
//         for(let i in string1){
//             for(let j in string2){
//                 if(i == j && string1[i] == string2[j]){
//                     str = str + string1[i]+string2[j]
//                 }
//             }
//         };
//         outputString = outputString + str
//         return outputString
//     }
// }
// console.log(getWeavedString("venkat", "vinay"));


// Define a method that accepts two integer values as arguments and returns the sum of prime numbers between the given range.

// Note: 1 is not a prime

// Write the method with the following specifications

// Name of method getPrimeNumbersSum() // which accepts two integer values as argument and return the sum of all prime number between the range.

// Arguments: two arguments of type integer

// Return Type: an integer value

// Specifications: The value returned by the method getPrimeNumbersSum() is determined by the following rules

// In any of the input, value is negative, return -1

// In any of the input, value is zero, return -2

// If the first value is greater than or equal to a second value, return - 3.



// let getPrimeNumbers_Sum = 0
// function getPrimeNumbersSum(number1, number2){
//     let isprime = false;
//     if(number1<0 || number2<0){
//         return "-1"
//     }else if(number1==0 || number2 == 0){
//         return "-2"
//     }else if(number1>=number2){
//         return "-3"
//     }else{
//         if(number1 == 1){

//         }else if(number1>1){
//             number1 = number1 +1
//             for(let i=2; i<number1; i++){
//                 if(number1%i == 0){
//                     isprime = true
//                 }
//             }
//             if(!isprime){
//                 getPrimeNumbers_Sum = getPrimeNumbers_Sum + number1
//                 console.log(number1);
//             }
//             if(number1<number2){
//                 getPrimeNumbersSum(number1+1, number2)
//             }
//         }
//         return getPrimeNumbers_Sum
//     }
// }
// console.log(getPrimeNumbersSum(10,20));



// Define a method that returns the square of the given value
// Write the method with the following specifications
// Name of method getSquare() 
// Arguments: one argument of type integer
// Return Type: an integer value 
// Specifications: The value returned by the method getSquare() is determined by the following rules
// if the given number is 0, return -1 
// if the given number is a negative value, return -2
// for any positive value return square of the number

// function getSquare(number){
//     if(number==0){
//         return -1
//     }else if(number<0){
//         return -2
//     }else{
//         return number*number
//     }
// }
// console.log(getSquare(5));



// Define a method that accepts an array of numbers and returns the sum of unique numbers from the array.
// Write the method with the following specifications
// Name of method sumOfArray() 
// Arguments: one argument of a type integer array
// Return Type: an integer value
// Specifications: The value returned by the method sumOfArray() is determined by the following rules
// The array must not be null or the length must not be 0. If yes, then return -1                                                               
// The array must not contain negative values. If yes, then return -2
// Input: {1, 2, 3, 2, 4, 1}
// Output: 10;

// function sumOfArray(array){
//     let array_sum = 0;
//     array = new Set(array);
//     // console.log(array);
//     if(array.length == 0){
//         return -1
//     }else if(array == null){
//         return -1
//     }else {
//         for(let i of array){
//             if(i<0){
//                 return -2
//             }else{
//                 array_sum = array_sum + i
//             }
//         }
//         return array_sum
//     }
// }
// console.log(sumOfArray([1, 2, 3, 2, 4, 1]))


// Define a method that adds two numbers.
// Write the method with the following specifications
// Name of method: getSum()
// Arguments: Two integers
// Return Type: String
// This method must take two integers and return the sum of those integers.
// If the input is negative or zero, return "Error". 
// If the input is positive, return the sum of integers

// function getSum(number1, number2){
//     if(number1<=0||number2<=0){
//         return "Error"
//     }else{
//         return String(number1+number2)
//     }
// }
// console.log(getSum(10,20));


// Linearsearch is a method of finding elements within a list. It is also called a sequential search.  
// It is the simplest searching algorithm because it searches the desired element in a sequential manner.It 
// compares each and every element with the value that we are searching for. If both are matched, the element 
// is found, and the algorithm returns the key's index position.


// function Linearsearch(array, target){
//     for(let i in array){
//         if(array[i] == target){
//             return +i
//         }
//     }
// }
// console.log(Linearsearch([1,2,3,4,5], 3));



// Bubble Sort is the simplest sorting algorithm that works by repeatedly swapping the adjacent
//  elements if they are in the wrong order. 

// function bubbleSort(array){
//     let sortedArray = array.sort((a,b)=>{return a-b})
//     return sortedArray
// }
// console.log(bubbleSort([8,2,1,10,12,11]));

// In a nutshell, this search algorithm takes advantage of a collection of elements that is already sorted by ignoring half of the elements after just one comparison. 

// Compare x with the middle element.
// If x matches with the middle element, we return the mid index.
// Else if x is greater than the mid element, then x can only lie in the right (greater) half subarray after the mid element. Then we apply the algorithm again for the right half.
// Else if x is smaller, the target x must lie in the left (lower) half. So we apply the algorithm for the left half.


// function binarySearch(array, target){
//     for(let i in array){
//         if(array[i] == target){
//             console.log(+i);
//         }
//     }
// }
// binarySearch([8,2,1,10,12,11], 12)


// A class FillMultiples is given to you.
// Implement logic for the following method
// method: public static int[] getMultiplesArray(int number). 
// This method should create a new integer array of size 10 and
// fill it with the multiples (multiples 1 to 10) of the given number. 
// and return the array.
// If the given number is negative or zero, return null.

// function getMultiplesArray(number){
//     let output_Array = [];
//     if(number<=0){
//         return null
//     }else{
//         for(let i=1; i<=10; i++){
//             output_Array.push(i*number)
//         }
//         return output_Array
//     }
// }
// console.log(getMultiplesArray(4));



// Define the method which accepts two integer arguments, an integer array, and an integer value, 
// //which return the number of time the given value exist in the array.
// Note: The elements in an array can be negative
// Name of Method: getCount() // Which returns the number of times the given value exists in the array.
// Arguments: Two arguments of an integer array and integer value to search
// Return Type: an integer value
// Specifications: The value returned by the method sumOfArray() is determined by the following rules
// If the array is empty or null, return -1
// In other case return the integer value, indicating the number of times the element exists in the array
 

// function getCount(array, searchElement){
//     let searchCount = 0;
//     if(array.length == 0 ||array == null){
//         return -1
//     }else{
//         for(let i of array){
//             if(i == searchElement){
//                 searchCount = searchCount + 1;
//             }
//         }
//         return searchCount; 
//     }
// }
// console.log(getCount([1,1,2,2,1,3,3,4,5], 1));



// Merge sort is defined as a sorting algorithm that works by dividing an array into smaller subarrays,
// sorting each subarray,and then merging the sorted subarrays back together to form the final sorted array.

// function mergeSort(array1, array2){
//     let mergedArray = [...array1, ...array2];
//     mergedArray.sort((a,b)=>{return a-b});
//     let firstArray = mergedArray.splice(0,array1.length);
//     console.log(firstArray);
//     console.log(mergedArray);
// }
// mergeSort([1,10,11,2,3,33,4,15,16], [10,20,5]);


// Define a method which accepts 3 values as number and checks and returns the name of the type of triangle
// generated.
// Write the method with the following specifications
// Name of method findTriangle() 
// Arguments: three arguments of type integers
// Return Type: String value 
// Specifications: The value returned by the method findTriangle() is determined by the following rules
// Values must not be 0. If yes, then return -1 as string.                                                              
// Values must not be negative. If yes, then return       -2 as string.                                 
// Sum of two sides must be greater than the third side. If no, then return -3 as string
// If its a triangle with valid sides, then return as string  whether the triangle formed is EQUILATERAL, 
//ISOSCELES or SCALENE.
// function findTriangle(number1, number2, number3){
//         let valuesArray = [number1, number2, number3];
//         let output_Array = [];
//         if(number1+number2<number3){
//             return "-3"; 
//         }
//         else if(number2+number3<number1){
//             return "-3"; 
//         }
//         else if(number3+number1<number2){
//             return "-3"; 
//         }
//         else{
//             for(let i of valuesArray){
//                 if(i==0){
//                     return "-1";
//                 }else if(i<0){
//                     return "-2"
//                 }
//                 else if(output_Array.indexOf(i) == -1){
//                     output_Array.push(i);
//                 }
//             }
//             if(output_Array.length == 1){
//                 return "EQUILATERAL"
//             }else if(output_Array.length == 2){
//                 return "ISOSCELES"
//             }else if(output_Array.length == 3){
//                 return "SCALENE"
//             }
//         }
// }
// console.log(findTriangle(90,90,100));


// A class RussianMultiplication is given to you. 
// Implement the following method in that class
// public static int getProduct(int num1, int num2)
// If number is not positive then return -1. 
// Return the product of the two numbers. 
// Calculate the product using Russian multiplication process.
// Russian Multiplication 
// The Russian multiplication, also called the Russian peasant algorithm, uses a halving and doubling method
// to multiply whole numbers
// When halving, disregard any remainder. Just put the quotient in the halving column
// When the number in the halving column is 1, cross out all rows that have an even number in the halving
// column
// the answer is found by adding the remaining numbers in the doubling column
// Example # 1: 11 × 12 
// Halving                              Doubling

//    11                    ×                  12 

//    5                      ×                  24 

//    2                      ×                  48  ---> Disregard this since 2 is even

//    1                      ×                  96 

// The product of 11 and 12 is: 12 + 24 + 96 = 132 

// function RussianMultiplication(a, b){
//     let res = 0; 
//     while (b > 0){
//         if (b & 1)
//             res = res + a;
//         a = a << 1;
//         b = b >> 1;
//     }
//     return res;
// }
// console.log(RussianMultiplication(11, 12));





