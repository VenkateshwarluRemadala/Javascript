
// 11.Given an unsorted integer array, print all pairs with a given difference k in it.
// For example,
// Input:
// arr = [1, 5, 2, 2, 2, 5, 5, 4]
// k = 3
// Output:
// (2, 5) and (1, 4)


// let arr = [1, 5, 2, 2, 2, 5, 5, 4];
// let set = new Set(arr);
// let k =3
// for(let i of set){
//     for(let j of set){
//         if(j-i== k){
//             console.log(i,j);
//         }
//     }
// }



// 12)
// Partition an array into two subarrays with the same sum
// Input:  {6, -4, -3, 2, 3}
// Output: The two subarrays are {6, -4} and {-3, 2, 3} having equal sum of 2
// Input:  {6, -5, 2, -4, 1}
// Output: The two subarrays are {} and {6, -5, 2, -4, 1} having equal sum of 0


// let arr = [6, -4, -3, 2, 3];
// let res1 = [];
// let res2 = [];
// let sum = arr.reduce((a,b)=>{
//     return a+b
// })
// if(sum == 0){
//     res2 = arr
//     console.log(res1,res2);
// }else{
    // let add = 0
    // for(let i of arr){
    //     add = add+i;
    //     if(add == sum/2){
    //         res1.push(i)
    //         break
    //     }else{
    //         res1.push(i)
    //     }
    // }
    /// let res2 = arr.splice(res1.length,arr.length-1);

    // for(let i = arr.length-1; i>=0; i--){
    //     if(i == res1.length){
    //         res2.unshift(arr[i])
    //         break
    //     }else{
    //         res2.unshift(arr[i])
    //     }
    // }
//     console.log(res1);
//     console.log(res2);
// }
// ===============================================================================



// 13)
// Find two numbers with maximum sum formed by array digits
// Input:  { 4, 6, 2, 7, 9, 8 }
// Output: The two numbers with maximum sum are 974 and 862
// Input:  { 9, 2, 5, 6, 0, 4 }
// Output: The two numbers with maximum sum are 952 and 640

// let arr = [ 4, 6, 2, 7, 9, 8 ];
// arr.sort((a,b)=>{
//     return b-a
// })
// console.log(arr);
// let highestSumNum = '';
// let secondHightSumNum = '';
// for(let i in arr){
//     if(+i%2 ==0){
//         highestSumNum = highestSumNum+arr[i]
//     }else if(+i%2 == 1){
//         secondHightSumNum = secondHightSumNum+arr[i]
//     }
// }
// console.log(highestSumNum);
// console.log(secondHightSumNum);




// 14)
// Find the minimum index of a repeating element in an array
// Input:  { 5, 6, 3, 4, 3, 6, 4 }
// Output: The minimum index of the repeating element is 1
// Input:  { 1, 2, 3, 4, 5, 6 }
// Output: Invalid Input


// let arr= [ 5, 6, 3, 4, 3, 6, 4 ];
// let obj = {};
// for(let i of arr){
//     obj[i] = (obj[i] ||0) + 1;
// }
// let highest = Object.values(obj).sort((a,b)=>{
//     return b-a
// })[0]
// if(highest>1){
//     let highestvaluesArray = []
//     for(let i in obj){
//         if(highest == obj[i]){
//             // console.log(i);
//             highestvaluesArray.push(+i)
            
//         }
//     }
//     let minimumIndex = []
//     for(let i in arr){
//         for(let j of highestvaluesArray){
//             if(arr[i] == j){
//                 minimumIndex.push(+i)
//             }
//         }
//     }
//     console.log("The minimum index of repeating element is",minimumIndex[0]);
// }else{
//     console.log("Invalid input");
// }



// 15)
// Find a pair with a minimum absolute sum in an array
// Input:  A = [-6, -5, -3, 0, 2, 4, 9];
// Output: Pair is (-5, 4)
// (-5, 4) = abs(-5 + 4) = abs(-1) = 1, which is minimum among all pairs.

