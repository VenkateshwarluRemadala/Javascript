const userCardTemplate = document.querySelector("[data-user-template]")
const userCardContainer = document.querySelector("[data-user-cards-container]")
const searchInput = document.querySelector("[data-search]")

let usersData =  [

    {

        "Header": "Component,Type, Value, Unit",

        "Index": 0,

        "Name": "Monitor All",
        "GraphEnabled":"NO"

    },

    {

        "GraphEnabled": "No",

        "Index": 1,

        "Name": "is CPU Throttling",

    },

    {

        "Header": "",

        "Index": 2,

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

searchInput.addEventListener("input", e => {
  const value = e.target.value.toLowerCase()
  users.forEach(user =>
     {
    // console.log(user.name)
    // console.log(user.header) 
    // console.log(user.email)
    // console.log(user.graphfield)
    // console.log(user)
    const isVisible =
     user.name.toLowerCase().includes(value) ||
    user?.graph?.toLowerCase().includes(value)
    user.element.classList.toggle("hide", !isVisible)
  }
    
  )
})

    users = usersData.map(user => {
      const card = userCardTemplate.content.cloneNode(true).children[0]
      const header = card.querySelector("[data-header]")
      const body = card.querySelector("[data-body]")
      const body1 = card.querySelector("[data-body1]")
      const body2 = card.querySelector("[data-body2]")
      header.textContent = user.Name
      body.textContent = user.Index
      body2.textContent = user.GraphEnabled
      body1.textContent = user.Header
     
      userCardContainer.append(card)
      return {name: user.Name, index: user.Index, graph: user.GraphEnabled, header: user.Header, element: card}
    })
  
