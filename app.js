const botonn = document.getElementsByClassName("menu__item");
const botones = document.getElementsByClassName("botones");

const change = () => {
    const tipo = document.getElementsByClassName("orbit-circle")[0];

    if(tipo.fill == "black"){
        tipo.fill = "white";
        
        
        document.getElementsByClassName("orbit-circle")[0].style.fill = "white";
        document.getElementsByClassName("half-circle")[0].style.fill = "white";
    
        document.getElementsByClassName("bola")[0].style.fill = "black";
        document.getElementsByClassName("bola")[0].style.stroke = "black";
        document.getElementsByClassName("bola")[1].style.fill = "black";
        document.getElementsByClassName("bola")[2].style.fill = "black";
        document.getElementsByClassName("bola")[3].style.fill = "black";
        document.getElementsByClassName("bola")[4].style.fill = "black";
        document.getElementsByClassName("bola")[5].style.fill = "black";
        document.getElementsByClassName("bola")[6].style.fill = "black";
        document.getElementsByClassName("bola")[7].style.fill = "black";

        document.getElementsByClassName("bola")[0].style.stroke = "black";
        document.getElementsByClassName("bola")[1].style.stroke = "black";
        document.getElementsByClassName("bola")[2].style.stroke = "black";
        document.getElementsByClassName("bola")[3].style.stroke = "black";
        document.getElementsByClassName("bola")[4].style.stroke = "black";
        document.getElementsByClassName("bola")[5].style.stroke = "black";
        document.getElementsByClassName("bola")[6].style.stroke = "black";
        document.getElementsByClassName("bola")[7].style.stroke = "black";

        document.getElementsByClassName("orbit-circle")[0].style.stroke = "white";
        
    } else {
        tipo.fill = "black";
        
        document.getElementsByClassName("orbit-circle")[0].style.fill = "black";
        document.getElementsByClassName("half-circle")[0].style.fill = "black";
    
        document.getElementsByClassName("bola")[0].style.fill = "white";
        document.getElementsByClassName("bola")[1].style.fill = "white";
        document.getElementsByClassName("bola")[2].style.fill = "white";
        document.getElementsByClassName("bola")[3].style.fill = "white";
        document.getElementsByClassName("bola")[4].style.fill = "white";
        document.getElementsByClassName("bola")[5].style.fill = "white";
        document.getElementsByClassName("bola")[6].style.fill = "white";
        document.getElementsByClassName("bola")[7].style.fill = "white";

        document.getElementsByClassName("bola")[0].style.stroke = "white";
        document.getElementsByClassName("bola")[1].style.stroke = "white";
        document.getElementsByClassName("bola")[2].style.stroke = "white";
        document.getElementsByClassName("bola")[3].style.stroke = "white";
        document.getElementsByClassName("bola")[4].style.stroke = "white";
        document.getElementsByClassName("bola")[5].style.stroke = "white";
        document.getElementsByClassName("bola")[6].style.stroke = "white";
        document.getElementsByClassName("bola")[7].style.stroke = "white";

        document.getElementsByClassName("orbit-circle")[0].style.stroke = "black";       
    }
}

const cambioUno = () =>{
        document.getElementsByClassName("orbit-circle")[0].style.fill = "white";
        document.getElementsByClassName("half-circle")[0].style.fill = "white";

        document.getElementsByClassName("bola")[0].style.fill = "white";
        document.getElementsByClassName("bola")[1].style.fill = "white";
        document.getElementsByClassName("bola")[2].style.fill = "white";
        document.getElementsByClassName("bola")[3].style.fill = "white";
        document.getElementsByClassName("bola")[4].style.fill = "white";
        document.getElementsByClassName("bola")[5].style.fill = "white";
        document.getElementsByClassName("bola")[6].style.fill = "white";
        document.getElementsByClassName("bola")[7].style.fill = "white";

        document.getElementsByClassName("bola")[0].style.stroke = "black";
        document.getElementsByClassName("bola")[1].style.stroke = "black";
        document.getElementsByClassName("bola")[2].style.stroke = "black";
        document.getElementsByClassName("bola")[3].style.stroke = "black";
        document.getElementsByClassName("bola")[4].style.stroke = "black";
        document.getElementsByClassName("bola")[5].style.stroke = "black";
        document.getElementsByClassName("bola")[6].style.stroke = "black";
        document.getElementsByClassName("bola")[7].style.stroke = "black";

        document.getElementsByClassName("orbit-circle")[0].style.stroke = "black";
}

const cambioDos = () =>{
        document.getElementsByClassName("orbit-circle")[0].style.fill = "white";
        document.getElementsByClassName("half-circle")[0].style.fill = "white";

        document.getElementsByClassName("bola")[0].style.fill = "#ffb457";
        document.getElementsByClassName("bola")[1].style.fill = "#ff96bd";
        document.getElementsByClassName("bola")[2].style.fill = "#9999fb";
        document.getElementsByClassName("bola")[3].style.fill = "#ffe797";
        document.getElementsByClassName("bola")[4].style.fill = "#cffff1";
        document.getElementsByClassName("bola")[5].style.fill = "#ccc157";
        document.getElementsByClassName("bola")[6].style.fill = "#ccf157";
        document.getElementsByClassName("bola")[7].style.fill = "white";

        document.getElementsByClassName("bola")[0].style.stroke = "black";
        document.getElementsByClassName("bola")[1].style.stroke = "black";
        document.getElementsByClassName("bola")[2].style.stroke = "black";
        document.getElementsByClassName("bola")[3].style.stroke = "black";
        document.getElementsByClassName("bola")[4].style.stroke = "black";
        document.getElementsByClassName("bola")[5].style.stroke = "black";
        document.getElementsByClassName("bola")[6].style.stroke = "black";
        document.getElementsByClassName("bola")[7].style.stroke = "black";

        document.getElementsByClassName("orbit-circle")[0].style.stroke = "gray";
}

