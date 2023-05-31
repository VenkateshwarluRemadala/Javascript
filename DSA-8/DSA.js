// CHALLENGE DESCRIPTION
// Given n ropes of different lengths, connect them into a single rope with minimum cost.
// Assume that the cost to connect two ropes is the same as the sum of their lengths.
// For example,
// Input:  [5, 4, 2, 8]
// Output: The minimum cost is 36 
// [5, 4, 2, 8] –> First, connect ropes of lengths 4 and 2 that will cost 6.
// [5, 6, 8]    –> Next, connect ropes of lengths 5 and 6 that will cost 11.
// [11, 8]      –> Finally, connect the remaining two ropes that will cost 19.
// Therefore, the total cost for connecting all ropes is 6 + 11 + 19 = 36.
// Practice This Problem
// The idea is to connect the two lowest-cost ropes first. The resultant rope has a cost equal to the
// sum of the connected ropes. Repeat the process (with resultant rope included) until we are left with a single rope.
// At each iteration of the loop, we will be left with one less rope and the optimal cost is 
// added to the total cost. The final cost for connecting n ropes will be minimal among all
//  possible combinations. A priority queue implemented using min-heap is best suited for this problem. 
// Following is the implementation of this approach in C++, Java, and Python using a min-heap


// let input_Array = [5, 4, 2, 8]
// let finalSum = 0;
// function rescursion(array){
//     array.sort((a,b)=>{
//         return a-b
//     })
//     let sum = array[0]+array[1];
//     finalSum = finalSum + sum;
//     array.splice(0,2,sum);
//     if(array.length>1){
//         rescursion(array)
//     }else{
//         console.log(finalSum);
//     }
// }
// rescursion(input_Array)



// Given an array of distinct integers, replace each array element by its corresponding rank in the
// array.
// The minimum array element has the rank 1; the second minimum element has a rank of 2, and so
// on… For example,
// Input:  { 10, 8, 15, 12, 6, 20, 1 } 
// Output: { 4, 3, 6, 5, 2, 7, 1 }
// Practice This Problem
// The idea is to store each element’s index in an ordered map (Since the array contains
// all distinct integers, we can use array elements and their index as key-value pairs in the map).
//  Since elements are stored in sorted order in an ordered map, if we iterate through the map, 
//  we get elements in increasing order. Therefore, for each element in increasing order, we start 
//  assigning values starting from number 1 to n


// let input_Array = [ 10, 8, 15, 12, 6, 20, 1 ];
// let new_Input_Array= [...input_Array];
// let sorted_Array = input_Array.sort((a,b)=>{
//     return a-b
// });
// let new_Object = {};
// for(let i in sorted_Array){
//     new_Object[sorted_Array[i]] = +i+1 
// }
// let rank_Array = []
// for(let i of new_Input_Array){
//     for(let j in new_Object){
//         if(i == +j){
//             i = new_Object[j];
//             rank_Array.push(i)
//         }
//     }
// }
// console.log("Final Rank array is", rank_Array);



// Given a binary array of size two having at least one element as zero, 
// write a single line function to set both its elements to zero. 
// Use of ternary operator and direct assignment of elements are not allowed.
// There are three combinations of array elements as per problem constraints:
// arr[0] = 0 and arr[1] = 1
// arr[0] = 1 and arr[1] = 0
// arr[0] = 0 and arr[1] = 0
// There are many ways to solve the given problem. We will discuss a few of them:
// METHOD 1: USING ASSIGNMENT OPERATOR TWICE
// We can use any of the following single line expressions to convert both elements of 
// the given array to 0:
// arr[0] = arr[1] = arr[!arr[1]], or
// arr[0] = arr[1] = arr[0] & arr[1], or
// arr[0] = arr[1] -= arr[1]   
 // or arr[1] = arr[0] -= arr[0]


// let input_Array = [0,1];
// const convertTwoElementToZero = ()=>input_Array.map(ele=>{return ele*0});
// let output_Array = convertTwoElementToZero();
// console.log(output_Array);



// Given an integer array,
// find the maximum difference between two elements in it such that the smaller element 
// appears before the larger element.
// For example,
// Input:  { 2, 7, 9, 5, 1, 3, 5 }
// Output: The maximum difference is 7.
// The pair is (2, 9)

// let input_Array = [2, 7, 9, 5, 1, 3, 5];
// let difference = 0
// let output_Array = []
// for(let i=0; i<input_Array.length; i++){
//     for(let j=i; j<input_Array.length; j++){
//         if(input_Array[j]-input_Array[i]>difference){
//             difference = input_Array[j]-input_Array[i];
//             output_Array.push([input_Array[i],input_Array[j]])
//         }
//     }
// }
// console.log("The maximum difference is", difference, "and the final array is", output_Array[output_Array.length-1]);



// Find the smallest subarray length whose sum of elements is greater than `k`
// Given an integer array, find the maximum difference between two elements in it such 
// that the smaller element appears before the larger element.
// For example,
// Input:  { 2, 7, 9, 5, 1, 3, 5 }
// Output: The maximum difference is 7.
// The pair is (2, 9)

// let input_Array = [2, 7, 9, 5, 1, 3, 5];
// let maximum_difference = 0
// let output_Array = []
// for(let i=0; i<input_Array.length; i++){
//     for(let j=i; j<input_Array.length; j++){
//         if(input_Array[j]-input_Array[i]>maximum_difference){
//             maximum_difference = input_Array[j]-input_Array[i];
//             output_Array.push([input_Array[i],input_Array[j]])
//         }
//     }
// }
// console.log("The maximum difference is", maximum_difference, "and the final array is", output_Array[output_Array.length-1]);



// Write a program that iterates the integers from 1 to 100.
// But for multiples of three print "Fizz" instead of the number 
// and for the multiples of five print "Buzz". 
// For numbers that are multiples of both three and five print "FizzBuzz".

// for(let i=1; i<=100; i++){
//     if(i%3 === 0 && i%5 ===0){
//         console.log("FizzBuzz", i);
//     }
//     else if(i%3===0){
//         console.log("Fizz",i);
//     }else if(i%5 === 0){
//         console.log("Buzz",i);
//     }
// }


// Write a JavaScript program which computes, the average marks of the following students Then,
// this average is used to determine the corresponding grade. Go to the editor
// Student Name    Marks
// David                    80
// Vinoth                  77
// Divya                    88
// Ishitha                 95
// Thomas              68
// The grades are computed as follows :
// Range    Grade
// <60            F
// <70            D
// <80            C
// <90            B
// <100          A


let input_Grades_Array = [60,70,80,90,100];

let average_Marks_Object = {
    "David":80,
    "Vinoth":77,
    "Divya":88,
    "Ishitha":95,
    "Thomas":68,
}
// let average_Marks_Array = Object.values(average_Marks_Object);
// for(let i in average_Marks_Object){
//     if(average_Marks_Object[i]<60){
//         console.log(i, "Grade is F");
//     }else if(average_Marks_Object[i]<60){
//         console.log(i, "Grade is E");
//     } else if(average_Marks_Object[i]<60){
//         console.log(i, "Grade is D");
//     }else if(average_Marks_Object[i]<){
//         console.log(i, "Grade is C");
//     }else if(average_Marks_Object[i]<90){
//         console.log(i, "Grade is B");
//     }else if(average_Marks_Object[i]<average_Marks_Array[average_Marks_Array.length-2]){
//         console.log(i, "Grade is A");
//     }
// }

function recursion(first){
    for(let i in average_Marks_Object){
        if(average_Marks_Object[i]<first){
            
        }
    }
}
recursion(input_Grades_Array[0])