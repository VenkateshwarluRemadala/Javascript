// 1. Write a JavaScript function to convert a number from one base to another. 
// Note : Both bases must be between 2 and 36.
// input:'E164',16,8;
// input:1000,2,8;
// "160544"
// "10"


// 2. Write a JavaScript function to convert a binary number to a decimal number. 
// input:'110011';
// input:'100';
// 51
// 4


// 3. Write a JavaScript function to convert a decimal number to binary, hexadecimal or octal number. 
// input:120,'B';
// input:120,'H';
// input:120,'O';
// output:"1111000";
// output:"78";
// output:"170";

// 4. Write a JavaScript function to generate a random integer. Go to the editor
// Test Data :
// console.log(rand(20,1));
// console.log(rand(1,10));
// console.log(rand(6));
// console.log(rand());
// 15
// 5
// 1
// 0

let url = "https://www.youtube.com/watch?v=Fv9txrVpr-0";
let str = "watch?v";
let repl = 'embed/'

// if(url.includes(str)){
//     url = url.replace(str,repl )
// }
// else{
//    console.log("error");
// }
// console.log(url);
 url.replace("watch?v=", "embed/");
