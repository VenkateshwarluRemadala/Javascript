let a = [
    {   name: "manoj", 
        group: [{ name: "venkat" }, 
                { name: "mouli" }, 
                { name: "sai", group: [{ name: "Hello" }, { name: "Hello1" }] 
                }] 
    }
];
//output: [ 'manj', 'venka', 'muli', 'sai', 'Hell', 'Hell1' ];
let arr1 = [];
let str = '';
let str1 = '';
let finalOutputArray;
function recursion(arr) {
    for (let i in arr) {
        if (typeof arr[i] === 'object') {
            recursion(arr[i])
        }
        else {
            str = str + arr[i] + ' ';
        }
    }
}
recursion(a);
for (let i of str) {
    if (i === 'o' || i === 't') {
    } else {
        str1 = str1 + i;
    }
}
finalOutputArray = str1.trimEnd().split(' ')
console.log(finalOutputArray);











