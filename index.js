import load from "./load.js";
const input = document.querySelector("input")
input.addEventListener("keypress", keyPressHandler )



load("minsk")

function keyPressHandler(event){
    if (event.key!="Enter") {
        return
    }
   
    load (event.target.value)
}
