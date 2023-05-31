// Write logic for counting palindromic numbers generated from the product of two two-digit numbers.
// Explanation
// product of some two 2-digit numbers that give a palindrome
// 11 x 11 = 121 : 1
// 11 x 33 = 363 : 2
// 11 x 44 = 484 : 3
// 11 x 56 = 616 : 4
// .
// .
// .
// 99 x 82 = 8118 : 226
// 99 x 91 = 9009 : 227
// Total count: 227 numbers
// Define the following method
// Name of Method: getCount()
// Arguments:    no arguments
// Return type: integer (count of palindromes)
// The method should meet the following functional expectations
// 1. Return count of palindromes generated from the product of all two 2-digit numbers.

// function getCount(){
//     let count = 0;
//     for(let i=10; i<=99; i++){
//         for(let j=10; j<=99; j++){
//             if(i*j == String(i*j).split('').reverse().join('')){
//                 count++;
//             }
//         }
//     }
//     return count;
// }
// console.log(getCount());

// Write logic for computing average word length of a given sentence.
// Explanation
// Average word length = no of characters divided by no of words in a given string
// Define the following method
// Name of Method : getAverageWordLength
// Arguments         : String containing a sentence
// Return type : integer
// Example
// Input : Hi dad
// Output : 2
// Input : Hi everyone
// Output : 5
// Input : How Are You
// Output : 3
// Method should meet the following functional expectations
// 1. Return average word length of a given string
// 2. Return -1 if input is null
// 3. Return 0 if input is empty string

// function getAverageWordLength(string){
//     let numberOfCharacters = 0;
//     for(let i of string){
//         if(i !=' '){
//             numberOfCharacters = numberOfCharacters +1;
//         }
//     }
//     let wordsCount = 0;
//     string = string.split(' ');
//     wordsCount = string.length;
//     let average_word_length = numberOfCharacters/wordsCount;
//     return Math.floor(average_word_length)
// }
// console.log(getAverageWordLength("Hi everyone"));

// Write logic for evaluating multiple-choice questions with the given key
// Define the following method
// Name of Method: evaluate()
// Arguments: two character arrays (one contains attempt, other contains key)
// Return type: marks
// attempt and the key array should contain the same case of characters and length as well.
// Two marks for each right answer and no negative marks.
// Example
// Input
// attempt: a b c d a a b b c c
// key: a b c d a b c d a b
// Output: 10
// Input
// attempt: a b c d a a b
// key: a b c d a b c d a b
// Output: -1
// The method should meet the following functional expectations
// 1. Return marks as per the given attempt and key arrays
// 2. Return -1, if the attempt and key have different array size

// function evaluate(attempt, key){
//     let marksCount = 0;
//     if(attempt.length == key.length){
//         for(let i in attempt){
//             for(let j in key){
//                 if(i ==j && attempt[i] == key[j])
//                 marksCount = marksCount + 2;
//             }
//         }
//         return marksCount
//     }else{
//         return -1
//     }
// }
// console.log(evaluate(["a", "b", "c", "d", "a", "a", "b", "b", "c", "c"], ["a", "b", "c", "d", "a", "b", "c", "d", "a", "b"]))

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

// function rotate(array, numberOfRotations){
//     let rotatedArray = array.splice(array.length-numberOfRotations, numberOfRotations);
//     let rotatedFinalArray = [...rotatedArray, ...array];
//     return rotatedFinalArray
// }
// console.log(rotate([1, 2, 3, 4], 1));

// Write logic for checking whether parenthesis is properly used in given input.
// Define method as follows
// Name of Method : isMatchingParanthesis
// Arguments         : String containing text, numbers and parenthesis
// Return Type :   boolean
// Example
// Input : (a + b)
// Output : true
// Input : ((4 + 4) * 5)
// Output : true
// Input : (a + b) * c))
// Output : false
// Input : )(a + b) * c))
// Output : false
// Method should meet the following requrements
// 1. Accept an expression in string format, return true if parenthesis is properly used otherwise return false.
// 2. Return false if input contains null.
// 3. Return true if the given string is empty.