// let arr = [-6, -5, -3, 0, 2, 4, 9];
// let arr1 = []
// let obj =  {}
// let arr3 = []
// for(let i of arr){
//     for(let j of arr){
//         if(String(i).includes('-') && !String(j).includes('-')){
//             let val = Math.abs(i+j);
//             arr3.push(Math.abs(i+j))
//             arr1.push([val,[i,j]])
//         }
//     }
// }
// arr3 = arr3.sort((a,b)=>{
//     return a-b
// })[0]
// for(let i of arr1){
//     if(i[0] == arr3){
//         console.log(i[1]);
//     }
// }


// 16)Find an index of the maximum occurring element with equal probability
// For example, consider the input: {4, 3, 6, 8, 4, 6, 2, 4, 5, 9, 7, 4}.
// The maximum occurring element, 4, occurs at index 0, 4, 7, and 11.
//  The solution should return any one of these indices with an equal probability.
// If there are two maximum occurring elements in the array,
//  the solution should consider the first occurring maximum element.

// let arr = [4, 3, 6, 8, 4, 6, 2, 4, 5, 9, 7, 4];
// let outputIndex ;
// let obj = {};
// for(let i of arr){
//     obj[i] = (obj[i] || 0)+1;
// }
// let highest = Object.values(obj).sort((a,b)=>{
//     return b-a
// })[0];
// for(let i in obj){
//     if(obj[i] == highest){
//         outputIndex = i
//     }
// }
// for(let i in arr){
//     if(arr[i] == outputIndex){
//         console.log("The maximum occuring element index is",+i);
//         return
//     }
// }



// 17)Add elements of two arrays into a new array
// Given two arrays of positive integers, add their elements into a new array.
//  The solution should add both arrays, one by one starting from the 0th index, 
// and split the sum into individual digits if it is a 2–digit number.
// Store the count of each element of the input in a map.
// Traverse the map and find the first maximum occurring element.
// Generate a random number k between 1 and the count of the maximum occurring element.
// Traverse the input and return the index of the k'th occurrence of the maximum occurring element.

// let arr = [10,20,30,40,40,60];
// let arr1 = [3,4,5,5,2,1];
// let sumArray = []
// for(let i in arr){
//     sumArray.push(arr[i]+arr1[i])
// }
// let arr2=[];
// for(let i of sumArray){
//     if(i>9){
//         arr2.push(...String(i).split(''))
//     }else{
//         arr2.push(i)
//     }
// }
// let obj = {};
// let arr3 = [];
// for(let i of arr2){
//     arr3.push(+i)
//     obj[+i] = (obj[+i] || 0)+1;
// }
// let maxVal = Object.values(obj).sort((a,b)=>{
//     return b-a
// })[0];
// let maxValNum;
// for(let i in obj){
//     if(obj[i] == maxVal){
//         maxValNum = +i
//     }
// };
// let random = Math.floor(Math.random()*maxValNum)+1;
// for(let i in arr3){
//     if(arr3[i] == random){
//         console.log(i);
//     }
// }




// 18)
// Find duplicates within a range `k` in an array
// Given an array and a positive number k, check whether the array contains any 
// duplicate elements within the range k.
//  If k is more than the array’s size, the solution should check for duplicates in
// the complete array.
// Input:
// nums[] = { 5, 6, 8, 2, 4, 6, 9 }
// k = 4
// Output: Duplicates found
// (element 6 repeats at distance 4 which is <= k)
// Input:
// nums[] = { 5, 6, 8, 2, 4, 6, 9 }
// k = 2
// Output: No duplicates were found 
// (element 6 repeats at distance 4 which is > k) 
// Input: 
// nums[] = { 1, 2, 3, 2, 1 }
// k = 7
// Output: Duplicates found
// (element 1 and 2 repeats at distance 4 and 2, respectively which are both <= k)


