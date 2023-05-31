let str = ")(())()(";
let openBracecounter = 0;
let closeBraceCount = 0;
for(let i in str){
     
    if(str[0] === ")"){

       break
    }else if(str[i] === "("){
        openBracecounter = openBracecounter +1
    }else if( str [i] === ")"){
        closeBraceCount = closeBraceCount +1
    }
   
}

if( openBracecounter === closeBraceCount && closeBraceCount!=0 && closeBraceCount!=0){
    console.log("you entered correct input")
}
else{
    console.log("you missed open or closed parenthesis")
}