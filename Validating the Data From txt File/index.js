let js = require('fs')
js.readFile('text.txt', 'utf8', (err, data)=>{
    if(err){
        return;
    }
    console.log(data)
    console.log( data.length)

})