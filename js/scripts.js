
const button = document.getElementById('btnAutomatico');
const rojo = document.getElementById('red-light');
const amarillo = document.getElementById('yellow-light');
const verde = document.getElementById('green-light');
const btnDetener = document.getElementById('btnDetener');
const colores =[verde, amarillo, rojo];
let actual= 0;
let temp;

function mostrarColor() {
    colores.forEach(function(color){
        color.classList.remove('on');
        });
        colores[actual].classList.add('on');
};

function cambiarColor() {
    actual++;
    if (actual >= colores.length) {
        actual = 0;
    }
    mostrarColor();
}
button.addEventListener('click', function() {
    if (temp) {
        clearInterval(temp);
    }
    temp = setInterval(cambiarColor, 1000);
});
btnDetener.addEventListener('click', function() {
    clearInterval(temp);
    temp = undefined;
});


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

