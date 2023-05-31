//Task is given by Venkata Ravindranath Gundugola.

let number = 3;
let str = ''
for(let i=0; i<100; i++){
    str = str + String(Math.random())[2]
    if(i == 19 ||i == 39 || i == 59 || i == 79){
        str = str + ','
    };
}
// console.log(str);
// console.log(str.length);
let count = 0;
if(number == 1){
    str.split(',').forEach(ele=>{
        let str = ''
        for(let i in ele){
            if(+i == 0 || +i == 4 || +i == 9 || +i == 10 +i ==14 ||+i == 19 ){
                str = str + '1'
            }else{
                str = str + ele[i]
            }
        }
        console.log(str);
    })

}else{
    str.split(',').forEach(ele=>{
    let str = ''
    for(let i in ele){
        if(+i == 0 ){
            count++
            let value = number *count;
            if(value <= 9){
                str = str + value
            }
            else if(value > 9){
               count =1;
               value = number * count;
               str = str + value;
            }
        }else if(+i == 4){
            count++
            let value = number *count;
            if(value <= 9){
                str = str + value
            }
            else if(value > 9){
               count =1;
               value = number * count;
               str = str + value;
            }
        }else if(+i == 9){
            count++
            let value = number *count;
            if(value <= 9){
                str = str + value
            }
            else if(value > 9){
               count =1;
               value = number * count;
               str = str + value;
            }
        }else if(+i == 10){
            count++
            let value = number *count;
            if(value <= 9){
                str = str + value
            }
            else if(value > 9){
               count =1;
               value = number * count;
               str = str + value;
            }
        }else if(+i == 14){
            count++
            let value = number *count;
            if(value <= 9){
                str = str + value
            }
            else if(value > 9){
               count =1;
               value = number * count;
               str = str + value;
            }
        }else if(+i == 19){
            count++
            let value = number *count;
            if(value <= 9){
                str = str + value
            }
            else if(value > 9){
               count =1;
               value = number * count;
               str = str + value;
            }
        }else{
            str = str + ele[i]
        }
    }
    console.log(str);
})
}
