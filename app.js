const botonn = document.getElementsByClassName("menu__item");
const botones = document.getElementsByClassName("botones");

const change = () => {
    const tipo = document.getElementsByClassName("orbit-circle")[0];

    if(tipo.fill == "black"){
        tipo.fill = "white";
        
        
        document.getElementsByClassName("orbit-circle")[0].style.fill = "white";
        document.getElementsByClassName("half-circle")[0].style.fill = "white";
    
        document.getElementsByClassName("bola")[0].style.fill = "black";
        document.getElementsByClassName("bola")[1].style.fill = "black";
        document.getElementsByClassName("bola")[2].style.fill = "black";
        document.getElementsByClassName("bola")[3].style.fill = "black";
        document.getElementsByClassName("bola")[4].style.fill = "black";
        document.getElementsByClassName("bola")[5].style.fill = "black";
        document.getElementsByClassName("bola")[6].style.fill = "black";
        document.getElementsByClassName("bola")[7].style.fill = "black";

        document.getElementsByClassName("bola")[8].style.fill = "black";

        // document.getElementsByClassName("bola")[0].style.stroke = "black";
        // document.getElementsByClassName("bola")[1].style.stroke = "black";
        // document.getElementsByClassName("bola")[2].style.stroke = "black";
        // document.getElementsByClassName("bola")[3].style.stroke = "black";
        // document.getElementsByClassName("bola")[4].style.stroke = "black";
        // document.getElementsByClassName("bola")[5].style.stroke = "black";
        // document.getElementsByClassName("bola")[6].style.stroke = "black";
        // document.getElementsByClassName("bola")[7].style.stroke = "black";


        document.getElementsByClassName("orbit-circle")[0].style.stroke = "black";
        
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

        document.getElementsByClassName("bola")[8].style.fill = "white";
    document.getElementsByClassName("bola")[8].style.stroke = "white";

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

        document.getElementsByClassName("bola")[8].style.fill = "white";
    document.getElementsByClassName("bola")[8].style.stroke = "black";
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

        document.getElementsByClassName("bola")[8].style.fill = "#fce797";
    document.getElementsByClassName("bola")[8].style.stroke = "black";

        

        document.getElementsByClassName("orbit-circle")[0].style.stroke = "black";
}

const cambioTres = () =>{
        document.getElementsByClassName("orbit-circle")[0].style.fill = "#EAFAF1";
        document.getElementsByClassName("half-circle")[0].style.fill = "#EAFAF1";

        document.getElementsByClassName("bola")[0].style.fill = "#186A3B";
        document.getElementsByClassName("bola")[1].style.fill = "#1D8348";
        document.getElementsByClassName("bola")[2].style.fill = "#239B56";
        document.getElementsByClassName("bola")[3].style.fill = "#28B463";
        document.getElementsByClassName("bola")[4].style.fill = "#2ECC71";
        document.getElementsByClassName("bola")[5].style.fill = "#58D68D";
        document.getElementsByClassName("bola")[6].style.fill = "#82E0AA";
        document.getElementsByClassName("bola")[7].style.fill = "#ABEBC6";
        document.getElementsByClassName("bola")[8].style.fill = "#D5F5E3";

        document.getElementsByClassName("bola")[0].style.stroke = "black";
        document.getElementsByClassName("bola")[1].style.stroke = "black";
        document.getElementsByClassName("bola")[2].style.stroke = "black";
        document.getElementsByClassName("bola")[3].style.stroke = "black";
        document.getElementsByClassName("bola")[4].style.stroke = "black";
        document.getElementsByClassName("bola")[5].style.stroke = "black";
        document.getElementsByClassName("bola")[6].style.stroke = "black";
        document.getElementsByClassName("bola")[7].style.stroke = "black";
        document.getElementsByClassName("bola")[8].style.stroke = "black";


        document.getElementsByClassName("orbit-circle")[0].style.stroke = "black";
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

        document.getElementsByClassName("bola")[8].style.fill = "black";
    document.getElementsByClassName("bola")[8].style.stroke = "white";

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
        document.getElementsByClassName("bola")[8].style.fill = "white";

        document.getElementsByClassName("bola")[0].style.stroke = "black";
        document.getElementsByClassName("bola")[1].style.stroke = "black";
        document.getElementsByClassName("bola")[2].style.stroke = "black";
        document.getElementsByClassName("bola")[3].style.stroke = "black";
        document.getElementsByClassName("bola")[4].style.stroke = "black";
        document.getElementsByClassName("bola")[6].style.stroke = "black";
        document.getElementsByClassName("bola")[5].style.stroke = "black";
        document.getElementsByClassName("bola")[7].style.stroke = "black";
        document.getElementsByClassName("bola")[8].style.stroke = "black";

        document.getElementsByClassName("orbit-circle")[0].style.stroke = "white";
}

const cambioSeis = () =>{

  
    document.getElementsByClassName("orbit-circle")[0].style.fill = "white";
    document.getElementsByClassName("half-circle")[0].style.fill = "white";

    document.getElementsByClassName("bola")[0].style.fill = "gold";
    document.getElementsByClassName("bola")[1].style.fill = "white";
    document.getElementsByClassName("bola")[2].style.fill = "silver";
    document.getElementsByClassName("bola")[3].style.fill = "gold";
    document.getElementsByClassName("bola")[4].style.fill = "white";
    document.getElementsByClassName("bola")[5].style.fill = "silver";
    document.getElementsByClassName("bola")[6].style.fill = "gold";
    document.getElementsByClassName("bola")[7].style.fill = "white";
    
    document.getElementsByClassName("bola")[0].style.stroke = "black";
    document.getElementsByClassName("bola")[1].style.stroke = "black";
    document.getElementsByClassName("bola")[2].style.stroke = "black";
    document.getElementsByClassName("bola")[3].style.stroke = "black";
    document.getElementsByClassName("bola")[4].style.stroke = "black";
    document.getElementsByClassName("bola")[6].style.stroke = "black";
    document.getElementsByClassName("bola")[5].style.stroke = "black";
    document.getElementsByClassName("bola")[7].style.stroke = "black";
    
    document.getElementsByClassName("bola")[8].style.fill = "silver";
    document.getElementsByClassName("bola")[8].style.stroke = "black";
    
    document.getElementsByClassName("orbit-circle")[0].style.stroke = "black";
}

const cambioSiete = () =>{

  
    document.getElementsByClassName("orbit-circle")[0].style.fill = "white";
    document.getElementsByClassName("half-circle")[0].style.fill = "white";

    document.getElementsByClassName("bola")[0].style.fill = "#55efc4";
    document.getElementsByClassName("bola")[1].style.fill = "#00b894";
    document.getElementsByClassName("bola")[2].style.fill = "#ffeaa7";
    document.getElementsByClassName("bola")[3].style.fill = "#fdcb6e";
    document.getElementsByClassName("bola")[4].style.fill = "#81ecec";
    document.getElementsByClassName("bola")[5].style.fill = "#00cec9";
    document.getElementsByClassName("bola")[6].style.fill = "#fab1a0";
    document.getElementsByClassName("bola")[7].style.fill = "#e17055";
    document.getElementsByClassName("bola")[8].style.fill = "#74b9ff";
    
    document.getElementsByClassName("bola")[0].style.stroke = "black";
    document.getElementsByClassName("bola")[1].style.stroke = "black";
    document.getElementsByClassName("bola")[2].style.stroke = "black";
    document.getElementsByClassName("bola")[3].style.stroke = "black";
    document.getElementsByClassName("bola")[4].style.stroke = "black";
    document.getElementsByClassName("bola")[6].style.stroke = "black";
    document.getElementsByClassName("bola")[5].style.stroke = "black";
    document.getElementsByClassName("bola")[7].style.stroke = "black";
    document.getElementsByClassName("bola")[8].style.stroke = "black";
    
    document.getElementsByClassName("orbit-circle")[0].style.stroke = "black";

    document.getElementById("body").style.background = "#a29bfe"

    document.getElementsByClassName("star")[0].style.display = "flex";
    document.getElementsByClassName("star")[1].style.display = "flex";
    document.getElementsByClassName("star")[2].style.display = "flex";
    document.getElementsByClassName("star")[3].style.display = "flex";
    document.getElementsByClassName("star")[4].style.display = "flex";
    document.getElementsByClassName("star")[5].style.display = "flex";
    document.getElementsByClassName("star")[6].style.display = "flex";
    document.getElementsByClassName("star")[7].style.display = "flex";
    document.getElementsByClassName("star")[8].style.display = "flex";
    document.getElementsByClassName("star")[9].style.display = "flex";
    document.getElementsByClassName("star")[10].style.display = "flex";

    document.getElementsByClassName("star")[0].style.transition = "4s"
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

    botones[5].addEventListener("click",() => {
        cambioSeis()
        })
        botones[6].addEventListener("click",() => {
            cambioSiete()
            })



    










