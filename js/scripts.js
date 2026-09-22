const btnRojo = document.getElementById("red");
const btnAmarillo = document.getElementById("yellow");
const btnVerde = document.getElementById("green");
const btnApagar = document.getElementById("off");


function encenderColor(color){
    if (color.id === "off"){
        document.querySelector(".red-light").style.backgroundColor = "gray";
        document.querySelector(".yellow-light").style.backgroundColor = "gray";
        document.querySelector(".green-light").style.backgroundColor = "gray";
    }
    
    if (color.id === "red-light"){
        document.querySelector(".red-light").style.backgroundColor = "rgb(251, 3, 3)";
        document.querySelector(".yellow-light").style.backgroundColor = "gray";
        document.querySelector(".green-light").style.backgroundColor = "gray";
        return;
    }
    if (color.id === "yellow-light"){
        document.querySelector(".red-light").style.backgroundColor = "gray";
        document.querySelector(".yellow-light").style.backgroundColor = "rgb(250, 230, 3)";
        document.querySelector(".green-light").style.backgroundColor = "gray";
        return;
    }
    if (color.id === "green-light"){
        document.querySelector(".red-light").style.backgroundColor = "gray";
        document.querySelector(".yellow-light").style.backgroundColor = "gray";
        document.querySelector(".green-light").style.backgroundColor = "rgb(18, 188, 29)";
        return;
    }
}

btnRojo.addEventListener("click", function(){

    const color = document.getElementById("red-light")
    encenderColor(color)
    return;
});

btnAmarillo.addEventListener("click", function(){

    const color = document.getElementById("yellow-light")
    encenderColor(color)
    return;
});

btnVerde.addEventListener("click", function(){

    const color = document.getElementById("green-light")
    encenderColor(color)
    let contador = document.getElementById("redCount")
    contador +=1
    return;
});

btnApagar.addEventListener("click", function(){

    const color = document.getElementById("off")
    encenderColor(color)
    return;
})