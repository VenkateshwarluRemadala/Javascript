// 1. Write a JavaScript function to check whether an `input` is a string or not. 
// input:'w3resource';
// output:true;
// input:[1, 2, 4, 0];
// output:false;

// let testStr = 'hello'
// let input = [1, 2, 4, 0];
// if(typeof input === typeof testStr){
//     console.log(true);
// }
// else{
//     console.log(false);
// }



// 2. Write a JavaScript function to check whether a string is blank or not.
//  input = '';
// input:'abc';
// output:true
// output:false

// let input = 'abc';
// if(input.length === 0){
//    console.log(true);
// }
// else{
//     console.log(false);
// }



// 3. Write a JavaScript function to split a string and convert it into an array of words.
// input:"Robin Singh";
// output:["Robin", "Singh"];

// let str = "Robin Singh";
// let arr = str.split(' ');
// console.log(arr);



// 4. Write a JavaScript function to extract a specified number of characters from a string.
// input:"Robin Singh",4;
// output:"Robi"

// function numberOfStrings(str, specifiedNumChar){
//     let output = '';
//     for(let i = 0; i<specifiedNumChar; i++){
//         output = output + str[i]
//     }
//     console.log(output);
// }
// numberOfStrings("Robin Singh", 4)



// 5. Write a JavaScript function to convert a string in abbreviated form.
//input:"Robin Singh";
//output: "Robin S."

// function abbreviatedForm(str){
//     let arr = str.split(' ');
//     let output = '';
//     let b = arr[arr.length-1][0].toUpperCase();
//     for(let i in arr){
//         if(i == arr.length-1){
//             break
//         }
//         else{
//             for(let j in arr[i]){
//                 if(j == 0){
//                     output = output + ' '+arr[i][j];
//                 }
//                 else{
//                     output = output + arr[i][j]
//                 }
//             };
//         }
//     }
//     let final = output +' '+ b + '.';
//     console.log(final.trimStart());
// }
// abbreviatedForm("Robin utapppa Singh")



// 6. Write a JavaScript function to hide email addresses to protect from unauthorized user.
//input:"robin_singh@example.com";
//output "robin...@example.com";

// let str = "robin_singhsdfs@example.com";
// let arr = str.split('@');
// let arr1 = arr[0].split('_');
// let output = arr1[0] + '...@' + arr[arr.length-1];
// console.log(output);



// 7. Write a JavaScript function to parameterize a string.
// input:"Robin Singh from USA.";
// output:"robin-singh-from-usa";

// let str = "Robin Singh from USA.";
// let str1 = str.split(' ').join('-');
// let output = '';
// for(let i of str1){ 
//     if(i == '.'){      
//     }
//     else{
//         output = output + i.toLowerCase();
//     }
// }
// console.log(output);



//8. Write a JavaScript function to capitalize the first letter of a string.
// input:js string exercises';
// output:"Js string exercises";

// let output = '';
// function smallToCapital(str){
//      for(let i in str){
//         if(i == 0){                 //index value is in the form of string not in the form of number.
//            output = output+str[i].toUpperCase()
//         }
//         else{
//             output =output+str[i]
//         }
//      }
// }
// smallToCapital('js string exercises')
// console.log(output);



// 9. Write a JavaScript function to capitalize the first letter of each word in a string.
// input:'js string exercises'; 
// output: "Js String Exercises";

// let str= 'js string exercises';
// let str1 = str.split(' ');
// let output = '';
// for(let i of str1){
//     for(let j in i){
//         if(j == 0){
//             output = output + ' '+ i[j].toUpperCase();
//         }else{
//             output = output + i[j]
//         }
//     }
// }
// let finalOutput = output.trimStart();



// 10. Write a JavaScript function that takes a string which has lower and upper case letters as a parameter and converts upper case letters to lower case, and lower case letters to upper case. Go to the editor
//input: 'AaBbc'.
//output: "aAbBC".

// let output = '';
// function strLowerToUpper(str){
//     for(let i of str){
//         if(i === i.toLowerCase()){
//         output = output+i.toUpperCase();
//         }
//         else{
//             output = output+i.toLowerCase();
//         }
//     }
// }
// strLowerToUpper("AaBbc")
// console.log(output);



