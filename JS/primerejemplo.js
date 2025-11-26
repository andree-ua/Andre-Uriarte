console.log("Hola Mundo");
alert("Hola Mundo, esto es un alert") 

function triste(){
    document.getElementById('carita').src='Imagenes/sad.png';
    alert("Po que ta triste mano");
}
function feliz(){
    document.getElementById('carita').src='Imagenes/happy.png';
}
function cambiarColor(){
    document.getElementById('menu').style.color='#eed33aff';
}
function cambiarLogo(){
    document.getElementById('logo').src='images/logo2.jpg';
}
function cambiarFondo(){
     document.getElementById('menu').style.background='#524604';
}
function cambiodeTexto(){
    document.getElementById('Subtitulo').textContent="YA LE SE AL JS";
}
function fondoAside(){
    document.getElementById('aside').style.background='#f584f5ff';
}
function modoOscuro(){
    document.body.style.background = '#1a1a1a';
    document.body.style.color = 'white';
}
function ponerBorde(){
    document.getElementById('carita').style.border = '5px solid #000';
}
function moverImagen(){
    document.getElementById('carita').style.marginLeft = '150px';
}