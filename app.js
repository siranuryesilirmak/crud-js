const inputGroup = document.querySelector("#input-group")
const input1 = document.querySelector("#input1")
const input2 = document.querySelector("#input2")
const input3 = document.querySelector("#input3")

const listGroup = document.querySelector("#list-group")
let msg = document.getElementById("msg");

let persons = [
    {
        name: "ali",
        surname: "yılmaz",
        age:36
    },
    {
        name:"mehmet",
        surname:"çelik",
        age:23
    },
    {
        name: "fatma",
        surname: "kerten",
        age:42
    },
    {
        name: "melisa",
        surname: "doğan",
        age:18
    }
];


window.addEventListener("DOMContentLoaded", () => {     
    persons = JSON.parse(localStorage.getItem("persons")) || persons
    persons.forEach( person =>  personList(person))
})


const personList = (person) => {
        const item = document.createElement("li")
        item.classList.add("list-group-item")
        item.innerHTML=(`${person.name} ${person.surname} (${person.age})`)
        const btnDelete = document.createElement("button")
        const btnUpdate = document.createElement("button")
        btnDelete.classList.add("float-right", "border-0")
        btnUpdate.classList.add("float-right", "mr-2","border-0")
        btnUpdate.innerHTML="edit"
        btnDelete.innerHTML="&times;"
        item.append(btnDelete)
        item.append(btnUpdate)
        listGroup.append(item)
        localStorage.setItem("persons",JSON.stringify(persons))
        btnDelete.addEventListener("click", () => {
            persons.splice(person,1)
            localStorage.setItem("persons",JSON.stringify(persons))
            item.remove()
        })
        btnUpdate.addEventListener("click", () => {
            input1.value=person.name
            input2.value=person.surname
            input3.value=person.age
            persons.splice(person,1)
            localStorage.setItem("persons",JSON.stringify(persons))
            item.remove()
            
        })

        input1.value=""
        input2.value=""
        input3.value=""

}

let formValidation = () => {
    if(input1.value === "" || input2.value === "" || input3.value === ""){
        msg.innerHTML = "*boş bırakılamaz."
    }else if(!Number(input3.value)){
        msg.innerHTML = "*yaşınızı doğru giriniz."
    }else{
        createData()
        msg.innerHTML = "Kişi Eklendi."   
    }
  };

const createData = () => {
    let item = {name: input1.value, surname: input2.value, age: input3.value}
    personList(item)
    persons.push(item)
    localStorage.setItem("persons",JSON.stringify(persons))
}



 

    
   

  
