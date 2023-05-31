let emps=[];

function addemployee(){
    for(let x of emplist){
        let emp=new employee(x.eid,x.ename);
        emps.push(emp);
    
    }
console.log(emp)
document.getElementById("result").innerHTML=("employee details are added")
}
            
function listemployee(){
    for(let y of emps){
        console.log(y.eid+" "+y.ename+"<br>");

     
       document.getElementById("result1").innerHTML= y.eid+" "+y.ename+y.eid+" "+y.ename
    }
}
function emplistt(){
 console.log(emplist)
    }
