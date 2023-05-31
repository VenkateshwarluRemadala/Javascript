// Assignments 
// 1) Program to remove all the white spaces from a string 

// let str = "a b c d e";
// let output = '';
// for(let i of str){
//     if(i == ' '){

//     }else{
//         output = output+i
//     }
// }
// console.log(output);



// 2) Program to replace lower-case characters with upper-case and vice 
// versa 

// let str = "hello WORLD";
// let output = '';
// for(let i of str){
//     if(i.toLowerCase() == i){
//         output = output+i.toUpperCase()
//     }else if(i.toUpperCase() == i){
//         output = output + i.toLowerCase()
//     }
// }
// console.log(output);



// 3) Program to replace the spaces of a string with a specific character.
// let str = "a b c d e";
// let output = ''
// for(let i of str){
//     if(i == ' '){
//         output = output+'-'
//     }else{
//         output = output+i
//     }
// }
// console.log(output);



// 4) Program to Count the Total Number of Characters in a String.
// let str = " -$a";
// let count = 0
// let chars = 'abcdefghijklmnopqrstuvwxyz';
// for(let i of str){
//     if(chars.split('').includes(i.toLowerCase())){
//         count++
//     }  
// }
// console.log(count);



// 5) Program to Determine Whether a Given String is Palindrome ;
// let arr = ["AA", "XYZ", "CD", "C", "ZYX", "AA"] (OR)
// let arr = ["A", "B", "C", "DC", "B"]

// let str = arr.join('');
// let str1= arr.join('').split('').reverse().join('')
// if(str==str1){
//     console.log(str,"is palindrome");
// }else{
//     console.log(str, "is not a palidrome");
// }
//  ============================================ 



// 6) Program to Find Maximum and Minimum Occurring Character in a String.

// let str = "messeges";
// let obj = {};
// for(let i of str){
//     obj[i] = (obj[i] || 0)+1;
// }
// let arr = Object.values(obj).sort((a,b)=>{
//     return b-a
// });
// let minVal = arr[arr.length-1];
// let maxVal = arr[0];
// for(let i in obj){
//     if(obj[i] == minVal){
//         console.log("minimum Occuring Character is", i, obj[i]);
//     }else if(obj[i] == maxVal){
//         console.log("maximum occuring character is", i, obj[i]);
//     }
// }



// 7) Program to Find Reverse of a String.

// let str = "javascript program";
// let output = '';
// for(let i=str.length-1; i>=0; i--){
//     output = output+str[i]
// }
// console.log(output);



// 8) Program to Find the Duplicate Characters in a String.

// let str = "messeges";
// let obj = {}
// for(let i of str.split('')){
//    obj[i] = (obj[i] || 0)+1;
// }
// for(let i in obj){
//     if(obj[i]>1){
//         console.log("duplicate characters is", i);
//     }
// }



// 9) Program to Find the Duplicate Words in a String.

// let str = "javascript is used frontend websites and javascript is the most used programing language";
// let obj = {}
// for(let i of str.split(' ')){
//    obj[i] = (obj[i] || 0)+1;
// }
// for(let i in obj){
//     if(obj[i]>1){
//         console.log("duplicate word is", i);
//     }
// }

// 10)Program to Find the Frequency of Characters.

// let str = "apple iphone";
// let obj = {};
// for(let i of str){
//     obj[i] = (obj[i] || 0)+1; 
// }
// for(let i in obj){
//     console.log("frequency of characters is", i, obj[i]);
// }



// 11)Program to Find the Largest and Smallest Word in a String.

// let str = "javascript is used frontend websites and javascript is the most used programing language"
// let arr = str.split(' ').sort((a,b)=>{
//     return a.length - b.length
// })
// let SmallestWord = arr[0];
// let Largestword = arr[arr.length-1]
// console.log(SmallestWord);
// console.log(Largestword);



// 12)Program to Swap two String Variables Without Using Third or Temp Variable .

// let str1 = "hello";
// let str2 = "world";
// str1 = str1+' '+str2;
// str1 = str1.split(' ');
// str2 = str1[0];
// str1 = str1[1];
// console.log(str1, str2);



// 13)Write a Java program to get the character at the given index within the 
// String 
//  Sample Output: 
//  Original String = Java Exercises! 
//  The character at position 0 is J 
//  The character at position 10 is i 

// let str = "Java Exercises!";
// for(let i in str){
//     if(str[i] == "J"){
//         console.log("The character at position",+i, str[i]);
//     }else if(str[i] == "i"){
//         console.log("The character at position",+i, str[i]);
//     }
// }



// 14)Write a Java program to replace all the 'd' characters with 'f'.

// let str = "did done your work";
// let output = ''
// for(let i of str){
//     if(i == 'd'){
//         output = output +'f'
//     }else{
//         output = output+i
//     }
// }
// console.log(output);



// 15)Write a Java program to find the second most frequent character in a 
// given string 

// let str = "messege";
// let obj = {};
// for(let i of str){
//     obj[i]= (obj[i] || 0)+1;
// }
// let secondFrequent = Object.values(obj).sort((a,b)=>{
//     return b-a
// })[1];
// for(let i in obj){
//     if(obj[i] == secondFrequent){
//         console.log("second most frequent character is", i);
//     }
// }



// 16) Write a Java program to print after removing duplicates from a given 
// string .


// let str = "messeges"
// let output = [];
// for(let i of str){
//     if(output.indexOf(i) == -1){
//         output.push(i)
//     }
// }
// console.log("The final string after removing duplicates",output.join(''));



// 17) 
// Given Stiring replace 
// Input : a b c d e f 
// Output: a f c d e b 


