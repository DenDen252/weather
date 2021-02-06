export const clear = message => {
    const back = document.querySelector(".now")
        back.innerHTML = message;
        const days = document.querySelectorAll(".infa");
        for (let i = 0; i < days.length; i++) {
            const element = days[i];
            element.innerHTML = ""
            
        }
}