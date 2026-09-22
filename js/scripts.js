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