// Given two strings, determine whether the first string can be transformed into the second string with a 
// single edit operation. An edit operation can insert, remove, or replace a character in the first string.
// For example,
// Input:  xyz —> xz
// Output: True
// Explanation: The total number of edits required is 1 (remove y from the first string)
// Input:  xyz —> xyyz
// Output: True
// Explanation: The total number of edits required is 1 (add y in the first string)
// Input:  xyz —> xyx
// Output: True
// Explanation: The total number of edits required is 1 (replace z in the first string by x)
// Input:  xyz —> xxx
// Output: False
// Explanation: The total number of edits required are 2 (replace y and z in the first string by x) 
// Input:  xyz —> xyz
// Output: False
// Explanation: The total number of edits required is 0 (both strings are the same)


// let input_String1 = "xyz";
// let input_String2 = "xyz";
// let number_of_edits_comparision = 0;
// if(input_String2.length+1 == input_String1.length || input_String2.length-1 == input_String1.length){
//     console.log(true);
// }else if(input_String1.length == input_String2.length){
//     for(let i in input_String1){
//         for(let j in input_String2){
//             if(+i == +j && input_String1[i] == input_String2[j]){
//                 number_of_edits_comparision = number_of_edits_comparision+1;
//             }
//         }
//     };
//     if(number_of_edits_comparision == 2){
//         console.log(true);
//     }else{
//         console.log(false);
//     }
// }



// Given a list of words, efficiently group all anagrams.
// The two strings, X and Y, are anagrams if by rearranging X's letters, we can get Y using all the 
// original letters of X exactly once. For example, all these pairs are anagrams as lhs can be rearranged to 
// rhs and vice-versa.
// actors = costar
// altered = related
// auctioned = education
// aspired = despair
// mastering = streaming
// recurd = secured
// The problem requires the anagrams to be grouped together. For example,
// Input:
// [CARS, REPAID, DUES, NOSE, SIGNED, LANE, PAIRED, ARCS, GRAB, USED, ONES, BRAG, SUED, LEAN, SCAR, DESIGN]
// Output:
// GRAB BRAG
// CARS ARCS SCAR
// REPAID PAIRED
// LANE LEAN
// SIGNED DESIGN
// DUES USED SUED
// NOSE ONES

// let input_StringElements_array = ["CARS", "REPAID", "DUES", "NOSE", "SIGNED", "LANE", "PAIRED", "ARCS", "GRAB", "USED", 
// "ONES", "BRAG", "SUED", "LEAN", "SCAR", "DESIGN"];
// let anagrams_group_Array = []

// function recursion(ind){
//     for(let i of input_StringElements_array){
//         if(i.length == input_StringElements_array[ind].length){
//             let count = 0;
//             for(let j in i){
//                 for(let k in input_StringElements_array[ind]){
//                     if(i[j] == input_StringElements_array[ind][k]){
//                         count = count+1
//                     }
//                 }
//             }
//             if(count == i.length){
//                 anagrams_group_Array.push(i)  
//             }else{
//                 count = 0
//             }

//         }
//     }
//     console.log(anagrams_group_Array, "these are group of anagrams ");
//     anagrams_group_Array = []
//     if(ind<input_StringElements_array.length-1){
//         recursion(ind+1)
//     }
// }
// recursion(0)




// The Longest Palindromic Subsequence (LPS) problem is finding the longest subsequences of a string that is also
//  a palindrome.
// The problem differs from the problem of finding the longest palindromic substring. Unlike substrings, 
// subsequences are not required to occupy consecutive positions within the original string. 
// For example, consider the sequence ABBDCACB.
// The length of the longest palindromic subsequence is 5
// The longest palindromic subsequence is BCACB
// The idea is to use recursion to solve this problem. The idea is to compare the last character of the string
//  X[i…j] with its first character. There are two possibilities:
// If the string’s last character is the same as the first character, include the first and last characters 
// in palindrome and recur for the remaining substring X[i+1, j-1].
// If the last character of the string is different from the first character, return the maximum of the two values
//  we get by
// Removing the last character and recursing for the remaining substring X[i, j-1].
// Removing the first character and recursing for the remaining substring X[i+1, j].
// This yields the following recursive relation to finding the length of the longest repeated subsequence of a
//  sequence X:

//            | 1                                 (if i = j)
// LPS[i…j] = | LPS[i+1…j-1] + 2                  (if X[i] = X[j])
//            | max (LPS[i+1…j], LPS[i…j-1])      (if X[i] != X[j])
// The algorithm can be implemented as follows in C++, Java, and Python. The solution finds the length of
//  the longest repeated subsequence of sequence X recursively using the above relations.



// let input_String = "xyxzwxxyz";
// let total_palindrome_array = []
// function recursion(start, depth, subStr){
//     for(let i=start; i<input_String.length; i++){
//       let  formedStr = subStr + input_String[i]
//         if(depth>0){
//             recursion(i+1, depth-1, formedStr)
//         }
//         else{
//             if(formedStr == formedStr.split('').reverse().join('') && total_palindrome_array.indexOf(formedStr) == -1){
//                 total_palindrome_array.push(formedStr)
//             }
//         }
//     } 
// }
// for(let i=0; i<input_String.length; i++){
//     recursion(0, i, "")
// };
// console.log(total_palindrome_array);
// console.log("Highest length palindrome is", total_palindrome_array.sort((a,b)=>{
// return b.length-a.length})[0]);


