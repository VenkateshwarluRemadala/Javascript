
// 4) 
// Remove all occurrences of `AB` and `C` from a 
// string 
// Given a string, remove all occurrences of AB and C in a single traversal of it. 
// For example, 
// The input string is 'CBAABCAB' 
// The string after removal of 'AB' and 'C' is 'BA' 
// 'CBAABCAB' —> 'C BA AB C AB' —> 'BA' 
// The input string is 'ABACB' 
// The string after removal of 'AB' and 'C' is '' 
// 'ABACB' —> 'AB A C B' —> 'AB' —> '' 
// The input string is 'ABCACBCAABB'
// The string after removal of 'AB' and 'C' is '' 
// 'ABCACBCAABB' —> 'AB C A C B C A AB B' —> 'AB AB' —> ''
// Practice This Problem 
// The main challenge lies with doing the conversion in a single traversal of the string. The 
// problem demands the removal of all adjacent, as well as non-adjacent occurrences of 
// string AB , i.e., for a given string, say ADAABCB , after removing the first adjacent 
// occurrence of AB (and C of-course), we get string ADAB which again needs to be 
// processed for adjacent AB (No C this time, think!). Therefore, the final output string will 
// be AD . 

// let str = 'ABCACBCAABB';
// let str1 = "C";
// let str2 = "AB";
// str = str.split(str1).join('').trim();
// str = str.split(str2).join('').trim();
// if(str.length>=str1.length || str.length>=str2.length){
//     str = str.split(str2).join('').trim();
//     str = str.split(str1).join('').trim();
//     console.log(str.length);
//     console.log(str, "venkat");
// }else{
//     console.log(str.length);
//     console.log(str, "venkat1");
// }





// 5) 
// Run Length Encoding (RLE) Data Compression 
// Algorithm 
// Run–length encoding (RLE) is a simple form of lossless data compression that runs on 
// sequences with the same value occurring many consecutive times. It encodes the 
// sequence to store only a single value and its count. 
// For example, consider a screen containing plain black text on a solid white background. 
// There will be many long runs of white pixels in the blank space and many short runs of 
// black pixels within the text. 
// WWWWWWWWWWWWBWWWWWWWWWWWWBBBWWWWWWWWWWWWWWWWWWWWWWWWBWWWWWWWWWWWWWW
// With a run–length encoding (RLE) data compression algorithm applied to the above 
// hypothetical scan line, it can be rendered as 12W1B12W3B24W1B14W . This can be 
// interpreted as a sequence of twelve W’s , one B , twelve W’s , three B’s , etc. 
// Practice This Problem 
// The idea is to run a linear scan on the string, and for each distinct character, append the 
// character and its consecutive occurrence in the output string. 
// The algorithm can be implemented as follows in C++, Java, and Python. Note that the 
// output size will double the input size in the worst case,
//  so the algorithm can’t run inplace. e.g. ABCD —> A1B1C1D1 . 


// let str = "WWWWWWWWWWWWBWWWWWWWWWWWWBBBWWWWWWWWWWWWWWWWWWWWWWWWBWWWWWWWWWWWWWW";
// let count = 0;
// let output = ''
// for(let i in str){
//     if(str[i] == str[+i+1]){
//         count =count+1
//     }else if(str[i] !==str[+i+1]){
//         count++
//         output = output + count+str[i];
//         count=0
//     }
// }
// console.log(output);




// 6) 
// Determine whether a string is a palindrome or not 

// let str = "XYX";
// let str1 = "";
// for(let i=str.length-1; i>=0; i--){
//     str1 = str1+str[i];
// }
// if(str == str1){
//     console.log(str,"is a palindrome");
// }else{
//     console.log("it is not a palindrome");
// }



// 7) 
// Get the integer value of the roman numeral 
// Given a valid Roman numeral, convert it to the corresponding integer value. 
// The Roman numerals system uses seven different symbols to represent numbers. These 
// are I , V , X , L , C , D , and M , standing for 1 , 5 , 10 , 50 , 100 , 500 , and 1000 , respectively. 
// The Roman numerals are in the range [1, 3999] , the minimum Roman numeral 
// being I and the maximum Roman numeral being MMMCMXCIX . 
 
// For example, 
// Input: VII 
// Output: 7 
// Explanation: V = 5, I = 1 
 
// Input: XXIX 
// Output: 29 
// Explanation: X = 10, I = 1 
 
