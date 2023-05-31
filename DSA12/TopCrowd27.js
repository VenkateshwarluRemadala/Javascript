// Given an integer array, find the total number of inversions of it. If `(i < j)` and `(nums[i] > nums[j])`, then pair `(i, j)` is called an inversion of an array `nums`. The solution should provide count of all such pairs in the array.

// Input : [1, 9, 6, 4, 5]
// Output: 5
// Explanation: There are 5 inversions in the array: (9, 6), (9, 4), (9, 5), (6, 4), (6, 5)

// let arr = [1, 9, 6, 4, 5];
// let count = 0;
// for (let i = 0; i <= arr.length; i++) {
//   for (let j = i + 1; j <= arr.length; j++) {
//     if (i < j && arr[i] > arr[j]) {
//       count++;

//       console.log(arr[i], arr[j]);
//     }
//   }
// }

// console.log(count);

// Given an integer array, find the maximum sum among all its subarrays.

// Input : [-2, 1, -3, 4, -1, 2, 1, -5, 4]
// Output: 6
// Explanation: The maximum sum subarray is [4, -1, 2, 1];

// let input_array = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
// let findvalue = 0
// for(let i=0; i<input_array.length; i++){

//   for(let j=i; j<input_array.length; j++){
//     let arr = [...input_array]
//     let subArra = arr.splice(i, j+1);
//     let sum = subArra.reduce((a,b)=>{return a+b},0);
//     if(sum>findvalue){
//       findvalue = sum
//     }

//   }
// }
// console.log(findvalue);

// Given an unsorted integer array, find a pair with the given sum in it.
// • Each input can have multiple solutions. The output should match with either one of them.
// Input : nums[] = [8, 7, 2, 5, 3, 1], target = 10
// Output: (8, 2) or (7, 3)
// • The solution can return pair in any order. If no pair with the given sum exists, the solution should return null.
// Input : nums[] = [5, 2, 6, 8, 1, 9], target = 12
// Output: null

// let output_array = []
// function Findpairs(num) {
//   let target = 10;
//   for (let i of num) {
//     for (let j of num) {
//       if (i > j) {
//         if (i + j === target) {
//           output_array.push([i,j])
//         }
//       }
//     }
//   }
// }
// Findpairs([8, 7, 2, 5, 3, 1]);
// if(output_array.length>0){
//     console.log(output_array[0]);
// }
// else{
//     console.log(null);
// }

// Given a list of tasks with deadlines and total profit earned on completing a task, find the maximum profit earned by executing the tasks within the specified deadlines. Assume that each task takes one unit of time to complete, and a task can't execute beyond its deadline.

// Input: (Task Id, Deadline, Profit)

// [(1, 9, 15), (2, 2, 2), (3, 5, 18), (4, 7, 1), (5, 4, 25), (6, 2, 20), (7, 5, 8), (8, 7, 10), (9, 4, 12), (10, 3, 5)]

// Output: {1, 3, 4, 5, 6, 7, 8, 9}

// function printJobScheduling(arr, t){
// 	let n = arr.length;
// 	for(let i=0;i<n;i++){
// 		for(let j = 0;j<(n - 1 - i);j++){
// 			if(arr[j][2] < arr[j + 1][2]){
// 				let temp = arr[j];
// 				arr[j] = arr[j + 1];
// 				arr[j + 1] = temp;
// 			}
// 		}
// 	}
// 	let result = [];

// 	let job = [];
// 	for(let i = 0;i<t;i++){
// 		job[i] = '-1';
// 		result[i] = false;
// 	}

// 	for(let i= 0;i<arr.length;i++){
// 		for(let j = (t - 1, arr[i][1] - 1);j>=0;j--){
// 			// Free slot found
// 			if(result[j] == false){
// 				result[j] = true;
// 				job[j] = arr[i][0];
// 				break;
// 			}
// 		}
// 	}
// 	console.log(job);
// }
// arr = [[1, 9, 15], [2, 2, 2], [3, 5, 18], [4, 7, 1], [5, 4, 25], [6, 2, 20], [7, 5, 8], [8, 7, 10], [9, 4, 12], [10, 3, 5]]

// console.log("Following is maximum profit sequence of jobs ");

// printJobScheduling(arr, 3)

// Given an integer array, find the contiguous subarray that has the maximum product of its elements. The solution should return the maximum product of elements among all possible subarrays.
// Input : [-6, 4, -5, 8, -10, 0, 8]
// Output: 1600
// Explanation: The maximum product subarray is [4, -5, 8, -10] which has product 1600.
// Input : [40, 0, -20, -10]
// Output: 200
// Explanation: The maximum product subarray is [-20, -10] which has product 200.
// Input : [10]
// Output: 10
// Input : []
// Output: 0;

// let input_array = [-6, 4, -5, 8, -10, 0, 8];
// let findvalue = 0
// for(let i=0; i<input_array.length; i++){
//   for(let j=i; j<input_array.length; j++){
//     let arr = [...input_array]
//     let subArra = arr.splice(i, j+1);
//     let sum = subArra.reduce((a,b)=>{return a*b},1);
// 	if(sum>findvalue){
// 		findvalue = sum
// 	}
//   }
// }
// console.log(findvalue);

// Given a circular integer array, find a contiguous subarray with the largest sum in it.
// Input : [2, 1, -5, 4, -3, 1, -3, 4, -1]
// Output: 6
// Explanation: Subarray with the largest sum is [4, -1, 2, 1] with sum 6.
// Input : [8, -7, -3, 5, 6, -2, 3, -4, 2]
// Output: 18
// Explanation: Subarray with the largest sum is [5, 6, -2, 3, -4, 2, 8] with sum 18.

