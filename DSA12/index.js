// You are given an array arr[] of N integers including 0. The task is to find the smallest positive number
// missing from the array.
// Example 1:
// Input:
// N = 5
// arr[] = {1,2,3,4,5}
// Output: 6
// Explanation: Smallest positive missing
// number is 6.
// Example 2:
// Input:
// N = 5
// arr[] = {0,-10,1,3,-20}
// Output: 2
// Explanation: Smallest positive missing
// number is 2.

// let input_Array = [0,-10,1,3,-20];
// let n = 5;
// function missingNumber(array, size){
//   let smallValue = array.sort((a,b)=>{
//         return a-b
//     })[0];
// let biggerValue = array.sort((a,b)=>{
//     return b-a
// })[0]
// let missingValueArray = []
// for(let i=smallValue; i<=biggerValue; i++){
//     if(array.indexOf(i) == -1){
//         missingValueArray.push(i)
//     }
// }
// if(missingValueArray.length == 0){
//     return array[0]+1
// }else{
//     missingValueArray.sort((a,b)=>{return b-a})
//     return missingValueArray[0]
// }

// }
// console.log(missingNumber(input_Array, n));

// Given an array arr[] of size n, find the first repeating element.
// The element should occur more than once and the index of its first occurrence should be the smallest.
// Note:- The position you return should be according to 1-based indexing.
// Example 1:
// Input:
// n = 7
// arr[] = {1, 5, 3, 4, 3, 5, 6}
// Output: 2
// Explanation:
// 5 is appearing twice and
// its first appearence is at index 2
// which is less than 3 whose first
// occuring index is 3.
// Example 2:
// Input:
// n = 4
// arr[] = {1, 2, 3, 4}
// Output: -1

// let input_Array = [1, 2, 3, 4];
// let input_object = {};
// function firstRepeated(array, obj){
//     for(let i of array){
//         obj[i] = (obj[i] || 0)+1;
//     }
//     let Output_Array = [];
//     for(let i in array){
//         for(let j in obj){
//             if(obj[j]>1 && array[i] == j){
//                 Output_Array.push(+i);
//             }
//         }
//     }
//     // console.log(Output_Array);
//     if(Output_Array.length>0){
//         return Output_Array[0]
//     }else{
//         return -1
//     }

// }
// console.log(firstRepeated(input_Array, input_object));

// Given an array arr[] of size n, find the first repeating element.
//The element should occur more than once and the index of its first occurrence should be the smallest.

// Note:- The position you return should be according to 1-based indexing.

// Example 1:

// Input:
// n = 7
// arr[] = {1, 5, 3, 4, 3, 5, 6}
// Output: 2
// Explanation:
// 5 is appearing twice and
// its first appearence is at index 2
// which is less than 3 whose first
// occuring index is 3.

// Example 2:

// Input:
// n = 4
// arr[] = {1, 2, 3, 4}
// Output: -1
// Explanation:
// All elements appear only once so
// answer is -1.

// let input_Array = [1, 2, 3, 4];
// let input_object = {};
// function firstRepeated(array, obj){
//     for(let i of array){
//         obj[i] = (obj[i] || 0)+1;
//     }
//     let Output_Array = [];
//     for(let i=1; i<array.length; i++){
//         for(let j in obj){
//             if(obj[j]>1 && array[i] == j){
//                 Output_Array.push(+i);
//             }
//         }
//     }
//     if(Output_Array.length>0){
//         return Output_Array[0]+1
//     }else{
//         return -1
//     }

// }
// console.log(firstRepeated(input_Array, input_object));

// Given a string S, find the longest palindromic substring in S. Substring of string S: S[ i . . . . j ]
// where 0 ≤ i ≤ j < len(S). Palindrome string: A string which reads the same backwards. More formally, S is
// palindrome if reverse(S) = S. Incase of conflict, return the substring which occurs first ( with the least
// starting index).
// Example 1:
// Input:
// S = "aaaabbaa"
// Output: aabbaa
// Explanation: The longest Palindromic
// substring is "aabbaa".
// Example 2:

