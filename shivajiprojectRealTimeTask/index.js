// let data = [{
//     name: "apples",
//     color: "red"
//   },
//   {
//     name: "apples",
//     color: "red"
//   },
//   {
//     name: "apples",
//     color: "yellow"
//   },
//   {
//     name: "mango",
//     color: "red"
//   },
//   {
//     name: "mango",
//     color: "red"
//   },
//   {
//     name: "mango",
//     color: "red"
//   }
// ];

//  output = [
//   {
//     name: "apples",
//     red: 2,
//     yellow: 1
//   },
//   {
//     name: "mango",
//     red: 3
//   }
// ]




// let obj = {};
// let output_array = []
// for(let i of data){
//     obj[i.name] = (obj[i.name]||[]);
//     obj[i.name].push(i.color)
// }
// for(let i in obj){
//     let countObj = {}
//     for(let j of obj[i]){
//         countObj["name"] = i;
//         countObj[j] = (countObj[j]||0)+1
//     }
//     output_array.push(countObj)
// }
// console.log(output_array);






// let data=[
//     { Name:"human", gender:"male" },
//     { Name:"human", gender:"female" },
//     { Name:"human", gender:"female" },
//     { Name:"human", gender:"female" },
//     { Name:"animal", gender:"female" }, 
//     { Name:"animal", gender:"female" } 
// ]


//     let obj= {};
//     let obj1 = {}
//     for(let i of data){
//         obj1[i.Name] = (obj1[i.Name]||0)+1
//         obj[i.Name+' '+ i.gender] = (obj[i.Name+" "+i.gender]||0)+1;
//     }
//     console.log(obj, obj1);
//     for(let i in obj){
//         for(let j in obj1){
//             if(i.includes(j)){
//               console.log( i+" "+"percentage is" , 100/obj1[j]*obj[i]+"%");
//             }
//         }
//     }










