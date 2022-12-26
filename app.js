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
        listGroup.append(item)
        localStorage.setItem("persons",JSON.stringify(persons))
}

let formValidation = () => {
    if(input1.value === "" || input2.value === "" || input3.value === ""){
        msg.innerHTML = "*boş bırakılamaz."
    }else if(!Number(input3.value)){
        msg.innerHTML = "*yaşınızı doğru giriniz."
    }else{
        createData()
    }
  };

const createData = () => {
    let item = {name: input1.value, surname: input2.value, age: input3.value}
    personList(item)
    persons.push(item)
    localStorage.setItem("persons",JSON.stringify(persons))
}


 

    
   

  