// let num = [ 1, 2, 3, 2, 1 ];
// let k = 4;
// let obj = {};
// let highestRepeatedElement;
// for(let i of num){
//     obj[i] = (obj[i] || 0) + 1;
// }
// let duplicateArray = Object.values(obj).filter(ele=>ele>1)
// let duplicateElements = []
// for(let i of duplicateArray){
//    for(let j in obj){
//      if(obj[j]===i){
//         duplicateElements.push(j)
//      }
//    }
// }
// duplicateElements = new Set(duplicateElements);
// console.log(duplicateElements);
// let indexArray = [];
// let obj1 = {}
// for(let i in num){
//     for(let j of duplicateElements){
//         if(num[i] == +j){
//             obj1[j] = [];
//             obj1[j].push(i)
//         }

//     }
// }
// console.log(obj1);




// 19)
// Left rotate an array
// we will see how to left-rotate an array by specified positions.
// For example, left-rotating array { 1, 2, 3, 4, 5 } twice results in array { 3, 4, 5, 1, 2 }.

// let arr = [1, 2, 3, 4, 5];
// let leftRotatePositions = 2;
// let arr1 = [];
// let arr2 = [];
// let output = []
// for(let i in arr){
//     if(+i>=leftRotatePositions){
//         arr1.push(arr[i]);
//     }else{
//         arr2.push(arr[i])
//     }
// }
// output = [...arr1,...arr2]




// 20)
// Right rotate an array `k` times
// In this post, we will see how to right-rotate an array by specified positions.
// For example, right rotating array { 1, 2, 3, 4, 5, 6, 7 } 
// three times will result in array { 5, 6, 7, 1, 2, 3, 4 }.


// let arr = [1, 2, 3, 4, 5, 6, 7];
// let leftRotatePositions = 3;
// leftRotatePositions = arr.length-leftRotatePositions;
// let arr1 = [];
// let arr2 = [];
// let output = []
// for(let i in arr){
//     if(+i<leftRotatePositions){
//         arr1.push(arr[i]);
//     }else{
//         arr2.push(arr[i])
//     }
// }
// output = [...arr2,...arr1]
// console.log(output);



// 21)
// Bubble Sort Algorithm


// Bubble sort Accending algoritham;
// let arr =[3, 8, 6, 7, 5, 9];
// let temp;
// for(let i in arr){
//     for(let j in arr){
//         if(arr[i]<arr[j]){
//             temp = arr[i];
//             arr[i] = arr[j];
//             arr[j] = temp;
//         }
//     }
// }


/// Bubble sort decending algoritham;
// let arr =[3, 8, 6, 7, 5, 9];
// let temp;
// for(let i in arr){
//     for(let j in arr){
//         if(arr[i]>arr[j]){
//             temp = arr[i];
//             arr[i] = arr[j];
//             arr[j] = temp
//         }
//     }
// }
// console.log(arr);

 




// 22)
// Selection Sort Alogrithm
// How Selection Sort works?
// The idea is to divide the array into two subsets – sorted subset and unsorted subset. Initially,
//  the sorted subset is empty, and the unsorted subset is the entire input list.
//  The algorithm proceeds by finding the smallest (or largest, depending on sorting order) element in the unsorted subset, 
// swapping it with the leftmost unsorted element (putting it in sorted order), and moving the subset boundaries one element to the right. 
// The following example explains it all:
//             3  5  8  4  1  9 -2
// i = 0      -2  5  8  4  1  9  3
// i = 1      -2  1  8  4  5  9  3
// i = 2      -2  1  3  4  5  9  8
// i = 3      -2  1  3  4  5  9  8
// i = 4      -2  1  3  4  5  9  8
// i = 5      -2  1  3  4  5  8  9


// let arr = [3, 5, 8, 4, 1, 9, -2];
// arr.sort((a,b)=>{
//     return a-b
// })
// console.log(arr);



