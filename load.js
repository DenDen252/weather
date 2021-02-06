import style from "./style.js";
import { getWeather } from "./url.js";



export default async function load(city) {
    const response = await fetch(getWeather(city));
    if (!response.ok) {
        const back = document.querySelector(".now")
        back.innerHTML = "ERROR 404"
        const days = document.querySelectorAll(".infa");
        for (let i = 0; i < days.length; i++) {
            const element = days[i];
            element.innerHTML = ""
            
        }
    }
    const serverData = await response.json();

    const result = serverData.list.filter(function (pot) {
        const timeString = pot.dt_txt.split(" ")[1];
        const hour = timeString.split(":")[0];
       
        return (hour == 12);
       
    }) 
    const b = {
            result,
            city: serverData.city.name,
            country: serverData.city.country,
            current: serverData.list[0],
        }
    style(b);
   
}




