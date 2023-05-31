// //number_pairs("7 1 2 1 2 1 3 2") ➞ 2
// // (1, 1), (2, 2)
// //number_pairs("9 10 20 20 10 10 30 50 10 20") ➞ 3
// // (10, 10), (20, 20), (10, 10)
// //number_pairs("4 2 3 4 1") ➞ 0
// // Although two 4's are present, the first one is discounted.

// let str = "9 10 20 20 10 10 30 50 10 20 10";
// let obj = {};
// let arr = str.split(' ')
// for(let i in arr){
//     if(i == 0){
//     }
//     else{
//         let value = arr[i];
//         obj[value] = (obj[value] ||0) +1
//     }
// }
// console.log(obj);
// let arr1 = Object.values(obj);
// let count = 0;
// for(let i of arr1){
//     if(i<=1){
//     }else if(i%2 !==0){
//         let even = (i-1)/2;
//         count = count + even
//     }
//     else if(i%2 == 0){
//        let Even = i/2;
//        count = count+Even;
//     }
// }
// console.log(count);

// let arr = [1,2,3,[4,5,6,[7,8,9,10]]];
// let arr1 = [];
// arr.map((ele)=>{
//     if(typeof ele == 'object'){
//         ele.map((ele1)=>{
//             if(typeof ele1 == 'object'){
//                 ele1.map((ele2)=>{
//                    arr1.push(ele2)
//                 })
//             }
//             else{
//                 arr1.push(ele1)
//             }
//         })
//     }else{
//         arr1.push(ele)
//     }
// })
// console.log(arr1);

// [1, 2, 0, 0, 4, 0, 5]) ➞ [1, 2, 4, 5, 0, 0, 0];

// let arr = [1, 2, 0, 0, 4, 0, 5];
// let str1 = '';
// let str2 = '';
// arr.sort((a,b)=>{
//     return a-b
// }).forEach((ele)=>{
//     if(ele !==0){
//         str1 = str1 + ele
//     }
//     else{
//         str2 = str2 + ele
//     }
// })
// console.log((str1+str2).split(''));

// getHashTags("How the Avocado Became the Fruit of the Global Trade")
// ➞ ["#avocado", "#became", "#global"]
// getHashTags("Why You Will Probably Pay More for Your Christmas Tree This Year")
// ➞ ["#christmas", "#probably", "#will"]
// getHashTags("Hey Parents, Surprise, Fruit Juice Is Not Fruit")
// ➞ ["#surprise", "#parents", "#fruit"]
// getHashTags("Visualizing Science")
// ➞ ["#visualizing", "#science"]

// let str = "Visualizing Science";
// str = str.toLowerCase()
// let arr = str.split(' ');
// let desendingOrderArray = arr.sort((a,b)=>{return b.length-a.length});
// // console.log(desendingOrderArray);
// let output = [];
// if(desendingOrderArray.length<3){
//     desendingOrderArray.forEach((ele, ind)=>{
//         output.push(ele)
//     })
// }
// else{
//     desendingOrderArray.forEach((ele, ind)=>{
//         if(ind == 3){

//         }
//     })
// }

// // Sorting by project name (ex1 and ex2)
// let input = ["ex1.html", "ex1.js", "ex2.html", "ex2.js"];
// output: [["ex1.html", "ex1.js"],["ex2.html", "ex2.js"]];

// let inputArray = ["ex1.html", "ex1.js", "ex2.html", "ex2.js"];
// let firstNumberArray = [];
// let secondNumberArray = [];
// for(let i of inputArray){
//     if(i.includes('1')){
//         firstNumberArray.push(i)
//     }else if(i.includes('2')){
//         secondNumberArray.push(i)
//     }
// }
// console.log(firstNumberArray);
// console.log(secondNumberArray);

// // Sorting by extension (.html and .js)
// let inpuut:["ex1.html", "ex1.js", "ex2.html", "ex2.js"];
// output:[["ex1.html", "ex2.html"],["ex1.js", "ex2.js"]];

// let inpuut = ["ex1.html", "ex1.js", "ex2.html", "ex2.js"];
// let htmlFileArray = [];
// let jsFileArray = [];
// inpuut.map((ele)=>{
//     if(ele.includes('.html')){
//         htmlFileArray.push(ele)
//     }
//     else if(ele.includes('.js')){
//         jsFileArray.push(ele)
//     }
// })
// console.log(htmlFileArray);
// console.log(jsFileArray);

// let count = 0;
// function swictOnAndOffBulb(){
//    count++;
//    if(count ==1){
//     document.getElementById('bulb_on').src = './images.png'
//    }else if(count == 2){
//     // console.log("turn off bulb");
//     document.getElementById('bulb_on').src = './off.jpg'
//     count = 0;
//    }
// }

//Adding commas after every digits of a number.

// let number = 456674324;
// let count = 0;
// let str = String(number);
// let output = '';
// if(str.length <= 3){
//     console.log(str);
// }else{
//     for(let i=str.length-1; i>=0; i--){
//         count++;
//         if(count == 3){
//             output = output +str[i] +','
//             count = 0;
//         }
//         else{
//             output = output + str[i];
//         }
// }
// }
// let out = '';
// let a = output.length-1;
// console.log(output.split(',').join(' ').trimEnd('').split('').reverse().join('').split(' ').join(','));
//   OR
// console.log(output);
// for(let i=output.length-1; i>=0; i--){
//     if(i == a && output[a] == ','){
//         console.log(1);
//     }
//     else{
//         out = out + output[i];
//     }
// }
// console.log(out);

// let str = 'aaabbbbcccdddd';
// let obj = {};
// for(let i of str){
//     obj[i] = ''
// }
// for(let i of Object.keys(obj)){
//     for(let j of str){
//         if(i == j){
//             obj[i] = obj[i] + j;
//         }
//     }
// }
// let output = Object.values(obj).sort((a,b)=>{
//         return b.length- a.length
// });
// console.log(output);

// Given a word, create an object that stores the indexes of each letter in an array.
// Make sure the letters are the keys.
// Make sure the letters are symbols.
// Make sure the indexes are stored in an array and those arrays are values.
// Examples
// mapLetters("dodo") ➞ { d: [0, 2], o: [1, 3] }
// mapLetters("froggy") ➞ { f: [0], r: [1], o: [2], g: [3, 4], y: [5] }
// mapLetters("grapes") ➞ { g: [0], r: [1], a: [2], p: [3], e: [4], s: [5] }

// let str = "froggy"
// let obj = {}
// str.split('').forEach(ele=>{
//     obj[ele] = []
// })
// str.split('').forEach((ele, index)=>{
//     Object.keys(obj).forEach(ele1=>{
//         if(ele == ele1){
//             obj[ele].push(index)
//         }
//     })
// })
// console.log(obj);

// Create a function that takes an array of strings and returns an array
// with only the strings that have numbers in them.
// If there are no strings containing numbers, return an empty array.
// Examples
// numInStr(["1a", "a", "2b", "b"]) ➞ ["1a", "2b"]
// numInStr(["abc", "abc10"]) ➞ ["abc10"]
// numInStr(["abc", "ab10c", "a10bc", "bcd"]) ➞ ["ab10c", "a10bc"]
// numInStr(["this is a test", "test1"]) ➞ ["test1"]

// let arr = ["1a", "a", "2b", "b"];
// let output = [];
// arr.forEach(ele=>{
//     ele.split('').forEach(ele1=>{
//         if(typeof +ele1 == 'number' && !isNaN(+ele1)){
//             output.push(ele)
//         }
//     })
// })
// console.log(output);

// Create a function that takes an array of objects (groceries)
// which calculates the total price and returns it as a number.
// A grocery object has a product, a quantity and a price, for example:

// {
//   "product": "Milk",
//   "quantity": 1,
//   "price": 1.50
// }
// Examples
// // 1 bottle of milk:
// getTotalPrice([
//   { product: "Milk", quantity: 1, price: 1.50 }
// ]) ➞ 1.5

// // 1 bottle of milk & 1 box of cereals:
// getTotalPrice([
//   { product: "Milk", quantity: 1, price: 1.50 },
//   { product: "Cereals", quantity: 1, price: 2.50 }
// ]) ➞ 4

