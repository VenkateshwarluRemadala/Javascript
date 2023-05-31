// Given a simple sentence and a set of syntax rules, validate if it is syntactically correct or not.
// Assume that a sentence is syntactically correct if it fulfills the following rules:
// A sentence must start with an uppercase character.
// There must be spaces between words.
// Then the sentence must end with a full stop (.).
// Two continuous spaces are not allowed.
// Two continuous uppercase characters are not allowed.
// However, the sentence can end after an uppercase character.
// For example,
// “This sentence is syntactically correct."
// “This sentence is syntactically incorrect as two continuous spaces are not allowed.”
// “This sentence is syntactically correct Y.”
// “This sentence is syntactically incorRect as uppercase character is not allowed midway of the string.”
// “THis sentence is syntactically incorrect as two continuous uppercase characters are not allowed.”
// “This sentence is syntactically incorrect as it doesn’t end with a full stop”


// let str = "This sentence is syntactically correct Y."
// let check = []
// if(str[0].toUpperCase() == str[0] && str[str.length-1] == '.'){
//     str = str.split(' ');
//     if(str.length>1){
//         for(let i of str){
//            if(i == ""){
//             console.log("this sentence is sythetically is not correct because two continuous spaces");
//             return
//            }else{
//                for(let j in i){
//                   if(+j>1 && i[j] == i[j].toUpperCase() && i[j] !=='.'){
//                     // console.log(i[j]);
//                     console.log("this sentence is sythetically is not correct");
//                     return
//                   }; 
//                } 
//            }
//            check.push(0)
//         }
//     }
//     if(str.length == check.length){
//         console.log("this sentance is correct");
//     }  
// }
// else{
//     console.log("this sentence is sythetically is not correct because you"+
//     " sentace does not having dot or uppercase in the starting");
// }


// Given a string and a pattern (having all distinct characters), determine whether the string characters
// follow a specific order as defined by the pattern’s characters.
// For example,
// Input:
// word = Techie Delight
// pattern = el
// Output: Pattern found
// The pattern characters follow the order [e, e, e, l] in the input string. Note that all e’s appear before l.
// Input:
// word = Techie Delight
// pattern = ei
// Output: Pattern not found
// The pattern characters follow the order [e, i, e, e, i] in the input string. Note that all e’s doesn’t appear 
// before all i’s.
// Practice This Problem
// The idea is to loop through all characters of the pattern. If at any point, the last occurrence of the previous
// encountered character is after the first occurrence of the current character in the input string, we can say 
// that the string doesn’t follow the order defined by the pattern.

// let input_String = "Techie Delight";
// let input_Pettern = "el";
// let pattern_String_Array = [];
// for(let i of input_String){
//     for(let j of input_Pettern){
//         if(i == j){
//             pattern_String_Array.push(i)
//         }
//     }
// }
// let pattern_String = []
// for(let i in pattern_String_Array){
//     if(pattern_String_Array[i] == pattern_String_Array[+i+1]){

//     }else if(pattern_String_Array[i] != pattern_String_Array[+i+1]){
//         pattern_String.push(pattern_String_Array[i])
//     }
// }
// pattern_String = pattern_String.join('')
// if(pattern_String == input_Pettern){
//     console.log("pattern found");
// }else{
//     console.log("pattern not found");
// }


// Given a string and a pattern, in-place replace all non-overlapping occurrences of the pattern in the 
//string by a specified character.
// 1ST VARIANT: REPLACE EACH OCCURRENCE OF THE PATTERN
// Input:
// String = “ABCABCXABC”;
// Pattern = “ABC”;
// Character = ‘@’;
// Output: @@X@;

// let input_String = "ABCABCXABC";
// input_String = input_String.split("ABC");
// let required_Output_String = '';
// for(let i of input_String){
//     if(i == ""){
//         required_Output_String = required_Output_String+'@'
//     }else{
//         required_Output_String = required_Output_String +i;
//     }
// }
// console.log(required_Output_String);



// Given an integer array, check if it contains a subarray having zero-sum.
// For example,
// Input:  { 3, 4, -7, 3, 1, 3, 1, -4, -2, -2 }
// Output: Subarray with zero-sum exists
// The subarrays with a sum of 0 are:
// { 3, 4, -7 }
// { 4, -7, 3 }
// { -7, 3, 1, 3 }
// { 3, 1, -4 }
// { 3, 1, 3, 1, -4, -2, -2 }
// { 3, 4, -7, 3, 1, 3, 1, -4, -2, -2 }


// let arr = [3, 4, -7, 3, 1, 3, 1, -4, -2, -2]
// for(let i=0;i<arr.length;i++){
//     let prefix=0;
//     for(let j=i;j<arr.length;j++){
//         prefix += arr[j];
//         if(prefix == 0){
//             let arr1 = [...arr];
//             let val = arr1.splice(i,j-i+1);
//             console.log("array which are having the sum zero is",val);
//         }
//    }
// }
let input_String = "talent";
let number_Roattions = 2;
let expetcted_output = ""
function rotate(str, rotations){
    str = str.split('');
    if(str == null){
        return str
    }
    if(rotations<=0){
        return str
    }else if(rotations == str.length){
        return str
    }else{
        let val = str.splice(input_String.length-rotations,rotations+1);
        expetcted_output = expetcted_output + val.join('') + str.join('')
        return expetcted_output

    }
}
console.log(rotate(input_String,number_Roattions));