// Input: CLX 
// Output: 160 
// Explanation: C = 100, L = 50, X = 10;


// let obj = {I:1, "V":5, "X":10, L:50, C:100, D:500, M:1000};
// let str = "CLX";
// let count = 0
// if(str[0] !== "I" && str[str.length-1] !== "I"){
//     for(let i of str){
//         if(i == "I"){
//             count = count -1;
//         }else{
//             for(let j in obj){
//                 if(j == i){
//                     count =count+obj[j]
//                 }
//             }
//         }
//     }
//     console.log(count);
// }else if(str[0] == "I"){
//     for(let i of str){
//         if(i == "I"){
//             count = count-1
//         }else{
//             for(let j in obj){
//                 if(i == j){
//                     count =count+obj[j];
//                 }
//             }
//         }
//     }
//     // console.log(i);
//     console.log(count);
// }
// else{
//    for(let i of str){
//     for(let j in obj){
//         if(i == j){
//             count= count+obj[j]
//         }
//     }
//    }
//    console.log(count);
// }


// let ar = [4,2,-3,-1,0,4];
// function recursion(arr){
//     let su = arr.reduce((a,b)=>{
//         return a+b
//     });
//    if(su!=0){
//     arr.splice(0,1);
//     recursion(arr)
//     // console.log(arr);
//    }else if(su == 0){
//     console.log(arr);
//    }

// }recursion(ar)


// 8) 
// Get the integer value of the roman numeral 
// Given a valid Roman numeral, convert it to the corresponding integer value. 
// The Roman numerals system uses seven different symbols to represent numbers. These 
// are I , V , X , L , C , D , and M , standing for 1 , 5 , 10 , 50 , 100 , 500 , and 1000 , respectively. 
// The Roman numerals are in the range [1, 3999] , the minimum Roman numeral 
// being I and the maximum Roman numeral being MMMCMXCIX . 
 
// For example, 
// Input: VII 
// Output: 7 
// Explanation: V = 5, I = 1 
 
// Input: XXIX 
// Output: 29 
// Explanation: X = 10, I = 1 
 
// Input: CLX 
// Output: 160 
// Explanation: C = 100, L = 50, X = 10 
// The idea is very simple: evaluate the Roman numeral from left to right, keeping a simple 
// rule in mind: when a digit is placed before another digit of higher value, we add the 
// difference between the digits to the result. For example, consider a Roman 
// numeral LXLVI , where the corresponding integer values are L = 50 , X = 10 , V = 5 , I 
// = 1 . It can be evaluated as follows: 
// LXLVI = L + (L – X) + V + I 
//  = 50 + (50 – 10) + 5 + 1 
//  = 50 + 40 + 5 + 1 
//  = 96 ;


// let obj = {I:1, "V":5, "X":10, L:50, C:100, D:500, M:1000};
// let str = "CLX";
// let count = 0
// if(str[0] !== "I" && str[str.length-1] !== "I"){
//     for(let i of str){
//         if(i == "I"){
//             count = count -1;
//         }else{
//             for(let j in obj){
//                 if(j == i){
//                     count =count+obj[j]
//                 }
//             }
//         }
//     }
//     console.log(count);
// }else if(str[0] == "I"){
//     for(let i of str){
//         if(i == "I"){
//             count = count-1
//         }else{
//             for(let j in obj){
//                 if(i == j){
//                     count =count+obj[j];
//                 }
//             }
//         }
//     }
//     // console.log(i);
//     console.log(count);
// }
// else{
//    for(let i of str){
//     for(let j in obj){
//         if(i == j){
//             count= count+obj[j]
//         }
//     }
//    }
//    console.log(count);
// }




// 9) 
// Remove adjacent duplicate characters from a string 
// Given a string, remove adjacent duplicates characters from it. In other words, remove all 
// consecutive same characters except one. 
// For example, 
// Input: AABBBCDDD 
// Output: ABCD

// let str = "AABBBCDDDAA";
// let output = "";
// for(let i in str){
//     if(str[i] === str[+i+1]){

//     }else if(str[i] !==str[+i+1]){
//         output = output + str[i]
//     }
// }
// console.log(output);



// 10) 
// Determine if a string is a subsequence of another 
// string 
// Given two strings, check if the second string is a subsequence of the first string. 
// A subsequence is a sequence that can be obtained by deleting some characters from a 
// string without changing the relative order of the other characters. For example, 
// Input: first = abcde, second = abd 
// Output: true 
// Explanation: abd is a subsequence of abcde 
 
