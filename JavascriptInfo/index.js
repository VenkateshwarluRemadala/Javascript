// let names = "venkat";
// let reversedName = '';
// for(let i = names.length-1; i>=0; i--){
//     reversedName = reversedName + names[i]
// }
// console.log(reversedName);



// let myColor = ["Red", "Green", "White", "Black"].join('+');
// let output = '"'+myColor+'"'
// console.log(output);



// let str ="vvenknatv";
// let obj = {}
// for(let i of str){
//     obj[i] = (obj[i]||0)+1
// }
// console.log(obj);



// let arrayObject = [
//     {id:1, name:"venkat"},
//     {id:2, name:"vinay"},
//     {id:3, name:"krishna"}
// ]
// let numberArray = [];
// let namesArray = [];
// let input ="vinay"
// for(let i of arrayObject){
//     if(i.name === input){
//         delete i.id
//     }else{ 
//         numberArray.push(i.id)
//         namesArray.push(i.name)
//     }
// }
// console.log(numberArray);
// console.log(namesArray);



// const user_details = [
//   {
//     id: 1,
//     name: "sravan",
//     primary_key: 11
//   },
//   {
//     id: 2,
//     name: "akhil",
//     primary_key: 35
//   },
//   {
//     id: 3,
//     name: "raju",
//     primary_key: 2
//   },
//   {
//     id: 4,
//     name: "arun",
//     primary_key: 9
//   }
// ];
// const contact_list = [
//   {
//     id: 11,
//     contact: 850054545,
//     age: 25,
//   },
//   {
//     id: 2,
//     contact: 850054545,
//     age: 40,
//   },
//   {
//     id: 35,
//     contact: 850054545,
//     age: 21,
//   },
//   {
//     id: 9,
//     contact: 850054545,
//     age: 33,
//   },
// ];
//     let input = "sravan"
//  for(let i of user_details){
//     for(let j of contact_list){
//         if(i.primary_key === j.id){
//           if(input === i.name){
//             console.log(j.age);
//           }
//         }
//     }
//  }



// let str = "elloh";
// let str1 = "hello";
// let str2 = "";
// for(let i of str){
//   if(str1.includes(i)){
//     str2 = str1;
//   }
// }
// console.log(str2);



// let arr;
// function insertingDases(input){
// let str = String(input)
// arr = str.split('')
// let str1 = ''
// for(let i=0;  i< arr.length; i++){
//   if(+arr[i]%2===0 && +arr[i+1]%2===0){
//     str1 = str1+arr[i]+"-"
//   }
//   else{
//     str1= str1+arr[i];  
//   }   
// }
// console.log(str1);
// }
// insertingDases(2546183684641568)



//  let number = 9948559416;
//  let strNumber = String(number)
//  let hideNumber = strNumber.replace("994855", "xxxxxxl")
//  function unhideNumber(a){
//     a= number
//     console.log(a);
//  }
//  unhideNumber(hideNumber)



// <input type = "number" id= "phone"/>
// function get(){
//   let a = document.getElementById("phone").value;
//   let b;
//   if(a.length === 9){
//       b = a.split('')      //output is: XXXXX5941
//      for(let i in b){
//          b[i] = "X";

//          if(i>3){
//              break
//          }
//      }
//   }
//   let c= b.join('')
//   console.log(c);
// }



// let str="sripriyaiiii";
// let arr = str.split('');
// for(let i in arr){
//   if(arr[i] === "i"){
//      if(i%2===0){
//       arr[i] = "k"
//      }
//   }
// }
// console.log(arr.join(''));



// let newArray
// function sortArray(arr){
//         newArray = arr.sort((a,b)=>{return a-b})
// }
// sortArray([ 3, 8, 7, 6, 5, -4, 3, 2, 1 ])
// console.log(newArray);



// function mostFrequentItem(arr){
//   let obj = {};
//   let arr1 = [];
//      for(let i of arr){
//           obj[i] =  (obj[i]||0)+1
//      }
//     //  console.log(obj);
//      for(let i in obj){
//         arr1.push(obj[i])
//      }
//      arr1.sort((a,b)=>{return b-a})
//      for(let i in obj){
//       if(obj[i]=== arr1[0]){
//          console.log( i +" "+"is the most repeated element in array and repeated:"+ obj[i]);
//       }
//      }
// }
// mostFrequentItem([3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3,"b", "b", "b", "b", "b"])



// let newStr = '';
//   function swappingCharacterCases(str){
//         for(let i of str){
//           if(i === i.toUpperCase()){
//                let a = i.toLowerCase()
//                newStr = newStr+a;
//           }else{
//              let b = i.toUpperCase();
//              newStr = newStr+b;
//           }

//         }
//   }
//   swappingCharacterCases('The Quick Brown Fox' )
//    console.log(newStr);



// function gettingElementsFromNestedArray(arr){
//         for(let i of arr){
//             for(let j of i){
//               console.log(j);
//             }
//         }
// }
// gettingElementsFromNestedArray([[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]])



// let sum = 0;
// function sumOfSquaresOfArrayNumbers(arr){
//       for(let i of arr){
//           let square = i*i;
//           sum = sum+square;
//       }
// }
// sumOfSquaresOfArrayNumbers([0,1,2,3,4])
// console.log(sum);



