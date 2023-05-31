// Write a Python program to find palindromes in a given list of strings using Lambda.

// Orginal list of strings:
// ['php', 'w3r', 'Python', 'abcd', 'Java', 'aaa']

// List of palindromes:
// ['php', 'aaa']

// function findpallin(a) {
//   let newarr = [];

//   for (i of a) {
//     let newvalue = i.split("").reverse().join("");

//     if (i == newvalue) {
//       newarr.push(i);
//     }
//   }
//   return newarr;
// }
// let result = findpallin(["php", "w3r", "Python", "abcd", "Java", "aaa"]);
// console.log(result);







// Write a Python program that multiplies each number in a list with a given number using lambda functions. Print the results.
// Original list:  [2, 4, 6, 9, 11]
// Given number:  2
// Result:
// 4 8 12 18 22

// const multiplicationNumber = (array, number)=>{
//     let output_String = [];
//     for(let i of array){
//         output_String.push(i*number)
//     }
//     output_String = output_String.join(' ')
//     return output_String
// }
// console.log(multiplicationNumber([2, 4, 6, 9, 11],2));

// var rLength = 4,
//   rPrices = [1, 5, 8, 9, 10, 17, 17, 20];
// function TotalRevenueDP(rLen, prices) {
//   var r = [];
//   r[0] = 0;
//   for (var i = 1; i <= rLen; i++) {

//     var currentMaxRevenue = 0;

//     for (var j = 1; j <= i; j++) {
//       var currentRevenue = prices[j - 1] + r[i - j];

//       if (currentRevenue > currentMaxRevenue) {
//         currentMaxRevenue = currentRevenue;
//       }
//     }

//     r[i] = currentMaxRevenue;
//   } //finally return the max rev

//   return r[rLen];
// }
// var totalRevDp = TotalRevenueDP(rLength, rPrices);
// console.log("Dynamic Programming: Revenue is ", totalRevDp);

// function matrixChainOrder(dims) {
//   let n = dims.length - 1;

//   let m = Array(n)
//     .fill()
//     .map(() => Array(n).fill(0));

//   let s = Array(n)
//     .fill()
//     .map(() => Array(n).fill(0));

//   for (let l = 2; l <= n; l++) {
//     for (let i = 0; i < n - l + 1; i++) {
//       let j = i + l - 1;

//       m[i][j] = Number.MAX_SAFE_INTEGER;

//       for (let k = i; k < j; k++) {
//         let q = m[i][k] + m[k + 1][j] + dims[i] * dims[k + 1] * dims[j + 1];

//         if (q < m[i][j]) {
//           m[i][j] = q;

//           s[i][j] = k;
//         }
//       }
//     }
//   }

//   return { m: m, s: s };
// }

// function printOptimalParenthesis(s, i, j) {
//   if (i == j) {
//     console.log(`M${i}`);
//   } else {
//     console.log("(");

//     printOptimalParenthesis(s, i, s[i][j]);

//     printOptimalParenthesis(s, s[i][j] + 1, j);

//     console.log(")");
//   }
// } // Example usage

// let dims = [10, 30, 5, 60];

// let result = matrixChainOrder(dims);

// console.log(
//   "Minimum number of multiplications: " + result.m[0][dims.length - 2]
// );




// Given a chessboard, find the shortest distance (minimum number of steps) taken by a knight to reach a given destination from a given source.

// Input:

// N = 8             (8 x 8 matrix)
// src  = (0, 7)    (Source coordinates)
// dest = (7, 0)    (Destination coordinates)




// Given a set S of positive integers, determine if it can be partitioned into three disjoint subsets that all have the same sum, and they cover S.

// Input: S = [7, 3, 2, 1, 5, 4, 8]
// Output: true


