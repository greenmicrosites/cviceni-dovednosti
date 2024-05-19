const doplnprocenta = (skill) => {
    
    const skillValueEl = document.querySelector(skill + " .skill__value")
    const ProgressEl = document.querySelector(skill + " .skill__progress")
    const skillbuttonEl = document.querySelector(skill + " button")

    skillbuttonEl.addEventListener('click', () => {
        const level = prompt("Zadej svoji úroveň dovedností v procentech:")
        if (level > 0 && level < 101) {
            skillValueEl.innerHTML = level + " / 100"
            ProgressEl.style.width = level + "%"
        } else {
           alert("v procentech!")
         }
     });
}

doplnprocenta("#skill1")
doplnprocenta("#skill2")
doplnprocenta("#skill3")
