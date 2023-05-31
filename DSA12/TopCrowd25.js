// function inversionPair(input_array){
//     let inversionCount = 0;
//     let inversionPairArray = [];
//     for(let i in input_array){
//         for(let j in input_array){
//             if(+i<+j && input_array[i]>input_array[j]){
//                 inversionCount = inversionCount + 1;
//                 inversionPairArray.push([input_array[i],input_array[j]])

//             }
//         }
//     }
//     console.log(inversionPairArray);
//     return inversionCount
// }
// console.log(inversionPair([1, 9, 6, 4, 5]));

// Given two strings, determine if the first string can be transformed into the second string. The only operation allowed is moving a character from the first string to the front. If the string can be transformed, find the minimum number of operations required for the transformation.
// For example, the minimum number of operations required to convert the string ADCB to string ABCD is 3.
// ADCB —> CADB (Move ‘C’ to the front)
// CADB —> BCAD (Move ‘B’ to the front)
// BCAD —> ABCD (Move ‘A’ to the front)

// function minOps(A, B)
// {
//     if (A.length != B.length)
//         return -1;

//     let i, j, res = 0;
//     let count = new Array(256);

//     for(let i = 0; i < 256; i++)
//     {
//         count[i] = 0;
//     }
//     for(i = 0; i < A.length; i++)
//     {
//         count[A[i].charCodeAt(0)]++;
//         count[B[i].charCodeAt(0)]--;
//     }
//      for(i = 0; i < 256; i++)
//         if (count[i] != 0)
//             return -1;

//     i = A.length - 1;
//     j = B.length - 1;

//     while(i >= 0)
//     {
//         if (A[i] != B[j])
//             res++;
//         else
//             j--;

//         i--;
//     }
//     return res;
// }
// let A = "ADCB";
// let B = "ABCD";

// console.log("Minimum number of " +
//                "operations required is " +
//                minOps(A, B));

// Given an integer array having distinct elements, find the surpasser count for each element in it. In other words, for each array element, find the total number of elements to its right, which are greater than it.

// For example,

// Input:  { 4, 6, 3, 9, 7, 10 }

// Output: { 4, 3, 3, 1, 1, 0 }

// let input_array = [4, 6, 3, 9, 7, 10 ];
// let Output_array = [];
// for(let i=0; i<input_array.length; i++){
//     let count = 0;
//     for(let j=i; j<input_array.length; j++){
//         if(j>i && input_array[i]<input_array[j]){
//             count = count+1;
//         }
//     };
//     Output_array.push(count)
// }
// console.log(Output_array);

// Write a Python program that iterates over elements as many times as its count.
// Note: Elements are returned in arbitrary order.
// i/p: p=4, q=2, r=0, s=-2
// o/p:
// ['p', 'p', 'p', 'p', 'q', 'q']

// let input_array = ["p=4", "q=2", "r=0", "s=-2"];
// let Output_array = []
// for(let i of input_array ){
//     let spliValue = i.split('=');
//     if(+spliValue[1]>0){
//         for(let i=0; i<+spliValue[1]; i++){
//             Output_array.push(spliValue[0])
//         }
//     }
// }
// console.log(Output_array);

// let arr = [
//     {
//         name:"venkat",
//         age:20
//     },
//     {
//         name:"venkat",
//         age:20
//     },
//     {
//         name:"venkat",
//         age:20
//     },
//     {
//         name:"vinay",
//         age:21
//     },
//     {
//         name:"vinay",
//         age:21
//     }
// ];

// Write a Python program to find the most common element in a given list.
// Sample Output:
// Original list:
// ['PHP', 'PHP', 'Python', 'PHP', 'Python', 'JS', 'Python', 'Python', 'PHP', 'Python']
// Most common element of the said list:
// Python

// let input_array = ['PHP', 'PHP', 'Python', 'PHP', 'Python', 'JS', 'Python', 'Python', 'PHP', 'Python'];
// let obj = {}
// for(let i of input_array){
//     obj[i] = (obj[i]||0)+1;
// };
// let highestVal = Object.values(obj).sort((a,b)=>{return b-a})[0];
// for(let j in obj){
//     if(obj[j] == highestVal){
//         console.log(j);
//     }
// }