// // 3 bottles of milk:
// getTotalPrice([
//   { product: "Milk", quantity: 3, price: 1.50 }
// ]) ➞ 4.5

// // Several groceries:
// getTotalPrice([
//   { product: "Milk", quantity: 1, price: 1.50 },
//   { product: "Eggs", quantity: 12, price: 0.10 },
//   { product: "Bread", quantity: 2, price: 1.60 },
//   { product: "Cheese", quantity: 1, price: 4.50 }
// ]) ➞ 10.4

// // Some cheap candy:
// getTotalPrice([
//   { product: "Chocolate", quantity: 1, price: 0.10 },
//   { product: "Lollipop", quantity: 1, price: 0.20 }
// ]) ➞ 0.3

// let arrofobject =
// [
//     { product: "Milk", quantity: 1, price: 1.50 }
// ];
// let output = 0;
// for(let i of arrofobject){
//     output = output+ i.quantity * i.price;
// }
// // console.log(output);
// let output1 = ''
// output = String(output)
// for(let i in output){
//     if(output[i] == '.'){
//         output1 = output1+output[i] + output[+i+1]
//         break
//     }else{
//         output1 = output1 + output[i]
//     }
// }
// console.log(output1);

// Create a function that takes an array of numbers and return "Boom!"
//if the digit 7 appears in the array. Otherwise, return "there is no 7 in the array".
// Examples
// sevenBoom([1, 2, 3, 4, 5, 6, 7]) ➞ "Boom!"
// // 7 contains the number seven.
// sevenBoom([8, 6, 33, 100]) ➞ "there is no 7 in the array"
// // None of the items contain 7 within them.
// sevenBoom([2, 55, 60, 97, 86]) ➞ "Boom!"
// // 97 contains the number seven.

// let arr = [1, 2, 3, 4, 5, 6, 7];
// let sevenCount = 0;
// let notSevenCount = 0;
// arr.forEach(ele=>{
//     if(String(ele).includes('7')){
//         sevenCount++
//     }else{
//         notSevenCount++
//     }
// })
// if(sevenCount>=1){
//     console.log("Boom!");
// }else{
//     console.log("None of the Items contains the number seven");
// }

// Create a function that takes two "sorted" arrays of numbers and
// returns an array of numbers which are common to both the input arrays.

// Examples
// commonElements([-1, 3, 4, 6, 7, 9], [1, 3]) ➞ [3]

// commonElements([1, 3, 4, 6, 7, 9], [1, 2, 3, 4, 7, 10]) ➞ [1, 3, 4, 7]

// commonElements([1, 2, 2, 2, 3, 4, 5], [1, 2, 4, 5]) ➞ [1, 2, 4, 5]

// commonElements([1, 2, 3, 4, 5], [10, 12, 13, 15]) ➞ []

// commonElements([-1, 3, 4, 6, 7, 9], [1, 3]) ➞ [3]

// let arr = [1, 2, 2, 2, 3, 4, 5];
// let arr1 =  [1, 2, 4, 5];
// let arr2 = []
// arr.forEach(ele=>{
//     arr1.forEach(ele1=>{
//         if(ele == ele1 && arr2.indexOf(ele) == -1){
//             arr2.push(ele)
//         }
//     })
// })
// console.log(arr2);

// Create a function that returns the smallest number of letter
// removals so that two strings are anagrams of each other.

// Examples
// minRemovals("abcde", "cab") ➞ 2
// // Remove "d", "e" to make "abc" and "cab".

// minRemovals("deafk", "kfeap") ➞ 2
// // Remove "d" and "p" from the first and second word, respectively.

// minRemovals("acb", "ghi") ➞ 6
// // Remove all letters from both words to get "" and "".

// let str = 'acb';
// let str1 = 'ghi';
// str = str.split('');
// str1 = str1.split('');
// str.push(...str1);
// obj = {}
// let count = 0
// str.forEach(ele => {
//     obj[ele] = (obj[ele] || 0) + 1;
// });
// Object.values(obj).forEach(ele=>{
//     if(ele==1){
//         count++
//     }
// })
// console.log(count);

// Create a function that takes two arguments:
//an array arr and a number num. If an element occurs in arr more than num times,
// remove the extra occurrence(s) and return the result.

// Examples
// deleteOccurrences([1, 1, 1, 1], 2) ➞ [1, 1]

// deleteOccurrences([13, true, 13, null], 1) ➞ [13, true, null]

// deleteOccurrences([true, true, true], 3) ➞ [true, true, true]

// let arr = [1, 1, 1, 1,"Python",2,2,2,2]
// let numberTimes = 1;
// let obj = {};
// let output = []
// arr.forEach(ele=>{
//     obj[ele] = (obj[ele] || 0) + 1;
// })
// console.log(obj);
// for(let i in obj){
//     if(obj[i]<=numberTimes){
//         for(let j=0; j<obj[i]; j++){
//             output.push(i)
//         }
//     }
//     else if(obj[i]>numberTimes){
//         for(let j=0; j<numberTimes; j++){
//             output.push(i)
//         }
//     }
// }
// console.log(output);

// [2:18 PM] Venkata Ravindranath Gundugola
// let str = "Acdedfavafdalafad";
// let obj = {};
// for(let i of str){
//     obj[i] = (obj[i] || 0) + 1;
// }
// console.log(obj);
// // str = str.toLowerCase();
// let output = ''
// for(let i in str){
//    if(str[i] == str[+i+1] ){
//     output = output +str[i]+','+ str[+i+1];
//     console.log("hello");
//    }else{
//     output = output + str[i]
//    }
// }
// console.log(output);

// expected output: Abcde, dfav, afd, al,af,ad
// let str1 = '';
// let count = -1;
// let ranCount = 5;
// for(let i of str){
//   count++;
//     if(count == ranCount--){
//         str1 = str1 + ','
//         count=0
//     }
//   str1 = str1 + i
// };
// console.log(str1);

// commonElements([1, 2, 3, 4, 5], [10, 12, 13, 15])
// commonElements([-1, 3, 4, 6, 7, 9], [1, 3]) ➞ [3]
// commonElements([1, 3, 4, 6, 7, 9], [1, 2, 3, 4, 7, 10]) ➞ [1, 3, 4, 7]
// commonElements([1, 2, 2, 2, 3, 4, 5], [1, 2, 4, 5]) ➞ [1, 2, 4, 5]

// let arr1 = [1, 3, 4, 6, 7, 9];
// let arr2 = [1, 2, 3, 4, 7, 10];
// let output = []
// arr1.forEach(ele1=>{
//     arr2.forEach(ele2=>{
//         if(ele1 == ele2 && output.indexOf(ele1) == -1){
//             output.push(ele1)
//         }
//     })
// })
// console.log(output);

// let arr=[{
//     "name":"sravani",
//     "age":12
//     },
//     {
//     "name1":"pinky",
//     "age":25
//     }
//     ];
// let arr1 = []
// arr.sort((a,b)=>{
//     return b.age -a.age
// })
// console.log(arr[0]);

// An array is positive dominant if it contains strictly more unique positive values
//than unique negative values. Write a function that returns true if an array is
//positive dominant.

// Examples
// isPositiveDominant([1, 1, 1, 1, -3, -4]) ➞ false
// // There is only 1 unique positive value (1).
// // There are 2 unique negative values (-3, -4).

// isPositiveDominant([5, 99, 832, -3, -4]) ➞ true

// isPositiveDominant([5, 0]) ➞ true

// isPositiveDominant([0, -4, -1]) ➞ false

// let arr =  [0, -4, -1]
// arr = new Set(arr);
// let positiveValuCount = 0;
// arr.forEach(ele=>{
//     if(ele<0){
//       positiveValuCount--;
//     }else if(ele>=0){
//         positiveValuCount++;
//     }
// });
// if(positiveValuCount>0){
//     console.log("true");
// }
// else{
//     console.log("false");
// }