// 23)Merge Sort
// How Merge sort works?
// Merge sort is a Divide and Conquer algorithm. Like all divide-and-conquer algorithms,
//  merge sort divides a large array into two smaller subarrays and then recursively sort the subarrays.
//  Basically, two steps are involved in the whole process:
// Divide the unsorted array into n subarrays, each of size 1 (an array of size 1 is considered sorted).
// Repeatedly merge subarrays to produce new sorted subarrays until only 1 subarray is left, which would be our sorted array.


// let arr = [1, 4, 7, 8, 10];
// let arr1= [2, 3, 9];
// let merge = [...arr,...arr1].sort((a,b)=>{
//     return a-b
// });
// let output = [];
// let output1 = [];
// let arr2 = merge.splice(0,arr.length);
// console.log(arr2,merge);

// for(let i in merge){
//     if(i<=arr.length-1){
//         output.push(merge[i])
//     }else{
//         output1.push(merge[i])
//     }
// }
// console.log(output);
// console.log(output1);



// 24)Counting Sort Algorithm
// The algorithm loops over the items,
// computing a histogram of each key’s number of times within the input collection.
//  It then performs a prefix sum computation to determine, for each key,
//  the starting position in the output array of the items having that key.
//  Finally, it loops over the items again, 
//moving each item into its sorted position in the output arra
// eg:
// After the first for-loop, freq[i] stores the total number of items with a key equal to i.
// After the second for-loop, it instead stores the total number of items with a key less than i,
//  which is the same as the first index at which an item with key i should be stored in the output array.
// Throughout the third loop, freq[i] always stores the next position in the output array into which an item with key i should be stored, 
// so each item is moved to its correct position in the output array.

// let arr = [1,3,1,4,5,6,3,9,7];
// let obj = {};
// for(let i of arr){
//     obj[i] = (obj[i] || 0) +1
// }
// console.log(obj);
// let countArrayOutput = Object.values(obj);
// console.log(countArrayOutput);



// 25)
// In-place merge two sorted arrays
// Input:
// X[] = { 1, 4, 7, 8, 10 }
// Y[] = { 2, 3, 9 }
// Output:
// X[] = { 1, 2, 3, 4, 7 }
// Y[] = { 8, 9, 10 }


// let arr = [1, 4, 7, 8, 10];
// let arr1= [2, 3, 9];
// let merge = [...arr,...arr1].sort((a,b)=>{
//     return a-b
// });
// let output = [];
// let output1 = [];
// for(let i in merge){
//     if(i<=arr.length-1){
//         output.push(merge[i])
//     }else{
//         output1.push(merge[i])
//     }
// }
// console.log(output);
// console.log(output1);


// 26)
// Find the missing number in an array
// Given an array of n-1 distinct integers in the range of 1 to n, find the missing number in it in linear time.
// For example, consider array {1, 2, 3, 4, 5, 7, 8, 9, 10} whose elements are distinct and within the range of 1 to 10.
// The missing number is 6.

// let arr = [1, 2, 3, 4, 5, 7, 8, 9, 10];
// arr = arr.sort((a,b)=>{
//     return b-a
// })
// let bigNum = arr[0];
// let smalNum = arr[arr.length-1]
// console.log(bigNum, smalNum);
// for(let i=smalNum; i<=bigNum; i++){
//     if(arr.indexOf(i) == -1){
//         console.log("the missing the number is", i)
//     }
// }




// 27)
// Find the missing number in an array without using any extra space
// Input:  { 3, 2, 4, 6, 1 }
// Output: The missing element is 5
 
// Input:  { 3, 2, 4, 5, 6 }
// Output: The missing element is 1
 
// Input:  { 3, 2, 4, 5, 1 }
// Output: The missing element is 6

// let arr = [3, 2, 4, 6, 1];
// let min = arr[arr.length-1];
// for(let i = 1; i<=6; i++){
//     if(arr.indexOf(i) == -1){
//         console.log("the missing number is", i);
//     }
// }


