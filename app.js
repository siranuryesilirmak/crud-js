const inputGroup = document.querySelector("#input-group")
const input1 = document.querySelector("#input1")
const input2 = document.querySelector("#input2")
const input3 = document.querySelector("#input3")
const listGroup = document.querySelector("#list-group")

fetch("/index.json").then(
    Response => {
        return Response.json()
    }).then((responseJSON) => {
        console.log(responseJSON)
        list(responseJSON)

    })


const list = (l) => {
    l.map((index) =>{
        const item = document.createElement("li")
        item.classList.add("list-group-item")
        item.innerHTML=(`${index.name} ${index.surname} (${index.age})`)
        listGroup.append(item)
    })
}



 

    
   

  
