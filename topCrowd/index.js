// let arr =   [ 0, 0, 1, 0, 1, 0, 0 ]
 
// Output: Largest subarray is { 0, 1, 0, 1 } or { 1, 0, 1, 0 }
// let Output = []
// for(let i in arr){
//     if(arr[i]==0 && arr[+i+1] == 1){
//         Output.push(arr[i], arr[+i+1])
//     }

// }
// console.log(Output);



// Given an array of sorted integers that may contain several duplicate elements, 
//count the total number of distinct absolute values in it.
// For example,
// Input:  { -1, -1, 0, 1, 1, 1 }
// Output: The total number of distinct absolute values is 2 (0 and 1)
// Input:  { -2, -1, 0, 1, 2, 3 }
// Output: The total number of distinct absolute values is 4 (0, 1, 2 and 3)
// Input:  { -1, -1, -1, -1 }
// Output: The total number of distinct absolute values is 1 (only 1)


// let arr = [ -1, -1, 0, 1, 1, 1];
// let positiveValuesArr = []
// for(let i of arr){
//    if(positiveValuesArr.indexOf(Math.abs(i))==-1){
//     positiveValuesArr.push(Math.abs(i))
//    }
// };
// console.log("length of the distinct values is and distinct values array",
// positiveValuesArr.length, positiveValuesArr);



// Given an integer array, find the maximum difference between two elements 
//in it such that the smaller element appears before the larger element.

// For example,

// Input:  { 2, 7, 9, 5, 1, 3, 5 }
// Output: The maximum difference is 7.
// The pair is (2, 9)

// let arr = [2, 7, 9, 5, 1, 3, 5 ];
// let Output = [];
// let val = 0
// for(let i=0; i<=arr.length-1; i++){
//     for(let j=i; j<=arr.length-1; j++){
//         if(arr[j]-arr[i]>val){
//             val = arr[j]-arr[i];
//             Output.push([arr[i], arr[j]])
//         }
//     }
// }
// console.log("The maximum difference is", val,"Array is", Output[Output.length-1]);




// Find the smallest subarray length whose sum of elements is greater than `k`
// Given an integer array, find the maximum difference between two elements in
// it such that the smaller element appears before the larger element.
// For example,
// Input:  { 2, 7, 9, 5, 1, 3, 5 }
// Output: The maximum difference is 7.
// The pair is (2, 9)


// let arr = [2, 7, 9, 5, 1, 3, 5 ];
// let Output = [];
// let val = 0
// for(let i=0; i<=arr.length-1; i++){
//     for(let j=i; j<=arr.length-1; j++){
//         if(arr[j]-arr[i]>val){
//             val = arr[j]-arr[i];
//             Output.push([arr[i], arr[j]])
//         }
//     }
// }
// console.log("The maximum difference is", val,"Array is", Output[Output.length-1]);



// JPL programs;

// Write logic for moving array elements from left to right and last element to first position.
// Elements of array need to be moved by given no of positions.
// Define following method
// Name of Method : rotate
// Arguments :   integer array, integer (i. e no of positions)
// Return type : integer array
// Input : [1, 2, 3, 4] 1
// Output  : [4, 1, 2, 3]
// Input : [1, 2, 3, 4] 2
// Output  : [3, 4, 1, 2]
// Input : [1, 2, 3, 4] 3
// Output  : [2, 3, 4, 1]
// Method should meet the functional expectations
// 1. Move array element by given no of positions and return the array
// 2. Return null, if input is null
// 3. Return same array if no of positions is zero.
// Read the steps below carefully before you start.



//Write logic for moving character of a string from left to right and last character
// to first position.
//Characters of string need to be moved by given no of positions.
// Define following method
// Name of Method : rotate
// Arguments :   String, integer (i. e no_of_positions)
// Return type       : String
// Input : talent  1
// Output  : ttalen
// Input : talent  2
// Output  : nttale
// Input : talent  3
// Output  : enttal
// Method should meet the functional expectations
// 1. Move characters of string by given no of positions and return changed string
// 2. Return null, if input is null
// 3. Return same string, if no_of_positions is zero or Negative.
// 4. if no.of positions is exceeding no.of characters in string then return same string.
// Read the steps below carefully before you start