// function maxCircularSum(a, n) {
// 	if (n == 1)
// 		return a[0];
// 	let sum = 0;
// 	for (let i = 0; i < n; i++) {
// 		sum += a[i];
// 	}
// 	let curr_max = a[0], max_so_far = a[0], curr_min = a[0], min_so_far = a[0];
// 	for (let i = 1; i < n; i++) {
// 		curr_max = Math.max(curr_max + a[i], a[i]);
// 		max_so_far = Math.max(max_so_far, curr_max);
// 		curr_min = Math.min(curr_min + a[i], a[i]);
// 		min_so_far = Math.min(min_so_far, curr_min);
// 	}

// 	if (min_so_far == sum)
// 		return max_so_far;
// 	return Math.max(max_so_far, sum - min_so_far);
// }
// let a = [2, 1, -5, 4, -3, 1, -3, 4, -1];
// let n = a.length;
// console.log("Maximum circular sum is " + maxCircularSum(a, n));

// Write a Python function to sort a list of dictionaries based on values of a key

// Original list:
// [[1, 4, 5], [1, 3, 4], [2, 6, 7, 8]]
// Merge k Sorted Lists into a list:
// [1, 1, 2, 3, 4, 4, 5, 6, 7, 8]

// Original list:
// [[1, 2], [-1, -2, -3], [0]]
// Merge k Sorted Lists into a list:
// [-3, -2, -1, 0, 1, 2]

// let input_array = [[1, 4, 5], [1, 3, 4], [2, 6, 7, 8]];
// let output_array = [];
// input_array.map((ele)=>{
//     output_array.push(...ele)
// })
// console.log(output_array.sort((a,b)=>{return a-b}));

// Write a Python function to remove duplicates from a list while preserving the order.

// Original lists:
// [1, 2, 4, 3, 5, 4, 6, 9, 2, 1]
// Remove duplicates from the said list while preserving the order:
// [1, 2, 4, 3, 5, 6, 9]

// let input_array = [1, 2, 4, 3, 5, 4, 6, 9, 2, 1];
// let non_Duplicate_array = [];
// for(let i of input_array){
//     if(non_Duplicate_array.indexOf(i) == -1){
//         non_Duplicate_array.push(i)
//     }
// }
// console.log(non_Duplicate_array);

// Write a Python function to find the longest common sub-sequence in two lists.

// Original lists:
// [1, 2, 3, 4, 5, 6, 7, 8]
// [6, 7, 5, 6, 7, 8]
// Longest common sub-sequence in two lists:
// [5, 6, 7, 8]

// let input_array1 = [1, 2, 3, 4, 5, 6, 7, 8];
// let input_array2 = [6, 7, 5, 6, 7, 8];
// let longest_common_Sequance = [];
// for(let i of input_array1){
//     if(input_array2.indexOf(i) !=-1){
//         longest_common_Sequance.push(i)
//     }
// }
// console.log(longest_common_Sequance);

// Write a Python program to find the first non-repeated element in a list.

// Original list:
// [1, 2, 3, 4, 5, 6, 7, 8]
// First non-repeated element in the said list:
// 1

// let input_array = [1, 2, 3, 4, 5, 6, 7, 8];
// let values = []
// for(let i of input_array){
//     if(input_array.indexOf(i) == input_array.lastIndexOf(i)){
//         values.push(i)
//     }
// }
// if(values.length>0){
//     console.log(values[0]);
// }else{
//     console.log("none");
// }

// [1, 2, 4, 3, 5, -24, 4, 9, -22]
// Minimum sum sub-sequence of the said list:
// [-24, 4, 9, -22]

// let input_array = [1, 2, 4, 3, 5, -24, 4, 9, -22];
// let output_array = []
// for(let i=0; i<input_array.length; i++){
//     for(let j=i; j<input_array.length; j++){
//         let duplicatesASrray = [...input_array];
//         let subArr = duplicatesASrray.splice(i, j+1);
//         let sum = subArr.reduce((a,b)=>{return a+b},0);
//         output_array.push([sum, subArr]);
//     }
// }
// output_array.sort((a,b)=>{return a[0]-b[0]});
// console.log(output_array[0][1]);

// Write a Python program to find all the pairs in a list whose sum is equal to a given value.
// Original list:
// [1, 2, 3, 4, 5, 6, 7, 8, 9]
// List all pairs of the said list whose sum equals to 10
// [(6, 4), (7, 3), (8, 2), (9, 1)]

// let output_array = [];

// function Findpairs(num) {
//   let target = 10;

//   for (let i of num) {
//     for (let j of num) {
//       if (i > j) {
//         if (i + j === target) {
//           output_array.push([i, j]);
//         }
//       }
//     }
//   }
// }

// Findpairs([8, 7, 2, 5, 3, 1]);

// if (output_array.length > 0) {
//   console.log(output_array[0]);
// } else {
//   console.log(null);
// }




// Given a set of positive integers and an integer `k`, check if there is any non-empty subset that sums to `k`.

// Input: nums = [7, 3, 2, 5, 8], k = 14
// Output: true
// Explanation: Subset [7, 2, 5] sums to 14


let arr = [7, 3, 2, 5, 8];
let s = 14;
let res = [];
for (let i of arr) {
  for (let j of arr) {
    for (let k of arr) {
      if (i > j && j < k && i > k) {
        if (i + j + k === s) {
          console.log([i, j, k]);
        }
      }
    }
  }
}