// 11. Write a JavaScript function to convert a string into camel case.Go to the editor
//input:"JavaScript Exercises";
//input:"JavaScript exercises";
//input:"JavaScriptExercises";
//output:"JavaScriptExercises".
//output:"JavaScriptExercises".
//output:"JavaScriptExercises".

// function strCamelCase(str){
//     let arrayStr = str.split(' ');
//     let output = '';
//     for(let i of arrayStr){
//         if(i[0] !== i[0].toUpperCase()){
//             let req = '';
//             for(let j in i){
//                 if(j == 0){
//                     req = req + i[j].toUpperCase();
//                 }
//                 else{
//                     req = req + i[j];
//                 }
//             }
//             output = output + req;
//         }
//         else{
//             output = output + i
//         }
//     }
//     console.log(output);
// }
// strCamelCase("JavaScriptExercises");



// 12. Write a JavaScript function to uncamelize a string.
//input: 'helloWorld';
//input: 'helloWorld','-';
//input: 'helloWorld','_';
//output: "hello world";
//output: "hello-world";
//output: "hello_world";

// function uncamelizeStr(str, str1){
//     let arrayStr = str.split('');
//     let output = '';
//     for(let i of arrayStr){
//         if(i === i.toUpperCase()){
//             output = output + str1 + i.toLowerCase();
//         }
//         else{
//             output = output+i;
//         }
//     }
//     console.log(output);

// }
// uncamelizeStr('helloWorldVenkat', "_")



// 13. Write a JavaScript function to concatenates a given string n times (default is 1).
// input: 'Ha!'
// input: 'Ha!',2;
// input: 'Ha!',3;
// ouput: "Ha!"
// ouput: "Ha!Ha!"
// ouput: "Ha!Ha!Ha!"

// function concatenatesNofTimes(str, noOfTimes){
//     let output = '';
//     if(noOfTimes === undefined){
//         console.log(str);
//     }
//     else{
//         for(let i = 0; i<noOfTimes; i++){
//             output = output+str
//         }
//     }
//     console.log(output);
// }
// concatenatesNofTimes('Ha!', 3)



// 14. Write a JavaScript function to insert a string within a string at a particular position (default is 1)
// input: 'We are doing some exercises.';
// input: 'We are doing some exercises.','JavaScript ';
// input: 'We are doing some exercises.','JavaScript ',18;
// output: "We are doing some exercises."
// output: "JavaScript We are doing some exercises."
// output: "We are doing some JavaScript exercises.";

// function insertStrWithinStr(inputStr, subStr, position){
//     let output = '';
//     let count = 0;
//     if(position === undefined && subStr === undefined){
//         console.log(inputStr);
//     }
//     else if(position === undefined){
//         output = output + subStr+ ' ' + inputStr;
//     }
//     else{
//         for(let i of inputStr){
//             count++
//             if(count === position){
//                 output = output + ' ' + subStr + i
//             }
//             else{
//                 output = output + i
//             }
//         }
//     }
//     console.log(output);
// }
// insertStrWithinStr('We are doing some exercises.', "javascript", 18)



// 15. Write a JavaScript function to humanized number (Formats a number to a human-readable string.) with the correct suffix such as 1st, 2nd, 3rd or 4th.
// humanize_format();
// input: 1;
// input: 8;
// input: 301;
// input: 402;
// output: "1st";
// output: "8th";
// output: "301st";
// output: "402nd";

// function numberToHumanReadableString(num){
//     let strNumber = String(num);
//     let arrayStr = strNumber.split('');
//     let arrayLength = arrayStr.length;
//     let obj = {1: 'st', 2: 'nd', 3: 'rd', 4: 'th', 5: 'th', 6: 'th', 7: 'th', 8: 'th', 9: 'th', 0: 'th'};
//     for(let i in obj){
//         if(i == arrayStr[arrayLength-1]){
//             arrayStr[arrayLength-1] = arrayStr[arrayLength-1] + obj[i]
//         }
//     }
//     console.log(arrayStr.join(''));
// }
// numberToHumanReadableString(107);



