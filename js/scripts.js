const btnRojo = document.getElementById("red");
const btnAmarillo = document.getElementById("yellow");
const btnVerde = document.getElementById("green");
const btnApagar = document.getElementById("off");

let rCount = 0
let yCount = 0
let gCount = 0


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
    const redCount = document.getElementById("redCount")
    encenderColor(color);
    redCount.textContent = rCount++;

    return;
});

btnAmarillo.addEventListener("click", function(){

    const color = document.getElementById("yellow-light")
    const yellowCount= document.getElementById("yellowCount")
    encenderColor(color)
    yellowCount.textContent = yCount++;
    return;

});

btnVerde.addEventListener("click", function(){

    const color = document.getElementById("green-light")
    const greenCount= document.getElementById("greenCount")
    encenderColor(color)
    greenCount.textContent = gCount++;
    return;
});

btnApagar.addEventListener("click", function(){

    const color = document.getElementById("off")
    encenderColor(color)
    return;
})