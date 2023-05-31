
// let arr = ["9/31/2014", "10/31/2014", "11/31/2014", "12/31/2014", "13/31/2014"];
// // console.log(arr);
// let output = [];
// let obj = {};
// for(let i of arr){
//   obj[i] = '';
// };
// // console.log(obj);
// for(let i of arr){
//   for(let j in obj){
//     if(i == j){
//       let value = obj[j];
//       //  console.log(value);
//         let k = j.split('/');
//         value = value + k[k.length-1]+k[0]+k[1];
//         output.push(value);
//     }

//   }
// }
// console.log(output);



// let arr = [
//             {current:{},mapped:[{},{},{}],future:[{},{},{}]},
//             {current:{},mapped:[{},{},{}],future:[{},{},{}]}
//           ];
// let count = 0;
// function recursion(a){
//   for(let i in a){
//     let value = a[i];
//     if(typeof value == 'object'){
//       recursion(value)
//     }
//     if(!Array.isArray(value)){
//       count++;
//     }
//   }
// }
// recursion(arr)
// console.log(count-arr.length);
// let count = 0;



// let number = 35;
// let str = String(number)
// let sum = 0;
// function recursion(num){  
//    num = String(sum)
//   for(let i of num){
//     sum = sum + i*i
//     if(sum==1){
//       console.log("true");
//     }
//     else{
//       recursion(sum)
//     }
//   }
// }
// recursion(str)

// let str = "how are you";
// //output: "you are how";
// let arr = str.split('');
// console.log(arr);



// Given an array, write a function to calculate it's depth. Assume that a normal array has a depth of 1.

// Examples
// depth([1, 2, 3, 4]) ➞ 1
// depth([1, [2, 3, 4]]) ➞ 2
// depth([1, [2, [3, 4]]]) ➞ 3
// depth([1, [2, [3, [4]]]]) ➞ 4
//  let count = 0
// let arr = {name:[1, [2, [3, [4]]]]};
// function recursion(a){
//   if(Array.isArray(a)){
//     count++;
//     for(let i in a){
//       if(Array.isArray(a[i])){
//         recursion(a[i])
//       }
//     }
//   }
  
// }
// recursion(arr)
// console.log(count);

//python programs.



//1.
// let str = "hello world";
// console.log(str.length);



//2
// let SampleString = 'google.com';
// let obj = {};
// for(let i of SampleString){
//   obj[i] = (obj[i] || 0 )+1
// }
// console.log(obj);



// 3. Write a Python program to get a string made of the first 2 and the last 2 chars from a given a string. If the string length is less than 2, return instead of the empty string. Go to the editor
// Sample String : 'w3resource'
// Expected Result : 'w3ce'
// Sample String : 'w3'
// Expected Result : 'w3w3'
// Sample String : ' w'
// Expected Result : Empty String

// let SampleString1 = 'w3resource';
// let output = '';
// if(SampleString1.length == 1){
//   console.log('');
// }
// else if(SampleString1.length==2){
//   console.log(SampleString1+SampleString1);
// }
// else{
//   for(let i in SampleString1){
//     if(+i == 0 || +i==1 || +i == SampleString1.length-1 || +i == SampleString1.length-2){
//       output= output + SampleString1[i] 
//     }
//   }
// }
// console.log(output);



// 4. Write a Python program to get a string from a given string where all occurrences of its first char have been changed to '$', except the first char itself. Go to the editor
// Sample String : 'restart'
// Expected Result : 'resta$t'

// let resStr = 'restart';
// let resoutput = ''
// let firstChar = resStr[0]
// resoutput = resoutput + firstChar
// for(let i in resStr){
//   if(i == 0){ 
//   }else if(resStr[i] == firstChar){
//     resoutput = resoutput + '$'
//   }
//   else{
//     resoutput = resoutput + resStr[i]
//   }
// }
// console.log(resoutput);



// 5. Write a Python program to get a single string from two given strings, 
//  separated by a space and swap the first two characters of each string. 
// Sample String : 'abc', 'xyz'
// Expected Result : 'xyc abz'
// let firstStr = 'abc';
// let secondStr = 'xyz';
// let str1 = "'abc', 'xyz'"
// let arr = str1.replace(',', '').split(' ');
// let singleStringOutput = '';
//singleStringOutput

// let gooStr = 'google.com';
// let objq = {};
// for(let i of gooStr){
//   objq[i] = (objq[i] || 0) +1;
// };
// console.log(...Object.values(objq));



// 6. Write a Python program to add 'ing' at the end of a given string 
// (length should be at least 3).
//  If the given string already ends with 'ing' then add 'ly' instead. 
//  If the string length of the given string is less than 3, leave it unchanged. 
 
// Sample String : 'abc'
// Expected Result : 'abcing'
// Sample String : 'string'
// Expected Result : 'stringly'

// let ingString = 'string';
// let ingOutput = ''
// if(ingString[ingString.length-1] === 'g' && ingString[ingString.length-2] === 'n' && 
// ingString[ingString.length-2] === 'i') {
//   ingOutput = ingOutput + ingString + 'ly'
// }
// else{
//   ingOutput = ingOutput + ingString +'ing'
// }
// console.log(ingOutput);



// let number = 516;
// let numberStr = String(number);
// let sum = 0
// for(let i of numberStr){
//   sum = sum + (+i)
// }
// if(number%sum ==0 ){
//   console.log(number +" "+'is harshad number');
// }else{
//   console.log(number +" "+'is not a harshad number');
// };



// Write a function that returns an array of strings populated from 
//the slices of n-length characters of the given word 
//(a slice after another while n-length applies onto the word).

// Examples
// collect("intercontinentalisationalism", 6)
// ➞ ["ationa", "interc", "ntalis", "ontine"]

// collect("strengths", 3)
// ➞ ["eng", "str", "ths"]

// collect("pneumonoultramicroscopicsilicovolcanoconiosis", 15)
// ➞ ["croscopicsilico", "pneumonoultrami", "volcanoconiosis"]

// let a = 'pneumonoultramicroscopicsilicovolcanoconiosis';
// a= a.split('');
// let splitNumber = 15;
// let count = -1;
// let strbig ='';
// let b = a.length%splitNumber;
// b = a.length-b; 
// a.length = b;
// for(let i of a){
//   count++;
//   if(count == splitNumber){
//     strbig = strbig + ',';
//     count = 0;
//   }
//   strbig = strbig + i;
// }
// console.log(strbig.split(','));



// let multiplesOfString = 'venkateshwar';
// let reverseString = ''
// if(multiplesOfString.length%4 === 0){
//   for(let i=multiplesOfString.length-1; i>=0; i--){
//     reverseString = reverseString + multiplesOfString[i]
//   }
//   console.log(reverseString);
// }else{
//   console.log("string is not multiple of four");
// }



// let str = "<p><a href='https://www.google.com'>abcd</a></p><p><a href='\www.w3schools.com'\>abcd</a></p><a href='\www.google.com'\>abcd</a>";
// let str2 = str.split(' ')

// let str3 = str2.map(ch=>{ if(!ch.includes('https://')){
//     return  ch.replace("href='", "href=https://")
//     }
//     else{
//         return ch
//     }
// })
// console.log(str3.join(' '))
 








