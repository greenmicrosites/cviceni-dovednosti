// funkční, ale 3x to same

const HTMLskillValueEl = document.querySelector("#skill1 .skill__value")
const HTMLProgressEl = document.querySelector("#skill1 .skill__progress")
const HTMLskillbuttonEl = document.querySelector("#skill1 button")

HTMLskillbuttonEl.addEventListener('click', () => {
    const levelHTML = prompt("Zadej svoji úroveň dovedností v procentech:")
    if (levelHTML > 0 && levelHTML < 101) {
        HTMLskillValueEl.innerHTML = levelHTML + " / 100"
        HTMLProgressEl.style.width = levelHTML + "%"
    } else {
        alert("v procentech!")
    }
});

const CSSskillValueEl = document.querySelector("#skill2 .skill__value")
const CSSProgressEl = document.querySelector("#skill2 .skill__progress")
const CSSskillbuttonEl = document.querySelector("#skill2 button")

CSSskillbuttonEl.addEventListener('click', () => {
    const levelCSS = prompt("Zadej svoji úroveň dovedností v procentech:")
    if (levelCSS > 0 && levelCSS < 101) {
        CSSskillValueEl.innerHTML = levelCSS + " / 100"
        CSSProgressEl.style.width = levelCSS + "%"
    } else {
        alert("v procentech!")
    }
});

const JSskillValueEl = document.querySelector("#skill3 .skill__value")
const JSProgressEl = document.querySelector("#skill3 .skill__progress")
const JSskillbuttonEl = document.querySelector("#skill3 button")

JSskillbuttonEl.addEventListener('click', () => {
    const levelJS = prompt("Zadej svoji úroveň dovedností v procentech:")
    if (levelJS > 0 && levelJS < 101) {
        JSskillValueEl.innerHTML = levelJS + " / 100"
        JSProgressEl.style.width = levelJS + "%"
    } else {
        alert("v procentech!")
    }
});


//---------------- takhle bych to řešila :) ale něco mi tam nefunguje. asi bordel v uvozovkách? co s tím?

// const doplnprocenta = (skill) => {
//     const skillValueEl = document.querySelector(skill + ".skill__value")
//     const ProgressEl = document.querySelector(skill + ".skill__progress")
//     const skillbuttonEl = document.querySelector(skill + "button")

//     skillValueEl.innerHTML = "test"

//     skillbuttonEl.addEventListener('click', () => {
//         const level = prompt("Zadej svoji úroveň dovedností v procentech:")
//         if (level > 0 && level < 101) {
//             skillValueEl.innerHTML = level + " / 100"
//             ProgressEl.style.width = level + "%"
//         } else {
//            alert("v procentech!")
//          }
//      });
// }

// doplnprocenta("#skill1")
// doplnprocenta("#skill2")
// doplnprocenta("#skill3")

//----------------------------------------------------------------------------------------------------------
