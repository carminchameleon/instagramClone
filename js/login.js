
let pwInput = document.querySelector(".pwInput")
let idInput = document.querySelector(".idInput")
let button = document.querySelector(".loginBtn")

pwInput.addEventListener("keydown",checkWriting)

function checkWriting(){
    let password = pwInput.value;
    let id = pwInput.value;
    if(password.length === id.length){
     changeColor()
    }
}

function changeColor(){
    console.log("theKEy")
    button.classList.remove("logOff");
    button.classList.contains("logOn");
}