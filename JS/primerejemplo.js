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

function a1(){ 
    alert("Profe, si esto sale mal, no fui yo 😭"); 
}
function a2(){ 
    alert("Ok, creo que ya estoy entendiendo esto 😎"); 
}
function a3(){ 
    alert("Uy, le piqué y funcionó "); 
}
function a4(){ 
    alert("Profe, esto está más fácil de lo que pensé "); 
}
function a5(){ 
    alert("Estoy practicando para que me suba la nota "); 
}
function a6(){
    lert("Listo profe, otro botón más pa' la colección "); 
}

function fondo(){
    document.body.style.background = "lightblue";
}
function textoColor(){
    document.body.style.color = "blue";
}
function tamanoImg(){
    document.getElementById("carita").style.width = "250px";
}
function bordeImg(){
    document.getElementById("carita").style.border = "2px solid black";
}