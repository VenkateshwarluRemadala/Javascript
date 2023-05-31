// 1) Clone a Linked List Write a function that takes a singly
//  linked list and returns a complete copy of that list. 
// The idea is to iterate over the original list in the usual way 
// and maintain two pointers to keep track of the new list:
//  one head pointer and one tail pointer,
//  which always points to the last node of the new list. 
// The first node is done as a special case, and then the 
// tail pointer is used in the standard way for the others. oupput: 1 —> 2 —> 3 —> 4 —> null


// let arr = [1,2,3,4]
// function returningCopyOflist(arr1){
//   return  [...arr1];

// }
// let Output = returningCopyOflist(arr)
// console.log(Output);
// =========================================


//  2)Remove duplicates from a sorted linked list Given a linked list sorted in increasing order, 
//  write a function that removes duplicate nodes from it by traversing the list only once.
// For example, the list {1, 2, 2, 2, 3, 4, 4, 5} should be converted into the list {1, 2, 3, 4, 5}. 
// Since the list is sorted, we can proceed down the list and compare adjacent nodes.
// When adjacent nodes are the same, remove the second one.
// There’s a tricky case where the node after the next node needs to be noted before the deletion.
    
// let arr = [1, 2, 2, 2, 3, 4, 4, 5];
// let set = new Set(arr);
// console.log(set);
// ====================================================== 



// 3) Move the front node of a linked list in front of another list Given two linked lists, 
// move front node of the second list in front of the first list. For example, 
// Input: First List: 1 —> 2 —> 3 —> null 
// Second List: 6 —> 4 —> 2 —> null 
// Output: First List: 6 —> 1 —> 2 —> 3 —> null 
// Second List: 4 —> 2 —> null This is a variant on push().
// Instead of creating a new node and pushing it onto the given list,
// it takes two lists, removes the front node from the second list, 
//and moves it to the front of the first. This turns out to be a handy utility 
// function to have for several later problems.

// let arr = [1,2,3];
// let arr1 = [6,4,2];
// arr.unshift(...arr1.splice(0,1));
// console.log(arr, arr1);
// ========================================================= 




// 4) Move the last node to the front of a linked list Google Translate Icon Given a linked list,
//  move its last node to the front. For example,
// list {1, 2, 3, 4} should be changed to {4, 1, 2, 3}. 
// Practice This Problem The idea is to make the linked list circular and then 
//break the chain before the last node after making its head to point to the last node. 
//Following is the , Java, and Python program that demonstrates it:

// let arr = [1, 2, 3, 4];
// let Output = [];
// for(let i in arr){
//     if(+i == arr.length-1){
//         Output.unshift(arr[i])
//     }else{
//         Output.push(arr[i])
//     }
// }
// console.log(Output);
//======================================================================= 



//5) Rearrange linked list in a specific manner Google Translate Icon Given a linked list,
//split it into two lists where each list contains alternating elements from the original list
//and then finally join them back together. For example, 
//Input : 1 —> 2 —> 3 —> 4 —> 5 —> null Output: 1 —> 3 —> 5 —> 2 —> 4 —> null 
//Practice This Problem To split the given list into two,
//we can use temporary dummy header nodes for both lists as they are being built.
// Each sublist has a “tail” pointer that points to its current last node – that way,
//new nodes can be appended at the end of each list easily. 
//The dummy nodes give the tail pointers 
//something to point to initially.
//The dummy nodes are efficient in this case because they are temporary and allocated in the stack.
//Finally, after both lists are formed, we join them by rearranging their pointers and fixing the head node


// let arr = [1, 2, 3, 4, 5];
// let odd = [];
// let even = [];
// for(let i of arr){
//     if(i%2==1){
//         odd.push(i)
//     }else{
//         even.push(i)
//     }
// }
// let Output = [...odd, ...even];
// console.log(Output);
//=================================================






// 7)Check if a linked list of strings is palindromic Given a linked list of strings,
// check whether the concatenation of all values in the list together forms a palindrome.
// It is not permissible to construct a string out of the linked list nodes and check 
// that string for palindrome. For example,
// Input: AA —> XYZ —> CD —> C —> ZYX —> AA —> null 
// Output: true Explanation: String AAXYZCDCZYXAA is palindrome 
// Input: A —> B —> C —> DC —> B —> null 
// Output: false Explanation: String ABCDCB is not a palindrome


// let arr = ["AA", "XYZ", "CD", "C", "ZYX", "AA"] (OR) let arr = ["A", "B", "C", "DC", "B"]

// let str = arr.join('');
// let str1= arr.join('').split('').reverse().join('')
// if(str==str1){
//     console.log(str,"is palindrome");
// }else{
//     console.log(str, "is not a palidrome");
// }
//  ============================================ 



// 19) Find a pair with the given sum in an array
// Given an unsorted integer array, find a pair with the given sum in it
// Input: nums = [8, 7, 2, 5, 3, 1] target = 10 
// Output: Pair found (8, 2) orPair found (7, 3) 
// Input: nums = [5, 2, 6, 8, 1, 9] target = 12 
// Output: Pair not found