// Write a Python program to find the most common elements and their counts in a specified text.
// Original string: lkseropewdssafsdfafkpwe
// Most common three characters of the said string:
// [('s', 4), ('e', 3), ('f', 3)]

// let str = "lkseropewdssafsdfafkpwe";
// let obj = {};
// for(let i of str){
//     obj[i] = (obj[i]||0)+1
// };
// let val = Object.entries(obj).sort((a,b)=>{return b[1]-a[1]});
// val.length = 3;
// console.log(val);

// Write a Python program to find the occurrences of the 10 most common words in a given text.(python)

// text = "The Python Software Foundation (PSF) is a 501(c)(3) non-profit corporation that holds the intellectual property rights behind the Python programming language. We manage the open source licensing for Python version 2.1 and later and own and protect the trademarks associated with Python. We also run the North American PyCon conference annually, support other Python conferences around the world, and fund Python related development with our grants program and by funding special projects."

// let str = "The Python Software Foundation (PSF) is a 501(c)(3) non-profit corporation that holds the intellectual property rights behind the Python programming language. We manage the open source licensing for Python version 2.1 and later and own and protect the trademarks associated with Python. We also run the North American PyCon conference annually, support other Python conferences around the world, and fund Python related development with our grants program and by funding special projects.";
// str = str.split('(').join('').split(')').join('').split('.').join('').split('0').join('').split("1").join('').
// split('2').join('').split('3').join('').split('4').join('').split('5').join('').split('6').join('').
// split('7').join('').split('8').join('').split('9').join('').split(' ');
// let obj = {}
// for(let i of str){
//     obj[i] = (obj[i]||0)+1;
// };
// let val = Object.entries(obj).sort((a,b)=>{return b[1]-a[1]});
// val.length = 10;
// console.log(val);

// let a = [27,23,32,42,52,62];
// let Output_array = []
// for(let i of a){
//     if(i%2 == 1){
//         i = String(i).split('').reverse().join('');
//         Output_array.push(+i);
//     }else{
//         Output_array.push(i)
//     }
// }
// console.log(Output_array);

// output:[72,32,32,42,52,62];

// Write a Python program to create a deque and append a few elements to the left and right. Next, remove some elements from the left and right sides and reverse the deque.
// deque(['Red', 'Green', 'White'])
// Adding to the left:
// deque(['Pink', 'Red', 'Green', 'White'])
// Adding to the right:
// deque(['Pink', 'Red', 'Green', 'White', 'Orange'])

// Removing from the right:
// deque(['Pink', 'Red', 'Green', 'White'])

// Removing from the left:
// deque(['Red', 'Green', 'White'])

// Reversing the deque:
// deque(['White', 'Green', 'Red'])

// let input_array = ["Red", 'Green', 'White'];
// input_array.push("orange");
// input_array.unshift("Pink");
// input_array.pop();
// input_array.shift();
// input_array.reverse()

// Write a Python program to remove an item from a set if it is present in the set.
// Original set elements:
// {0, 1, 2, 3, 4, 5}
// Remove 0 from the said set:
// {0, 1, 2, 3, 5}
// Remove 5 from the said set:
// {0, 1, 2, 3}
// Remove 2 from the said set:
// {0, 1, 2, 3}
// Remove 7 from the said set:
// {0, 1, 2, 3}

// let input_array = [0, 1, 2, 3, 4, 5];
// let remove_Element = 1;
// if(input_array.indexOf(remove_Element) == -1){
//     console.log(input_array);
// }else{
//     input_array.splice(input_array.indexOf(remove_Element),1);
//     console.log(input_array);
// }

// Write a Python program to create a shallow copy of sets

// Note : Shallow copy is a bit-wise copy of an object. A new object is created that has an exact copy of the values in the original object.

// let original_Array = [1,2,3,4,5];
// let shallow_copy = original_Array;
// console.log(shallow_copy);

// Write a Python program to find all the unique words and count the frequency of occurrence from a given list of
//  strings. Use Python set data type.
// ['Red', 'Green', 'Red', 'Blue', 'Red', 'Red', 'Green']
// {'Red': 4, 'Blue': 1, 'Green': 2}

// let input_array = ['Red', 'Green', 'Red', 'Blue', 'Red', 'Red', 'Green'];
// let repeatedVlaues_obj = {};
// for(let i of input_array){
//     repeatedVlaues_obj[i] = (repeatedVlaues_obj[i]||0)+1;
// };
// console.log(repeatedVlaues_obj);

