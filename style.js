import { getIcon } from "./url.js"

export default function style(txt) {
    const tempNow = document.querySelector(".now");
    tempNow.innerHTML = "";
    tempNow.innerHTML += `<img src=${getIcon(txt.current.weather[0].icon)}> `
    tempNow.innerHTML += `<h1> ${txt.current.main.temp.toFixed()} &deg;C</h1>`
    tempNow.innerHTML += `<span class="location"> ${txt.city}, ${txt.country} </span>`

    const days = document.querySelectorAll(".infa");
    for (let i = 0; i < days.length; i++) {
        const element = days[i];
        element.innerHTML = "";
        const sborka = document.createElement("div")
        element.append(sborka)
        sborka.innerHTML += `<img class="min" src=${getIcon(txt.result[i].weather[0].icon)}>`
        sborka.innerHTML += `<span > ${new Date(txt.result[i].dt * 1000).toDateString().split(" ")[0]}</span>`

        element.innerHTML += `<span> ${txt.result[i].main.temp.toFixed()} &deg;C</span>`
    }
}