// Input: first = abcde, second = acb 
// Output: false 
// Explanation: acb is not a subsequence of abcde 
 
// The idea is very simple: simultaneously traverse both strings and compare the current 
// character of the first string with the next character of the second string, both starting 
// from the beginning. We increment the pointer of the first string at each iteration of the 
// loop and increment the second string’s pointer only if a match is found. We return true 
// if the end of the second string is reached at any time and false 


// let str = "abcde";
// let str1 = "acb"
// let arr = [];
// for(let i in str){
//     for(let j in str1){
//         if(str[i] == str1[j] ){
//             arr.push(+j)
//             console.log(j);
//         }
//     }
// }
// console.log(arr);
// for(let i in arr){
//     if(arr[i]>arr[+i+1]){
//         arr.splice(arr[i]);
//     }
// }
// if(arr.length !== str1.length){
//     console.log(false);
// }else{
//     console.log(true);
// }


// 11) 
// Reverse a String using Recursion 

// let str = "hello world";
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



// 12) Check if an expression is balanced or not 



// 13) 
// Check if an expression is balanced or not 
// Given a string containing opening and closing braces, check if it represents a balanced 
// expression or not. 
// For example, 
// {[{}{}]}[()], {{}{}}, []{}() are balanced expressions. 
// {()}[), {(}) are not balanced. 
// We can use a stack to solve this problem. The idea is to traverse the given expression, 
// and 
//  If the current character in the expression is an opening brace ( or { or [ , push it 
// into the stack. 
//  If the current character in the expression is a closing brace ) or } or ] , pop a 
// character from the stack, and return false if the popped character is not the same 
// as the current character, or it does not pair with the current character of the 
// expression. Also, if the stack is empty, the total number of opening braces is less 
// than the closing brace number at that point, so the expression cannot be 
// balanced.



// 14) 
// Evaluate a postfix expression 
// Write code to evaluate a given postfix expression efficiently. 
// For example, 
// 82/ will evaluate to 4 (8/2) 
 
// 138*+ will evaluate to 25 (1+8*3) 
 
// 545*+5/ will evaluate to 5 ((5+4*5)/5) 
// Assume that the postfix expression contains only single-digit numeric operands, without 
// any whitespace 
// We can easily compute a postfix expression by using a stack. The idea is to traverse 
// the given postfix expression from left to right. If the current character of the 
// expression is an operand, push it into the stack; otherwise, if the current character is an 
// operator, pop the top two elements from the stack, evaluate them using the current 
// operator and push the result back into the stack. When all the expression characters 
// are processed, we will be left with only one element in the stack containing the value 
// of a postfix expression. 



// 15) 
// Reverse a string using a stack data structure 

// let str = "hello";
// let output = ''
// for(let i=str.length-1; i>=0; i--){
//     output = output+str[i]
// };
// console.log(output);



// 16) 
// Reverse a String with out using recursion 

// let str = "hello";
// let arr = [];
// for(let i of str){
//     arr.unshift(i)
// }
// console.log(arr.join(''));



// 17) 
// Logest Common Prefix (LCP) problem. 
// Write an efficient algorithm to find the longest common prefix (LCP) between a given 
// set of strings. 
// For example, 
// Input: technique, technician, technology, technical 
// Output: The longest common prefix is techn 
 
// Input: techie delight, tech, techie, technology, technical 
// Output: The longest common prefix is tech 



// let arr = ["techie delight", "tech", "techie", "technology", "technical" ];
// let arr = ["techniqyuell", "technicyianll", "technoylogyll", "techniycalll"]
// let checkarr = arr.splice(0,1)
// checkarr = checkarr[0];
// let count = 0
// let output = ''
// function recursion(ind, char){
//     if(ind<=checkarr.length-1){
//         for(let i of arr){
//             for(let j in i){
//                 if(j == ind && i[j] == char){
//                     count++;
//                     if(count == arr.length){
//                         output = output+char
//                         count=0
//                     }
//                 }
//             }
//         }
//       recursion(ind+1, checkarr[ind+1])
//     }else{
//     } 
// }
// recursion(0, checkarr[0]);
// let finaloutput = ""
// for(let i in checkarr){
//     for(let j in output){
//         if(i == j && checkarr[i] == output[j]){
//             finaloutput = finaloutput+checkarr[i]
//         }
//     }
// }
// console.log(finaloutput);


  