// 16.Write a JavaScript function to truncates a string if it is longer than the specified number of characters. 
// Truncated strings will end with a translatable ellipsis sequence ("…") (by default) or specified characters. 
//  input: 'We are doing JS string exercises.'
//  input: 'We are doing JS string exercises.',19
//  input: 'We are doing JS string exercises.',15,'!!'
// output: "We are doing JS string exercises."
// output: "We are doing JS ..."
// output: "We are doing !!"
// let str = 'We are doing JS string exercises.';
// function truncateString(str, requiredStringLength, replaceStr){
//     let output = '';
//    if(replaceStr === undefined && requiredStringLength === undefined ){
//     console.log(str);
//    }
//    else if(replaceStr === undefined){
//     let byDefaultReplacStr = '...';
//     let count = 1;
//     let len = requiredStringLength - byDefaultReplacStr.length;
//     for(let i = 0; i<requiredStringLength; i++){
//         if(i<len){
//             output = output + str[i];
//         }
//         else{
//             output = output + byDefaultReplacStr[byDefaultReplacStr.length - count]
//         }
//     }
//    }
//    else{
//     let count = 1;
//     let len = requiredStringLength - replaceStr.length;
//     for(let i = 0; i<requiredStringLength; i++){
//         if(i<len){
//             output = output + str[i];
//         }
//         else{
//             output = output + replaceStr[replaceStr.length - count]
//         }
//     }
//    }
//    console.log(output);
// }
// truncateString('We are doing JS string exercises.', 15, '!!')



// 17. Write a JavaScript function to chop a string into chunks of a given length.
// input: 'w3resource';
// input: 'w3resource',2;
// input: 'w3resource',3;
// output: ["w3resource"];
// output: ["w3", "re", "so", "ur", "ce"];
// output: ["w3r", "eso", "urc", "e"];

// let output = '';
// let ouput1 = [];
// function chopString(str, len){
//     let count = 0;
//     for(let i of str){
//         count++;
//         output = output + i ;
//         if(count == len){
//             count = 0;
//             output = output + ' '
//         }
//         else if(len === undefined){
//             ouput1.push(str)
//         }
//     }   
// }
// chopString('w3resource')
// console.log(output.trimEnd().split(' '));



// 18. Write a JavaScript function to count the occurrence of a substring in a string.
//input: "The quick brown fox jumps over the lazy dog", 'the';
// Output :2
//input: "The quick brown fox jumps over the lazy dog", 'fox'
// Output :1

// function repeatedSubString(string, substring){
//     let count = 0;
//     let arrayStr = string.split(' ');
//     for(let i of arrayStr){
//         if(i.toLowerCase() === substring){
//             count = count+1
//         }     
//     }
//     console.log(count);
// }
// repeatedSubString("The quick brown fox jumps over the lazy dog", 'fox')



// 21. Write a JavaScript function to repeat a string a specified times. Go to the editor
// input:'a', 4;
// input:'a';
// Output :
// "aaaa"
// "Error in string or count."

// let output = '';
// function repeatACharacter(str, repeatingTimes){
//     if(repeatingTimes == undefined){
//         console.log('Error in string or count.');
//     }
//     else{
//         for(let i = 0; i<repeatingTimes; i++){
//             output = output + str
//         }
//     }  
// }
// repeatACharacter('a')
// console.log(output);



// 22. Write a JavaScript function to get a part of a string after a specified character.
// 'w3resource: JavaScript Exercises', ':','a';
// console.log(subStrAfterChars('w3resource: JavaScript Exercises', 'E','b'));
// Output :
// "w3resource"
// "xercises"

// let str = "w3resource: JavaScript Exercises";
// let arr = str.split(' ');
// let subStr = 'E'
// let output = '';
// for(let i of arr){
//     if(i.includes(subStr)){
//         for(let j of i){    
//             if(j == subStr){
//             }
//             else{
//                 output = output + j
//             }    
//         } 
//     }
// };
//  console.log(output);



// 23. Write a JavaScript function to strip leading and trailing spaces from a string.
// input:'w3resource ';
// input:' w3resource';
// input:' w3resource ';
// Output:"w3resource";
// Output:"w3resource";
// Output:"w3resource";

