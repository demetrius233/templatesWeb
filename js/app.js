const btnBurger = document.querySelector(".menu-toggle")
const navegacion = document.querySelector("header .navegacion")



btnBurger.addEventListener("click", ()=>{
    navegacion.classList.toggle("menu-open")
})