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

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
let m = 3;
let k=1 ;
let j = 7;
let Output = [];
let val;
for(let i=0; i<k; i++){
    let val = arr.splice(0,1);
    Output.push(...val);
}
val = j-Output.length;
if(val<=1){
    Output.push(...arr)
}else{
    function recursion(m, array){
        let sma = array.splice(0,m)
        sma = sma.reverse()
        Output.push(...sma)
        val = j-Output.length;
        if(val>1){
            recursion(m, array)
        }else if(val<=1){
            Output.push(...array)
        }
    }
    recursion(3, arr);
}
console.log(Output);



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