// Input:
 
1.// nums = [8, 7, 2, 5, 3, 1]
// target = 10
 
// Output:

// Pair found (8, 2)
// or
// Pair found (7, 3)


// let nums = [8, 7, 2, 5, 3, 1];
// let arr = []
// function getvalue(num){
//     for(let i of num){
//         for(let j of num){
//             if(i+j == 10){
//                 arr.push(i,j)
//                 return arr
//             }
//         }
//     }
// }
// let val = getvalue(nums)
// console.log(val);

// (OR)

// for(let i of nums){
//     for(let j of nums){
//         if(i+j == 10){
//             console.log(i,j);
//             return
//         }
//     }
// }



//2. Input:  { 1, 0, 1, 0, 1, 0, 0, 1 };
// Output: { 0, 0, 0, 0, 1, 1, 1, 1 };

// let arr = [ 1, 0, 1, 0, 1, 0, 0, 1 ];
// arr.sort((a,b)=>{
//     return a-b

// })
// console.log(arr);



// 3.Find the maximum product of two integers in an array
// Given an integer array, find the maximum product of two integers in it.
// For example, consider array {-10, -3, 5, 6, -2}. 
// The maximum product is the (-10, -3) or (5, 6) pair.


// let arr =[-10, -3, 5, 6, -2];
// let output = []
//  arr.sort((a,b)=>{
//     return a-b
//  });
// //  console.log(arr);
//  let maximumProduct = arr[0]*arr[1];
//  output.push(arr[0],arr[1]);
//  console.log(output);
 


//4. Find majority element (Boyerâ€“Moore Majority Vote Algorithm)
// Given an integer array containing duplicates, return the majority element if present. 
// A majority element appears more than n/2 times, where n is the array size.
// For example, the majority element is 2 in array {2, 8, 7, 2, 2, 5, 2, 3, 1, 2, 2}.


// let arr = [2, 8, 7, 2, 2, 5, 2, 3, 1, 2, 2]
// let size = arr.length;
// // console.log(size);
// let obj = {};
// for(let i of arr){
//     obj[i] = (obj[i]|| 0)+1
// }
// let val = Object.values(obj).sort((a,b)=>{return b-a})[0];
// let checkvalue = size/2;
// // console.log(checkvalue);
// if(val>checkvalue){
//     for(let i in obj){
//         if(obj[i] == val){
//              console.log("Majority element is:", i);
//         }
//     }
// }else{
//     console.log("There is no majority element");
// }



// 5
// Move all zeros present in an array to the end
// Input:  { 6, 0, 8, 2, 3, 0, 4, 0, 1 };
// Output: { 6, 8, 2, 3, 4, 1, 0, 0, 0 };

// let arr =[ 6, 0, 8, 2, 3, 0, 4, 0, 1 ];
// let arr1 = [];
// let arr2 = [];
// let output = []
// for(let i of arr){
//     if(i== 0){
//         arr2.push(i)
//     }else{
//         arr1.push(i)
//     }
// }
// output =[...arr1, ...arr2]
// console.log(output);




// 6
// Maximum Sum Subarray Problem (Kadaneâ€™s Algorithm)
// Input:  {-2, 1, -3, 4, -1, 2, 1, -5, 4}
// Output: Subarray with the largest sum is {4, -1, 2, 1} with sum 6.


// let arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
// function sum(array){
//   let firstval = 0;
//   let maxSum = 0;
//     for(let i in array){
//         maxSum = maxSum+array[i]
//         if(maxSum<0){
//             maxSum=0
//         }else if(firstval<maxSum){
//             firstval = maxSum
//         }
//     }
//     return firstval
// }
// console.log(sum(arr));

// console.log(lowest);
// console.log(highest[0]);





// 7
// Sort an array in one swap whose two elements are swapped
// Input:  A[] = [3, 8, 6, 7, 5, 9] or [3, 5, 6, 9, 8, 7] or [3, 5, 7, 6, 8, 9]
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




// 8
// Maximum Product Subset Problem
// Input:  nums[] = { -6, 4, -5, 8, -10, 0, 8 }
// Output: The maximum product of a subset is 15360

// Input:  nums[] = { -6, 4, -5, 8, -10, 0, 8 }
// Output: The maximum product of a subset is 15360;

// let arr =  [ -6, 4, -5, 8, -10, 0, 8 ];
// let sum=1 ;
// arr.sort((a,b)=>{
//     return b-a;
// })
// for(let i=arr.length-1; i>=0; i--){
//     if(String(arr[i]).includes('-') && !String(arr[i-1]).includes('-')){
//         arr[i] = 0
//     }
// }
// for(let i of arr){
//     if(i ==0){
//     }
//     else{
//         sum = sum *i
//     }
   
// }
// console.log(sum);





// 9
// Find pairs with difference `k` in an array
// Given an unsorted integer array, print all pairs with a given difference k in it.
// Input:
// arr = [1, 5, 2, 2, 2, 5, 5, 4]
// k = 3
// Output:
// (2, 5) and (1, 4)

// let arr = [1, 5, 2, 2, 2, 5, 5, 4];
// let  k = 3
// let set = new Set(arr);
// for(let i of set){
//     for(let j of set){
//         if(j-i == k){
//             console.log(i,j);
//         }
//     }
// }



// 10
// Find the minimum difference between the index of two given elements present in an array
// Given an integer array nums and two integers x and y present in it, 
// find the minimum absolute difference between indices 
// of x and y in a single traversal of the array.
// Input:
// arr = { 1, 3, 5, 4, 8, 2, 4, 3, 6, 5 }
// x = 3, y = 2
// Output: 2


// let arr = [ 1, 3, 5, 4, 8, 2, 4, 3, 6, 5 ];
// let x = 3
// let y = 2
// let xindex = [];
// let yindex = []
// for(let i in arr){
//     if(arr[i] == x ){
//         xindex.push(+i)
//     }else if(arr[i] == y){
//         yindex.push(+i)
//     }
// }
// let outputObj = [];
// for(let i of xindex){
//     for(let j of yindex){
        
//         outputObj.push(Math.abs(i-j))
       
//     }
// }
// let val =outputObj.sort((a,b)=>{
//     return a-b
// })[0]
// console.log(val);


 









let str="AAAABBAAACBBbccDDDdYYYFfyAAAAAAA";
let str1 = ''
for(let i in str){
    if(str[i] == str[+i+1]){

    }
    else if(str[i] != str[+i+1]){
        str1 = str1 +str[i]
    } 
}
console.log(str1);


// the-coding-game==> theCodingGame
// the-Coding-Game==>TheCodingGame
// the-coding-Game=>TheCodingGame