// Write a Python program to create a symmetric difference.

// For example, the symmetric difference of the sets {1,2,3} and {3,4} is {1,2,4}.

// function symmetricDifference(input_array1, input_array2){
//     let val = [...input_array1, ...input_array2];
//     let symmetricDifferenceArray = [];
//     for(let i of val){
//         if(val.indexOf(i) == val.lastIndexOf(i)){
//             symmetricDifferenceArray.push(i);
//         }
//     }
//     return symmetricDifferenceArray
// }
// console.log(symmetricDifference([1,2,3],[3,4]));

// Given the root of a binary tree, return the postorder traversal of its nodes' values.

// Input:
//            1
//          /   \
//         /      \
//        2       3
//       /          / \
//      /           /     \
//     4        5      6
//            / \
//           /   \
//          7       8

// Output: [4, 2, 7, 8, 5, 6, 3, 1]

// class Node
// {
//     constructor(item)
//     {
//         this.data=item;
//         this.left=null;
//         this.right=null;
//     }
// }

// let root;
// let list = [];
// let Output_array = [];
// function postOrderIterative(node)
// {
//     let S = [];
//     if (node == null)
//         return list;
//     S.push(node);
//     let prev = null;
//     while (S.length!=0)
//     {
//         let current = S[S.length-1];
//         if (prev == null || prev.left == current ||
//                                     prev.right == current)
//         {
//             if (current.left != null)
//                 S.push(current.left);
//             else if (current.right != null)
//                 S.push(current.right);
//             else
//             {
//                 S.pop();
//                 list.push(current.data);
//             }
//         }
//         else if (current.left == prev)
//         {
//             if (current.right != null)
//                 S.push(current.right);
//             else
//             {
//                 S.pop();
//                 list.push(current.data);
//             }
//         }
//         else if (current.right == prev)
//         {
//             S.pop();
//             list.push(current.data);
//         }

//         prev = current;
//     }

//     return list;
// }
// root = new Node(1);
// root.left = new Node(2);
// root.right = new Node(3);
// root.left.left = new Node(4);
// root.right.left = new Node(5);
// root.right.right = new Node(6);
// root.right.left.left = new Node(7);
// root.right.left.right = new Node(8);
// let mylist = postOrderIterative(root);
// console.log("Post order traversal of binary tree is ");
// for(let i = 0; i < mylist.length; i++)
// {
//    Output_array.push(mylist[i])
// }
// console.log(Output_array);

// let Output_array = [];
// class Node {
// 	constructor(val) {
// 		this.data = val;
// 		this.left = null;
// 		this.right = null;
// 	}
// }
// 	function printLevelOrder() {
// 		var queue = [];
// 		queue.push(root);
// 		while (queue.length != 0) {
// 			var tempNode = queue.shift();
//             Output_array.push(tempNode.data)
// 			if (tempNode.left != null) {
// 				queue.push(tempNode.left);
// 			}
// 			if (tempNode.right != null) {
// 				queue.push(tempNode.right);
// 			}
// 		}
// 	}
// 		let root = new Node(1);
// 		root.left = new Node(2);
// 		root.right = new Node(3);
// 		root.left.left = new Node(4);
// 		root.right.left = new Node(5);
//         root.right.right = new Node(6);
//         root.right.right = new Node(6);
//         root.right.left.left = new Node(7);
//         root.right.left.right = new Node(8)
// 		console.log("Level order traversal of binary tree is - ");
// 		printLevelOrder();
//         console.log(Output_array);





// Given the root of a binary tree, return the preorder traversal of its nodes' values.

// Input:
//            1
//          /   \
//         /      \
//        2       3
//       /          / \
//      /           /     \
//     4        5      6
//            / \
//           /   \
//          7       8

// Output: [1, 2, 4, 3, 5, 7, 8, 6]



// let output_array = []
// class Node {
// 	constructor(val) {
// 		this.key = val;
// 		this.left = null;
// 		this.right = null;
// 	}
// }
// 	var root = null;
// 	function printPreorder(node) {
// 		if (node == null)
// 			return;
// 		output_array.push(node.key)
// 		printPreorder(node.left);
// 		printPreorder(node.right);

// 	}