//28)
//Find the odd occurring element in an array in a single traversal
//Given an integer array, duplicates are present in it in a way that all duplicates appear an even number of
//times except one which appears an odd number of times. Find that odd appearing element in linear time and 
//without using any extra memory.
//For example,
//Input:  arr[] = [4, 3, 6, 2, 6, 4, 2, 3, 4, 3, 3]
//Output: The odd occurring element is 4


// let arr = [4, 3, 6, 2, 6, 4, 2, 3, 4, 3, 3];
// let obj = {};
// for(let i of arr){
//     obj[i] = (obj[i] || 0) +1
// }
// for(let i in obj){
//     if(obj[i]%2 ==1){
//         console.log("the odd occuring element is",+i);
//     }
// }



// 29)
// Reverse in Array
// let arr = [1,2,3,4,5];
// console.log("The reversed array is",arr.reverse());




// 30)
// Find all elements in an array that are greater than all elements to their right
// For example, consider the array [10, 4, 6, 3, 5]. The elements that are greater 
//than all elements to their right are 10, 6, and 5.

// let arr = [10, 4, 6, 3, 5];
// let Output = []
// if(arr[arr.length-1]<arr[0]){
//     Output.push(arr[0])
// }
// for(let i in arr){
//     if(arr[+i]<arr[+i+1]){
//         Output.push(arr[+i+1])
//     }
// }
// console.log(Output);



// 31) Binary Search Algorithm
// Given a sorted array of n integers and a target value, determine if the target exists in the array in logarithmic time using the binary search algorithm. If target exists in the array, print the index of it.
// Input:
// nums[] = [2, 3, 5, 7, 9]
// target = 7
// Output: Element found at index 3
 
// Input:
// nums[] = [1, 4, 5, 8, 9]
// target = 2
// Output: Element not found

// let nums = [1, 4, 5, 8, 9];
// let target = 2;
// for(let i in nums){
//     if(nums[i] ==  target){
//         console.log("Element found at index", i);
//     }else{
//         console.log("Element not found");
//         return
//     }
// }




// ==============================================================================================
// 32)
// Find the missing number in an array without using any extra space

// Given a limited range array of size n and containing elements between 1 and n+1 with one element missing, find the missing number without using any extra space.
// Input:  { 3, 2, 4, 6, 1 }
// Output: The missing element is 5

// Input:  { 3, 2, 4, 5, 6 }
// Output: The missing element is 1
 
// Input:  { 3, 2, 4, 5, 1 }
// Output: The missing element is 6;


// let arr = [3, 2, 4, 5, 1];
//   for(let i=1; i<=6;i++){
//     if(arr.indexOf(i) == -1){
//         console.log(i);
//     }
//   }




// ================================================================================================
// 33)
// Find the first or last occurrence of a given number in a sorted array
// Given a sorted integer array, find the index of a given number’s first or last occurrence.
// If the element is not present in the array, report that as well.
// Input:
// nums = [2, 5, 5, 5, 6, 6, 8, 9, 9, 9]
// target = 5
// Output:
// The first occurrence of element 5 is located at index 1
// The last occurrence of element 5 is located at index 3
// Input:
// nums = [2, 5, 5, 5, 6, 6, 8, 9, 9, 9]
// target = 4
// Output:
// Element not found in the array


// let nums = [2, 5, 5, 5, 6, 6, 8, 9, 9, 9];
// let target = 4;
// let arr = [];
// for(let i in nums){
//     if(nums[i] == target){
//         arr.push(i)
//     }
// }
// if(arr.length){
//     console.log("The first occurrence of element"+ target +"is located at index ",arr[0]);
// console.log("The last occurrence of element"+ target +"is located at index ",arr[arr.length-1]);
// }else{
//     console.log("Element not found in the array");
// }
// ==========================================================================================