// Define a method which returns the sum of three numbers after rounding 
//off each number to the next multiple of 10. If any of the given number is
// multiple of 10 dont change it's value.
// For Example: 
// if value of X is 56 round it's value to 60
// if value of X is 30, don't change it's value.
// Write the method with the following specifications
// Name of method sumOfMultiples() // which accepts three integer value as argument 
//and return the sum of three numbers after rounding off each number to the next multiple of 10. 
// Arguments: three argument of type integer
// Return Type: an integer value 
// Specifications: The value returned by the method sumOfMultiples() is determined by 
//the following rules
// if any of the given number is negative or zero, return -1.
// in other case return the sum of all three rounded values.
// Example
// if a = 23, b = 34, c = 69
//    30 + 40 + 70 = 140
// if a = 23, b = 34, c = 50
//    30 + 40 + 50 = 120
// Read the steps below carefully before you start


// CHALLENGE DESCRIPTION
// Write a program to display twin prime numbers in the given range.

// let arr = [3, 4, 5, 6, 5, 6, 7, 7, 8, 9]
// let arr2 = []
// for(let i of arr){
//     if(arr2.indexOf(i) == -1){
//         arr2.push(i)
//     }
// }
// console.log(arr2);
// for(let i=0; i<=arr2.length-1; i++){
//     for(let j=i; j<=arr2.length-1; j++){
//         if(arr2[j]-arr2[i]>0){
//             console.log(arr2[j]-arr2[i]);
//         }
//     }
// }
// 12345
// let arr = []
// let arr1 = [3, 6, 7, 8, 10, 12, 15, 18, 100 ];
// let arr2 = [1, 2, 3, 5, 7, 9, 10, 11, 15, 16, 18, 25, 50 ];
// let obj = {}
// let Output = []
// function recursion(ind, secondArray){
//     for(let i of secondArray){
//         if(i == ele){
//             obj["count"] = (obj["count"] || 0)+1;
//             if(obj["count"]%2 === 0){
//                 recursion()
//             }else if(obj["count"]%2 === 1){
//                 recursion()
//             }
//         }
//     }
// }
// recursion(0, arr2)




// code for possible subarrays 

// let arr = [5,3,4,2,7];
// let n = arr.length;
// for(let i=0;i<n;i++){
//     for(j=0; j<n-i; j++){
//         let arr3 = []
//         for(let k=i; k<=i+j; k++){  
//             arr3.push(arr[k]);
//         }
//         console.log(arr3);
//         arr3 = []; 
//     }
// }




// 1)
// Reverse every consecutive `m`-elements of a subarray
// Given an array, reverse every group of consecutive m elements in a given subarray of it.
// For example,
// Consider the below array.
// A[] = { 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 },
// m = 3
// Then for subarray [i, j], where i and j is
// Input:  i = 1, j = 7 or 8
// Output: [1, 4, 3, 2, 7, 6, 5, 8, 9, 10]
// Input:  i = 1, j = 9
// Output: [1, 4, 3, 2, 7, 6, 5, 10, 9, 8]
// Input:  i = 3, j = 5
// Output: [1, 2, 3, 6, 5, 4, 7, 8, 9, 10]
// Input:  i = 3, j = 4
// Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
// let m = 3;
// let k=1 ;
// let j = 7;
// let Output = [];
// let val;
// for(let i=0; i<k; i++){
//     let val = arr.splice(0,1);
//     Output.push(...val);
// }
// val = j-Output.length;
// if(val<=1){
//     Output.push(...arr)
// }else{
//     function recursion(m, array){
//         let sma = array.splice(0,m)
//         sma = sma.reverse()
//         Output.push(...sma)
//         val = j-Output.length;
//         if(val>1){
//             recursion(m, array)
//         }else if(val<=1){
//             Output.push(...array)
//         }
//     }
//     recursion(3, arr);
// }
// console.log(Output);



