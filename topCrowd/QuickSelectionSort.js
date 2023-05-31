// Quickselect is a selection algorithm to find the k'th
// smallest element in an unordered list. It is closely related to the Quicksort
// sorting algorithm. Like Quicksort, it is efficient traditionally and offers good average-case
// performance, but has a poor worst-case performance.
// For example,
// Input: [7, 4, 6, 3, 9, 1]
// k = 2
// Output: k’th smallest array element is 3
// Input: [7, 4, 6, 3, 9, 1]
// k = 1
// Output: k’th smallest array element is 1


// let arr = [7, 4, 6, 3, 9, 1]
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


let num=100;
let num1 = 200;
let temp =(num+num1)-num;
num1 = (num+num1)-num1;
num = temp;
console.log(num, num1);