// 18) 
// Check if a linked list of Strings is palindromic ;

// let arr = ["AA", "XYZ", "CD", "C", "ZYX", "AA"]
//  (OR)
//   let arr = ["A", "B", "C", "DC", "B"]

// let str = arr.join('');
// let str1= arr.join('').split('').reverse().join('')
// if(str==str1){
//     console.log(str,"is palindrome");
// }else{
//     console.log(str, "is not a palidrome");
// }
//  ============================================ 




// 19) Generate binary numbers between 1 to n using a Queue 
// Generate binary numbers between 1 to `n` using a 
// queue 
// Given a positive number n , efficiently generate binary numbers between 1 and n using 
// the queue data structure in linear time. 
// For example, for n = 16 , the binary numbers are: 



// 1 10 11 100 101 110 111 1000 1001 1010 1011 1100 1101 1110 1111 10000;
let str = ''
for(let i=1; i<=3; i++){
    str = str+l



}





// 20) 
// Find the maximum occurring work in a given set of Strings;

// let str = "World most popular language is javascript and which is used 
//for the frontend development";
// str = str.split(' ');
// let obj = {}
// for(let i of str){
//     obj[i] = (obj[i]||0)+1;
// }
// let highest = Object.values(obj).sort((a,b)=>{
//     return b-a;
// })[0];
// for(let i in obj){
//     if(obj[i] === highest){
//         console.log(i);
//     }
// }



// 21) 
// Find Number of customers who could not get any computer 
// Given an integer representing the capacity of a cyber cafe and a sequence representing 
// entry/exit logs of customers, find the total number of customers who could not get any 
// computer. 
// The first occurrence in the given sequence indicates the arrival, and the second 
// occurrence indicates the departure for a customer. A customer cannot be serviced when 
// the cafe capacity is full (when all computers are allocated). 
 
// For example, 
// Input:
 
// sequence = “ABCDDCEFFEBGAG” 
// capacity = 3 
 
// Output: 2 (Customers ‘D’ and ‘F’ left unattended) 
 
 
// Input:
 
// sequence = “ABCDDCBEFFEGAG” 
// capacity = 2 
 
// Output: 3 (Customers ‘C’, ‘D’, and ‘F’ left unattended) 
// The idea is to traverse the given sequence and keep track of customers who are 
// currently inside the cyber cafe, irrespective of whether they have been allocated 
// computers or not. We also keep track of the customers who were allocated computers. 
// Now, two cases arise for each record: 
//  When a customer arrives at the cyber cafe, mark the customer as visited and 
// allocate a computer if available; if no computer is available, increment the count 
// of unattended customers. 
//  When a customer leaves the cafe, mark the customer as unvisited and deallocate 
// the computer. 

// let obj = {};
// let str = "ABCDDCEFFEBGAG";
// for(let i of str){
//     obj[i] = (obj[i]||0)+1
// }
// console.log(obj);


// 22) 
// Check if a string can be constructed from another 
// string 
// Given two strings, check if the second string can be constructed from characters of the 
// first string, where each character of the first string can be used only once in the second 
// string. 
// For example, 
// Input: first = abc, second = ab 
// Output: true 
 
// Input: first = ab, second = abb 
// Output: false 

// let first = "ab";
// let second = "abb" ;
// let obj = {}
// for(let i of second){
//    obj[i] = (obj[i]||0)+1;
// };
// let arr1 = []
// for(let i in obj){
//     if(first.includes(i) && obj[i]==1){
//         arr1.push(1)
//     }
// }
// if(arr1.length == second.length){
//     console.log(true);
// }else{
//     console.log(false);
// }



// 23) 
// Determine whether two strings are anagram or not 
// Given two strings, determine whether they are anagrams. 
// Any word that exactly reproduces the letters in another order is an anagram. In other 
// words, X and Y are anagrams if by rearranging the letters of X , we can get Y using all 
// the original letters of X exactly once. 
 
// For example, all these pairs are anagrams as lhs can be rearranged to rhs and vice-versa: 
// silent = listen 
// incest = insect 


// let str = "silent";
// let str1= "listen";
// let arr1 = []
// for(let i in str){
//     for(let j in str1){
//         if(str[i] == str1[j]){
//             arr1.push(1);   
//         }
//     }
// }
// if(arr1.length == str.length && arr1.length == str1.length){
//     console.log("Strings are anagrams");
// }else{
//     console.log("these are not anagrams");
// }