// let arr = [-11,0,9,5,4]
// let decendinSrray = arr.sort((a,b)=>{
//     return b-a;
// })
// console.log(decendinSrray);
// let lastValue1 = decendinSrray[decendinSrray.length-1];
// let lastValue2 = decendinSrray[decendinSrray.length-2];
// if(lastValue1.toString().includes('-') && lastValue2.toString().includes('-')){
//   let val1 =  lastValue1.toString().replace('-','');
//   let val2 = lastValue2.toString().replace('-','');
//   if(+val1>decendinSrray[1] && +val2>decendinSrray[1]){
//     console.log(lastValue1 * lastValue2 * decendinSrray[0]);
//   }
//   else if(+val1 + +val2 > decendinSrray[1]+decendinSrray[2]){
//     console.log(decendinSrray[0]*lastValue1*lastValue2);
//   }
//   else if(decendinSrray[1]+decendinSrray[2] >= +val1 + +val1){
//     console.log(decendinSrray[0]*decendinSrray[1]*decendinSrray[2]);
//   }
//   else if(+val1 >= decendinSrray[1]){
//     if(+val2>= decendinSrray[2]){
//         console.log(lastValue1*lastValue2*decendinSrray[0]);
//     }
//     else{
//         console.log(decendinSrray[0] * decendinSrray[1] * decendinSrray[2]);
//     }
//   }
// }else{
//     console.log(decendinSrray[0] * decendinSrray[1] * decendinSrray[2]);
// }

// const operations=[
//     {
//             name:'operation1',
//             status:'true'
//         },
//     {
//             name:'operation2',
//             status:'false'
//         },
//         {
//             name:'operation3',
//             status:'true'
//         }
//     ]
//     const groups=["group1","group2","group3"]
//     const map1={
//         group1:['operation1','operation2'],
//         group2:['operation2','operation3'],
//         group3:['operation3','operation1']
//     }

// let indexNumber = 2;
// groups.forEach((ele, index)=>{
//     for(let i in map1){
//         if(index == indexNumber && ele == i){
//             map1[i].forEach(ele1=>{
//                 operations.forEach(ele2=>{
//                     if(ele2.name == ele1){
//                         console.log(ele2.status);
//                     }
//                 })
//             })
//         }
//     }
// })

// let arr = [{
//     "name": "venakt",
//     "age":26,
//     "number":123,
//     "friends":"lot many",
//     "girlfrientsList":"notFound",
//     "location":"molkapatnam",
//     "salary":"less",
//     "height":"5.5",
//     "wight":"60kg",
//     "domain":"frontEnd",
//     "strongIn":"flirting",
//     "weaknIn":"controngEmotions",
//     "experience":"1.5years",
//     "currentLocation":"hyd"
// },
// {
//     "name": "vinay",
//     "age":26,
//     "number":1234,
//     "friends":"lot many",
//     "girlfrientsList":"NearTo 1000 Members family",
//     "location":"hydrebad",
//     "salary":"medium",
//     "height":"5.6",
//     "wight":"70kg",
//     "domain":"frontEnd",
//     "strongIn":"controngEmotions",
//     "weaknIn":"flirting",
//     "experience":"1.5years",
//     "currentLocation":"hyd"
// },
// {
//     "name": "kalyan",
//     "age":29,
//     "number":12345,
//     "friends":"limited",
//     "girlfrientsList":"notFound",
//     "location":"hydrebad",
//     "salary":"less",
//     "height":"5.11",
//     "wight":"100kg",
//     "domain":"frontEnd",
//     "strongIn":"crackinJokes",
//     "weaknIn":"controngEmotions",
//     "experience":"1.5years",
//     "currentLocation":"hyd"
// }
// ]

// Required output is: [
//     {
//       name: 'venakt',
//       age: 26,
//       number: 123,
//       location: 'molkapatnam',
//       salary: 'less',
//       domain: 'frontEnd'
//     },
//     {
//       name: 'vinay',
//       age: 26,
//       number: 1234,
//       location: 'hydrebad',
//       salary: 'medium',
//       domain: 'frontEnd'
//     },
//     {
//       name: 'kalyan',
//       age: 29,
//       number: 12345,
//       location: 'hydrebad',
//       salary: 'less',
//       domain: 'frontEnd'
//     }
//   ]

// let obj1 = {}
// let arr1 = []
// arr.forEach(ele=>{
//     let obj1 = {}
//     for(let i in ele){
//         if(i == "name" || i == "age" || i == "location" || i == "domain" || i == "number" || i == "salary"){
//             obj1[i] = ele[i]
//         }
//     }
//     arr1.push(obj1)
// })
// console.log(arr1);

// let arr = [{
// "name": "venkat",
// "age":26,
// "number":{
// "friends":"lot many",
// "girlfrientsList":"notFound",
// "location":"molkapatnam",
// "salary":"less",
// "height":"5.5",
// },
// "weight":"60kg",
// "domain":"frontEnd",
// "strongIn":"flirting",
// "weaknIn":"controlingEmotions",
// "experience":"1.5years",
// "currentLocation":"hyd"
// },
// {
// "name": "vinay",
// "age":26,
// "number":{
// "friends":"lot many",
// "girlfrientsList":"NearTo 1000 Members family",
// "location":"hydrebad",
// "salary":"medium",
// "height":"5.6"
// },
// "weight":"70kg",
// "domain":"frontEnd",
// "strongIn":"controlingEmotions",
// "weaknIn":"flirting",
// "experience":"1.5years",
// "currentLocation":"hyd"
// },
// {
// "name": "kalyan",
// "age":29,
// "number":{
// "friends":"limited",
// "girlfrientsList":"notFound",
// "location":"hydrebad",
// "salary":"less",
// "height":"5.11"
// },
// "weight":"100kg",
// "domain":"frontEnd",
// "strongIn":"crackingJokes",
// "weaknIn":"controlingEmotions",
// "experience":"1.5years",
// "currentLocation":"hyd"
// }];

// [
// {
// name: 'venkat',
// age: 26,
// salary: 'less',
// location: "Molkapatnam"
// domain: 'frontEnd'
// },
// {
// name: 'vinay',
// age: 26,
// salary: 'medium',
// location: 'hydrebad',
// domain: 'frontEnd'
// },
// {
// name: 'kalyan',
// age: 29,
// salary: 'less',
// location: 'hydrebad',
// domain: 'frontEnd'
// }
// ]
// let arr1 = []
// function recursion(array){
//     for(let i in array){
//         let obj = {}

//         if(typeof array[i] =='object' ){
//             recursion(array[i])
//         }else{
//             obj[i] = array[i];
//         }

//     }
// }
// recursion(arr)
// console.log(arr1);

//write a program to print the below pattern.
//     *
//    ***
//   *****
//  *******
// *********
//  *******
//   *****
//    ***
//     *

// let arr1 = [];
// let count = -1;
// let number = 9
// for(let i = 0; i<number; i++){
//     count = count + 2;
//     arr1.push(count);
//     if(count == number){
//         count = 0;
//        for(let i = number; i>0; i--){
//          number = number -2;
//          if(number<=0){
//             break
//          }
//          arr1.push(number)
//        }
//     }

// }
// console.log(arr1);
// let mainNumber = 9;
// for(let i of  arr1){
//     let str = '';
//     let value = mainNumber -i;
//     value = value/2
//     let spaceString = '';
//     for(let j = 0; j<value; j++){
//         spaceString =spaceString + ' '
//     }
//     for(let k =0; k<i; k++){
//         str =str + '*'
//     }
//     console.log(spaceString + str + spaceString);
// }

// Create a function which replaces all the x's in the string in the following ways:
// Replace all x's with "cks" UNLESS:
// The word begins with "x", therefore replace it with "z".
// The word is just the letter "x", therefore replace it with "ecks".
// Examples
// xPronounce("Inside the box was a xylophone") ➞ "Inside the bocks was a zylophone"

// xPronounce("The x ray is excellent") ➞ "The ecks ray is eckscellent"

// xPronounce("OMG x box unboxing video x D") ➞ "OMG ecks bocks unbocksing video ecks D"

