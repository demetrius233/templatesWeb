const contObjetivos = document.querySelector(".objetivos")
const articles = contObjetivos.querySelectorAll("article")

const header = document.querySelector("header")

const bpObjetivos = matchMedia("(min-width: 992px)")

console.log(bpObjetivos)

const toTop =  contObjetivos.getBoundingClientRect().top + 200
 
let indicadorScroll = 0
//EL EFECTO DE SCROLL EN LOS OBJETIVOS SOLO SE HARÁ EN UN MINIMO DE 992PX
if (bpObjetivos.matches) {

    document.addEventListener("scroll", ()=>{

        if (scrollY >= toTop) {

            header.classList.remove("fadeDown") 

            //AGREGANDO LA ANIMACION DE FADEUP AL HEADER 
            header.classList.add("fadeUp") 

            //AGREGANDO LAS ANIMACIONES A CADA UNO DE LOS ARTICULOS, CON UN DELAY DIFERENTE
            articles.forEach((ar, index) => {
                ar.classList.add("fadeLeft")
                ar.style.animationDelay = `${index * 0.3}s`
            })

            indicadorScroll = 1
        } else{
            
            if (indicadorScroll) {
                header.classList.remove("fadeUp") 
    
                header.classList.add("fadeDown")
            }
        } 

        
 
    })
}
