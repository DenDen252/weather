import { clear } from "./clear.js";
import style from "./style.js";
import { getWeather } from "./url.js";



export default async function load(city) {
    const response = await fetch(getWeather(city));
    if (!response.ok) {
        clear("Error 404");
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