// let str = "OMG x box unboxing video x D";
// str = str.split(' ');
// let output = ''
// str.forEach(element => {
//       if(element.length == 1 && element[0] == 'x'){
//             output = output + ' '+element[0].replace('x','ecks');
//        }
//        else {
//         let str1 = ''
//         element.split('').forEach((element1, index)=>{
//             if(element1 == 'x' && index == 0){
//                 str1 = str1 + 'z';
//             }else if(element1 == 'x'){
//                 str1 = str1 + 'cks';
//             }else{
//                 str1 = str1 + element1;
//             }
//         })
//         output = output + ' '+str1;
//        }
// });
// console.log(output.trimStart(' '));

// let obj = [
//{
// body: "File: 20221228_130200_p008-CDD_DE99999999999999999970_001.xml\nNumber of included transactions: 2\nSum amount of requested money: 11,98EUR\nCreditor ID of produced file: DE99999999999999999970-B2BRAITTXXX\nIBAN of produced file bank account: DE99999999999999999970\nBIC of produced file bank account: B2BRAITTXXX\n",
// createdUser: "DRC",
// dateMail: "2022-12-28T13:02:09.378582",
// id: 1245
//},
// {
//     body: "File: 20221228_130200_p008-CDD_DE99999999999999999970_001.xmlf\nNumber of included transactions: 8\nSum amount of requested money: 11,98EURh\nCreditor ID of produced file: DE99999999999999999970-B2BRAITTXXXb\nIBAN of produced file bank account: DE999999999999999999701\nBIC of produced file bank account: B2BRAITTXXXs\n",
//     createdUser: "DRCf",
//     dateMail: "2022-12-28T13:02:09.3785821",
//     id: 12456
//}
//];

//     let arr3 = []
// obj.forEach(ele=>{
//     let arr1 = ele.body.split('\n');
//     if(arr1[arr1.length-1].includes('')){
//     arr1.pop(arr1[arr1.length-1])
//     }
//     let obj1 = {}
//     arr1.forEach((ele1)=>{
//         let arr2 = ele1.split(': ')
//         obj1[arr2[0].split(' ').join('_')] = arr2[1];
//     })
//     arr3.push(obj1)
// })
// console.log(arr3);

// let arr = [1,11,2,22222,3,333,33,4,44,444,44444,111];
// let obj = {};
// arr.forEach(ele=>{
//     let arr2 = String(ele).split('');
//      arr2.forEach(ele1=>{
//         obj[ele1] = []
//     })
// })
// arr.forEach(ele=>{
//     let arr2 = String(ele).split('');
//      for(let i in obj){
//         if(arr2.includes(i)){
//             obj[i].push(ele)
//         }
//      }
// })
// console.log(obj);

// Create a function that takes an array of strings and returns an
//array with only the strings that have numbers in them. If there are no strings
// containing numbers, return an empty array.

// Examples
// numInStr(["1a", "a", "2b", "b"]) ➞ ["1a", "2b"]

// numInStr(["abc", "abc10"]) ➞ ["abc10"]

// numInStr(["abc", "ab10c", "a10bc", "bcd"]) ➞ ["ab10c", "a10bc"]

// numInStr(["this is a test", "test1"]) ➞ ["test1"]
// Notes
// The strings can contain white spaces or any type of characters.
// Bonus: Try solving this without RegEx.

// let arr = ["1a", "a", "2b", "b"];
// let arr1 = []
// arr.map(ele=>{
//     let arr = ele.split('');
//     arr.map(ele1=>{
//       if(+ele1 && arr1.indexOf(ele) == -1){
//         arr1.push(ele)
//       }
//     })
// })
// console.log(arr1);

//  let str = "this is a test case1";
//  str= str.split('');
//  str.map(element => {
//     if(typeof +element == 'number' && !isNaN(+element)){
//         console.log(+element);
//     }
//  });

//toBoolArray("deep") ➞ [false, true, true, false]
// let lettersStr = "abcdefghijklmnopqrstuvwxyz"
// let str = "tesh";
// let arr = []
// for(let j in str){
//     for(let i in lettersStr){
//         if( str[j] == lettersStr[i] && (+i+1)%2 == 0){
//             arr.push(Boolean(0));
//             console.log(+i+1, lettersStr[i]);
//         }
//         else if(lettersStr[i] == str[j] && (+i+1)%2 == 1){
//             arr.push(Boolean(1));
//             console.log(+i+1, lettersStr[i]);
//         }
//     }
// }
// console.log(arr);

// Build a function that creates histograms.
// Every bar needs to be on a new line and its length corresponds to the numbers
// in the array passed as an argument.
// The second argument of the function represents the character to be used for the bar.

// histogram(arr, char) ➞ str
// Examples
// histogram([1, 3, 4], "#");
// required output is:
// #
// ###
// ####

// histogram([6, 2, 15, 3], "=");
// required output is:
// ======
// ==
// ===============
// ===

// histogram([1, 10], "+");
// required output is:
// +
// ++++++++++

// let arr = [6, 2, 15, 3]
// let str = '=';
// arr.forEach(ele=>{
//     let str1 = ''
//     for(let i = 0; i<ele; i++){
//         str1 = str1 + str
//     }
//     console.log(str1);
// })

//This task is given by venkata ravidranath gundugola.

//let str = "Abcdedfavafdalafad";" //Abcde, dfav, afd, al,af,ad;
// let str = "apupieivoryorange"; // apu,pie,ivory,orange;
// let str = "145849787040413"    //Note:this string is generated by using below code
// let str = "cfbjjejdhaafdih"   //Note:this string is generated by using below code

// let output = []
// let str1 = '';
// for(let i of str){
//     if(str1.includes(i)){
//         output.push(str1);
//         str1 = '';
//         str1 = str1 + i
//     }else{
//         str1 = str1+i
//     }
// }
// if(str1.length>=1){
//     output.push(str1)
// }
// console.log(output.join(','));

//creating string inpusts randomly and these generated strings should work for the
// -- above the code which is written for this kind sting only.

// let str1 = "abcdefghijklmnopqrstuvwxyz"
// let arr = [1,2,3,4,5]
// arr.forEach(element=>{
//     let str = '';
//     for(let i=0; i<15; i++){
//         let stringFormatedNumber =  String(Math.random())[2];
//         for(let j in str1){
//          if(stringFormatedNumber == j){
//             str = str +str1[j]
//          }
//         }
//      }
//      console.log(str);
// })

// Create a function that outputs the result of a math expression in words.

// Examples
// wordedMath("One plus one") ➞ "Two"

// wordedMath("zero Plus one") ➞ "One"

// wordedMath("one minus one") ➞ "Zero"
// Notes
// Expect only the operations plus and minus.
// Expect to only get numbers and answers from 0 to 2.
// The first letter of the answer must be capitalised.

// let str = "zero Plus one";
// str = str.toLowerCase().split(' ');
// let number = {"zero":0,"one":1}
// let obj = {0:"Zero", 1:"One", 2:"Two"};
// let values = Object.values(obj);
// let addition;
// if(str[1] == "plus" ){
//     console.log("hello");
//     for(let i in str){
//         if(Object.keys(number).includes(str[i])){
//             lo
//             addition = number[str[i]] + number[str[i]];
//         }
//         if(i == addition){
//             console.log(obj[i]);
//         }
//     }
// }

// Create a function that, given a string with at least three characters,
//returns an array of its:

// Length.
// First character.
// Last character.
// Middle character, if the string has an odd number of characters.
// Middle TWO characters, if the string has an even number of characters.
// Index of the second occurrence of the second character in the format "@ index #"
//and "not found" if the second character doesn't occur again.

// Examples
// allAboutStrings("LASA") ➞ [4, "L", "A", "AS", "@ index 3"]

// allAboutStrings("Computer") ➞ [8, "C", "r", "pu", "not found"]

// allAboutStrings("Science") ➞ [7, "S", "e", "e", "@ index 5"]

