
const button = document.getElementById('btnAutomatico');
const rojo = document.getElementById('red-light');
const amarillo = document.getElementById('yellow-light');
const verde = document.getElementById('green-light');
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
    temp=setInterval(cambiarColor, 1000);
});

const btnRojo = document.getElementById("red");
const btnAmarillo = document.getElementById("yellow");
const btnVerde = document.getElementById("green");
const btnApagar = document.getElementById("off");

let rCount = 0
let yCount = 0
let gCount = 0

function encenderColor(color){
    rojo.classList.remove('on')
    amarillo.classList.remove('on')
    verde.classList.remove('on')

    color.classList.add('on')
}

btnRojo.addEventListener("click", function(){

    const color = document.getElementById("red-light")
    const redCount = document.getElementById("redCount")
    encenderColor(color);
    redCount.textContent = ++rCount + (rCount === 1 ? " vez" : " veces");;
    return;

});

btnAmarillo.addEventListener("click", function(){

    const color = document.getElementById("yellow-light")
    const yellowCount= document.getElementById("yellowCount")
    encenderColor(color)
    yellowCount.textContent = ++yCount + (yCount === 1 ? " vez" : " veces");;
    return;

});

btnVerde.addEventListener("click", function(){

    const color = document.getElementById("green-light")
    const greenCount= document.getElementById("greenCount")
    encenderColor(color)
    greenCount.textContent = ++gCount + (gCount === 1 ? " vez" : " veces");;
    return;

});

btnApagar.addEventListener("click", function(){

    const color = document.getElementById("off")
    encenderColor(color)
    return;
    
})

