
let arr = [{
    name: "fds",
    mag: [{
        hi: "dsf",
        gg: [
            {
                pap1: 30
            },
            {
                pap2: 40
            }
        ]
    }]
}]

function recursion(arrparameter){
    
     for(let i in arrparameter){
        // console.log(i)
        let value = arrparameter[i]
        if(typeof value === "object"){
            recursion(value)
        }    
        else
        if(arrparameter.pap1 !== undefined){
            console.log(arrparameter.pap1)
        }
        else
        if(arrparameter.pap2 !== undefined){
            console.log(arrparameter.pap2)
        }  
    }
}
recursion(arr)