// function isSubsetSum(arr,n,sum)
// {
//     if (sum == 0)
//         return true;
//     if (n == 0 && sum != 0)
//         return false;
//     if (arr[n - 1] > sum)
//         return isSubsetSum(arr, n - 1, sum);
//     return isSubsetSum(arr, n - 1, sum)
//         || isSubsetSum(arr, n - 1, sum - arr[n - 1]);
// }
// function findPartition(arr,n)
// {
//     let sum = 0;
//     for (let i = 0; i < n; i++)
//         sum += arr[i];
//     if (sum % 2 != 0)
//         return false;
//     return isSubsetSum(arr, n, Math.floor(sum / 2));
// }
// let arr=[7, 3, 2, 1, 5, 4, 8];
// let n = arr.length;
// console.log(findPartition(arr, n))







// class cell
// {
// 	constructor(x,y,dis)
// 	{
// 		this.x = x;
// 			this.y = y;
// 			this.dis = dis;
// 	}
// }

// // Utility method returns true if (x, y) lies
// 	// inside Board
// function isInside(x,y,N)
// {
// 	if (x >= 1 && x <= N && y >= 1 && y <= N)
// 			return true;
// 		return false;
// }

// // Method returns minimum step
// 	// to reach target position
// function minStepToReachTarget(knightPos,targetPos,N)
// {
// 	// x and y direction, where a knight can move
// 		let dx = [ -2, -1, 1, 2, -2, -1, 1, 2 ];
// 		let dy = [ -1, -2, -2, -1, 1, 2, 2, 1 ];

// 		// queue for storing states of knight in board
// 		let q = [];

// 		// push starting position of knight with 0 distance
// 		q.push(new cell(knightPos[0], knightPos[1], 0));

// 		let t;
// 		let x, y;
// 		let visit = new Array(N + 1);

// 		// make all cell unvisited
// 		for (let i = 1; i <= N; i++)
// 		{
// 			visit[i]=new Array(N+1);
// 			for (let j = 1; j <= N; j++)
// 				visit[i][j] = false;
// 		}

// 		// visit starting state
// 		visit[knightPos[0]][knightPos[1]] = true;

// 		// loop until we have one element in queue
// 		while (q.length!=0) {
// 			t = q.shift();
			

// 			// if current cell is equal to target cell,
// 			// return its distance
// 			if (t.x == targetPos[0] && t.y == targetPos[1])
// 				return t.dis;

// 			// loop for all reachable states
// 			for (let i = 0; i < 8; i++) {
// 				x = t.x + dx[i];
// 				y = t.y + dy[i];

// 				// If reachable state is not yet visited and
// 				// inside board, push that state into queue
// 				if (isInside(x, y, N) && !visit[x][y]) {
// 					visit[x][y] = true;
// 					q.push(new cell(x, y, t.dis + 1));
// 				}
// 			}
// 		}
// 		return Number.MAX_VALUE;
// }

// // Driver code
// let N = 8;
// let knightPos=[0, 7];
// let targetPos=[7, 0];
// document.write(
// 			minStepToReachTarget(
// 				knightPos, targetPos, N));




// Given a given sequence, find the length of the longest increasing subsequence (LIS) in it.

// The longest increasing subsequence is a subsequence of a given sequence in which the subsequence's elements are in sorted order, lowest to highest, and in which the subsequence is as long as possible.

// Input : [0, 8, 4, 12, 2, 10, 6, 14, 1, 9, 5, 13, 3, 11, 7, 15]
// Output: 6




// function _lis(arr,n)
// {
//     if (n == 1)
//         return 1;
    
//     let res, max_ending_here = 1;

//     for (let i = 1; i < n; i++)
//     {
//         res = _lis(arr, i);
//         if (arr[i-1] < arr[n-1] && res + 1 > max_ending_here)
//             max_ending_here = res + 1;
//     }
//     if (max_ref < max_ending_here)
//         max_ref = max_ending_here;
//     return max_ending_here;
// }

// function lis(arr,n)
// {
//     max_ref = 1;

//     _lis( arr, n);

//     return max_ref;
// }
// let arr=[0, 8, 4, 12, 2, 10, 6, 14, 1, 9, 5, 13, 3, 11, 7, 15 ]
// let n = arr.length;
// console.log("Length of lis is "
//                     + lis(arr, n) );