// function isMatchingParanthesis(string){
//     let openParenthesis = 0;
//     let closedParenthesi = 0;
//     if(string == null){
//         return false;
//     }else if(string == ""){
//         return true;
//     }else{
//         for(let i in string){
//             if(+i == 0 && string[i] == ")"){
//                 return false;
//             }else{
//                 if(string[i] == "("){
//                     openParenthesis = openParenthesis + 1;
//                 }else if(string[i] == ")"){
//                     closedParenthesi = closedParenthesi +1;
//                 }
//             }
//         }
//         if(openParenthesis>0 && closedParenthesi>0 && openParenthesis == closedParenthesi){
//             return true;
//         }else{
//             return false;
//         }
//     }
// }
// console.log(isMatchingParanthesis("((4 + 4) * 5)"));

// Write a Python function to find the longest common sub-sequence in two lists.
// Original lists:
// [1, 2, 3, 4, 5, 6, 7, 8]
// [6, 7, 5, 6, 7, 8]
// Longest common sub-sequence in two lists:
// [5, 6, 7, 8]

// Original lists:
// [3, 5, 1, 8, 8]
// [3, 3, 5, 3, 8]
// Longest common sub-sequence in two lists:
// [3, 5, 8]

// Original lists:
// [1, 3, 5, 7]
// [2, 4, 6, 8]
// Longest common sub-sequence in two lists:
// []

// Original lists:
// [1, 3, 5, 7]
// [1, 2, 4, 6, 8]
// Longest common sub-sequence in two lists:
// [1]

// function logestCommonSubSequence(array1, array2){
//     let longestCommonSubSequenceArray = [];
//     for(let i of array1){
//         for(let j of array2){
//             if(i == j && longestCommonSubSequenceArray.indexOf(i) == -1){
//                 longestCommonSubSequenceArray.push(i);
//             }
//         }
//     }
//     return longestCommonSubSequenceArray
// }
// console.log(logestCommonSubSequence([1, 2, 3, 4, 5, 6, 7, 8], [6, 7, 5, 6, 7, 8]));

// Define a method which accepts the string and return the score for the given string.
// Explanation
// Let
// a is 1, b is 2 ... z is 26
// A is 1, B is 2 ... Z is 26
// Score for "abc" is 1 + 2 + 3 = 6
// Score for "dad" is 4 + 1 + 4 = 9
// Score for "DAD" is 4 + 1 + 4 = 9
// Define method as follows
// Name of Method: String getNameScore(String name)
// // which accepts the string as argument and return the score of the given string
// Arguments: One argument of type String
// Return type: value of type integer
// Method should meet the following functional expectations
// 1. Method should return appropriate score based on given name.
// 2. Method should work for upper case and lower case.
// 3. Return -1, In case given input is null or empty string.
// 4. Return -1, if given name contains special characters or digits

// let totalCharString = "abcdefghijklmnopqrstuvwxyz";
// function getNameScore(input_String){
//     let score = 0;
//         for(let j in input_String){
//             for(let i in totalCharString){
//                 if(input_String[j].toLowerCase() == totalCharString[i].toLowerCase()){
//                     score = score + +i+1
//                 }
//             }
//         }

//     return score;
// }
// console.log(getNameScore("abc"));

// let obj = {"emails":{"to":["arunteja.arikatla@sciencelogic.com"]},
// "requested_data":{"endpoint": "Data_Egress",
// "filters": {"0":{"undefined" : "undefined"}}
// }};
// let obj1 = {duration:6}
// obj.requested_data.filters[0].undefined == "undefined" ? obj.requested_data.filters[0] = obj1 :null
// console.log(obj.requested_data.filters[0]);

