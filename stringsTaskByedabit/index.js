// Create a function that takes a boolean variable flag and returns it as a string.
// input:true ➞ output:"true";
// input:false ➞ output:"false";

// let booleanvalue = true;
// let booleanvalue1 = false;
// let str = String(booleanvalue);
// console.log(typeof str);
// let str1 = String(booleanvalue1);
// console.log(typeof str1);

// Create a function that will handle simple math expressions. The input is an expression in the form of a string.
// Examples
// input:"23+4" ➞ output:27
// input:"45-15"➞ output:30
// input:"13+2-5*2" ➞: output:5
// input:"49/7*2-3" ➞ output:11

// let str = "23+4";
// let n = 19-10+100-2*7;
// let num = Number(str);
// console.log(num);
// let arrayofObject = [{
//     "name": "venkat",
//     "age": 26,
//     "salary": 20000
// },
// {
//     "name": "venkat",
//     "age": 26,
//     "salary": 20000
// },
// {
//     "name": "vinay",
//     "age": 26,
//     "salary": 34000
// },
// {
//     "name": "vinay",
//     "age": 29,
//     "salary": 34000
// },
// {
//     "name": "vinay",
//     "age": 26,
//     "salary": 34000
// },
// {
//     "name": "venkat",
//     "age": 29,
//     "salary": 34000
// }
// ];
// let values = [];
// let uniqueValusArray = [];
// for(let i of arrayofObject){
//     for(let j in i){
//         values.push(i[j]);
//     }
// }
// for(let i of values){
//     if(uniqueValusArray.indexOf(i) == -1){
//         uniqueValusArray.push(i)
//     }
// }
// let obj = {};
// for(let i of uniqueValusArray){
//    obj[i] = [];
// }
// for(let i of values){
//     for(let j in obj){
//         if(j==i){
//             obj[j].push(i)
//         }
//     }
// }
// for(let i in obj){
//     console.log(obj[i]);
// }



// write a program amd return true if string length is even and return false if the length is odd.
// let str = 'applesq';
// if(str.length%2===0){
//     console.log("true");
// }else{
//     console.log("false");
// }



// let number = 29348;
// let str = String(number);

// [1, 2, 3, "a", "s", "dAAAA"]) ➞ "123asdAAAA"
// let array = [1, 2, 3, "a", "s", "dAAAA"];
// console.log(array.join(''));

// boolToString(true) ➞ "true";
// boolToString(false) ➞ "false";
// let bool = true;
// let str = String(bool);
// console.log(str);
// console.log(typeof str);


// findIndex(["hi", "edabit", "fgh", "abc"], "fgh") ➞ 2;
// findIndex(["Red", "blue", "Blue", "Green"], "blue") ➞ 1;
// findIndex(["a", "g", "y", "d"], "d") ➞ 3;
// findIndex(["Pineapple", "Orange", "Grape", "Apple"], "Pineapple") ➞ 0;

// let array = ["hi", "edabit", "fgh", "abc"];
// let findIndexOfString = "fgh";
// for(let i in array){
//     if(array[i] === findIndexOfString){
//         console.log(i);
//     }
// }


// frontThree("Python") ➞ "PytPytPyt"

// frontThree("Cucumber") ➞ "CucCucCuc"

// frontThree("bioshock") ➞ "biobiobio"
// let newStr = '';
// let str = 'Python'
// let count = 0;
// let output = ''
// for(let i of str){
//      count++;
//      if(count >3){
//         break
//      }
//      else{
//         newStr = newStr + i;
//      }
// }
// let len = 3;
// for(let i=0; i<len; i++){
//     output = output+newStr;
// }
// console.log(output);


// let output1 = '';
// let str = "sravani julapalli from waramgal district";
// let arr = str.split(' ');
// for(let i in arr){
//    let value = arr[i]
//    if(i%2==0){
//     output1 = output1 + ' '+ value[value.length-1]
//    }else{
//     output1 = output1 + ' '+  value[0];
//    }
    
// }
// console.log(output1.trimStart());








