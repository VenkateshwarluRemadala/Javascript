// get the name and age values if object having name property and age property then only we need to get.

// let a = [{
//     name: "abc",
//     age: 3,
//     danger: {},
//     subject: [
//         { name: "def",
//           age: 4,
//           data: [
//             { name: "fgh",
//               age: 5
//             }, 
//             {
//                name: 'sir'
//             }]
//         }]

// }]
requiredArray = [];
// It is preferd way of doing.
function recursion(obj){
    for(let i in obj){
       let value = obj[i]
       if(typeof value === "object"){
           recursion(value)
       }
    }
    if(obj.age !== undefined && obj.name !== undefined){
           requiredArray.push(obj.name);
           requiredArray.push(obj.age)

       }
}
recursion(a)
console.log(requiredArray)

// it is not preferd way.
// a.map((obj)=>{
//        if(typeof obj === "object"){
       
//          for(let i in obj){
//             let value = obj[i];
//             if(typeof value === "object"){
//                      for(let j in value) {
//                                 let value1 = value[j]
//                                 if(typeof value1 === "object"){      
//                                     for(let k in value1){
//                                          let  value2 = value1[k]
//                                           if(typeof value2 === "object"){  
//                                             let value3 = value2[0];
//                                              for(let k in value3){
//                                                  requiredArray.push(value3[k])
//                                              }
//                                           }
//                                           else{
//                                             requiredArray.push(value2)
//                                           }
//                                     }
//                                 }
//                                 else{
//                                     requiredArray.push(value1)
//                                 }
//                     }
//             }else{
//                 requiredArray.push(value)
//             }
//         }
//         }
//         else{
//             requiredArray.push(obj)
//         }  
// })
// console.log(requiredArray)
