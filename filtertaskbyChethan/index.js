let data = [

    {

        "Header": "Component,Type, Value, Unit",

        "Index": 0,

        "Name": "Monitor All",

    },

    {

        "GraphEnabled": "No",

        "Index": 1,

        "Name": "is CPU Throttling",

    },

    {

        "Header": "",

        "Index": 12,

        "Name": "CPU1",

    },

    {

        "GraphEnabled": "No",

        "Index": 14,

        "Name": "Frequency",

    },

    {

        "GraphEnabled": "No",

        "Index": 15,

        "Name": "DTS",

    },

    {

        "GraphEnabled": "No",

        "Index": 16,

        "Name": "Target PState Request Ratio",



    },

    {

        "GraphEnabled": "No",

        "Index": 17,

        "Name": "Current PState Ratio",

    },

    {

        "GraphEnabled": "No",

        "Index": 18,

        "Name": "Turbo Capability",

    },

    {

        "GraphEnabled": "No",

        "Index": 19,

        "Name": "SGX Support",

    },

    {

        "GraphEnabled": "No",

        "Index": 20,

        "Name": "CORE IPC",

    },

]
data.map(a=>console.log(a))


let names = data.map(a=>a.Name)
// console.log(names)
 document.getElementById('search-input').addEventListener('input', Filter);
 function Filter(){
    const searchInput = document.getElementById('search-input')
    const filter = searchInput.value.toLowerCase()
    console.log(filter)
    names.forEach((name)=>{
        
        if(name.toLowerCase().includes(filter.toLowerCase())){
        //  console.log(name)
        }
        else{
            // name.style.display = 'none'
        }
    })


 }
