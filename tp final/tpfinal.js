// PONER CREDITOS


// Imagenes:
let imgFacultad;
let imgMarcha;
let imgCentro;
let imgPelicula;
let escenaActual= 0;

// Condicionales para mostrar Botones
let OpcionA;
let OpcionB;
// Posicion de los Botones
let PosA = 100;
let PosB = 500;
let Altura = 350;
// Ancho de los Botones
let Ancho = 200;
let Alto = 75;
// Diccionario
let escenas;


// Preload
function preload() {
  imgFacultad=loadImage('data/Facultad.png');
  imgMarcha=loadImage('data/Marcha.png');
  imgCentro=loadImage('data/Centro.png');
  imgPelicula=loadImage('data/Pelicula.png');
}

// Setup
function setup() {
  createCanvas(800, 450);
  escenas = {
    "0": {
      "fondo" : imgFacultad,
      "texto": "Estas en la facu y te entregan un bolante para marchar",
      "OpcionA": 1,
      "OpcionB": 2
    },
    "1":{
      "fondo" : imgMarcha,
      "texto": "Vas a marchar"
    },
    "2":{
      "fondo" : imgPelicula,
      "texto": "Ves una pelicula"
    }
  };
}


function draw() {
  // Fondo
  background(200);
  
  // Cargo Escena
  cargarEscena();
}

function cargarEscena() {
  // Variable para tener la escena actual
  let nodo = escenas[escenaActual];
  // Muestro la imagen
  image(nodo.fondo,0,0,width, height);
  // Cargar texto
  
  push();
  textAlign(CENTER,CENTER);
  textSize(32);
  fill(255);
  stroke(0);
  text(nodo.texto, width/2, height/2);
  pop();
  
  // Me fijo si tiene Opcion A
  if (nodo.OpcionA){
    OpcionA = true;
    cargarBotonA();
  } else {
    OpcionA = false;
  }
  // Me fijo si tiene Opcion A
  if (nodo.OpcionB){
    OpcionB = true;
    cargarBotonB();
  } else {
    OpcionB = false;
  }
}

function cargarBotonA(){
  fill(255);
  rect(PosA,Altura,Ancho,Alto);
  push();
  fill(0);
  stroke(0);
  textSize(32);
  text("Opcion A", PosA+25,Altura + 50);
  pop();
}

function cargarBotonB(){
  fill(255);
  rect(PosB,Altura,Ancho,Alto);
  push();
  fill(0);
  stroke(0);
  textSize(32);
  text("Opcion B", PosB+25,Altura + 50);
  pop();
}


function mousePressed(){
  // Pregunto si la posición del Mouse esta en alguno de los botones
  if ((mouseX > PosA && mouseX < PosA+Ancho) && (mouseY > Altura && mouseY < Altura + Alto) && (OpcionA)){
    let nodo = escenas[escenaActual];
    escenaActual = nodo.OpcionA;
  }
  if ((mouseX > PosB && mouseX < PosB+Ancho) && (mouseY > Altura && mouseY < Altura + Alto) && (OpcionB)){
    let nodo = escenas[escenaActual];
    escenaActual = nodo.OpcionB;
  }
}
