// let  a = [
//     {   name: "maonoj", 
//         group: [{ name: "vetntkat" },
//                 { name: "mouooli" }, 
//                 { name: "sai", group: [{name: "Heoollo"}, {name: "Helolo1"}]}
//                ]
//     }
// ];
// let str = '';
// function recursion(arr) {
//     for (let i in arr) {
//         if (typeof arr[i] === 'object') {
//             recursion(arr[i])
//         }
//         else {
//             str = str + arr[i] + ' ';
//         }
//     }
// }
// recursion(a);
// let arr = str.split(' ');
// let count = 0;
// let output = '';
// for(let i of arr){
//     if(i.includes('o')){
//         for(let j of i){
//             if(j === 'o'){
//                 count++;
//                 if(count == 1){
//                     output = output + j;                
//                 }
//             }
//             else{
//                 output = output + j;
//             }
//         }
//         output = output +  ' ';
//     }
//     else if(i.includes('t')){
//         for(let j of i){
//             if(j === 't'){
//                 count++;
//                 if(count == 1){
//                     output = output + j;               
//                 }               
//             }       
//             else{
//                 output = output + j;
//             }
//         }
//         output = output + ' ';
//     }
//     else{
//         output = output + i + ' ';
//     } 
//     count = 0;
// };
// console.log(output.trimEnd().split(' '));



let a = {name:"venkat", age:25, degree:"EbBdnksbfjdfjhkjdhjdh.BEE"};
let degreesArray = ["B.E", "B.TECH", "B.COM", "BSC", "MSC", "M.COM"];
let output = []
let str = '';
for(let i of a.degree){
    if(i == i.toUpperCase() || i == '.'){
        str = str + i;
    }

}
for(let i of str){
    if(output.indexOf(i) == -1){
        output.push(i)
    }
}
let degree = output.join('');
let finalDegree = degreesArray.find((ele)=>{
    if(ele == degree ){
        return degree
    }
})
 console.log(finalDegree);
















