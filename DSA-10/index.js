
// Write a Python program to get a single string from two given strings, separated by a space and swap
//  the first two characters of each string. Go to the editor
// Sample String : 'abc', 'xyz'
// Expected Result : 'xyc abz'


// let input_string1 = "abc";
// let input_string2 = "xyz";
// let firstString_Char = input_string1[input_string1.length-1];
// let secondString_Char = input_string2[input_string2.length-1];
// let output_String = input_string2.split(input_string2[input_string2.length-1]).join(firstString_Char)+" "+input_string1.split(input_string1[input_string1.length-1]).join(secondString_Char);
// console.log(output_String);


// Given a line of text, reverse the text without reversing the individual words.
// For example,
// Input:  Technical Interview Preparation 
// Output: Preparation Interview Technical
// A simple solution is to push the individual words from the beginning of the text into a stack. Then,
//  pop all the words from the stack and store them back into the text in LIFO order. The time complexity 
//  of the above solution is O(n) and requires O(n) extra space for the stack, where n is the length of 
//  the given text.


// let input_String = "javascript is the most popular language in the world";
// input_String = input_String.split(' ');
// let output_String = "";
// output_String = output_String.split('');

// function recursion(ind){
//     output_String.unshift(input_String[ind]);
//     if(ind<input_String.length-1){
//         recursion(ind+1)
//     }else{
//         console.log(output_String.join(' '));
//     }
// }
// recursion(0);

