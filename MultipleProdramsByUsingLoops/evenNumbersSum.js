let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let evenNumbersSum = 0;
for(let i of array){
    if(i%2 === 0){
        evenNumbersSum = evenNumbersSum+i;
    }   
}
console.log(evenNumbersSum);
