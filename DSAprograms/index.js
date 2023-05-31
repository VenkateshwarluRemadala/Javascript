// 1)
// Check if a subarray with 0 sum exists or notGiven an integer array,
// check if it contains a subarray having zero-sum.
// For example,
// Input:  { 3, 4, -7, 3, 1, 3, 1, -4, -2, -2 }
// Output: Subarray with zero-sum existsThe subarrays with a sum of 0 are:
// { 3, 4, -7 }
// { 4, -7, 3 }
// { -7, 3, 1, 3 }
// { 3, 1, -4 }
// { 3, 1, 3, 1, -4, -2, -2 }
// { 3, 4, -7, 3, 1, 3, 1, -4, -2, -2 }
// Note that the problem deals with subarrays that are contiguous, i.e.,
//  whose elements occupy consecutive positions in the array

// const arr=[3, 4, -7, 3, 1, 3, 1, -4, -2, -2]
// for(let i=0;i<arr.length;i++){
//     let prefix=0;
//     for(let j=i;j<arr.length;j++){
//         prefix += arr[j];
//         if(prefix == 0){
//             let arr1 = [...arr];
//             let val = arr1.splice(i,j-i+1);
//             console.log(val);
//         }
//    }
// }

// ===============================================================================

// 2)Print all subarrays with 0 sumGoogle Translate IconGiven an integer array,
//  print all subarrays with zero-sum.
// For example,
// Input:  { 4, 2, -3, -1, 0, 4 }
// Subarrays with zero-sum are{ -3, -1, 0, 4 }
// { 0 }
// ans:-

// const arr=[4, 2, -3, -1, 0, 4]
// for(let i=0;i<arr.length;i++){
//     let prefix=0;
//     for(let j=i;j<arr.length;j++){
//         prefix += arr[j];
//         if(prefix == 0){
//             let arr1=  [...arr];
//             let val = arr1.splice(i,j-i+1);
//             console.log(val);
//         }
//    }
// }

// ===============================================================================

// 3)Find maximum length subarray having a given sumGoogle Translate IconGiven an integer array,
//  find the maximum length subarray having a given sum.
// For example, consider the following array:
// nums[] = { 5, 6, -5, 5, 3, 5, 3, -2, 0 }
// target = 8Subarrays with sum 8 are{ -5, 5, 3, 5 }
// { 3, 5 }
// { 5, 3 }
// OUTPUT :The longest subarray is { -5, 5, 3, 5 } having length 4

// const arr=[ 5, 6, -5, 5, 3, 5, 3, -2, 0];
// let value= 0;
// for(let i=0;i<arr.length;i++){
//     let prefix=0;
//     for(let j=i;j<arr.length;j++){
//         prefix += arr[j];
//         if(prefix == 8 && j-i+1>=value){
//             value = j-i+1;
//             let arr1 = [...arr];
//             let val = arr1.splice(i, value);
//             console.log(value);
//             console.log(val);
//         }
//    }
// }

// =======================================================================================

// 4)Find the largest subarray having an equal number of 0’s and 1’sGoogle
// Translate IconGiven a binary array containing 0’s and 1’s, find the largest subarray with
// equal numbers of 0’s and 1’s.
// For example,
// Input:  { 0, 0, 1, 0, 1, 0, 0 }
// Output: Largest subarray is { 0, 1, 0, 1 } or { 1, 0, 1, 0 }

// let input_Array = [0, 0, 1, 0, 1, 0, 0];
// let output_Array = [];
// for(let i in input_Array){
//     if(input_Array[i] == 0 && input_Array[+i+1] == 1){
//         output_Array.push(input_Array[i], input_Array[+i+1])
//     }
// }
// console.log(output_Array);

// ================================================================================

// 5)
// Sort an array of 0’s, 1’s, and 2’s (Dutch National Flag Problem)
// Google Translate IconGiven an array containing only 0’s, 1’s, and 2’s,
// sort it in linear time and using constant space.
// For example,
// Input:  { 0, 1, 2, 2, 1, 0, 0, 2, 0, 1, 1, 0 }
// Output: { 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2 }

// const arr=[ 0, 1, 2, 2, 1, 0, 0, 2, 0, 1, 1, 0 ]
// arr.sort((a,b)=>a-b)
// console.log(arr)


// Day-2;

// 1)
// In-place merge two sorted arrays
//Given two sorted arrays, X[] and Y[] of size m and n each, merge elements of X[] with elements of array Y[] by maintaining the sorted order, i.e., fill X[] with the first m smallest elements and fill Y[] with remaining elements.
// Do the conversion in-place and without using any other data structure.
// For example,
// Input:
// X[] = { 1, 4, 7, 8, 10 }
// Y[] = { 2, 3, 9 }
// Output:
// X[] = { 1, 2, 3, 4, 7 }
// Y[] = { 8, 9, 10 }
// x =[1, 4, 7, 8, 10]
// y = [2, 3, 9]
// z = [...x,...y].sort((a,b)=>a-b)
// let a=[];// let b=[];
// for(let i in z){
//     if(x.length-1 >= i){
//         a.push(z[i])
//     }else{
//         b.push(z[i]);
//     }
// }
// console.log(a,b);