// let str = "LASA";
// let output = [];
// let gettinginput = str[1];
// let str1 = ''
// str.split('').forEach((ele, index)=>{
//     if(ele == gettinginput){
//         str1 = str1 + index
//     }
// });
// output.push(str.length)
// output.push(str[0]);
// output.push(str[str.length-1]);
// if(str.length%2==0){
//     let value = str.length/2;
//     let value1 = '';
//     value1 = value1 + str[value-1] + str[value];
//     output.push(value1);
// }else if(str.length !==0){
//     let value = str.length/2;
//      value = Math.floor(value);
//     output.push(str[value]);
// }
// if(str1[1] == undefined){
//     output.push("not found")
// }else if(str1[1]){
//     let value =  "@ index" + ' ' + str1[1];
//     output.push(value);
// }
// console.log(output);

// Write a function to replace all instances of character c1 with character c2 and vice versa.

// Examples
// doubleSwap( "aabbccc", "a", "b") ➞ "bbaaccc"

// doubleSwap("random w#rds writt&n h&r&", "#", "&")
// ➞ "random w&rds writt#n h#r#"

// doubleSwap("128 895 556 788 999", "8", "9")
// ➞ "129 985 556 799 888"
// Notes
// Both characters will show up at least once in the string.

// let str = "128 895 556 788 999";
// let replaceSubStr =  "8";
// let replaceSubStr1 =  "9" ;
// let output = "";
// str.split('').forEach(ele=>{
//     if(ele == replaceSubStr){
//         output = output + replaceSubStr1;
//     }else if(ele == replaceSubStr1){
//         output = output + replaceSubStr
//     }else{
//         output = output + ele
//     }
// })
// console.log(output);

// Given a string, reverse all the words which have odd length. The even length words are not changed.

// Examples
// reverseOdd("Bananas") ➞ "sananaB"

// reverseOdd("One two three four") ➞ "enO owt eerht four"

// reverseOdd("Make sure uoy only esrever sdrow of ddo length")
// ➞ "Make sure you only reverse words of odd length"
// Notes
// There is exactly one space between each word and no punctuation is used.

// let str = "One two three four";
// let output = ''
// str.split(' ').forEach(ele=>{
//     if(ele.length%2 !== 0){
//         ele = ele.split('').reverse();
//         output = output +' '+ ele.join('');
//     }else{
//         output = output + ' '+ ele;
//     }
// })
// console.log(output.trimStart());

// let number = 3;
// let str = ''
// for(let i=0; i<100; i++){
//     str = str + String(Math.random())[2]
//     if(i == 19 ||i == 39 || i == 59 || i == 79){
//         str = str + ','
//     };
// }
// console.log(str);
// // console.log(str.length);
// let count = 0;
// if(number == 1){
//     str.split(',').forEach(ele=>{
//         let str = ''
//         for(let i in ele){
//             if(+i == 0 || +i == 4 || +i == 9 || +i == 10 +i ==14 ||+i == 19 ){
//                 str = str + '1'
//             }else{
//                 str = str + ele[i]
//             }
//         }
//         console.log(str);
//     })

// }else{
//     str.split(',').forEach(ele=>{
//     let str = ''
//     for(let i in ele){
//         if(+i == 0 ){
//             count++
//             let value = number *count;
//             if(value <= 9){
//                 str = str + value
//             }
//             else if(value > 9){
//                count =1;
//                value = number * count;
//                str = str + value;
//             }
//         }else if(+i == 4){
//             count++
//             let value = number *count;
//             if(value <= 9){
//                 str = str + value
//             }
//             else if(value > 9){
//                count =1;
//                value = number * count;
//                str = str + value;
//             }
//         }else if(+i == 9){
//             count++
//             let value = number *count;
//             if(value <= 9){
//                 str = str + value
//             }
//             else if(value > 9){
//                count =1;
//                value = number * count;
//                str = str + value;
//             }
//         }else if(+i == 10){
//             count++
//             let value = number *count;
//             if(value <= 9){
//                 str = str + value
//             }
//             else if(value > 9){
//                count =1;
//                value = number * count;
//                str = str + value;
//             }
//         }else if(+i == 14){
//             count++
//             let value = number *count;
//             if(value <= 9){
//                 str = str + value
//             }
//             else if(value > 9){
//                count =1;
//                value = number * count;
//                str = str + value;
//             }
//         }else if(+i == 19){
//             count++
//             let value = number *count;
//             if(value <= 9){
//                 str = str + value
//             }
//             else if(value > 9){
//                count =1;
//                value = number * count;
//                str = str + value;
//             }
//         }else{
//             str = str + ele[i]
//         }
//     }
//     console.log(str);
// })
// }

// let arr = [3,5,55,55,55,7,7,7,9,9,9,15,9,-1,-2,-3,-4];
// let obj = {};
// arr.forEach(ele=>{
//     obj[ele] = (obj[ele] || 0) + 1;
// })
// console.log(obj);
// let secondHighest = Object.values(obj).sort((a,b)=>{
//     return b-a
// })[1];
// let count = 0
// arr.forEach((ele,index)=>{
//     for(let i in obj){
//         if(+i == ele && secondHighest == obj[i] ) {
//             count++;
//             if(count == 1){
//                 console.log(index);
//                 break
//             }
//         }
//     }
// })

// Someone has attempted to censor my strings by replacing every vowel with a *,
//l*k* th*s. Luckily, I've been able to find the vowels that were removed.

// Given a censored string and a string of the censored vowels, return the original uncensored string.

// Example
// uncensor("Wh*r* d*d my v*w*ls g*?", "eeioeo") ➞ "Where did my vowels go?"

// uncensor("abcd", "") ➞ "abcd"

// uncensor("*PP*RC*S*", "UEAE") ➞ "UPPERCASE"
// Notes
// The vowels are given in the correct order.
// The number of vowels will match the number of * characters in the censored string.

// let str = "Wh*r* d*d my v*w*ls g*?";
// let replaceVowelsString = "eeioeo";
// let count = 0;
// str.split('').forEach(ele=>{
//     if(ele == '*'){
//         count++;
//     }
// })
// let output = '';
// if(count == replaceVowelsString.length){
//     str.split('').forEach(ele=>{
//         replaceVowelsString.split('').forEach(ele1=>{
//             if(ele == '*'){
//                 output = output + ele1
//             }
//             else{
//                 output = output + ele
//             }
//         })
//     })
// }
// console.log(output);

// let str = "1132555677293572"
// let output = []
// let str1 = ''
// for(let i in str){
//     if(+str[+i]%2 ==0 && +str[+i+1]%2 == 0){
//         str1 = str1 + str[+i]
//     }else if(+str[i]%2 == 0){
//         str1 = str1 + str[i];
//         output.push(str1);
//         str1 = ""
//     }else if(+str[i]){
//         str1 = str1 + str[i]
//     }
// }
// console.log(output);

// let str = "12334hgvhg31574fgj137ggff158881";
// let str1 = "";
// let output = []
// for(let i in str){
//     if(+str[i]){
//        str1 = str1 + str[i]
//     }
//    else if(isNaN(+str[+i]) && !isNaN(+str[+i+1])){
//         str1 = str1 +' '
//     }
// }
// str1.split(' ').forEach(ele=>{
//     let str3 = ''
//     for(let i in ele){
//         if(+ele[+i]%2 ==0 && +ele[+i+1]%2 == 0){
//             str3 = str3 +ele[i]
//         }
//         else if(+ele[i]%2 == 0){
//             str3 = str3 + ele[i];
//             output.push(str3);
//             str3 = ''
//         }else{
//             str3 = str3 + ele[i]
//         }
//     }
// })
// console.log(output);

// let arr = [1,2,3,4,5,6,16,32,48,124,256,1024];
// let arr1 = arr.sort((a,b)=>{
//     return b-a
// })
// for(let i=0; i<=arr1[0]; i++){
//     let value = 2**i;
//     for(let j of arr){
//         if(j == value){
//             console.log(value);
//         }
//     }
// }

// let arr = [-1,1,0,2,4];
// arr.sort((a,b)=>{
//     return b-a;
// })
// console.log(arr);
// let maxOfFourNumbers = arr[0]+arr[1]+arr[2]+arr[3];
// let minOfFourNumbers = arr[arr.length-1]+arr[arr.length-2]+arr[arr.length-3]+arr[arr.length-4]
// console.log(maxOfFourNumbers);
// console.log(minOfFourNumbers);
// let obj = {
//     name:"harshitha",
//     dealproduct:[{product:"2,3"}]

