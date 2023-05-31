// Given a list of words and a pattern, 
// find all words in the list that follows the same order of characters as that of the pattern.
// For example,
// Input:
// list = [leet, abcd, loot, geek, cool, for, peer, dear, seed, meet, noon, otto, mess, loss]
// pattern = moon (pattern is 4 digits with distinct character at first and last index, 
// and same character at 1st and 2nd index)
// Output: [leet, loot, geek, cool, peer, seed, meet]
// Input:
// list = [leet, abcd, loot, geek, cool, for, peer, dear, seed, meet, noon, otto, mess, loss]
// pattern = pqrs (pattern is 4 digits and has all distinct characters) 
// Output: [abcd, dear]


// let input_Array = ["leet", "abcd", "loot", "geek", "cool", "for", "peer", "dear", "seed", "meet", "noon", "otto", "mess", "loss"];
// let input_Pattern = "moon"
// let input_obj = {};
// for(let i of input_Pattern){
//     input_obj[i] = (input_obj[i] || 0)+1;
// };
// let Output_Array = []
// function recursion(ind){
//     let obj = {};
//     for(let i of input_Array[ind]){
//         obj[i] = (obj[i]||0)+1
//     }
//     let Input_Object_Values_Array = Object.values(input_obj);
//     let local_object_values = Object.values(obj);
//     let sameChar_from_inputOb_localObj = []
//     for(let i in Input_Object_Values_Array){
//         for(let j in local_object_values){
//             if(+i === +j && Input_Object_Values_Array[i] === local_object_values[j]){
//                 sameChar_from_inputOb_localObj.push(0)
//             }
//         }
//     }
//     if(sameChar_from_inputOb_localObj.length == Input_Object_Values_Array.length){
//         Output_Array.push(input_Array[ind])
//     };
//     if(ind<input_Array.length-1){
//         recursion(ind+1)
//     }else{
//         console.log(Output_Array);
//     }
// }
// recursion(0)


// let arr = [1,2,3,4,5,7,8,5,6,7,3];
// let arr = "CBAABCD"
// arr = arr.split('');
// let arr1
// let allPosible_array = []
// for(let i=0; i<arr.length;i++){
//     for(let j = i; j<arr.length; j++){
//          arr1 = [...arr]
//         let val = arr1.splice(i, j-i+1)
//         allPosible_array.push(val)
//     }
// }
// console.log(allPosible_array);
// for(let i of allPosible_array){
//     if(i.length === arr.length){
//         console.log(i.join(''));
//     }
// }
// let distinct_Values_Array = []
// function recursion(ind){
//     let SingleDistinct_Array = []
//     for(let i of allPosible_array[ind]){
//         if(SingleDistinct_Array.indexOf(i) == -1){
//             SingleDistinct_Array.push(i)
//         }
//     }
//     distinct_Values_Array.push(SingleDistinct_Array);
//     if(ind<allPosible_array.length-1){
//         recursion(ind+1)
//     }else{
//         // console.log(distinct_Values_Array);
//         distinct_Values_Array.sort((a,b)=>{
//             return b.length- a.length
//         });
//         console.log(distinct_Values_Array[0]);
//     }
// }
// recursion(0)


// CHALLENGE DESCRIPTION
// Write a program to in-place remove all extra spaces from a string. 
// There maybe leading spaces, trailing spaces, or consecutive spaces between words of the string.
// The solution should remove them and also handle punctuation marks.

// The idea is to iterate through the string’s characters and check if the current character is a 
// space, non-space character, or a punctuation mark. If it is a punctuation mark, any preceding 
// space, if present, is removed. If it is a space, remove it unless it just after a word or a
//  punctuation mark.


// let input_String = "h e l l o w o r l d";
// let output_string = "";
// for(let i of input_String){
//     if(i == " "){

//     }else{
//         output_string = output_string + i;
//     }
// }
// console.log(output_string);


// Given a huge set of words with duplicates present and a positive integer k, 
// find the first k–maximum occurring words in it.
// For example,
// Input:
// keys = [code, coder, coding, codable, codec, codecs, coded, codeless, codec, codecs, codependence, codex, codify, codependents, codes, code, 
//coder, codesign, codec, codeveloper, codrive, codec, codecs, codiscovered]
// k = 4
// Output:
 
// codec occurs 4 times
// codecs occurs 3 times
// code occurs 2 times
// coder occurs 2 times

// let input_keys = ["code", "coder", "coding", "codable", "codec", "codecs", "coded", "codeless", "codec", "codecs", "codependence", "codex", "codify", "codependents", "codes", "code", 
//     "coder", "codesign", "codec", "codeveloper", "codrive", "codec", "codecs", "codiscovered"];
// let input_k = 4;
// let input_object = {};
// for(let i of input_keys){
//     if(i.length>=input_k){
//         input_object[i] = (input_object[i]||0)+1;
//     }
// }
// let val = Object.values(input_object);
// val.sort((a,b)=>{
//     return b-a
// })
// let sorted_object = {};
//     for(let i of val){
//         for(let j in input_object){
//             if(i&&input_object[j]>1 &&i == input_object[j] ){
//                 sorted_object[j] = i;
//             }
//         }
//     }
// for(let i in sorted_object){
//     console.log(i, "occurs", sorted_object[i]);
// }



