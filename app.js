const botonn = document.getElementsByClassName("menu__item");
const circle = document.getElementsByClassName("orbit-circle");
const CirculoBlanco = document.getElementById("circle-white")

const Botonaso = document.getElementById("botonDePrueba");


const escribir = () => {
    console.log("Hola")
}

const cambiarColor = () => {
    circle = document.getElementsByClassName("orbit-circle").style.fill("black");
}

botonn[0].addEventListener("click",() => {
    escribir()

})