// // obj.requested_data.filters[0] = val;
// // console.log(obj);

// function search(mat,n,x) {
// 	if (n == 0)
// 		return -1;
// 	for (let i = 0; i < n; i++) {
// 		for (let j = 0; j < n; j++)
// 			if (mat[i][j] == x) {

// 				console.log(true)
// 			return 1;
// 		}
// 	}

// 	console.log(false);
// 	return 0;
// }

// 	let mat = [[ 1 ,2, 3],
// 				[1 ,8, 3, 5] ,
// 				[ 1 ,2, 4  ],
// 			];

// 	search(mat, 3, 8);

// Write code for calculating the sum of diagonal elements(TopLeft to BottomRight) of an array of size 3 X 3.

// Define the following method

// Name of Method: getDiagonalSum() // accepts a 2-D array and returns the sum of diagonal elements.

// Arguments : int[][]  // A Two dimensional int array

// Return type: int

// Input: array has the following elements

// 1 2 3

// 1 8 3

// 1 2 4

// Output:

// 13

// The method should meet the following functional requirements.

// 1. Method should take only a 3 X 3 array and should return a diagonal sum.

// 2. Return -1, If the array size is not 3 X 3.

// 3. Return -1, If the input is null.

// function getDiagonalSum(arr, n) {
//   let count = 0;
//   for (let i = 0; i < n; i++) {
//     for (let j = 0; j < n; j++) {
//       if (i == j) {
//         count = count + arr[i][j];
//       }
//     }
//   }

//   return count;
// }

// let mat = [
//   [1, 2, 3],
//   [3, 4, 5],
//   [6, 7, 8],
// ];

// let res = getDiagonalSum(mat, 3);

// console.log(res);

// Write code for calculating the row-wise sum of an array of size 3 X 3
// Define the following method
// Name of Method: getRowSum() // accepts a 2-D array and returns 1-D array containing row-wise sum
// Argument : int[][]
// Return type: int[]
// Input: array has the following elements
// 1 2 3
// 1 2 3
// 1 2 3
// Output: array should contain the following elements
// 6 6 6
// The method should meet the following functional expectations

// 1. Method should take only 3 X 3 arrays and should return a one-dimension array containing a row-wise sum.

// 2. Return null, If the array size is not 3 X 3.

// 3. Return null, If the input is null.

// let m = 3;
// let n = 3;
// let OutputRowSumArray = []
// function row_sum(arr) {
//     let coulumnAumSum = []
//   let i,
//     j,
//     sum = 0;
//   for (i = 0; i < m; ++i) {
//     for (j = 0; j < n; ++j) {
//       sum = sum + arr[i][j];
//     }
//       coulumnAumSum.push(sum)
//     sum = 0;
//   }
//  OutputRowSumArray.push(coulumnAumSum);
//  return OutputRowSumArray
// }
// console.log(row_sum( [
//     [1, 2, 3],
//     [1, 2, 3],
//     [1, 2, 3]
//   ]));

// Write a method for calculating the column-wise sum of an array of size 3 X 3

// Define the following method

// Name of Method : int[] getColumnSum(int num[][]) // accepts 2-D array and returns 1-D array containing column-wise sum

// Arguments : int[][]

// Return type: int[]

// Input: array has the following elements

// 1 2 3

// 1 2 3

// 1 2 3

// Output: array should contain the following elements

// 3 6 9

// The method should meet the following functional expectations

// 1. Method should take only a 3 X 3 array and should return a one-dimension array containing column-wise sum

// 2. if the array size is not 3 X 3 return null.

// 3. if the input is null return null.


// let m = 3;
// let n = 3;
// let columnSuumArray = []
// function column_sum(arr) {
//     let column_sum = []
//   let i,
//     j,
//     sum = 0;
// //   document.write("<br>" + "Finding Sum of each column:" + "<br>");
//   for (i = 0; i < m; ++i) {
//     for (j = 0; j < n; ++j) {
//       sum = sum + arr[j][i];
//     }
//     // document.write("Sum of the column " + i + " = " + sum + "<br>");
//     column_sum.push(sum)
//     sum = 0;
//   }
//   columnSuumArray.push(column_sum);
//   return columnSuumArray

