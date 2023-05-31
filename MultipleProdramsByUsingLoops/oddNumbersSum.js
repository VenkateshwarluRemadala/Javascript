let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let oddNumbersSum = 0;
for(let i of array){
    if(i%2 !== 0){  
        oddNumbersSum = oddNumbersSum+i
    }
}
console.log(oddNumbersSum);