// 		root = new Node(1);
// 		root.left = new Node(2);
// 		root.right = new Node(3);
// 		root.left.left = new Node(4);
// 		root.right.left = new Node(5);
// 		root.right.right = new Node(6);
// 		root.right.left.left = new Node(7);
// 		root.right.left.right = new Node(8);
// 		console.log("Preorder traversal of binary tree is");
// 		printPreorder(root);
// console.log(output_array)





// Given the root of a binary tree, return the inorder traversal of its nodes' values.

// Input:
//            1
//          /   \
//         /      \
//        2       3
//       /          / \
//      /           /     \
//     4        5      6
//            / \
//           /   \
//          7       8

// Output: [4, 2, 1, 7, 5, 8, 3, 6]



// let output_array = []
// class Node {
// 	constructor(val) {
// 		this.key = val;
// 		this.left = null;
// 		this.right = null;
// 	}
// }
// 	var root = null;
// 	function printInorder(node) {
// 		if (node == null)
// 			return;
// 		printInorder(node.left);
//         output_array.push(node.key)
// 		printInorder(node.right);
// 	}
// 		root = new Node(1);
// 		root.left = new Node(2);
// 		root.right = new Node(3);
// 		root.left.left = new Node(4);
// 		root.right.left = new Node(5);
// 		root.right.right = new Node(6);
// 		root.right.left.left = new Node(7);
// 		root.right.left.right = new Node(8);
// 		console.log("Inorder traversal of binary tree is ");
// 		printInorder(root);
// console.log(output_array)





// Given an unsorted integer array, find a pair with the given sum in it.

// • Each input can have multiple solutions. The output should match with either one of them.

// Input : nums = [8, 7, 2, 5, 3, 1], target = 10
// Output: (8, 2) or (7, 3)

// • The solution can return pair in any order. If no pair with the given sum exists, the solution should return null.

// Input : nums[] = [5, 2, 6, 8, 1, 9], target = 12


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






// Write a Python program to find whether a given string starts with a given character using Lambda.

// let str = "venkat";
// let inputChar = "v";
// let checkStr = ()=>{
//     if(str[0] == inputChar){
//          return true
//     }else{
//         return false
//     }
// }
// console.log(checkStr());






// Write a Python program to create a lambda function that adds 15 to a given number passed in as an argument,
// lso create a lambda function that multiplies argument x with argument y and prints the result.

// function adding(a,b,c){
// let res=a+15;
// let demo=b*c;
//  console.log(res,demo)
// }

// adding(10,12,15);



// Write a Python program to find all the anagrams and group them together from a given list of strings.
//  Use the Python data type.

// Original list of strings:
// ['eat', 'cba', 'tae', 'abc', 'xyz']
// Find and group all anagrams in the said list:
// [['eat', 'tae'], ['cba', 'abc'], ['xyz']]

// Original list of strings:
// ['restful', 'forty five', 'evil', 'over fifty', 'vile', 'fluster']
// Find and group all anagrams in the said list:
// [['restful', 'fluster'], ['forty five', 'over fifty'], ['evil', 'vile']];

// let input_array =['eat', 'cba', 'tae', 'abc', 'xyz'];
// let anagramsIndex = [];
// let anagramsArray = []
// for(let i=0; i<input_array.length; i++){
//     for(let j=i; j<input_array.length; j++){
//         if(input_array[i] === input_array[j].split('').reverse().join('')){
//             anagramsArray.push([input_array[i], input_array[j]])
//             anagramsIndex.push(i,j)
//         }
//     }
// }
// for(let i in input_array){
//     if(!anagramsIndex.includes(+i)){
//        anagramsArray.push(input_array[i])
//     }
// }
// console.log(anagramsArray);


// Write a Python program to find the intersection of two given arrays using Lambda.

// Original arrays:
// [1, 2, 3, 5, 7, 8, 9, 10]
// [1, 2, 4, 8, 9]

// Intersection of the said arrays:  [1, 2, 8, 9]



// const IntersectionOfTwoArrays = (input_array1, input_array2)=>{
//     let output_array = []
//     for(let i of input_array2){
//         if(input_array1.includes(i)){
//             output_array.push(i)
//         }
//     }
//     return output_array
// }
// console.log(IntersectionOfTwoArrays([1, 2, 3, 5, 7, 8, 9, 10],[1, 2, 4, 8, 9]));



