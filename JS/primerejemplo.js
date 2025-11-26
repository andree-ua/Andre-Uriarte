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

function m1(){ alert("Profe, si esto sale mal… no fui yo "); }
function m2(){ alert("Ok, creo que ya estoy entendiendo esto "); }
function m3(){ alert("Uy… le piqué y funcionó "); }
function m4(){ alert("Profe, esto está más fácil de lo que pensé "); }
function m5(){ alert("Estoy practicando para que me suba la nota "); }
function m6(){ alert("Listo profe, otro botón más pa' la colección "); }