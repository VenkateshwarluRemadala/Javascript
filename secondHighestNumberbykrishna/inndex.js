const arr = [1,2,3,4,6,22,11,99,2,1,3,4,6,11,22,99,108,108];
let arr1 = [];
arr.map((ele)=>{
    if(arr1.indexOf(ele) === -1){
            arr1.push(ele)
    }
})
let arr2 = arr1.sort((a,b)=>{return b-a})
console.log(arr2)

 