// let str = ' w3resource ';
// let output = '';
// for(let i of str){
//     if(i == ' '){
//     }
//     else{
//         output = output + i
//     }
// }
// console.log(output);



// 24. Write a JavaScript function to truncate a string to a certain number of words.
// input:'The quick brown fox jumps over the lazy dog', 4;
// Output:"The quick brown fox"

// let str = 'The quick brown fox jumps over the lazy dog';
// let trucateNumberOfWords = 4;
// let count = 0;
// let arr =str.split(' ');
// let output = '';
// for(let i of arr){
//     count++
//     if(count === trucateNumberOfWords +1){
//         break
//     }
//     else{
//         output = output + i + ' ';
//     }
// }
// console.log(output.trimEnd());



// 26. Write a JavaScript function to remove the first occurrence of a given 'search string' from a string.
// input:"The quick brown fox jumps over the lazy dog", 'the';
// Output:"The quick brown fox jumps over lazy dog";
// let str = "The quick brown fox jumps over the lazy the dog";
// let givenSearchString = "the";
// let arr = str.split(' ');
// let arr1 = arr.find((str1)=>{
//     if(str1 === givenSearchString){
//         return str1
//     }
// })
// console.log(arr1);



// 29. Write a JavaScript function to find a word within a string.
// input:'The quick brown fox', 'fox';
// input:'aa, bb, cc, dd, aa', 'aa';
// Output:"'fox' was found 1 times.";
// Output:"'aa' was found 2 times.";

// let str = 'aa, bb, cc, dd, aa';
// let findWord = 'aa';
// let arr = str.split(',');
// let count = 0;
// for(let i of arr){
//     if(i.trimStart() === findWord){
//         count++;
//     }
// }
//  console.log(findWord + ' '+ " is repeated"+' '+count );



// 30. Write a JavaScript function check if a string ends with specified suffix.
// input:'JS PHP PYTHON','PYTHON';
// output:true;
// input:'JS PHP PYTHON','';
// output:false;

// let str = 'JS PHP PYTHON';
// let checkStrEndsWith = "PYTHON";
// let arr = str.split(' ');
// if(arr[arr.length-1] == checkStrEndsWith){
//     console.log("true");    
// }
// else{
//     console.log('false');
// }



// 34. Write a JavaScript function to convert a string to title case.
// input:'PHP exercises. python exercises.';
// output:"Php Exercises. Python Exercises.";

// let str = 'PHP exercises. python exercises.';
// let titleCase = '';
// let arr = str.split(' ');
// for(let i of arr){
//     for(let j in i){
//         if(j== 0){
//             titleCase = titleCase + ' ' + i[j].toUpperCase();
//         }
//         else{
//             titleCase = titleCase + i[j].toLowerCase();
//         }
//     }
// }
// console.log(titleCase.trimStart());



// 37. Write a JavaScript function to test case insensitive (except special Unicode characters)
// string comparison.
// input:'abcd', 'AbcD';
// output:true;
// input:'ABCD', 'Abce';
// output:false;

// let str1 = 'ABCD';
// let str2 = 'Abce';
// str1 = str1.toLowerCase();
// str2 = str2.toLowerCase();
// if(str1.length>str2.length  || str2.length>str1.length){
//     console.log("false");
// }
// else if(str1 === str2){
//     console.log("true");
// }
// else{
//     console.log("false");
// }



// 38. Write a JavaScript function to create a case-insensitive search. Go to the editor
// Test Data :
// input:'JavaScript Exercises', 'exercises';
// output:"Matched";
// input:'JavaScript Exercises', 'Exercises';
// output:"Matched";
// input:'JavaScript Exercises', 'Exercisess';
// output:"Not Matched";

// let str = 'JavaScript Exercises xsskx exercises';
// let caseInSensitiveSearch = 'exercises';
// let str1 = str.toLowerCase().split(' ');
// let caseInSensitiveSearch1 = caseInSensitiveSearch.toLowerCase();
// let mcount = 0;
// let ncount = 0;
// for(let i of str1){
//     if(i == caseInSensitiveSearch1){
//         mcount++;
//         if(mcount==1){
//             console.log("Matched");
//         }      
//     }
//     else if(i !== caseInSensitiveSearch1){
//         ncount++;
//         if(str1.length == ncount){
//             console.log("not Matched");
//         }
//     }  
// }