// Input:
// S = "abc"
// Output: a
// Explanation: "a", "b" and "c" are the
// longest palindromes with same length.
// The result is the one with the least
// starting index.

// let input_String = "abc";
// let total_palindrome_array = []

// function longestPalin(){
//     function recursion(start, depth, subStr){
//         for(let i=start; i<input_String.length; i++){
//           let  formedStr = subStr + input_String[i]
//             if(depth>0){
//                 recursion(i+1, depth-1, formedStr)
//             }
//             else{
//                 if(formedStr == formedStr.split('').reverse().join('') && total_palindrome_array.indexOf(formedStr) == -1){
//                     total_palindrome_array.push(formedStr)
//                 }
//             }
//         }
//     }
//     for(let i=0; i<input_String.length; i++){
//         recursion(0, i, "")
//     };
//     input_String = input_String.split('');
//     total_palindrome_array.sort((a,b)=>{return b.length-a.length});
//     let val = []
//     for(let i of input_String){
//         if(val.indexOf(i) == -1){
//             val.push(i)
//         }

//     }
//     let finalPalindrome_Array = []
//     for(let i of total_palindrome_array){
//         let arr = []
//         for(let j of i){
//             if(arr.indexOf(j) == -1){
//                 arr.push(j)
//             }
//         };
//        if(arr.join('') == val.join('')){
//             finalPalindrome_Array.push(i)
//        }
//     };
//     if(finalPalindrome_Array.length>0){
//         console.log("longest palindrome subString", finalPalindrome_Array[0]);
//     }else{
//         console.log("longest palindrome subString", input_String[0]);
//     }
// }
// longestPalin()

// javascript implementation to print all the palindromic
// permutations alphabetically
const MAX_CHAR = 26;

// Function to count frequency of each char in the
// string. freq[0] for 'a', ...., freq[25] for 'z'
// function countFreq(str, freq, n)
// {
// 	for (let i = 0; i < n; i++)
// 		freq[str[i].charCodeAt(0) - 97]++;

// 	return freq;
// }

// // Cases to check whether a palindromic
// // string can be formed or not
// function canMakePalindrome(freq, n)
// {
// 	// count_odd to count no of
// 	// chars with odd frequency
// 	let count_odd = 0;
// 	for (let i = 0; i < MAX_CHAR; i++)
// 		if (freq[i] % 2 != 0)
// 			count_odd++;

// 	// For even length string
// 	// no odd freq character
// 	if (n % 2 == 0) {
// 		if (count_odd > 0)
// 			return false;
// 		else
// 			return true;
// 	}

// 	// For odd length string
// 	// one odd freq character
// 	if (count_odd != 1)
// 		return false;

// 	return true;
// }

// // Function to find odd freq char and reducing its
// // freq by 1, returns garbage value if odd freq
// // char is not present
// function findOddAndRemoveItsFreq(freq)
// {
// 	let odd_char = '#';

// 	for (let i = 0; i < MAX_CHAR; i++) {
// 		if (freq[i] % 2 != 0) {
// 			freq[i]--;
// 			odd_char = String.fromCharCode(i + 97);
// 			break;
// 		}
// 	}

// 	return odd_char;
// }

// // To find lexicographically first palindromic
// // string.
// function findPalindromicString(str, n)
// {
// 	let freq = new Array(MAX_CHAR).fill(0);
// 	freq = countFreq(str, freq, n);

// 	// check whether a palindromic string
// 	// can be formed or not with the
// 	// characters of 'str'
// 	if (!canMakePalindrome(freq, n))
// 		// cannot be formed
// 		return false;

// 	// Assigning odd freq character if present
// 	// else some garbage value
// 	let odd_char = findOddAndRemoveItsFreq(freq);
// 	// indexes to store characters from the front
// 	// and end
// 	let front_index = 0, rear_index = n - 1;
// 	// Traverse characters in alphabetical order
// 	for (let i = 0; i < MAX_CHAR; i++) {
// 		if (freq[i] != 0) {
// 			let ch = String.fromCharCode(i + 97);
// 			// store 'ch' to half its frequency times
// 			// from the front and rear end. Note that
// 			// odd character is removed by
// 			// findOddAndRemoveItsFreq()
// 			for (let j = 1; j <= Math.floor(freq[i] / 2); j++) {
// 				str[front_index++] = ch;
// 				str[rear_index--] = ch;
// 			}
// 		}
// 	}
// 	// if true then odd frequency char exists
// 	// store it to its corresponding index
// 	if (front_index == rear_index)
// 		str[front_index] = odd_char;