// 34)
// Find the frequency of each element in a sorted array containing duplicates
// Given a sorted array containing duplicates, efficiently find each element’s frequency without traversing the whole array.
// Input: [2, 2, 2, 4, 4, 4, 5, 5, 6, 8, 8, 9]
// Output: {2: 3, 4: 3, 5: 2, 6: 1, 8: 2, 9: 1}
// Explanation:
// 2 and 4 occurs thrice
// 5 and 8 occurs twice
// 6 and 9 occurs once

// let arr = [2, 2, 2, 4, 4, 4, 5, 5, 6, 8, 8, 9];
// let obj = {};
// for(let i of arr){
//     obj[i] = (obj[i] || 0) +1
// }
// console.log(obj);
// ====================================================



// 35)
// Interpolation search
// Given a sorted integer array and a target, determine if the target exists in the array or not using an interpolation search algorithm. If the target exists in the array, return the index of it.
// Input:
// arr[] = [2, 3, 5, 7, 9]
// target = 7
// Output: Element found at index 3
// Input:
// arr[] = [1, 4, 5, 8, 9]
// target = 2
// Output: Element not found

// let arr = [1, 4, 5, 8, 9];
// let target = 2;
// let arr1 = []
// for(let i in arr){
//     if(arr[i] == target){
//         arr1.push(i)
//     }
// }
// if(arr1.length){
//     console.log("Element found at index", arr1[0]);
// }else{
//     console.log("Element not found");
// }
// ===========================================================================================



// 38)
// Binary Search Algorithm
// Given a sorted array of n integers and a target value,
//  determine if the target exists in the array in logarithmic time using the binary search algorithm. 
// If target exists in the array, print the index of it.
// Input: 
// nums[] = [2, 3, 5, 7, 9]
// target = 7
// Output: Element found at index 3
// Input:
// nums[] = [1, 4, 5, 8, 9]
// target = 2
// Output: Element not found


// let arr = [2, 3, 5, 7, 9];
// let target = 7;
// let arr1 = []
// for(let i in arr){
//     if(arr[i] == target){
//         arr1.push(i)
//     }
// }
// if(arr1.length){
//     console.log("Element found at index", arr1[0]);
// }else{
//     console.log("Element not found");
// }
// ===================================================================



// 39)
// Find the number of 1’s in a sorted binary array
// Input:  nums[] = [0, 0, 0, 0, 1, 1, 1]
// Output: The total number of 1’s present is 3
// Input:  nums[] = [0, 0, 1, 1, 1, 1, 1]
// Output: The total number of 1’s present is 5

// let nums= [0, 0, 1, 1, 1, 1, 1];
// let onesCount = 0
// for(let i of nums){
//     if(i == 1){
//         onesCount = onesCount+1
//     }
// }
// console.log("Total number of ones count is",onesCount);
// =============================================================



// 40)
// Longest Alternating Subarray Problem
// Given an array containing positive and negative elements,
//  find a subarray with alternating positive and negative elements, 
// and in which the subarray is as long as possible.
// The Longest Alternating Subarray problem differs from the problem of 
// finding the Longest Alternating subsequence. Unlike a subsequence,
//  a subarray is required to occupy consecutive positions within the original array.
// For example, consider array { 1, -2, 6, 4, -3, 2, -4, -3 }.
//  The longest alternating subarray is { 4, -3, 2, -4 }.
//  Note that the longest alternating subarray might not be unique.

// let arr =[1, -2, 6, 4, -3, 2, -4, -3 ];
// let output = []
// for(let i in arr){
//     if(!String(arr[i]).includes('-') && String(arr[+i+1]).includes('-') && +i){
//         output.push(arr[i],arr[+i+1])
//     }
// }
// console.log(output);



// ==========================================================================
// 42)
// Connect `n` ropes with minimal cost

// Given n ropes of different lengths, connect them into a single rope with minimum cost.
//  Assume that the cost to connect two ropes is the same as the sum of their lengths.
// Input:  [5, 4, 2, 8]
// Output: The minimum cost is 36
// [5, 4, 2, 8] –> First, connect ropes of lengths 4 and 2 that will cost 6.
// [5, 6, 8]    –> Next, connect ropes of lengths 5 and 6 that will cost 11.
// [11, 8]      –> Finally, connect the remaining two ropes that will cost 19.
// Therefore, the total cost for connecting all ropes is 6 + 11 + 19 = 36.


