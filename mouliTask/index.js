// let arr = [
//     {age:1},{age:1},{age:1},{age:1},{age:1},{age:1},{age:1},{age:1},{age:1},{age:1},
//    {age:1},{age:1},{age:1},{age:1},{age:1},{age:1},{age:1},{age:1},{age:1},{age:1}
// ]
// set



//  let obj = {a:3, b:1, c:4, d:5}
// // output : obj = {b:1, a:3, c:4, d:5}
// let arr = Object.values(obj).sort((a,b)=>{return a-b});
// let output = {}; 
//     for(let j in arr){
//       for(let i in obj){
//         if(arr[j] == obj[i]){
//             output[i] = arr[j]
//         }
//     }
//     }

// console.log(output);



// Given an input string, reverse the string word by word, the first word will be the last, and so on.

// input: " the sky is blue";
// output: "blue is sky the";

// input:"hello   world!  ";
// output:"world! hello"

// input:"a good example"
// output: "example good a"


// let arr = [];
// let obj = {a:3, b:1, c:4, d:5}

// for(i in obj){
//     arr.push([i,obj[i]]);
// }
// console.log(arr);
// sorted = arr.sort((a,b) => {

//     return a[1]-b[1];

// });
// console.log(sorted);

// let fObj = {};

// arr.forEach(i => fObj[i[0]] = i[1]);

// console.log(fObj);
// input:["@", "@", "@", "@"];
// outpu:true;

// input:["abc", "abc", "abc", "abc"];
// output:true;

// input:["SS", "SS", "SS", "SS"];
// output:true;

// input:["&&", "&", "&&&", "&&&&"];
// output:false;

// input:["SS", "SS", "SS", "Ss"];
// output:false;



// let arr = ["abc", "abc", "abc", "abc"];;
// let arr1 = []
// for(let i of arr){
//     if(arr1.indexOf(i) == -1){
//         arr1.push(i)
//     }
// }
// if(arr1.length==1){
//     console.log(true);
// }else{
//     console.log(false);
// }



// input: " the sky is blue";
// output: "blue is sky the";

// input:"hello   world!  ";
// output:"world! hello"

// input:"a good example"
// output: "example good a"



// input: " the sky is blue";
// output: "blue is sky the";
// let str = "a good example";
// // console.log(str.length);
// let output = '';
// let arr = str.split(' ')
// for (let i = arr.length - 1; i >= 0; i--) {
//     // console.log(str[i]);
//     output = output + ' ' + arr[i]
// }
// console.log(output.trimStart());
let arr = [5,9,26,32,37]
for(let i of arr){
    let value = String(i);
    for(let j of value){
        if(j[j.length-1] =='6'){
            console.log("true");
        }
    }
}