// let nums = [5, 2, 6, 8, 1, 9];
// let target = 12 ;
// let oupput = []
// function add(arr){
//     for(let i in nums){
//         for(let j in nums){
//             if(arr[i]!=arr[j]){
//                if(arr[i]+arr[j] == target){
//                     oupput.push(arr[i], arr[j])
//                     return oupput
//                }
//             }
//         }
//     }
// }
// let out = add(nums);

// if(out !== undefined){
//     console.log("pair found", out);
// }else{
//     console.log("pair not found");
// }


// 20) Check if a subarray with 0 sum exists or not
// Given an integer array, check if it contains a subarray having zero-sum.
// Input: { 3, 4, -7, 3, 1, 3, 1, -4, -2, -2 } 
// Output: Subarray with zero-sum exists The subarrays with a sum of 0 are:
//  { 3, 4, -7 }

// let arr = [3, 4, -7, 3, 1, 3, 1, -4, -2, -2 ];
// let sum = 0;
// let zeroSumArray = [];
// for(let i of arr){
//     sum= sum+i;
//     if(sum == 0){
//         zeroSumArray.push(i)
//         break
//     }else{
//         zeroSumArray.push(i)
//     }
// };
// if(zeroSumArray.length>1){
//     console.log("Subarray with zero-sum exisits the subarray with a sum of 0 is", zeroSumArray);
// }else{
//     console.log("subarray does not consists zero sum subarrays");
// }




// 22)Sort binary array in linear time
// Given a binary array, sort it in linear time and constant space. The output should print all
// zeroes, followed by all ones.
// Input: { 1, 0, 1, 0, 1, 0, 0, 1 }
// Output: { 0, 0, 0, 0, 1, 1, 1, 1 }

// let arr = [1, 0, 1, 0, 1, 0, 0, 1];
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
// console.log(arr);

//  =================================================================== 




//  23) Find the maximum product of two integers in an array
// Given an integer array, find the maximum product of two integers in it. For example,
// consider array {-10, -3, 5, 6, -2}. The maximum product is the (-10, -3) or (5, 6) pair.

// let arr = [-10, -3, 5, 6, -2];
// let arr1 = [];
// let arr2= []
// for(let i in arr){
//     for(let j in arr){
//         if(arr[i]>arr[j]){
//             temp = arr[i];
//             arr[i] = arr[j];
//             arr[j] = temp;
//         }
//     }
// }
// let highestProduct = arr[0]*arr[1];
// let highestProduct1 = arr[arr.length-1]*arr[arr.length-2];
// console.log(highestProduct,highestProduct1);
// if(highestProduct>highestProduct1){
//     console.log("The maximum product sum is the", [arr[0], arr[1]], highestProduct);

// }else if(highestProduct1>highestProduct){
//     console.log("The maximum product sum is the", [arr[arr.length-1],arr[arr.length-2]], highestProduct1);
// }else if(highestProduct == highestProduct1){
//     console.log("The maximum product sum is the",highestProduct,"And the pairs are"+' '+[arr[0], arr[1]]+' '+'OR'+' '+ [arr[arr.length-1],arr[arr.length-2]]);
// }


// ==========================================================




// 24)Move all zeros present in an array to the end
// Given an integer array, move all zeros present in it to the end. The solution should
// maintain the relative order of items in the array and should not use constant space.
// Input: { 6, 0, 8, 2, 3, 0, 4, 0, 1 }Output: { 6, 8, 2, 3, 4, 1, 0, 0, 0 }

// let arr = [6, 0, 8, 2, 3, 0, 4, 0, 1];
// let arr1 = [];
// let arr2= [];
// for(let i of arr){
//     if(i > 0){
//         arr1.push(i)
//     }else if(i==0){
//         arr2.push(i)
//     }
// }
// let output = [...arr1, ...arr2]
// console.log(output);

// ===================================================================== 



// 25) Sort an array in one swap whose two elements are
// swapped
// Given an array where all its elements are sorted in increasing order except two swapped
// elements, sort it in linear time. Assume there are no duplicates in the array. 
// Input: A[] = [3, 8, 6, 7, 5, 9] or [3, 5, 6, 9, 8, 7] or [3, 5, 7, 6, 8, 9] 
// Output: A[] = [3, 5, 6, 7, 8, 9] 


// let arr = [3, 8, 6, 7, 5, 9];
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

// ===============================================================




// 26) Find pairs with difference `k` in an array
// Given an unsorted integer array, print all pairs with a given difference k in it.
// Input:
// arr = [1, 5, 2, 2, 2, 5, 5, 4] k = 3 Output: (2, 5) and (1, 4) 

// let arr = [1, 5, 2, 2, 2, 5, 5, 4];
// let k = 3;
// let arr1 = [];
// for(let i of arr){
//     if(arr1.indexOf(i) == -1){
//         arr1.push(i)
//     }
// }
// let obj = {}
// for(let i in arr){
//     for(let j in arr){
//         if(arr[i]-arr[j] == k){
//            obj[[+arr[j],+arr[i]]] = k
//         }
       