// 	// palindromic string can be formed
// 	return true;
// }
// function swap(a, b){
// 	return [b, a];
// }
// // function to reverse the characters in the
// // range i to j in 'str'
// function reverse(str, i, j)
// {
// 	while (i < j) {
// 		[str[i], str[j]] = swap(str[i], str[j]);
// 		i++;
// 		j--;
// 	}

// 	return str;
// }
// // function to find next higher palindromic
// // string using the same set of characters
// function nextPalin(str, n)
// {
// 	// if length of 'str' is less than '3'
// 	// then no higher palindromic string
// 	// can be formed
// 	if (n <= 3)
// 		return false;

// 	// find the index of last character
// 	// in the 1st half of 'str'
// 	let mid = Math.floor(n / 2) - 1;
// 	let i, j;

// 	// Start from the (mid-1)th character and
// 	// find the first character that is
// 	// alphabetically smaller than the
// 	// character next to it.
// 	for (i = mid - 1; i >= 0; i--)
// 		if (str[i] < str[i + 1])
// 			break;

// 	// If no such character is found, then all characters
// 	// are in descending order (alphabetically) which
// 	// means there cannot be a higher palindromic string
// 	// with same set of characters
// 	if (i < 0)
// 		return false;

// 	// Find the alphabetically smallest character on
// 	// right side of ith character which is greater
// 	// than str[i] up to index 'mid'
// 	let smallest = i + 1;
// 	for (j = i + 2; j <= mid; j++)
// 		if (str[j] > str[i] && str[j] < str[smallest])
// 			smallest = j;

// 	// swap str[i] with str[smallest]
// 	[str[i], str[smallest]] = swap(str[i], str[smallest]);

// 	// as the string is a palindrome, the same
// 	// swap of characters should be performed
// 	// in the 2nd half of 'str'
// 	[str[n - i - 1], str[n - smallest - 1]] = swap(str[n - i - 1], str[n - smallest - 1]);

// 	// reverse characters in the range (i+1) to mid
// 	str = reverse(str, i + 1, mid);

// 	// if n is even, then reverse characters in the
// 	// range mid+1 to n-i-2
// 	if (n % 2 == 0)
// 		str = reverse(str, mid + 1, n - i - 2);

// 	// else if n is odd, then reverse characters
// 	// in the range mid+2 to n-i-2
// 	else
// 		str = reverse(str, mid + 2, n - i - 2);

// 	// next alphabetically higher palindromic
// 	// string can be formed
// 	return true;
// }

// // function to print all the palindromic permutations
// // alphabetically
// function printAllPalinPermutations(str, n)
// {
// 	// check if lexicographically first palindromic string
// 	// can be formed or not using the characters of 'str'
// 	if (!(findPalindromicString(str, n))) {
// 		// cannot be formed
// 		console.log("-1");
// 		return;
// 	}

// 	// print all palindromic permutations
// 	do {
// 		console.log(str.join(""));
// 	} while (nextPalin(str, n));
// }

// // Driver program to test above
// let str = Array.from("xyxzwxxyz");
// let n = str.length;
// printAllPalinPermutations(str, n);

// // The code is contributed by Nidhi goel

let arr = [
  {
    id: 1,
    status: "not started",
    statuscode: "not_started",
  },
  {
    id: 2,
    status: "open",
    statuscode: "open",
  },
  {
    id: 3,
    status: "not started",
    statuscode: "not_started",
  },

  {
    id: 4,
    status: "completed",
    statuscode: "completed",
  },
  {
    id: 5,
    status: "open",
    statuscode: "open",
  },
  {
    id: 6,
    status: "in_progress",
    statuscode: "in_progress",
  },
];
let obj = 
{
 "in_progress":[6],
 "open":[5,2],
 "not started":[1,3],
 "completed":[4]
}
