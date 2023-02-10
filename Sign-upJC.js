// declaring variables
const username = document.querySelector(".username")
let name = document.querySelector(".name")
let lastname = document.querySelector(".lastname")
let phone = document.querySelector(".phone")
let email = document.querySelector(".email")
let age = document.querySelector(".age")
let male = document.querySelector(".male")
let female = document.querySelector(".female")
let submit = document.querySelector(".submit")
let form = document.querySelector(".form-1")
let usernameSpan = document.querySelector(".username2")
let nameSpan = document.querySelector(".name2")
let lastnameSpan = document.querySelector(".lastname2")
let ageSpan = document.querySelector(".age2")
let emailSpan = document.querySelector(".email2")
let phoneSpan = document.querySelector(".number2")
let maleSpan = document.querySelector(".male2")
let femaleSpan = document.querySelector(".female2")
let premService = document.querySelector(".customerService")
// // object
function DataPerson() {
    this.name = name.value
    this.username = username.value
    this.lastname = lastname.value
    this.phone = phone.value
    this.email = email.value
    this.age = age.value
    this.male = male.checked
    this.female = female.checked
    this.premService = premService.checked
}
// setting into database
let save = []
    function localStorageView(obj){
        let strObj = obj
        save.push(strObj)
        let str = JSON.stringify(save)
        const local = localStorage.setItem("Database", str)
        return local
    }
// plugin
submit.addEventListener("click", function(e){
    const a = new DataPerson()
    if(a.name.length > 3 && a.lastname.length > 4 && a.email.indexOf("@") !== -1 && a.age > 15 && a.age < 100 && a.username.length > 3 && a.phone.indexOf("+374") !== -1){
        localStorageView(a)
        confirm("submitted")
    }  else {
        alert("Fill it correctly")

    }
        if(!a.female.checked && a.male.checked){
            a.female = false
            a.male = true
        } 
        else if(!a.male.checked && a.female.checked){
            a.female = true
            a.male = false
        }
        else {
            alert("false")
        }
e.preventDefault()
})