const cambioTres = () =>{
        document.getElementsByClassName("orbit-circle")[0].style.fill = "black";
        document.getElementsByClassName("half-circle")[0].style.fill = "black";

        document.getElementsByClassName("bola")[0].style.fill = "#ffb457";
        document.getElementsByClassName("bola")[1].style.fill = "#ff96bd";
        document.getElementsByClassName("bola")[2].style.fill = "#9999fb";
        document.getElementsByClassName("bola")[3].style.fill = "#ffe797";
        document.getElementsByClassName("bola")[4].style.fill = "#cffff1";
        document.getElementsByClassName("bola")[5].style.fill = "#ccc157";
        document.getElementsByClassName("bola")[6].style.fill = "#ccf157";
        document.getElementsByClassName("bola")[7].style.fill = "white";

        document.getElementsByClassName("bola")[0].style.stroke = "black";
        document.getElementsByClassName("bola")[1].style.stroke = "black";
        document.getElementsByClassName("bola")[2].style.stroke = "black";
        document.getElementsByClassName("bola")[3].style.stroke = "black";
        document.getElementsByClassName("bola")[4].style.stroke = "black";
        document.getElementsByClassName("bola")[5].style.stroke = "black";
        document.getElementsByClassName("bola")[6].style.stroke = "black";
        document.getElementsByClassName("bola")[7].style.stroke = "black";

        document.getElementsByClassName("orbit-circle")[0].style.stroke = "white";
}

const cambioCuatro = () =>{
        document.getElementsByClassName("orbit-circle")[0].style.fill = "black";
        document.getElementsByClassName("half-circle")[0].style.fill = "black";

        document.getElementsByClassName("bola")[0].style.fill = "black";
        document.getElementsByClassName("bola")[1].style.fill = "black";
        document.getElementsByClassName("bola")[2].style.fill = "black";
        document.getElementsByClassName("bola")[3].style.fill = "black";
        document.getElementsByClassName("bola")[4].style.fill = "black";
        document.getElementsByClassName("bola")[5].style.fill = "black";
        document.getElementsByClassName("bola")[6].style.fill = "black";
        document.getElementsByClassName("bola")[7].style.fill = "black";

        document.getElementsByClassName("bola")[0].style.stroke = "white";
        document.getElementsByClassName("bola")[1].style.stroke = "white";
        document.getElementsByClassName("bola")[2].style.stroke = "white";
        document.getElementsByClassName("bola")[3].style.stroke = "white";
        document.getElementsByClassName("bola")[4].style.stroke = "white";
        document.getElementsByClassName("bola")[5].style.stroke = "white";
        document.getElementsByClassName("bola")[6].style.stroke = "white";
        document.getElementsByClassName("bola")[7].style.stroke = "white";

        document.getElementsByClassName("orbit-circle")[0].style.stroke = "white";
}

const cambioCinco = () =>{
        document.getElementsByClassName("orbit-circle")[0].style.fill = "black";
        document.getElementsByClassName("half-circle")[0].style.fill = "black";

        document.getElementsByClassName("bola")[0].style.fill = "white";
        document.getElementsByClassName("bola")[1].style.fill = "white";
        document.getElementsByClassName("bola")[2].style.fill = "white";
        document.getElementsByClassName("bola")[3].style.fill = "white";
        document.getElementsByClassName("bola")[4].style.fill = "white";
        document.getElementsByClassName("bola")[5].style.fill = "white";
        document.getElementsByClassName("bola")[6].style.fill = "white";
        document.getElementsByClassName("bola")[7].style.fill = "white";

        document.getElementsByClassName("bola")[0].style.stroke = "black";
        document.getElementsByClassName("bola")[1].style.stroke = "black";
        document.getElementsByClassName("bola")[2].style.stroke = "black";
        document.getElementsByClassName("bola")[3].style.stroke = "black";
        document.getElementsByClassName("bola")[4].style.stroke = "black";
        document.getElementsByClassName("bola")[6].style.stroke = "black";
        document.getElementsByClassName("bola")[5].style.stroke = "black";
        document.getElementsByClassName("bola")[7].style.stroke = "black";

        document.getElementsByClassName("orbit-circle")[0].style.stroke = "white";
}
 
botonn[0].addEventListener("click",() => {
    change()
})

botones[0].addEventListener("click",() => {
    cambioUno()
    })

botones[1].addEventListener("click",() => {
    cambioCuatro()
    })

botones[2].addEventListener("click",() => {
    cambioCinco()
    })

botones[3].addEventListener("click",() => {
    cambioDos()
    })

botones[4].addEventListener("click",() => {
    cambioTres()
    })

    