// 2)
// Merge two arrays by satisfying given constraints
// Google Translate Icon
// Given two sorted arrays X[] and Y[] of size m and n each where m >= n and X[] has exactly n vacant cells,
// merge elements of Y[] in their correct position in array X[], i.e., merge (X, Y) by keeping the sorted order.
// For example,
// Input: 
// X[] = { 0, 2, 0, 3, 0, 5, 6, 0, 0 }
// Y[] = { 1, 8, 9, 10, 15 }
 // The vacant cells in X[] is represented by 0 
// Output:
 // X[] = { 1, 2, 3, 5, 6, 8, 9, 10, 15 }

//x =[0, 2, 0, 3, 0, 5, 6, 0, 0];
//y =[1, 8, 9, 10, 15]
//z = [...x,...y].filter(a=>a>0).sort((a,b)=>a-b);
//console.log(z);



// 3)
// Shuffle an array using Fisher–Yates shuffle algorithm
// Google Translate Icon// Given an integer array, in-place shuffle it. 
//The algorithm should produce an unbiased permutation,
//  i.e., every permutation is equally likely.
// Practice This Problem
// Fisher–Yates shuffle is an algorithm to generate random permutations. 
//It takes time proportional to the total number of items being shuffled and shuffles them in place.
// The algorithm swaps the element at each iteration at random among all remaining unvisited indices,
// including the element itself.
// Here’s the complete algorithm:
// — To shuffle an array ‘a’ of ‘n’ elements:
// for i from n-1 down to 1 do
//     j = random integer such that 0 <= j <= i
//     exchange a[j] and a[i]



// 4)
// Rearrange an array with alternate high and low elements
// Google Translate Icon
// Given an integer array, rearrange it such that every second element becomes greater than its left and right elements.
//  Assume no duplicate elements are present in the array.
// For example,
// Input:  {1, 2, 3, 4, 5, 6, 7}
// Output: {1, 3, 2, 5, 4, 7, 6}
 // Input:  {9, 6, 8, 3, 7}
// Output: {6, 9, 3, 8, 7} 
// Input:  {6, 9, 2, 5, 1, 4}
// Output: {6, 9, 2, 5, 1, 4}
// Practice This Problem
// A simple solution would be to sort the array in ascending order first.
//  Then take another auxiliary array and fill it with elements starting from the sorted array’s
//  two endpoints in alternate order.
//  Following is the complete algorithm:
// RearrangeArray(arr[], n)
// Sort the array in ascending order.
// Take two index variables i and j to that point to two endpoints of the array (i.e., i = 0 and j = n-1).
// Create an auxiliary array A[] and initialize an index k with 0.
// Do while (i < j)
//     A[k++] = arr[i++]
//     A[k++] = arr[j–]
// Print A[].




// 5)
// Find the largest subarray formed by consecutive integers
// Given an integer array, find the largest subarray formed by consecutive integers.
//  The subarray should contain all distinct values.
// For example,
// Input:  { 2, 0, 2, 1, 4, 3, 1, 0 }
 // Output: The largest subarray is { 0, 2, 1, 4, 3 }

// let arr = [1,2,3,4,5,6,7,8,9,10];
// let num=3;
// let num1 = 9;
// arr = arr.filter((ele, inde)=>{
//     if(ele>=3 && ele<=9){
//         return ele
//     }
// });
// console.log(arr);



// let number =31;
// let bool = false;
// if(number == 1){
//     console.log("neigther palidrome or composite number");
// }else if(number>1){
//     for(let i=2; i<number; i++){
//         console.log(i);
//         if(number%i === 0){
//             bool = true
//         }
//     }
// }
// if(bool==true){
//     console.log(number, "is not an palindrome");
// }else{
//     console.log(number, "is a palindrome");
// }



// if a = 23, b = 34, c = 69;

//    30 + 40 + 70 = 140

// if a = 23, b = 34, c = 50;

//    30 + 40 + 50 = 120;

// let a = 23;
// a = String(a)
// let b = 34;
// b = String(b)
// let c = 50;
// c = String(c);
// let count = 0;
// if(a[a.length-1] != 0){
//     a = a.split('');
//     a.splice(a.length-1,1,"0");
//     a= +a.join('');
    
//     count = count +a+10;
// }else{
//     count = count + +a
// }
// if(b[b.length-1] != 0){
//     b = b.split('');
//     b.splice(b.length-1,1,"0");
//     b= +b.join('');
//     count = count +b+10;
// }else{
//     count = count + +b
// }
// if(c[c.length-1] != 0){
//     c = c.split('');
//     c.splice(c.length-1,1,"0");
//     c= +c.join('');
//     count = count +c+10;
// }else{
//     count = count + +c
// };
// console.log(count);

let arr = [1, 2, 3, 4] ;
let rotations = 2;
let val = arr.splice(arr.length-rotations, rotations);
console.log(val);
console.log(arr);
let output_Array = [];
output_Array = [...val, ...arr];
console.log(output_Array);