// let str ="a b c d e f";
// str = str.split(' ');
// let secondChar = str[1];
// let lastChar = str[str.length-1];
// let output = '';
// let arr = []
// for(let i in str){
//     if(+i == 1){
//         output = output+lastChar
//         arr.push(lastChar)
//     }else if(+i == str.length-1){
//         output = output+secondChar;
//         arr.push(secondChar)
//     }else{
//         output = output+str[i]
//         arr.push(str[i])
//     }
// }
// console.log(arr.join(' '));




// 18)How to Reverse A string 4 Different ways in java? 

//one way of reversing the string.
// let str = "hello";
// str = str.split('').reverse();
// console.log(str.join(''));

//second way of reversing the string.
// let str = "hello";
// let output = ''
// for(let i=str.length-1; i>=0; i--){
//     output = output+str[i]
// }
// console.log(output);

//third way of reversing the string;
// let str = "hello";
// let arr = [];
// for(let i of str){
//     arr.unshift(i)
// }
// console.log(arr.join(''));

//fourth way of reversing the string.
// let str = "hello";
// let output = ''
// function recursion(len){
//     if(len>=0){
//         output = output+str[len];
//         recursion(len-1)
//     }else{
//         console.log(output);
//     }
// }
// recursion(str.length-1)



// 19)Java Program to remove Special Characters From Given String.

// let str = '-@$#aAbcde';
// let charStr = "abcdefghijklmnopqrstuvwxyz";
// let output = ''
// for(let i of str){
//     if(charStr.split('').includes(i.toLowerCase())){
//         output = output+i
//     }
// }
// console.log(output);

// (or)

// for(let i of str){
//     if(i == ' '){

//     }else if(i.toLowerCase() == i && i.toUpperCase()==i){

//     }else{
//         output = output+i
//     }
// }
// console.log(output);




// 20)Java Program To Remove White Spaces from given String 

// let str = "hello world how are you"
// let output = '';
// for(let i of str){
//     if(i == ' '){

//     }else{
//         output = output+i
//     }
// }
// console.log(output);



// 21) Java Program to Remove Duplicate Characters in String.
// let str = "messeges";
// let arr = [];
// for(let i of str){
//     if(arr.indexOf(i) == -1){
//         arr.push(i)
//     }
// }
// console.log(arr.join(''));



// 22) Sort String Chracters in Alphabetical Order;


let str = "hello world";
let st = "abcdefghijklmnopqrstuvwxyz"
let output = ''
for(let i of st){
    if(str.includes(i)){
        output = output +i
    }
}
console.log(output);


// console.log(arr1);



// 23)To Replace Character with its Occurrence of New Chracter 

// let str = "hello world";
// let output = '';
// for(let i of str){
//     if(i.toLowerCase() == i){
//         output = output+i.toUpperCase()
//     }else if(i.toUpperCase() == i){
//         output = output +i.toLowerCase()
//     }
// }
// console.log(output);



// 24)Java Program to Find First Not Repeated Character 
// let str = "hello world";
// let obj = {};
// for(let i of str){
//     obj[i] = (obj[i] || 0)+1;
// }
// for(let i in obj){
//     if(obj[i] == 1){
//         console.log("First not repeated character is", i);
//         return
//     }
// }



// 25)Java Program to replace Character with its occurrence 

// let str = "hello world";
// let obj = {};
// for(let i of str){
//     obj[i] = (obj[i]||0)+1;
// }
// console.log(obj);
// let output = '';
// function recursion(arg){
//     if(arg<=str.length-1){
//         for(let i in obj){
//             if(i == str[arg]){
//                 console.log(i,str[arg], obj[i]);
//                 output = output+obj[i]
//             }
//         }
//         recursion(arg+1)
//     }else{
//         console.log(output);
//     }
// }
// recursion(0)



// 26)Reverse Each work in Given String 

// let str = "hello world how are you";
// let output = []
// for(let i of str.split(' ')){
//     let str1 = '';
//     for(let j = i.length-1; j>=0; j--){
//         str1 =str1 +i[j];
//     }
//     output.push(str1)
// }
// console.log(output.join(' '));



// 27)Java Program to Find Longest subString without Repeated Chracters
// Without Repeated Character. 
// let str = "hello world";
// let str1 = [];
// for(let i of str){
//     if(i == ' '){

//     }else if(str1.indexOf(i) == -1){
//         str1.push(i)
//     }
// }
// console.log(str1.join(''));

// let str = "hello world";
// let arr = [];
// for(let i of str){
//     if(arr.indexOf(i) == -1){
//         arr.push(i)
//     }
// };
// console.log(arr.join(''));
// let obj = {};
// for(let i of str){
//     obj[i] = (obj[i] || 0)+1;
// };
// for(let i in obj){
//     // if(i == 'l'){
//     //     console.log(obj[i]);
//     // }
//     console.log(i,obj[i]);

// }
// console.log(obj.l);


// let output = '';
// function reverseTheStr(str){
//     output = output+str[str.length-1];
//     str = str.split('')
//     str.splice(str.length-1);;
//     str.length>=1 ? reverseTheStr(str.join('')) : console.log(output);
// }
// reverseTheStr("venkat");



// let arr = [];
// function reverse(num){
//     arr = [ ...arr, ...[num]];
//     num<100? reverse(num+1):console.log(arr);;
// }
// reverse(1)



// let arr = [1,2,3,4,4];
// let hightst = arr.sort((a,b)=>{
//     return b-a
// })[0];
// let count=0
// for(let i of arr){
//     i == hightst ?count++:''
// }
// console.log(count);

// let count = 0
// arr.filter(ele=>{
//     arr.indexOf(ele) == arr.lastIndexOf(ele) ? null: count++;
// });
// console.log(count);