// 2)
// Reverse every consecutive `m`-elements of a subarray
// Given an array, reverse every group of consecutive m elements in a given subarray of it.
// For example,
// Consider the below array.
// A[] = { 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 },
// m = 3
// Then for subarray [i, j], where i and j is
// Input:  i = 1, j = 7 or 8
// Output: [1, 4, 3, 2, 7, 6, 5, 8, 9, 10]
// Input:  i = 1, j = 9
// Output: [1, 4, 3, 2, 7, 6, 5, 10, 9, 8]
// Input:  i = 3, j = 5
// Output: [1, 2, 3, 6, 5, 4, 7, 8, 9, 10]
// Input:  i = 3, j = 4
// Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
// let m = 3;
// let k=1 ;
// let j = 7;
// let Output = [];
// let val;
// for(let i=0; i<k; i++){
//     let val = arr.splice(0,1);
//     Output.push(...val);
// }
// val = j-Output.length;
// if(val<=1){
//     Output.push(...arr)
// }else{
//     function recursion(m, array){
//         let sma = array.splice(0,m)
//         sma = sma.reverse()
//         Output.push(...sma)
//         val = j-Output.length;
//         if(val>1){
//             recursion(m, array)
//         }else if(val<=1){
//             Output.push(...array)
//         }
//     }
//     recursion(3, arr);
// }
// console.log(Output);



// 3)
// 4-sum problem: Given an unsorted integer array, check if it contains four elements
// tuple (quadruplets) having a given sum.
// For example,
// Input:
// nums = [ 2, 7, 4, 0, 9, 5, 1, 3 ]
// target = 20
// Output: Quadruplet exists. 
// Below are quadruplets with the given sum 20
// (0, 4, 7, 9)
// (1, 3, 7, 9)
// (2, 4, 5, 9)


// let arr =  [ 2, 7, 4, 0, 9, 5, 1, 3 ];
// let Output = []
// for(let i=0; i<=arr.length-1; i++){
//     let val = 0
//     for(let j=i; j<arr.length-1; j++){
//         val = val+arr[j]
//         if(val == 20){
//             Output = arr.splice(i,j)
//         }
//     }
// }
// Output.sort((a,b)=>{return a-b});
// console.log("The array which is having the sum of 20 is", Output);



// 4)
// 4-sum problem: Given an unsorted integer array, check if it contains four elements
// tuple (quadruplets) having a given sum.
// For example,
// Input:
// nums = [ 2, 7, 4, 0, 9, 5, 1, 3 ]
// target = 20
// Output: Quadruplet exists. 
// Below are quadruplets with the given sum 20
// (0, 4, 7, 9)
// (1, 3, 7, 9)
// (2, 4, 5, 9)


// let arr =  [ 2, 7, 4, 0, 9, 5, 1, 3 ];
// let Output = []
// for(let i=0; i<=arr.length-1; i++){
//     let val = 0
//     for(let j=i; j<arr.length-1; j++){
//         val = val+arr[j]
//         if(val == 20){
//             Output = arr.splice(i,j)
//         }
//     }
// }
// Output.sort((a,b)=>{return a-b});
// console.log("The array which is having the sum of 20 is", Output);



// 5)
// Quickselect is a selection algorithm to find the k'th smallest element in an unordered list.
//  It is closely related to the Quicksort sorting algorithm. Like Quicksort, 
//  it is efficient traditionally and offers good average-case performance,
//  but has a poor worst-case performance.
// For example,
// Input: [7, 4, 6, 3, 9, 1]
// k = 2
// Output: kâ€™th smallest array element is 3 
// Input: [7, 4, 6, 3, 9, 1]
// k = 1;
// Output: kâ€™th smallest array element is 1

// let arr = [7, 4, 6, 3, 9, 1];
// let k = 1;
// arr.sort((a,b)=>{return a-b});
// console.log(arr[k-1]);