// }
// console.log(column_sum( [
//     [1, 2, 3],
//     [1, 2, 3],
//     [1, 2, 3]
//   ]));



// Write a Python program to generate all permutations of a list in Python.
// In mathematics, the notion of permutation relates to the act of arranging all the members of a set into 
// some sequence or order, or if the set is already ordered, rearranging (reordering) its elements, 
// a process called permuting. These differ from combinations, which are selections of some members of 
// a set where order is disregarded.
// i/p:[1,2,3]
// o/p: [(1, 2, 3), (1, 3, 2), (2, 1, 3), (2, 3, 1), (3, 1, 2), (3, 2, 1)] 

// let arr = [1,2,3];
// const permutator = (inputArr) => {
//     let result = [];
//     const permute = (arr, m = []) => {
//       if (arr.length === 0) {
//         result.push(m)
//       } else {
//         for (let i = 0; i < arr.length; i++) {
//           let curr = arr.slice();
//           let next = curr.splice(i, 1);
//           permute(curr.slice(), m.concat(next))
//        }
//      }
//    }
//    permute(inputArr);
//    return result;
//   }
// console.log(permutator(arr));  



// // Write a Python program to get a list, sorted in increasing order by the last element in each 
// // tuple from a given list of non-empty tuples.

// // Sample List : [(2, 5), (1, 2), (4, 4), (2, 3), (2, 1)]
// // Expected Result : [(2, 1), (1, 2), (2, 3), (4, 4), (2, 5)]


// let arr =  [[2, 5], [1, 2], [4, 4], [2, 3], [2, 1]];
// arr.sort((a,b)=>{
//     return a[1]-b[1]
// });
// console.log(arr);




// Write a Python function to reverse a list at a specific location.
// Original list:
// [10, 20, 30, 40, 50, 60, 70, 80]
// Reverse elements of the said list between index position 2 and 4
// [10, 20, 50, 40, 30, 60, 70, 80]

// Original list:
// [10, 20, 50, 40, 30, 60, 70, 80]
// Reverse elements of the said list between index position 6 and 7
// [10, 20, 50, 40, 30, 60, 80, 70]

// Original list:
// [10, 20, 50, 40, 30, 60, 80, 70]
// Reverse elements of the said list between index position 0 and 7
// [70, 80, 60, 30, 40, 50, 20, 10]


// let arr = [10, 20, 50, 40, 30, 60, 80, 70];
// [arr[0],arr[7]] = [arr[7],arr[0]];
// console.log(arr);




// Write a Python program to check whether two lists are circularly identical.

// list1 = [10, 10, 0, 0, 10] list2 = [10, 10, 10, 0, 0] list3 = [1, 10, 10, 0, 0]

// Compare list1 and list2                                                                                       
// True                                                                                                          
// Compare list1 and list3                                                                                       
// False 


// let list1 = [10, 10, 0, 0, 10] ;
// let list2 = [10, 10, 10, 0, 0];
// let list3 = [1, 10, 10, 0, 0]
// list1.sort((a,b)=>{return a-b});
// list2.sort((a,b)=>{return a-b});
// list3.sort((a,b)=>{return a-b});
// function isIdentical(array1,array2){
//      let isidentical = []
//     for(let i in array1){
//         for(let j in array2){
//             if(i == j && array1[i] == array2[j]){
//                 isidentical.push(1)
//             }
//         }
//     }
//     if(isidentical.length == array1.length && isidentical.length == array2.length){
//         return true
//     }else{
//         return false
//     }
// }
// console.log(isIdentical(list1,list2));
// console.log(isIdentical(list2,list3));