// 39. Write a JavaScript function to Uncapitalize? the first character of a string. 
// input:'Js string exercises';.
// // output: "js string exercises".

//function unCapitalizeFirstCharacter(str){
// let output = '';
// for(let i of str){
//     if(i == i.toUpperCase()){
//         output = output + i.toLowerCase();        
//     }
//     else{
//         output = output + i.toLowerCase()
//     } 
// }
// console.log(output);

//(OR)

// let output = '';
// for(let i of str){
//     output = output + i.toLowerCase()
// }
// console.log(output);
//}
//unCapitalizeFirstCharacter('Js string exercises')



// 40. Write a JavaScript function to Uncapitalize the first letter of each word of a string. 
// input:'Js String Exercises';
// output:"js string exercises";

// let str = 'Js String Exercises';
// let output = '';
// str = str.split(' ');
// for(let i of str){
//     for(let j in i){
//         if(j == 0 ){
//             output = output + ' ' + i[0].toLowerCase();
//         }
//         else{
//             output = output + i[j]
//         }
//     }
// }
// console.log(output.trimStart());



// 41. Write a JavaScript function to capitalize each word in the string.
// input:'js string exercises';
// output:"JS STRING EXERCISES";
// let str = 'js string exercises';
// let output = '';
// for(let i of str){
//     output = output + i.toUpperCase();
// }
// console.log(output);



// 42. Write a JavaScript function to uncapitalize each word in the string.
// input: 'JS STRING EXERCISES';
// output: "js string exercises";

// let output = '';
// function unCapitalize(str){
//     for(let i of str){
//         output = output + i.toLowerCase()
//     }
//     console.log(output);
// }
// unCapitalize('JS STRING EXERCISES')

// 43. Write a JavaScript function to test whether the character at the provided (character) 
//index is upper case.
// input:'Js STRING EXERCISES', 1;
// output:false
// let str = 'Js STRING EXERCISES';
// let providedIndex = 1;
// if(str[1] == str[1].toUpperCase()){
//     console.log("true");
// }
// else{
//     console.log("false");
// }



// 44. Write a JavaScript function to test whether the character at the provided (character)
// index is lower case.
// input:'Js STRING EXERCISES', 1;
// output:true
// let str = 'Js STRING EXERCISES';
// let providedIndex = 1;
// if(str[1] == str[1].toLowerCase()){
//     console.log("true");
// }
// else{
//     console.log("false");
// }



// 45. Write a JavaScript function to get humanized number with the correct suffix such as 1st, 2nd,
// 3rd or 4th.
// input:1;
// input:20;
// input:302;
// output:"1st"
// output:"20th"
// output:"302nd"

// let number = 1;
// let obj = {"1":"st", "2":"nd", "3":"rd", "4":"th", "5":"th", "6":"th", "7":"th", "8":"th", "9":"th", "0":"th"};
// let str = String(number);
// let ouput = ''
// for(let i in obj){
//     if(str[str.length-1] == i){
//         str = str + obj[i];
//     }
// }
// console.log(str);



// 46. Write a JavaScript function to test whether a string starts with a specified string. 
// input:'js string exercises', 'js';
// output:true;

// let str = 'js string exercises';
// str = str.split(' ');
// let startsWith = 'js';
// if(str[0] === startsWith){
//     console.log("true");
// }
// else{
//     console.log("false");
// }



// 47. Write a JavaScript function to test whether a string ends with a specified string.
// input:'JS string exercises', 'exercises';
// output:true

// let str = 'js string exercises';
// str = str.split(' ');
// let stringEndsWith = 'exercises';
// if(str[str.length -1] === stringEndsWith){
//     console.log("true");
// }
// else{
//     console.log("false");
// }