// let arr= [5, 4, 2, 8]
// let finalSum = 0;
// function rescursion(arr1){
//     arr1.sort((a,b)=>{
//         return a-b
//     })
//     let sum = arr1[0]+arr[1];
//     finalSum = finalSum + sum;
//     arr1.splice(0,2,sum);
//     if(arr1.length>1){
//         rescursion(arr1)
//     }else{
//         console.log(finalSum);
//     }
// }
// rescursion(arr)

// =================================================================



// 43)
// Replace each array element by its corresponding rank
// Given an array of distinct integers,
// replace each array element by its corresponding rank in the array.
// The minimum array element has the rank 1; 
//the second minimum element has a rank of 2, and so on… For example,
// Input:  { 10, 8, 15, 12, 6, 20, 1 }
// Output: { 4, 3, 6, 5, 2, 7, 1 }

// let arr = [ 10, 8, 15, 12, 6, 20, 1 ];
// let arr1= [...arr];
// let sorted = arr.sort((a,b)=>{
//     return a-b
// });
// let obj = {};
// for(let i in sorted){
//     obj[sorted[i]] = +i+1 
// }
// console.log(obj);
// arr = []
// for(let i of arr1){
//     for(let j in obj){
//         if(i == +j){
//             i = obj[j];
//             arr.push(i)
//         }
//     }
// }
// console.log(arr);
// console.log("Final Rank array is", arr);
// =======================================================================





// 44)
// Set both elements of a binary array to 0 in a single line
// Given a binary array of size two having at least one element as zero,
//  write a single line function to set both its elements to zero. 
// Use of ternary operator and direct assignment of elements are not allowed.
// There are three combinations of array elements as per problem constraints:
// arr[0] = 0 and arr[1] = 1
// arr[0] = 1 and arr[1] = 0
// arr[0] = 0 and arr[1] = 0
// There are many ways to solve the given problem. We will discuss a few of them:
// Method 1: Using assignment operator twice
// We can use any of the following single line expressions to convert both elements of the given array to 0:
// arr[0] = arr[1] = arr[!arr[1]], or
// arr[0] = arr[1] = arr[0] & arr[1], or
// arr[0] = arr[1] -= arr[1]    // or arr[1] = arr[0] -= arr[0]


// let arr = [0,11];
// arr[0]>0?arr[0]=0: arr[1]>0?arr[1]=0:null;
// console.log(arr);

//===========================================================================================



// 46)
// Activity Selection Problem
// Activity Selection Problem: Given a set of activities,
//  along with the starting and finishing time of each activity,
// find the maximum number of activities performed by a single person
//  assuming that a person can only work on a single activity at a time.
// Input: Following set of activities
// (1, 4), (3, 5), (0, 6), (5, 7), (3, 8), (5, 9), (6, 10), (8, 11), (8, 12), (2, 13), (12, 14)
// Output:
// (1, 4), (5, 7), (8, 11), (12, 14)


// let arr = [[1, 4], [3, 5], [0, 6], [5, 7], [3, 8], [5, 9],
//  [6, 10], [8, 11], [8, 12], [2, 13], [12, 14]]
// let result = []
// let ind = arr[0][1]
// console.log(arr[0]);
// for(let i in arr){
//    if(arr[i][0]>ind){
//     console.log(arr[i]);
//     ind =arr[i][1]
//    }
// }

// =====================================================================




// 47)
// Segregate positive and negative integers in linear time
// Given an array of positive and negative integers, segregate them in linear time and constant space. 
//The output should print all negative numbers, followed by all positive numbers.
// Input:  [9, -3, 5, -2, -8, -6, 1, 3]
// Output: [-3, -2, -8, -6, 5, 9, 1, 3]

