let arr = [         {"name":"manoj", "age":30},
                    {"name":"manoj", "age":30},
                    {"name":"manoj", "age":30},
                    {"name":"manoj", "age":30},
                    {"name":"venkat", "age":26},
                    {"name":"venkat", "age":26}
         ];
                    
                // {
                    //     manoj: { name: 'manoj', age: 30 },
                    //     venkat: { name: 'venkat', age: 26 }
                    //   }

let obj = {}
for(let i of arr){
    obj[i.name] = "name";
    obj[i.age] = "age"

}
// let arr1 = [];
// let arr2 = Object.keys(obj);
// let arr3 = Object.values(obj);
// for(let i in arr2){
//     for(let j in arr3){
//         if(i == j){
//             let obj1 = {};
//             obj1[arr3[j]] = arr2[i];
//             arr1.push(obj1)
//         }
//     }
// }
// console.log(arr1);


let arrr=[1,5,2,9,4,2,5,9,4,6,2]
let arr2 = [];
let arr3 = [];
for(let i of arrr){
    if(arr2.indexOf(i) == -1){
        arr2.push(i)
    }else{
        arr3.push(i)
    }
}
console.log(arr2);
console.log(arr3[arr3.length-1]);
// let obj3= {};
// for(let i of arrr){
//     obj3[i] = (obj3[i] || 0)+1
// }

//         for(let j=arrr.length; j>0; j--){
//             for(let i in obj3){
//                 if(obj3[i]>1 && arrr[j] == +i){
//                     console.log(i);
//                     return
//                 }
//             }
//         }
        
             
                      
    



