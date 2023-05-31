let arrayofObject = [{
                    "name": "venkat",
                    "age" : 26,
                    "salary": 20000
                    },
                    {
                        "name": "venkat",
                        "age" : 26,
                        "salary": 20000
                    },
                    {
                        "name": "vinay",
                        "age" : 26,
                        "salary": 34000
                    },
                    {
                        "name": "vinay",
                        "age" : 29,
                        "salary": 34000
                    },
                    {
                        "name": "vinay",
                        "age" : 26,
                        "salary": 34000
                    },
                    {
                        "name": "venkat",
                        "age" : 29,
                        "salary": 34000
                    }
]
let arr = [];
for(let i of arrayofObject ){
    for(let j in i){
        arr.push(i[j])
    }
}
let obj = {};
let arr1 = []
for(let i of arr){
    if(arr1.indexOf(i) == -1){
        obj[i] = []
    }
}
for(let i of arr){
    for(let j in obj){
        if(String(i) == j){
            obj[j].push(i)
        }
    }
}
let output= Object.values(obj)
console.log(output);







// let arr1 = [1, 1, 11, 2, 3 ];
// let arr2 = arr1.sort((a,b)=>{return a-b});
// let sum = 0;
// for(let i in arr2){
//     if(+i == 0 || +i == arr2.length-1){
//     }
//     else{
//         sum = sum + arr2[i]
//     }
// }
// console.log(sum);



// let data = [
//     {a: 'happy', b: 'robin', c: ['blue','green']},
//     {a: 'tired', b: 'panther', c: ['green','black','orange','blue']},
//     {a: 'sad', b: 'goldfish', c: ['green','red',{name: "age",arr:[1,2,3]}], e:{f:{g:["helo"]},h:[323]}}
// ]; 

// }
// a(data)
// function recursion(arr){
//   for(let i in arr){
//     if(Array.isArray(arr[i])){
//         console.log(arr[i]);
//     }else if(typeof arr[i] === 'object'){
//         recursion(arr[i])
//     }
//   }
// }
// recursion(data)
// console.log(arr1);



// let str = "aaabbbbccc";
// let obj = {};
// for(let i of str){
//     obj[i] = (obj[i] || 0) + 1;
// }
// let arr2 = Object.values(obj);
// let arr3= arr2.sort((a,b)=>{return b-a});
// for(let i in obj){    
//     if(arr3[0] == obj[i]){
//         console.log(i+ ' '+ arr3[0]);
//     }
// }



// let  str = "aaabbbbcccdddd"
// let str1= '';
// let obj = {}
// for(let i of str){
//     if(str1.indexOf(i) == -1){
//         obj[i] = '';
//     }
// }
// // console.log(obj);
// for(let i in obj){
//     for(let j of str){
//         if(i == j){
//             obj[i] = obj[i] +j;
//         }
//     }
// }
// let arrr = Object.values(obj);
// let output = arrr.sort((a,b)=>{return b.length-a.length})
// console.log(output.join(''));



// let str = "aaabbbbcccdddd";
// let arrr = str.split('');
// let arrrr = arrr.sort((a,b)=>{
// return b-a
// }).join('')
// console.log(arrrr);



// let input = 3
// let str = ""
// function rating(inputRating){
//   for(let i = 0; i<5; i++){
//       if(i<inputRating){
//         str = str + "*"
//       }
//       else{
//         str = str + '-'
//       }
//   }
// }
// rating(input)
// console.log(str);



//convert an two arrays into an object

// let arr = [1,2,3,4,5];
// let arr1 = [6,7,8,9,10];
// let obj = {};
// for(let i in arr){
//     for(let j in arr1){
//         if(i == j){
//             let value = arr[i];
//             obj[value] = arr1[j];
//         }
//     }
// }
// console.log(obj);