// Given a dictionary of words where each word follows a CamelCase notation, find all words in it 
// that matches a given pattern of all uppercase characters.
// CamelCase Notation is the practice of writing compound words or phrases joined without spaces, 
// where each word’s first letter is capitalized. For example, PowerPoint, LibreOffice, CinemaScope,
// etc., are in CamelCase.
// For example, consider the dictionary.
// dict = [Hi, HiTech, HiTechCity, Hello, HelloWorld, HiTechLab]
// If the pattern is HT, the output is [HiTech, HiTechCity, HiTechLab].
// If the pattern is HTC, the output is [HiTechCity].
// If the pattern is H, the output is the same as the input.
// We can use a Trie data structure to solve this problem. 
// The idea is to insert all uppercase characters of each word in the CamelCase dictionary into a
// Trie. In contrast, the complete word is stored in a container associated with the corresponding
// leaf node. After the complete dictionary is processed, traverse the Trie and find all words 
// that match the given pattern.

// let list_Of_Values = ["Hi", "HiTech", "HiTechCity", "Hello", "HelloWorld", "HiTechLab"];
// let input_String = "HTC";
// let matched_Word_array = list_Of_Values.filter((ele,ind)=>{
//     if(input_String.length>0){
//         let included_String_Sample_Num = []
//         for(let i of input_String){
//             if(ele.includes(i)){
//                 included_String_Sample_Num.push(0)
//             }
//         }
//         if(included_String_Sample_Num.length == input_String.length){
//             return ele
//         }
//     }
// })
// console.log(matched_Word_array);



// Given a set of strings, print all pairs of anagrams together. Two strings, X and Y, 
// are called anagrams if we can get a string Y by rearranging the letters of the string X and 
// using all the characters of the string X exactly once.
// For example, the following word pairs are anagrams since we can rearrange the first string to 
// get the second string and vice-versa. The problem requires the anagrams to be grouped.
//  (actors, costar)
//  (altered, related)
//  (auctioned, education)
//  (aspired, despair)
//  (mastering, streaming)
// In the previous post, we have discussed a solution using a hash table. In this post,
// we will cover the Trie-based solution. The idea is simple – construct an empty Trie and do the
// following for each word:
// Sort characters of the current word.
// Insert the sorted word into our Trie.
// Store the current unsorted word in the leaf node of the sorted word tree so that all anagrams 
// will end up at the same leaf node.
// Finally, traverse the Trie in a preorder fashion and print all anagrams together.

// let input_Array = [ 
//      ["actors", "costar"],
//      ["altered", "related"],
//      ["auctioned", "education"],
//      [ "aspired", "despair"],
//      ["mastering", "streaming"],
// ];
// let mutualLetter_Samp_val = []
// for(let i of input_Array){
//     for(let j in i[0]){
//         for(let k in i[1]){
//             if(i[0][j] == i[1][k]){
//                 mutualLetter_Samp_val.push(0);
//                 if(mutualLetter_Samp_val.length == i[0].length && mutualLetter_Samp_val.length == i[1].length){
//                     console.log(i[0], i[1], "both are anagrams");
//                     mutualLetter_Samp_val = []
//                 }else{
//                     console.log(i[0], i[1], "both are anagrams");
//                 } 
//             }
//         }
//     }
// }



// Given a string, find first k non-repeating characters in it by doing only a single traversal of it.
// For example, if the string is ABCDBAGHCHFAC and k = 3, output would be 'D', 'G', 'F'.
// A simple solution would be to store each character’s count in a map or an array by traversing 
// it once. Then traverse the string once more to find the first k characters having their count as
// 1. The time complexity of this solution is O(n) and requires O(n) extra space, where n is the 
// length of the input string. The problem with this solution is that we are traversing the string
// twice, violating the program constraints.
// We can solve this problem in a single traversal of the string. The idea is to use a map to store
// each distinct character count and the index of its first or last occurrence in the string. 
// Then traverse the map and push the index of all characters having count 1 into the min-heap.
// Finally, pop the top k keys from the min-heap, and that will be our first k non-repeating 
// characters in the string.

// let input_String = "ABCDBAGHCHFAC";
// let input_object = {};
// for(let i of input_String){
//     input_object[i] = (input_object[i]||0)+1;
// }
// let required_Count = 0;
// for(let i in input_object){
//     if(input_object[i]==1){
//         required_Count++
//         if(required_Count<=3){
//             console.log("non-repeating string is", i);
//         }
//     }
// }






// let array = ["BABCA","ABABC"];
// let input_object = {}
// let common_subString_array = []
// function recursion(ind){
//     for(let i=0; i<array[ind].length; i++){
//         for(let j=i; j<array[ind].length; j++){
//             if(j-i>=0){
//             let arr2 = []
//             let arr1 = [...array[ind]];
//             let val = arr1.splice(i,j-i+1);
//             arr2.push(val.join(''))
//             if(array[ind][array[ind].length-1]){
//                 input_object[arr2.join('')] = (input_object[arr2.join('')]||0)+1
//             }
//             }
//         }
//     }
//     if(ind<array.length-1){
//         recursion(ind+1)
//     }
// }
// recursion(0);
// for(let i in input_object){
//     if(input_object[i]>1){
//         common_subString_array.push(i)
//     }
// }
// common_subString_array.sort((a,b)=>{return b.length-a.length})
// console.log( "highest common substring is",common_subString_array[0]);