// let sum =0;
// let product =1;
// function SumAndProduct(arr){
//          for(let i of arr){
//             if(i !==0){
//               product = product*i;
//               sum = sum+i
//             }
//          }
// }
// SumAndProduct([0,1,2,3,4])
// console.log(sum);
// console.log(product);



// let withoughtDuplicatevalues = [];
// function removeDuplicates(arr){
//        for(let i of arr){
//           if(withoughtDuplicatevalues.indexOf(i) === -1){
//             withoughtDuplicatevalues.push(i)
//           }
//        }
// }
// removeDuplicates([3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3,"b", "b", "b", "b", "b"])
// console.log(withoughtDuplicatevalues);



// function binary_search(arr, a){
//       for(let i in arr){
//         if(arr[i] === a){
//           console.log(i);
//         }
//       }
// }
// binary_search([1,2,3,4,5,67], 3)



// function findDuplicateValues(arr){
//   let obj = {};

//      for(let i of arr){
//       obj[i] = (obj[i]||0)+1;
//      }
//      for(let i in obj){
//       if(obj[i]>1){
//         console.log(i+ "this number haveing elements in the array");
//       }
//      }
// }
// findDuplicateValues([1, 2, -2, 4, 5, 4, 7, 8, 7, 7, 71, 3, 6])



// let newArray = [];
// function recursingDeplyNestedArray(arr){
//       for(let i in arr){
//           let value = arr[i];
//           if(typeof value === 'object'){
//             recursingDeplyNestedArray(value)
//           }
//           else{
//             newArray.push(value)
//           }
//       }
// }
// recursingDeplyNestedArray([1, [2], [3, [[4]]],[5,6]])
// console.log(newArray);



//finding the union of  values of array. output is: [1,2,3,10,100].
// let array1 = [1, 2, 3];
// let array2 = [100, 2, 1, 10];
// let singleArray = [...array1, ...array2];
// let unionArray = [];
// for(let i of singleArray){
//   if(unionArray.indexOf(i) === -1){
//       unionArray.push(i)
//   }
// }
// console.log(unionArray);



//finding the different elements from the two arrays.   output is like [3,10,100]
// let array1 = [1,2,3];
// let array2 = [10,100,1,2];
// let singleArray = [...array1, ...array2];
// let differentValuesArray = [];
// let obj = {};
// for(let i of singleArray){
//   obj[i] = (obj[i]||0)+1
// }
// for(let i in obj){
//   if(obj[i]===1){
//     differentValuesArray.push(+i)
//   }
// }
// console.log(differentValuesArray);



// let array1 = [1, 2, 3, 4, 5];
// let array2 = [1, [2], [3, [[4]]],[5,6]];
// let array3 = [];
// let differentValuesArray = [];
//  function recursingDeplyNestedArray(arr){
//     for(let i in arr){
//       let value = arr[i];
//       if(typeof value === 'object'){
//         recursingDeplyNestedArray(value)
//       }
//       else{
//         array3.push(value)
//       }
//     }
//  }
//  recursingDeplyNestedArray(array2)
//  let singleArray = [...array1, ...array3];
//  let obj = {};
//  for(let i of singleArray){
//   obj[i] = (obj[i]||0)+1
//  }
//  for(let i in obj){
//     if(obj[i]===1){
//       differentValuesArray.push(+i)
//     }
//  }
//  console.log(differentValuesArray);
 


//There are two arrays with individual values,
// write a JavaScript program to compute the sum of each individual index value from the given arrays.
//Expected Output :[4, 5, 8, 10, 12, 13].
// let array1 = [1, 0, 2, 3, 4, 9, 10];
// let array2 =  [3, 5, 6, 7, 8];
// let sumArray = [];
// for(let i in array2){
//   for(let j in array1){
//     if(i === j){
//       sumArray.push(array2[i]+array1[i]);
//     }
//   }
// }
// if(array1.length<array2.length){
//   let arr2len = array2.length;
//   let arraycomplen = array2.length - array1.length;
//   for(let i =arraycomplen; i<=1; i++){
//     sumArray.push(array2[arr2len-i]);
//   }
//   console.log(sumArray);
// }
// else{
//   let arr1len = array1.length;
//   let arraycomplen = array1.length - array2.length;
//   for(let i =arraycomplen; i>=1; i--){
//   sumArray.push(array1[arr1len-i]);
// }
//   console.log(sumArray);
// }



//Write a JavaScript program to find a pair of elements (indices of the two numbers)
// from an given array whose sum equals a specific target number.   target =50; output = 2,3.
// let arr = [10,20,10,40,50,60,70];
// for(let i=0; i<arr.length; i++){
//   if(arr[i] + arr[i+1] === 50){
//     console.log(i, i+1);
//   }
// }



// Write a JavaScript function to retrieve the value of a given property from all elements in an array.
//Sample array : [NaN, 0, 15, false, -22, '',undefined, 47, null]
//Expected result : [15, -22, 47]

// let array = [NaN, 0, 15, false, -22, '',undefined, 47, null];
// let nonFalsyValuesArray = [];
// for(let i of array){
//   if(+i){
//     nonFalsyValuesArray.push(+i)
//   }
// }
// console.log(nonFalsyValuesArray);

























































 







