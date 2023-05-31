let arr = [];
let evenNumbers = [];
let oddNumbers = [];
let numbers = 20;
for(let i = 1; i<=numbers; i++){
    arr.push(i)
}
for(let i of arr){
    if(i%2===0){
         document.getElementById('even').innerHTML = i;
        // evenNumbers.push(i);
    }
    else{
         document.getElementById('odd').innerHTML = i;
        // oddNumbers.push(i)
    }
}
console.log(evenNumbers);
console.log(oddNumbers);
// let a = 10;
// document.getElementById('one').innerHTML = a

