// Given an integer array of size `n`, return the element which appears more than `n/2` times.
//  Assume that the input always contain the majority element.
// Input : [2, 8, 7, 2, 2, 5, 2, 3, 1, 2, 2]
// Output: 2
// Input : [1, 3, 1, 1]
// Output: 1

// let input_Array = [2, 8, 7, 2, 2, 5, 2, 3, 1, 2, 2];
// let input_object = {};
// for(let i of input_Array){
//     input_object[i] = (input_object[i]||0)+1
// }
// for(let i in input_object){
//     if(input_object[i]>input_Array.length/2){
//         console.log(i,"Element which is appears more than input_array length times");
//     }
// }


// Given a sorted integer array and a target, determine if the target exists in the array in logarithmic time.
//  If target exists in the array, the procedure should return the index of it.
// Input: nums[] = [2, 3, 5, 7, 9], target = 7
// Output: 3
// Explanation: Element found at 4th (index 3) position
// • If there are duplicate elements in the array, the procedure may return any index whose element is equal to 
// the target.
// Input: nums[] = [1, 2, 3, 4, 4, 5, 6, 7], target = 4
// Output: 3 (or 4)
// Explanation: Element found at the 4th (index 3) or 5th (index 4) position.
// • If the target is not located, the procedure should return -1.
// Input: nums[] = [1, 4, 5, 8, 9], target = 2
// Output: -1


// let input_Array = [2, 3, 5, 7, 9];
// let target = 7;
// let arrayOfIndexs = [];
// function getIndexOfmatchedElement(){
//     for(let i in input_Array){
//         if(input_Array[i] == target){
//            arrayOfIndexs.push(+i)
//         }
//     }
//     if(arrayOfIndexs.length>0){
//         return "Elemt found at the index of"+" "+arrayOfIndexs[0]
//     }else{
//         return "Elemt found at the index of"+" "+-1
//     }
// }
// console.log(getIndexOfmatchedElement());


// Given a monotonically increasing function f(x) on positive numbers, find the lowest positive integer x where 
// f(x) > 0. In other words, find a positive number x such that f(i) > 0 for any integer i greater than or equal 
// to x.
// A function is called monotonically increasing if f(x) <= f(y) is true for all x and y, where x <= y. For
//  example,
// Input: f(x) = 2x - 100
// Output: 51
// Explanation: f(x) becomes positive for the first time when x = 51.
// Input: f(x) = 3x - 100
// Output: 34
// Explanation: f(x) becomes positive for the first time when x = 34.

// let input_number = 100;
// let initial_number = 2;
// function getpositivetime(inputVal, inputVal1){
//     for(let i=1; i<=inputVal+1; i++){
//         let val = inputVal1*i-inputVal;
//         if(val>0){
//             return "value becomes positive for the first time when i is"+" "+i
//         } 
//     }
// }
// console.log(getpositivetime(input_number, initial_number));



// Given an integer array, find the maximum sum among all its subarrays.
// Input : [-2, 1, -3, 4, -1, 2, 1, -5, 4]
// Output: 6
// Explanation: The maximum sum subarray is [4, -1, 2, 1]
// Input : [-7, -3, -2, -4]
// Output: -2
// Explanation: The maximum sum subarray is [-2]
// Input : [-2, 2, -1, 2, 1, 6, -10, 6, 4, -8]
// Output: 10
// Explanation: The maximum sum subarray is [2, -1, 2, 1, 6] or [6, 4] or [2, -1, 2, 1, 6, -10, 6, 4];

// let input_Array = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
// let duplicate_input_Array = [...input_Array]
// let highest  = duplicate_input_Array.sort((a,b)=>{return b-a})[0];
// let indexsArray = []
// function findingMaximumsumSubArray(){
//     for(let i=0; i<input_Array.length; i++){
//         let val=0;
//         for(let j=i; j<input_Array.length; j++){
//             val = val + input_Array[j];
//             if(val>=highest){
//                 highest = val;
//                 indexsArray.push([i,j])
//             }
//         }
//     }
//     let val = indexsArray[indexsArray.length-1];
//      console.log("maximu sum subarray is", input_Array.splice(val[0], val[1]-val[0]+1));
//     return  highest
    
// }
// console.log(findingMaximumsumSubArray());


// Given an integer array, replace each element with the product of every other element 
//without using the division
// operator.
// For example,
// Input:  { 1, 2, 3, 4, 5 }
// Output: { 120, 60, 40, 30, 24 }
// Input:  { 5, 3, 4, 2, 6, 8 }
// Output: { 1152, 1920, 1440, 2880, 960, 720 }


// let input_Array = [5, 3, 4, 2, 6, 8];
// let Output_Array = []
// function recursion(array, ind){
//     let product=1;
//     for(let i=ind+1; i<array.length; i++){
//         product = product * array[i]
//     };
//     if(ind>0){
//         for(let i=0; i<ind; i++){
//             product = product*array[i]
//         }
//     }
//     Output_Array.push(product)
//     if(ind<array.length-1){
//         recursion(array, ind+1)
//     }
// }
// recursion(input_Array,0)
// console.log(Output_Array);




// Given two sorted arrays, X[] and Y[] of size m and n each, merge elements of X[] with 
// elements of array Y[] by maintaining the sorted order, i.e., fill X[] with the first m smallest elements
// and fill Y[] with remaining elements.
// Input:
// X[] = { 1, 4, 7, 8, 10 }
// Y[] = { 2, 3, 9 }
// Output:
// X[] = { 1, 2, 3, 4, 7 }
// Y[] = { 8, 9, 10 }