// 50. Write a JavaScript program to check if a given string contains alphanumeric characters 
//that are palindromes regardless of special characters and letter case.
// A palindrome is a word, number, phrase, or other sequence of symbols
// that reads the same backwards as forwards, such as the words madam or racecar,
// the date/time stamps 11/11/11 11:11 and 02/02/2020, and the 
//sentence: "A man, a plan, a canal - Panama". 
//The 19-letter Finnish word saippuakivikauppias (a soapstone vendor), 
//is the longest single-word palindrome in everyday use,
// while the 12-letter term tattarrattat (from James Joyce in Ulysses) is the longest in English.
// input:'$22_|1372^2731|_22' 
// output:true.
// input:'12%^&2'
// output:false
// input:'234%$$%432'
//output: true
// input: 1234
//output: "It must be string"
// input:'aba%$aba'
// output: true
// input:'Aba%$aba'
//output:true

// let letterWord = 'abcdefghijklmnopqrstuvwxyz';
// let str = '$22_|1372^2731|_22';
// let str1 = '';
// if(typeof str === 'string'){
//     for(let i of str.toLowerCase()){
//         if(letterWord.includes(i)){
//             str1= str1 +i
//         }
//         else if (+i%+i==0){
//             str1 = str1 + i
//         }
//     }
//     let str2= '';
//     for(let j = str1.length-1; j>=0; j--){
//         str2 = str2 + str1[j]
//     }
//     if(str1 === str2){
//         console.log("true");
//     }else{
//         console.log("false");
//     }
// }
// else{
//     console.log("It must be string");
// }



// 53. Write a JavaScript function to check a given string is in Flat case or not. 
// Flat case: As the name implies, flatcase refers to the use of lowercase letters,
// with no spaces between words.
// input:'j'
// output: true
//input:'java exercises'
// output:false
//input:'JavaScriptExercises'
//output:false
//input;'javascriptexercises'
//output: true
// input:12356
// output:"It must be a string."
// let str = 123456;
// let spacesCount = 0;
// let upperCaseCount = 0;
// let lowerCaseCount = 0
// if(typeof str === 'string'){
//     for(let i of str){
//         if(i == ' '){
//             spacesCount++
//             if(spacesCount == 1){
//                 console.log("false");
//             }
//         }
//         else if(i == i.toUpperCase()){
//             upperCaseCount++;
//             if(upperCaseCount == 1){
//                 console.log("false");
//             }
//         }
//         else if(i === i.toLowerCase()){
//             lowerCaseCount++;
//             if(lowerCaseCount == str.length){
//                 console.log("true");
//             }
//         }
//     }
// }
// else{
//     console.log("It must be string");
// }



// 55. Write a JavaScript function to check whether a string is a Pangram or not. Go to the editor
// A pangram or holoalphabetic sentence is a sentence using every letter of a given alphabet at least once. 
//Pangrams have been used to display typefaces, test equipment,
// and develop skills in handwriting, calligraphy, and keyboarding.
//input:"The quick brown fox jumps over the lazy dog"
//output:true
//input:"Waltz, bad nymph, for quick jigs vex."
//output:true
//input:"The five boxing wizards jump quickly."
//output:true
//input:"The boxing wizards jump quickly."
//output: false
//input:12356
//ouput:"It must be a string."

// let str = "The five boxing wizards jump quickly."
// let alphabets = 'abcdefghijklmnopqrstuvwxyz';
// let str1 = '';
// if(typeof str == 'string'){
//     for(let i of str){
//         if(i === ' ' || i === '.'){
//         }
//         else if(str1.indexOf(i) == -1){
//             str1 = str1 + i.toLowerCase()
//         }
//     }
//     let count = 0;
//     for(let i of str1){
//         if(alphabets.includes(i)){
//             count++;
//         }
//     } 
//     console.log(str1.length);
//     console.log(alphabets.length);
//     if(alphabets.length === count){
//         console.log("true");
//     }
//     else{
//         console.log("false");
//     }
// }
// else{
//     console.log("It should be string");
// }



// 57. Write a JavaScript function that receives a string and determine whether or not 
//it can be rearranged to become a palindrome. Go to the editor
// When a word, phrase, or sequence can be read both forward and backward, it is considered a palindrome.
// e.g., madam or nurses run.

