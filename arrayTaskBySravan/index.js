let names = ["sravan@53ojas","venky@55ojas","xyz@jas"];
let requirednames = [];

for( let i of names){
let name = "";
    for (let j of i){
    
        if(j === "@"){
            break
            
        }
        else{
            name = name + j
        }
        
    } 
    
   requirednames.push(name)
}
console.log(requirednames)