//     }
// }
// for(let i of Object.keys(obj)){
//     console.log(i);
// }

// ============================================================




//  27) Find two numbers with maximum sum formed by array digits
// Given an integer array between 0 and 9, find two numbers with maximum sum formed
// using all the array digits. The difference in the number of digits of the two numbers
// should be ± 1.
// Input: { 4, 6, 2, 7, 9, 8 }
// Output: The two numbers with maximum sum are 974 and 862 
// Input: { 9, 2, 5, 6, 0, 4 }
// Output: The two numbers with maximum sum are 952 and 640


// let arr = [9, 2, 5, 6, 0, 4 ];
// for(let i in arr){
//     for(let j in arr){
//         if(arr[i]>arr[j]){
//             temp = arr[i];
//             arr[i] = arr[j];
//             arr[j] = temp;
//         }
//     }
// }
// let highestone = '';
// let highesttwo = '';
// for(let i in arr){
//     if(+i%2 == 0){
//         highestone = highestone +arr[i]
//     }else if(+i%2 == 1){
//         highesttwo = highesttwo + arr[i]
//     }
// }
// console.log(highestone, highesttwo);




// 28)Bubble Sort Algoritham 

// Bubble sort with Accending Order.
// let arr = [4, 6, 2, 7, 9, 8];
// for(let i in arr){
//     for(let j in arr){
//         if(arr[i]>arr[j]){
//             temp = arr[i];
//             arr[i] = arr[j];
//             arr[j] = temp;
//         }
//     }
// }
// console.log(arr);

//Bubble sort with Decending order.
// let arr = [4, 6, 2, 7, 9, 8];
// for(let i in arr){
//     for(let j in arr){
//         if(arr[i]>arr[j]){
//             temp = arr[i];
//             arr[i] = arr[j];
//             arr[j] = temp;
//         }
//     }
// }
// console.log(arr);




// 29) In-place merge two sorted arrays
// Given two sorted arrays,
//  X[] and Y[] of size m and n each, merge elements of X[] with
// elements of array Y[] by maintaining the sorted order, i.e., fill X[] with the first m smallest
// elements and fill Y[] with remaining elements.
// Input: X[] = { 1, 4, 7, 8, 10 } Y[] = { 2, 3, 9 }
// Output: X[] = { 1, 2, 3, 4, 7 } Y[] = { 8, 9, 10 }

// let arr = [ 1, 4, 7, 8, 10 ];
// let arr1 = [ 2, 3, 9 ];
// let merge = [...arr, ...arr1];
//  for(let i in merge){
//     for(let j in merge){
//         if(merge[i]<merge[j]){
//             temp = merge[i];
//             merge[i] = merge[j];
//             merge[j] = temp;
//         }
//     }
//  }
//  let oupput = merge.splice(0, arr.length);
//  console.log(oupput);
//  console.log(merge);

// ============================================================



// 30) Binary Search;

// let arr = [2, 3, 5, 7, 9];
// let target = 7;
// for(let i in arr){
//     if(arr[i] == target){
//         console.log(i);
//     }
// }


//  31)Linear Search;

// let arr = [2, 3, 5, 7, 9];
// let target = 5;
// for(let i in arr){
//     if(arr[i] == target){
//         console.log(i);
//     }
// }

// 32) Quick Sort 

// let arr = [4, 6, 2, 7, 9, 8];
// for(let i in arr){
//     for(let j in arr){
//         if(arr[i]<arr[j]){
//             temp = arr[i];
//             arr[i] = arr[j];
//             arr[j] = temp;
//         }
//     }
// }
// console.log(arr);



// 33)Merge Sort

// let arr = [ 1, 4, 7, 8, 10 ];
// let arr1 = [ 2, 3, 9 ];
// let merge = [...arr, ...arr1];
//  for(let i in merge){
//     for(let j in merge){
//         if(merge[i]<merge[j]){
//             temp = merge[i];
//             merge[i] = merge[j];
//             merge[j] = temp;
//         }
//     }
//  }
//  let oupput = merge.splice(0, arr.length);
//  console.log(oupput);
//  console.log(merge);




// 34) Selection Sort;

// let arr = [4, 6, 2, 7, 9, 8];
// for(let i in arr){
//     for(let j in arr){
//         if(arr[i]>arr[j]){
//             temp = arr[i];
//             arr[i] = arr[j];
//             arr[j] = temp;
//         }
//     }
// }
// console.log(arr);



// 35) Activity Selection Problem
// Activity Selection Problem: Given a set of activities, along with the starting and finishing
// time of each activity, find the maximum number of activities performed by a single
// person assuming that a person can only work on a single activity at a time.
// Input: Following set of activities 
// (1, 4), (3, 5), (0, 6), (5, 7), (3, 8), (5, 9), (6, 10), (8, 11), (8, 12), (2, 13), (12, 14)
// Output:(1, 4), (5, 7), (8, 11), (12, 14)

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
