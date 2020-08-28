const plantillas = document.querySelectorAll(".plantillas-box")
const plantillasTop = document.querySelector(".trabajos").getBoundingClientRect().top - 100


plantillas.forEach((plantilla, index) => {
     document.addEventListener("scroll", ()=>{
         if (scrollY >= plantillasTop) {
             plantilla.classList.add("fadeLeft")
             plantilla.style.animationDelay = `${index * 0.30}s`
         }
     })
})
console.log(plantillasTop)