// ("maamd") -> true
// ("civic") -> true
// ("IO") -> false
// (12321) -> "It must be a string."
// Click me to see the solution.
// let str = 12321;
// let str1 = '';
// if(typeof str === 'string'){
//     for(let i = str.length-1; i>=0; i--){
//         str1 = str1 + str[i];
//     }
//     console.log(str1);
//     if(str1 == str){
//         console.log("true");
//     }
//     else{
//         console.log("false");
//     }
// }
// else{
//     console.log("It must be string");
// }



// 58. Write a JavaScript program to find the most frequent character in a given string. 
// ("Madam") -> "a"
// ("civic") -> "c"
// ("HellloL223LLL") -> "L"
// (12321) -> "It must be a string."
// Click me to see the solution.

// let str = "Madam";
// let obj = {};
// let arr = [];
// if(typeof str === 'string'){
//     for(let i of str){
//         obj[i] = (obj[i] || 0) + 1;
//     }
//     for(let i in obj){
//         arr.push(obj[i])
//     }
//     let arr1 = arr.sort((a,b)=>{
//         return a-b
//     })
//     for(let i in obj){
//         if(obj[i] === arr1[arr1.length -1]){
//             console.log(i);
//         }
//     }
// }
// else{
//     console.log("It must be string");
// }



// 59. Write a JavaScript program to find the most frequent word in a given string. Go to the editor
// Test Data :
// ("The quick brown fox jumps over the lazy dog") -> "the"
// ("Python is a high-level, general-purpose programming language.") -> "python"
// (" It was the same man, she was sure of it. It's always the same, Chauncey.") -> "was"
// (12321) -> "It must be a string."

// let str = "The quick brown fox jumps over the lazy dog";
// str = str.toLowerCase();
// if(typeof str === 'string'){
//     let arr = str.split(' ');
//     let obj = {};
//     let arr1 = [];
//     for(let i of arr){
//         obj[i] = (obj[i] || 0) + 1;
//     }
//     for(let i in obj){
//         arr1.push(obj[i]);
//     }
//     let arr2 = arr1.sort((a,b)=>{
//         return a-b
//     })
//     for(let i in obj){
//         if(obj[i] === arr2[arr2.length-1]){
//             console.log(i);
//         }
//     }
// }
// else{
//     console.log("It must be string");
// }



// 60. Write a JavaScript function to reverse words in a given string. Go to the editor
// Test Data :
// ("abc") -> "cba"
// ("JavaScript Exercises") -> "tpircSavaJ sesicrexE"
// (1234) -> "It must be a string."
// Click me to see the solution.

// let str = "JavaScript Exercises";
// if(typeof str === 'string'){
//     let arr = str.split(' ');
//     let output = '';
//     for(let i of arr){
//         output = output + ' ';
//         for(let j = i.length-1; j>=0; j--){
//             output = output + i[j];
//         }
//     }
// console.log(output.trimStart());
// }
// else{
//     console.log("It must be string");
// }



// let obj = {
//     name:"test",
//     office:{
//       company:"ojas",
//       employeesDetails:{
//          name:"venkat",
//          age:35
//  }
//     }
//  }




// output:{
// "name":"test",
// "office.company":"ojas",
// "office.employeesDetails.name":"venkat",
// "office.employeesDetails.age":35

// }



let obj = {
    name:"test",
    office:{
      company:"ojas",
      employeesDetails:{
         name:"venkat",
         age:35
 }
    }
 }
 let obj1 = {}
function recursion(obj){
    if(typeof obj === 'object' && !Array.isArray(obj)){
        for(let i in obj){
            if(typeof obj[i] === 'object'){

            }
            else{
                obj1[i] = obj[i]
            }
        }
    }
}
recursion(obj)
 




//43. Nathan loves cycling.
//Because Nathan knows it is important to stay hydrated, he drinks 0.5 liters of water per hour of cycling.
//--you get the given time in hours and you need to return the number of liters nathan will drink, round to the 
//--smallest value.

// let perHourDirnkingWater = 0.5;
// let timeInHours = 11.8;
// let totalDrinkingWater = perHourDirnkingWater * timeInHours;
// let str1 =  String(totalDrinkingWater);
// let totalDrinkingWater1 = ''
// for(let i of str1){  
//     if(i == '.'){
//        break 
//     }
//     else{
//         totalDrinkingWater1 = i;
//     }
// }
// console.log(totalDrinkingWater1);