// };
// console.log(obj);
// for(let i in obj){
//     if(i == "dealproduct"){
//         let arr = [];
//         for(let j in obj[i][0]){
//             let obj1 = {}
//              obj[i][0][j].split(',').forEach((element,index) => {
//                obj1[j] = element;
//                arr.push(obj1);
//                obj1 = {}
//              });
//          };
//         obj[i] = arr;
//     }
// }
// console.log(obj);

// let obj = {
//     "customerID": 0,
//     "isActive": "Y",
//     "userID": "77847D67-61C4-4D7C-A980-921B72E93F8F",
//     "customerName": "xyz1",
//     "customerAddress": "New Delhi",
//     "contactPerson": "pankajsir",
//     "designation": "ui",
//     "PrimaryBusinessID": 7,
//     "contactNo": "9878986545",
//     "mailID": "pankaj@gmail.com",
//     "customerdealsinproducts": [
//         {
//             "productID": [
//                 2,
//                 6
//             ],
//             "customerID": 0,
//             "productName": ""
//         }
//     ]
// }

// Expected output is:
// {
//   customerID: 0,
//   isActive: 'Y',
//   userID: '77847D67-61C4-4D7C-A980-921B72E93F8F',
//   customerName: 'xyz1',
//   customerAddress: 'New Delhi',
//   contactPerson: 'pankajsir',
//   designation: 'ui',
//   PrimaryBusinessID: 7,
//   contactNo: '9878986545',
//   mailID: 'pankaj@gmail.com',
//   customerdealsinproducts: [
//     { productID: 2, customerID: 0, productName: '' },
//     { productID: 6, customerID: 0, productName: '' }
//   ]
// }

// let objs ={}
// for(let i in obj.customerdealsinproducts[0]){
//     if(i == "productID"){
//        objs[i] = 0
//     }else{
//         objs [i] = obj.customerdealsinproducts[0][i]
//     }
//   }
// let arr = []
// obj.customerdealsinproducts[0] ={...obj.customerdealsinproducts[0].productID} ;
// for(let i in obj.customerdealsinproducts[0]){
//     objs.productID = obj.customerdealsinproducts[0][i];
//     arr.push({...objs})
// ;
// }
// obj.customerdealsinproducts = arr;
// console.log(obj);

// let arr = [
//     {
//     name:"venkat",
//     age:10,
//     phone:9948
//     },
//     {
//     name:"vn",
//     age:101,
//     phone:994855
// }
// ];
// let keysArray = [];
// let valuesArray = [];
// for(let i of arr){
//     // for(let j in i){

//     //         keysArray.push(j)
//     //     valuesArray.push(i[j])
//     // }
//     keysArray.push(...Object.keys(i));
//     valuesArray.push(...Object.values(i))
// }
// console.log(keysArray);
// console.log(valuesArray);
// arr.map(ele=>Object.keys(ele).map(ele1=>Object.values(ele).map(ele2=>console.log(ele1+":"+ele2))))

// keysArray.map((ele,index)=>{
//     valuesArray.map((ele1,index1)=>{
//         index == index1 ? console.log(ele + ":" + ele1) :null
//     })
// })

// function encode (number){
//   let value = new Date();
//   let str = "";
//   getDay = String(value.getDate());
//   getMonth =String( value.getMonth()+1);
//   getYear = String(value.getFullYear());
//   if(getMonth.length >=1){
//     getMonth = "0"+ getMonth;
//   }else if(getDay.length<=1){
//     getDay = "0" + getDay;
//   }
//   str = str + getDay + getMonth + String(number+2) + getYear;
//   // console.log("encripted"+ ":",str);
//   return str
// }
// encode(235)
// let value = encode(235);

// function decode(value1){
//   let str1 = "";

//   for(let i in value1){
//     if(+i == 0 || +i == 1 || +i == 2 || +i == 3 || +i == value1.length-1 || +i == value1.length-2 || +i == value1.length -3 || +i == value1.length -4){

//     }else{
//       str1 = str1 + value1[i]
//     }
//   }
//   // console.log("encripted"+ ":",(+str1-2));
//   str1 = (+str1-2);
//   return str1
// }
// decode(value)
// console.log(value);
// console.log(decode(value));

// let str = "venkateshwarlu remadalal"
// //expected output:"v*n*a*e*h*a*l* *e*a*a*a";

// let str1 = ""
// for(let i in str){
//   if(+i%2 == 0){
//     // console.log("even", str[i]);
//     str1 = str1 + str[i]
//   }else if(+i%2 == 1){
//     str1 = str1 + "*"
//     // console.log("odd", str[i]);
//   }
// }
// console.log(str1);

// let obj = {name: {skillsk:"hello"}};
// console.log(Object.keys(obj.name).join('').toLowerCase());

// let obj = {
//     "venkat":[1,2,3,4,5],
//     "vinay":[3,4,5,6,7],
//     "kalyan":[4,5,6,7,8]
// }

// let obj2 = {}
// function getaver(obj1){
//     let sum = 0;
//     for(let i in obj1){
//         for(let j  of obj1[i]){
//             sum = sum+ j;
//         };
//         // console.log(sum, obj1[i].length, i);
//       let average =  sum/ obj1[i].length;
//     //   console.log(average);
//       obj2[i] = average;
//     }
// }
// getaver(obj);
// console.log(Object.values(obj2).sort((a,b)=>{
//     return a-b
// })[0], "least average");

// let arr = ['LOC,ResellerName,InvoiceNo,InvoiceDate,ProductCode…tion,Quantity,UnitPrice,TotalValue, SerialNumber ',
//  'GOA-B2B,Suraj Informatics Pvt Ltd,W103-30-2212-001… for customer,32,"3,003","96,096","1,2,3,4,5,6,7"',
//  'DEL-B2B,Digital Shoppe,N101-30-2212-257,19-12-2022…POE Adaptor,13,500,"6,500","11,22,33,44,55,66,77"',
//  'MUM-B2B,HTP Global Technologies Pvt. Ltd.,W101-30-…ted 4dBi",87,"21,500","18,70,500","1,2,3,4,5,6,8"',
//   'MUM-B2B,HTP Global Technologies Pvt. Ltd.,W101-30-…Bi",25,"21,500","5,37,500","11,22,33,44,55,66,78"',
//   'MUM-B2B,HTP Global Technologies Pvt. Ltd.,W101-30-…ated 4dBi",10,"21,500","2,15,000","1,2,3,4,5,6,9"',
//   'MUM-B2B,HTP Global Technologies Pvt. Ltd.,W101-30-…Bi",16,"21,500","3,44,000","11,22,33,44,55,66,79"',
//   'MUM-B2B,HTP Global Technologies Pvt. Ltd.,W101-30-…ated 4dBi",9,"21,500","1,93,500","1,2,3,4,5,6,10"',
//    'MUM-B2B,HTP Global Technologies Pvt. Ltd.,W101-30-…Bi",18,"21,500","3,87,000","11,22,33,44,55,66,80"',
//   'BSR-D-B2B,GL Tech Solutions Pvt Ltd,E201-30-2212-0…rs ION4XI,150,"1,829","2,74,350","1,2,3,4,5,6,11"',
//   'DEL-SAL,GL Tech Solutions Pvt Ltd,N101-30-2212-268…",149,"13,671","20,36,979","11,22,33,44,55,66,81"',
//   'MUM-B2B,HTP Global Technologies Pvt. Ltd.,W101-30-… 48V Output",10,"1,337","13,365","1,2,3,4,5,6,12"',
//   'MUM-B2B,HTP Global Technologies Pvt. Ltd.,W101-30-…Bi",10,"23,700","2,36,996","11,22,33,44,55,66,82"',
//    'MUM-B2B,HTP Global Technologies Pvt. Ltd.,W101-30-…hosting Serv,10,"3,465","34,650","1,2,3,4,5,6,13"',
//    'DEL-B2B,Indosoftnet Solutions & Consultant,N101-30…Bi",15,"24,000","3,60,000","11,22,33,44,55,66,83"',
//     'DEL-B2B,Indosoftnet Solutions & Consultant,N101-30… 48V Output",15,"1,150","17,250","1,2,3,4,5,6,14"',
//     'MUM-B2B,Dynacons Systems & Solutions Ltd.,W101-30-…400,"47,320","1,89,28,000","11,22,33,44,55,66,84"',
//      'DEL-SAL,Neena Vats,N101-30-2212-533,29-12-2022,HFC…grated 4dBi",1,"16,457","16,457","1,2,3,4,5,6,15"',
//       'MUM-B2B,Dynacons Systems & Solutions Ltd.,W101-30-…233,"47,320","1,10,25,560","11,22,33,44,55,66,85"',
//       'MUM-B2B,Dynacons Systems & Solutions Ltd.,W101-30-…4x10G,267,"47,320","1,26,34,440","1,2,3,4,5,6,16"', '']
//      let arr1 = [];
//      console.log(arr.length);
//       for(let i in arr){
//         let  obj = {}
//           if(+i == 0){
//               for(let k of arr[i].split(',')){
//                 obj[k] = '';
//                 arr1.push(obj)
//               }
//           }
//       }
//     //   console.log(arr1);
//       for(let i in arr){
//        let obj1 = {}
//          if(+i == 0){