// let arr = [9, -3, 5, -2, -8, -6, 1, 3];
// let strartingPositiveVal = [];
// let endingPositiveVal = [];
// let positiveValInNegitiveVal = [];
// let pureNegitiveVal = [];
// let negitiveStartInde=0;
// let negitiveStartEndIndex = 0;
// for(let i in arr){
//     if(String(arr[i]).includes('-')){
//         negitiveStartInde = +i;
//         break
//     }else{
//         strartingPositiveVal.push(arr[i])

//     }
// }
// for(let i = arr.length-1; i>=0; i--){
//     if(String(arr[i]).includes('-')){
//         negitiveStartEndIndex = i
//         break
//     }else{
//         endingPositiveVal.unshift(arr[i])
//     }
// };
// for(let i = negitiveStartInde; i<=negitiveStartEndIndex; i++){
//     if(String(arr[i]).includes('-')){
//         pureNegitiveVal.push(arr[i])
//     }else{
//         positiveValInNegitiveVal.push(arr[i])
//     }
// }
// let output = [...pureNegitiveVal, ...positiveValInNegitiveVal, ...strartingPositiveVal, ...endingPositiveVal];
// console.log(output);






// 48)
// Problems solved using partitioning logic of Quicksort
// This post will discuss a few problems that can be easily solved in linear time and constant space by modifying the partitioning logic of the Quicksort algorithm.
// Problem #1
// Given a binary array, sort it in linear time and constant space. The output should print all zeroes, followed by all ones.
// For example,
// Input:  { 1, 0, 1, 0, 1, 0, 0, 1 }
// Output: { 0, 0, 0, 0, 1, 1, 1, 1 }

// let arr= [ 1, 0, 1, 0, 1, 0, 0, 1 ];
// let temp;
// for(let i in arr){
//     for(let j in arr){
//         if(arr[i]<arr[j]){
//             temp = arr[i];
//             arr[i] = arr[j];
//             arr[j] = temp
//         }
//     }
// }
// console.log(arr);

// ============================================================================



// 49)
// Hybrid QuickSort Algorithm
// A Hybrid Algorithm is an algorithm that combines two or more other algorithms that solve the same problem, 
//either choosing one (depending on the data) or switching between them throughout the algorithm. 
//This is generally done to combine each of the desired features so that the overall algorithm is better than the individual components.
// Quicksort is one of the fastest sorting algorithms for sorting large data.
// When implemented well, it can be about two or three times faster than its main competitors,
// merge sort and heapsort. There have been various variants proposed to boost its performance. Most of them we have already discussed here. 
//Let’s revisit a few important optimizations that can be applied to Quicksort.
// Hybrid with Insertion Sort:
// When the total number of elements is below some threshold (perhaps ten elements),
// switch to a non-recursive sorting algorithm such as insertion sort that performs fewer swaps, comparisons, or other operations on such small arrays.
// Instead of “many small sorts” optimization, we can stop when the total number of elements is less than some threshold k. Later, 
//when the whole array has been processed, each element will be at most k positions away from its final sorted position. Now, if we perform insertion sort on it, it will take O(k.n) time to finish the sort, which is linear as k is a constant.
// =============================================================================================
// 50)
// Print all combinations of positive integers in increasing order that sums to a given number
// Write code to print all combinations of positive integers in increasing order that sum to a given positive number.
// Input:  N = 3
// 1 1 1
// 1 2
// 3
// Input:  N = 4
// 1 1 1 1
// 1 1 2
// 1 3
// 2 2
// 4
// Input:  N = 5
// 1 1 1 1 1
// 1 1 1 2
// 1 1 3
// 1 2 2
// 1 4
// 2 3
// 5


// =====================================================================



let a = [1,2,3];
let b = [4,2,6];

//a[i] > b[i]
//a[i] == b[i]
//a[i] < b [i]
//output [1,1];