//44. input:1450 ->output:145
//input:960000 ->output:96
//input:1050 ->output:105
//input:-1050 ->output:-105
// i/p=>1450
// o/p=>145
// remove zeroes at the end.

// let number = 1000540000;
// let str1 = String(number);
// let output = ''
// let cutNumber
// for(let i = str1.length-1; i>=0; i--){
//    if((+str1[i])>0 == true){
//     for(let j = 0 ; j<i; j++){
//             output = output + str1[j]
//     }
//     break 
//    }

// }
// console.log(output);



// . Write a JavaScript program which accept a number as input and insert dashes (-) 
//between each two even numbers. For example if you accept 425468 the output should be 4-254-6-8.

// function insertDases(num){
//     let strNum = String(num);
//     let output = '';
//     for(let i = 0; i<strNum.length; i++){
//         if(strNum[i]%2 ===0 && strNum[i+1]%2 ===0){
//             output = output + strNum[i]+'-'
//         }
//         else{
//             output = output + strNum[i]
//         }     
//     }
//     console.log(output);
// }
// insertDases(425468)


// Print numbers from 1 to 100 using setInterval for each second 5 numbers should be 
// --printed like that upto 100 once printed numbers should not repeated.
// output:  1sec:1,2,3,4,5
// 2sec:6,7,8,9,10
// 3sec:11,12,13,14,15
// likewise.

// let count = 0;
// let settmeout = setInterval(function hello(){ 
//     if(count == 20){
//         clearInterval(settmeout)
//     }
//     else{
//         count++
//         let arr = [5];
        
//         let i =1;
//         for(i  ; i<=arr[arr.length] * count; i++){
//               arr.push(i)
//                 console.log(i);  
//         }
//         //i = arr[arr.length -1];
        
//     }
// }, 2000)




// [5:43 PM] Vinay Gangula
// Input : let obj = {a:3, b:1, c:4, d:5}
// sort the obj based on value
// Expected output : obj = {b:1, a:3, c:4, d:5}
// [5:43 PM] Vinay Gangula
// in ascending order
// let key  = Object.keys(obj);
// console.log(key);
// let value = Object.values(obj);
// let obj1 = {};
// for(let i in value){
//     if(value[+i]>value[+i+1]){
//         console.log("hello");

//     }
// }

// let arr = [1,2,3,4,[5,6,7,8,[9,10,11,12,[13,14,{"name": "suraj", "domain":"UI"}]]]];
// let output = [];
// function recursion(a){
//     for(let i in a){
//         let value = a[i];
//         if(typeof value === 'object'){
//             recursion(value)
//         }else{
//             output.push(value)
//         }
//     }
// }
// recursion(arr)
// console.log(output);



// find the missing the numbers from the array.
//input: [8,9,4,6,5,3,2,1,13];
//output:   //the missing number in the array is 7
            //the missing number in the array is 10
            //the missing number in the array is 11
            //the missing number in the array is 12

// let arr = [8,9,4,6,5,3,2,1,13];
// let arr1 = arr.sort((a,b)=>{
//     return a-b
// })
// let arr2 = []
// for(let i = arr1[0] ; i<=arr[arr.length-1]; i++){
//     arr2.push(i);
// }
// for(let j of arr2){
//     if(!arr.includes(j)){
//         console.log(console.log("the missing number in the array is" + ' '+j););
//     }
// }

   //(OR)

// let arr = [8,9,4,6,5,3,2,1,13];
// let arr1 = arr.sort((a,b)=>{
//     return a-b
// })
// let arr2 = []
// for(let i = arr1[0] ; i<=arr[arr.length-1]; i++){
//     arr2.push(i);
// }
// let arr3 = [...arr1, ...arr2];
// let obj = {};
// for(let i of arr3){
//     obj[i] = (obj[i] || 0) + 1;
// } 
// for(let i in obj){
//     if(obj[i] == 1){
//         console.log("the missing number in the array is" + ' '+i);
//     }
// }




























