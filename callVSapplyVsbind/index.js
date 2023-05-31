// let obj = {
//     name: "venkat",
//     age: 20,
//     person :function(a, b){
//         console.log(this.name +' '+ 'age is' +' ' + this.age+a,b);
//     }
// }
// obj.person.apply(obj, ["hello", "world"]);
// let obj1 = {
//     name: "manoj",
//     age: 35
// }
// obj.person.call(obj1, "cd", "cdc")

// function two(a){
//     console.log("world");
//     function one(){
//         console.log("two");
//     }
//     return one
// }
// let a =two();
// a();
let arr = [1,2,3,4,5];
arr.map((ele)=>{
    console.log(ele);
})

