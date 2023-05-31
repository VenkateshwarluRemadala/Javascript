//Create the unique otp for every name in the list.

let str = ["venkat", "vinay", "krishna", "kalyan", "raj"];
let arr = [];
for(let i of str){
    arr.push(Math.random())
}
let output = []
for(let i of arr){
      let str1= '';
      let str2 = String(i);
      let count = 0;
      for(let i = str2.length -1; i>=0; i--){
        count++
        if(count == 7){
            break
        }
        else{
            str1 = str1 + str2[i]
        }
      }
    output.push(+str1)
  
}





// const letterIndex = 35
// const letter = String.fromCharCode(letterIndex + 'A'.charCodeAt(0))

// console.log(letter)