//          }else{
//             for(let j in arr[i].split('"')){
//                 if(arr[i].split('"')[j] ==","){

//                 }else if(j == 0) {
//                  arr1.map(ele=>{
//                     for(let k in arr[i].split('"')[j].split(',')){
//                         if(arr[i].split('"')[j].split(',')[k ]== ','){

//                         }else if(k == 0){
//                             obj1["LOC"] = arr[i].split('"')[j].split(',')[k ]
//                         }
//                         else if(k == 1){
//                             obj1["ResellerName"] = arr[i].split('"')[j].split(',')[k ]
//                         }
//                         else if(k == 2){
//                             obj1["InvoiceNo"] = arr[i].split('"')[j].split(',')[k ]
//                         }
//                         else if(k == 3){
//                             obj1["InvoiceDate"] = arr[i].split('"')[j].split(',')[k ]
//                         }

//                     }

//                  })
//             }
//          }
//         }
//         console.log(obj1);
//       }
//       console.log(arr1);

//       let arrr = "[{name:venkat}]";
//       let val = JSON.parse(arrr);
//       console.log(val);

// const arr1 = [
//   { prop1: "foo", prop2: 1 },
//   { prop1: "bar", prop2: 2 },
//   { prop1: "foo", prop2: 3 },
//   { prop1: "bar", prop2: 4 },
//   { prop1: "foo", prop2: 5 },
//   { prop1: "bar", prop2: 6 },
//   { prop1: "foo", prop2: 7 },
//   { prop1: "bar", prop2: 8 },
//   { prop1: "foo", prop2: 9 },
//   { prop1: "bar", prop2: 10 },
//   { prop1: "foo", prop2: 11 },
//   { prop1: "bar", prop2: 12 },
//   { prop1: "foo", prop2: 13 },
//   { prop1: "bar", prop2: 14 },
//   { prop1: "foo", prop2: 15 },
//   { prop1: "bar", prop2: 16 },
//   { prop1: "foo", prop2: 17 },
//   { prop1: "bar", prop2: 18 },
//   { prop1: "foo", prop2: 19 },
//   { prop1: "bar", prop2: 20 },
//   { prop1: "foo", prop2: 100 },
//   { prop1: "bar", prop2: 101 },
//   { prop1: "foo", prop2: 100 },
//   { prop1: "bar", prop2: 101 },
//   { prop1: "foo", prop2: 100 },
//   { prop1: "bar", prop2: 101 },
//   { prop1: "foo", prop2: 100 },
//   { prop1: "bar", prop2: 101 },
//   { prop1: "foo", prop2: 100 },
//   { prop1: "bar", prop2: 101 },
//   { prop1: "foo", prop2: 100 },
//   { prop1: "bar", prop2: 101 },
//   { prop1: "foo", prop2: 100 },
//   { prop1: "bar", prop2: 101 },
//   { prop1: "foo", prop2: 100 },
//   { prop1: "bar", prop2: 101 },
//   { prop1: "foo", prop2: 100 },
//   { prop1: "bar", prop2: 101 },
//   { prop1: "foo", prop2: 100 },
//   { prop1: "bar", prop2: 101 },
// ];
// let count = 0;

// for(let i of arr1){

// }
// Output

// let str = "<p>hello</p>"
// str = str.split("<p>").join('').split("</p>").join('')
// // str = str.split("</p>").join('')
// console.log(str,str.length);

// let output = (function (x) {
//   delete x;
//   return x;
// })(0);
// console.log(output);

// function deletes(x){
//   // delete x;
//   return x
// }
// // deletes(0)
// console.log(deletes(0));

// function formRandomString(num){
//   let str = "abcdefghijklmnopqrstuvwxyz"
// let str1 = ""
// for(let i=0; i<num; i++){
//    let val = String(Math.random(i))[2];
//    for(let j in str){
//        if(val == j){
//         str1=str1+str[j]
//        }
//    }
// }
// return str1
// }
// function formRandomNumber(num){
//   let str1 = ""
// for(let i=0; i<num; i++){
//    str1 = str1+ String(Math.random(i))[2];

// }
// str1 = +str1;
// return str1

// }

// let string = 4
// let str = "abcdefghijklmnopqrstuvwxyz"
// let str1 = ""
// for(let i=0; i<string; i++){
//    let val = String(Math.random(i))[2];
//    for(let j in str){
//        if(val == j){
//         str1=str1+str[j]
//        }
//    }
// }
// string = str1;

// let number1 = 2
// let str2 = ""
// for(let i=0; i<number1; i++){
//    str2 = str2+ String(Math.random(i))[2];
// }
// number1 = +str2;
// // console.log(str2);

// const obj1 = {
//   "createdBy": string, //string
//   "location": "Hyderabad",//string
//   "minExp": number1,//number
//   "maxExp": number1,//number ,
//   "customerName": string,//string
//   "customerDetails": string,//string
//   "budget": number1,//number
//   "primarySkills": string,//string
//   "secondarySkills": string,//string
//   "jobDescription": string,//string
//   "openPositions": number1,//number
//   "closedPositions": 3,//number
//   "hiringObjective": "Some objective",
//   "hiringType": "hiretype",
//   "interviewModes": "interviewmode",
//   "jobTitle": "jobtitle",
//   "jobLevel": "jobLevel",
//   "visibility": 1
// }
// console.log(obj1, "new test object");

// return onj1;

// let arr = []
// let val = new Date();
// val = val.getFullYear()
// arr.push(val-1);
// arr.push(val)
// arr.push(val+1);
// arr.push(val+2);
// console.log(arr);

// let obj = {a:10, b:11, c:6, e:20};
// [2:42 PM] Shivaji Enjamuri
// Input
// const portfolio = [
// {name: 'Mark', stock: 'FB'},
// {name: 'Steve', stock: 'AAPL'},
// {name: 'Tim', stock: 'AAPL'},
// {name: 'Steve', stock: 'MSFT'},
// {name: 'Bill', stock: 'MSFT'},
// {name: 'Bill', stock: 'AAPL'},
// ];
// let arr3 = [];
// for(let i of portfolio){
//   if(i.stock == "AAPL"){
//     let obj = {};
//     obj = {...{obj}, ...{i}}
//     arr3.push(obj)
//   }
// }
// console.log(arr3);
// const shareholder = [
//   {stock: 'AAPL', name:['Steve', 'Bill', 'Tim'], count:3},
//   {stock: 'MSFT', name:['Steve', 'Bill'], count:2},
//   {stock: 'FB', name:['Mark'], count:1},
// ];

// let obj1 = {};
// obj1["name"] = obj.name;

