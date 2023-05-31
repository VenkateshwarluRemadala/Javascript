
let str = "<p><a href='https://www.google.com'>abcd</a></p><p><a href='\www.w3schools.com'\>abcd</a></p><a href='\www.google.com'\>abcd</a>";
let str2 = str.split(' ')

let str3 = str2.map(ch=>{ if(!ch.includes('https://')){
    return  ch.replace("href='", "href='https://")
    }
    else{
        return ch
    }
})
console.log(str3.join(' '))