// let input_Array1 = [1, 4, 7, 8, 10 ];
// let input_Array2 = [2, 3, 9 ];
// let main_array = [...input_Array1, ...input_Array2];
// let final_Array = main_array.sort((a,b)=>{return a-b}).splice(0, input_Array1.length);
// let second_Array = main_array;
// console.log(final_Array);
// console.log(second_Array);



// Given an integer array, find the maximum length subarray having a given sum.
// For example, consider the following array:
// nums[] = { 5, 6, -5, 5, 3, 5, 3, -2, 0 }
// target = 8
// Subarrays with sum 8 are
// { -5, 5, 3, 5 }
// { 3, 5 }
// { 5, 3 }
// The longest subarray is { -5, 5, 3, 5 } having length 4

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
//            console.log("the logenst subarray is", val, "and the length is", value);
//         }
//    }
// }




// Given an integer array, move all zeros present in it to the end. The solution should maintain the 
// relative order of items in the array and should not use constant space.
// For example,
// Input:  { 6, 0, 8, 2, 3, 0, 4, 0, 1 }
// Output: { 6, 8, 2, 3, 4, 1, 0, 0, 0 }

// let input_Array = [6, 0, 8, 2, 3, 0, 4, 0, 1 ];
// let non_zero_array = [];
// let zeros_array = [];
// let Output_Array = []
// for(let i of input_Array){
//     if(i == 0){
//         zeros_array.push(i)
//     }else if(i>0){
//         non_zero_array.push(i)
//     }
// };
// Output_Array = [...non_zero_array, ...zeros_array];
// console.log("final output array is", Output_Array);




// Given an integer array, find the maximum difference between two elements in it such that the 
// smaller element appears before the larger element.
// For example,
// Input:  { 2, 7, 9, 5, 1, 3, 5 }
// Output: The maximum difference is 7.
// The pair is (2, 9)

// let input_Array = [2, 7, 9, 5, 1, 3, 5 ];
// let target = 7
// for(let i of input_Array){
//     for(let j of input_Array){
//         if(j-i == target){
//             console.log("the pair is", [i,j]);
//             return
//         }
//     }
// }



// Find all n–digit strictly increasing numbers where n varies from 1 to 9. A number is strictly increasing 
// if every digit is greater than its preceding digit.

// For example,
// 8–digit strictly increasing numbers are:
// 12345678 12345679 12345689 12345789 12346789 12356789 12456789 13456789 23456789
// 7–digit strictly increasing numbers are:
// 1234567 1234568 1234569 1234578 1234579 1234589 1234678 1234679 1234689 1234789 1235678 1235679 1235689 1235789
//  1236789 1245678 1245679 1245689 1245789 1246789 1256789 1345678 1345679 1345689 1345789 1346789 1356789 
//  1456789 2345678 2345679 2345689 2345789 2346789 2356789 2456789 3456789


// let n = 7;
// let Output_Array = []
// function findStrictlyIncreasingNum(start,out,n){
//         if (n == 0){
//             Output_Array.push(+out)
//             return;
//         }
//         for (let i = start; i <= 9; i++){
//             let str = out + i.toString();
//             findStrictlyIncreasingNum(i + 1, str, n - 1);
//         }
//     }
// findStrictlyIncreasingNum(1, " ", n);
// console.log(Output_Array);




// let arr = 
// [
//     {
//         id: 1,
//         notificationType: 'Via App',
//         processedDate: '2023-03-14 11:23:00',
//         scheduledDate: '2023-05-04T13:33:03.969Z',
//         totalRecepeints: '130'
//         },
//         {
//             id: 2,
//             notificationType: 'Via App',
//             processedDate: '2023-03-14 11:23:00',
//             scheduledDate: '2023-05-04T13:33:03.969Z',
//             totalRecepeints: '130'
//         },
//         {
//             id: 3,
//             notificationType: 'Via App',
//             processedDate: '2023-03-14 11:23:00',
//             scheduledDate: '2023-05-04T13:33:03.969Z',
//             totalRecepeints: '130'
//         },
//         {
//             id: 4,
//             notificationType: 'Via App',
//             processedDate: '2023-03-14 11:23:00',
//             scheduledDate: '2023-05-04T13:33:03.969Z',
//             totalRecepeints: '130'
//         },
//         {
//             id: 5,
//             notificationType: 'Via App',
//             processedDate: '2023-03-14 11:23:00',
//             scheduledDate: '2023-05-04T13:33:03.969Z',
//             totalRecepeints: '130'
//         },
//         {
//             id: 6,
//             notificationType: 'Via App',
//             processedDate: '2023-03-14 11:23:00',
//             scheduledDate: '2023-05-04T13:33:03.969Z',
//             totalRecepeints: '130'
//         },
//         {
//             id: 7,
//             notificationType: 'Via App',
//             processedDate: '2023-03-14 11:23:00',
//             scheduledDate: '2023-05-04T13:33:03.969Z',
//             totalRecepeints: '130'
//         },
// {
// id: 11,
// notificationType: 'Via App',
// processedDate: '2023-03-14 11:23:00',
// scheduledDate: '2023-05-04T13:33:03.969Z',
// totalRecepeints: '130'
// },
// {
// id: 12,
// notificationType: 'Via SMS',
// processedDate: '2023-03-15 11:23:00',
// scheduledDate: '2023-05-04T13:33:03.969Z',
// totalRecepeints: '250'
// },
// {
// id: 13,
// notificationType: 'Via WhatsApp',
// processedDate: '2023-03-14 11:23:00',
// scheduledDate: '2023-06-04T13:33:03.969Z',
// totalRecepeints: '5,500'
// }
// ];
// function getDates(param){
//     if(param == "lastsevenDays"){
//         let date = new Date();
//     //    console.log(date.getMonth());
//     =
//     }

// }
// getDates("lastsevenDays")