// obj1["phone"] = obj.phone;
// obj1["phone"]["age"] = obj.age;
// console.log(obj1);
// let currentArray = [
//   {
//     year: 2011,
//     date: 33,
//     asset: {
//       silver: 322,
//       gold: 325,
//     },
//   },
//   {
//     year: 2012,
//     date: 56,
//     asset: {
//       silver: 411,
//       gold: 2235,
//     },
//   },
// ];
// let arr = []
// for(let i of currentArray){
//    // console.log(i);
//    let obj ={};
//    let obj1 = {}
//    // obj["year"] = i.year;
//    for(let j in i){
//       if(j == "year"){
//          obj[j] = i[j]
//       }else if(j == "date"){
//          obj1[j] = i[j]
//       }else if(j == "asset"){
//          obj[j] = {...i[j], ...obj1}
//       }
//    }
//    arr.push(obj)
// }
// console.log(arr);

// const contacts = [
//   {
//     "firstName": "Akira",
//     "lastName": "Laine",
//     "number": "0543236543",
//     "likes": ["Pizza", "Coding", "Brownie Points"],
//   },
//   {
//     "firstName": "Harry",
//     "lastName": "Potter",
//     "number": "0994372684",
//     "likes": ["Hogwarts", "Magic", "Hagrid"],
//   },
//   {
//     "firstName": "Sherlock",
//     "lastName": "Holmes",
//     "number": "0487345643",
//     "likes": ["Intriguing Cases", "Violin"],
//   },
//   {
//     "firstName": "Kristian",
//     "lastName": "Vos",
//     "number": "unknown",
//     "likes": ["JavaScript", "Gaming", "Foxes"],
//   },
//   {
//     "firstName": "Kallu",
//     "lastName": "p",
//     "number": "7075021707"

//   }
// ];

// function lookUpProfile(name, prop) {
//   for (let i of contacts) {
//     let val = {}
//     if(!Object.keys(i).includes(prop)){
//       val[prop] = ["hello", "world", "venkat"];
//      return {...i, ...val}
//     }

//   }
// }
// let res = lookUpProfile("Akira", "likes")
// console.log(res);

// let output =[]
// function countdown(num){
//   if(num<1){
//     return [];
//   }else if(num>=1){
//     // output=[ ...output, ...[num]]
//     output.push(num)
//     countdown(num-1);
//     return output
//   }
// }
// let val = countdown(5);
// console.log(val);

// let arr = [
//   {
//     name:"allen",
// size:10,
// color:"red"
// },
// {
//   name:"abhi",
// size:10,
// color:"yellow"
// },
// {
//   name:"ppep",
// size:10,
// color:"black"
// }
// ]
// arr.map(ele=>{
//   if(ele.name == "allen"){
//     console.log(ele);
//   }
// })

// let str = ".......................7075021707"
// //+91 70750 21707;
// let arr2 = []
// let str1 = "+91 ";
// let count1 = 0
// for(let i=str.length-1; i>=0; i--){
//   count++;
//   arr2.unshift(str[i])
//  if(count == 10){
//   break
//  }else if(count == 5){
//   arr2.unshift(' ')
//  }
// }
// console.log(arr2);
// console.log(str1+arr2.join(''));

// console.log(str1+arr2.join (''));

// let output = "";
// if(str.length == 12){
//   str1 = str1 + ' ';
//   for(let i in str){
//     if(+i == 0 || +i == 1){

//     }
//     else if(+i == 6){
//       str1 = str1 +str[i]+ ' '
//     }else{
//       str1 = str1 +str[i]
//     }
//   }
//   console.log(str1);
// }

// else if(str.length == 11){
//   for(let i in str){
//     if(+i == 0 && str[i] == 0){
//       str1 = str1+' '
//      }
//      else if(+i ==0 && str[i] !==0){
//       str1 = str1 + ' '+str[i]
//     }
//     else if(+i == 5){
//       str1 = str1 +str[i] + ' '
//     }
//     else{
//       str1 = str1+str[i]
//     }
//   }
//   console.log(str1);

// }
// else if(str.length == 10){
//   str1 = str1 + ' ';
//   for(let i in str){
//     if(+i == 4){
//       str1 = str1 + str[i] + ' '
//     }else{
//       str1 = str1 +str[i]
//     }
//   }
//   console.log(str1);

// }else{
//   console.log("invalid input");
// }

// let arr4 = ["venkt", "vinat"];
// let obj = {};
// for(let i of arr4){
//   obj[i] = ""
// }
// console.log(obj);

// let count12 = 0
// function helo(num){
//   if(num == 2 || num == 3|| num==4|| num==5|| num==6){
//     count12++
//   }else if(num == 7 || num == 8|| num==9){

//   }else if(num == 10 || num == "J"|| num=="Q"|| num == "K" || num == "O"){
//     count12--
//   }
//   if(count12>0){
//     return "we shoud go for bet"+' '+ count12
//   }else{
//     return "we shoud hold" + ' '+count12;
//   }
// }
// console.log(helo(2));
// console.log(helo(3));
// console.log(helo(7));
// console.log(helo("K"));
// console.log(helo("O"));

const contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];

// let val = []
// function lookUpProfile(name, prop) {
//   for (let i of contacts){
//     if(i.firstName==name){
//    (i.hasOwnProperty(prop))?
//       console.log(i.likes):console.log ("No such property");
//     }
//     else{
//       val.push(1);
//     }
//   };
//   if(val.length == contacts.length){
//     console.log("No such contact");
//   }
// }
// lookUpProfile("Harry", "likes");


// let val = []
// function lookUpProfile(a,b){
//   for(let i of contacts){
//     val.push(i.firstName)
//   }
//   if(!Object.keys(contacts[0]).includes(b) && !val.includes(a)){
//     return "Nothing Matched"
//   }else  if(!Object.keys(contacts[0]).includes(b)){
//     return "No such Property"
//   }else if(!val.includes(a)){
//     return "NO such Contact"
//   }
//   else{
//     for(let i of contacts){
//       if(i.firstName == a && Object.keys(i).includes(b)){
//         return i.lastName
//       }
//     }
//   } 
// }
// console.log(lookUpProfile("Kristiancds","lastName"));



// lookUpProfile("Kristiana","lastName")
// Vos

// 1)
// let arr = [1,2,3,4,5,6];
// for(let i of arr){
//   console.log(i);
// }


// 2)
// let arr = [1,2,3,4,5,6];
// for(let i of arr){
//   if(i%2==0){
//     console.log(i, "even number");
//   }else{
//     console.log(i, "odd number");
//   }
// }


//3 buble sort.
// let arr = [10,4,3,20,11,40];
// for(let i in arr){
//   for(let j in arr){
//     if(arr[i]>arr[j]){
//       let temp = arr[i];
//       arr[i]=arr[j];
//       arr[j] = temp;
//     }
//   }
// }
// console.log(arr);


//lenear search.
// let arr = [20,11,12,13];
// let val = 20;
// for(let i of arr){
//   if(i == val){
//     console.log(i);
//   }
// }




//binary search.
// let arr = [20,11,12,13];
// let val = 20;
// for(let i in arr){
//   if(arr[i] == val){
//     console.log(arr[i]);
//   }
// }

// let str = "abcdefghijklmnopqrstuvwxyz";
// let arr = ["venkat", "valyan", "raju"];
// let obj = {};
// let count = 0;
// for(let i of arr){
//   if(i[0] == "v"){
//     count++;
//     obj[i] = (obj[i]||0)+1;
//     console.log(obj);
//   }
// }

// let totn_string = 'TachOnTheNet';
// totn_string = totn_string.toLowerCase('');
// console.log(totn_string);

// console.log(totn_string.charCodeAt(0));
// console.log(totn_string.charCodeAt(1));
// console.log(totn_string.charCodeAt(2));
// console.log(totn_string.charCodeAt(3));

let arr = [
  {
    name:"vamshi",
    age:20,
    country:"india"
  },
  {
    name:"kalyan",
    age:20,
    country:"india"
  },
  {
    name:"venkat",
    age:20,
    country:"india"
  },
  {
    name:"vinay",
    age:20,
    country:"india"
  }
]




// console.log("a".ch);

// let str12 = "messegesadsafdsgfsdhf";