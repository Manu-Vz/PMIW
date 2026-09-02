// imagenes
let miImagenIdle;
let miBackground00;
let miBackground01;
let miImagenCorriendo;

//arreglos
let idle = [];
let run = [];

//estados
let estadoIdle = 0;
let estadoRun = 0;
let estadoGlobal = 1; // 0 = idle; 1 = run

// variables
let posX = 0;
let velocidadBG = 4;
let tamImagenX;
let tamImagenYBG;
let cantBG = 20;
let contador = 0;
let continua = false;

function setup() {
  createCanvas(800, 600);
  noSmooth();
  miBackground00 = loadImage("data/Background/Background.png");
  miBackground01 = loadImage("data/Background/Background01.png");
  iniciarIdle();
  iniciarRun();
  tamImagenXBG=width/4;
  tamImagenYBG=height/3;
}


function draw() {
  imageMode(CENTER);
  push();
  imageMode(CORNER);
  background(0);
  for (let i = 0; i < cantBG; i ++) {
    image(miBackground00, i*tamImagenXBG -(velocidadBG/4), 75, tamImagenXBG, tamImagenYBG);
  }
  pop();
  textSize(24);
  stroke(255);
  text(contador, 10, 20);

  if (estadoGlobal === 0) {
    if (estadoIdle >= idle.length-1) {
      estadoIdle = 0;
    } else if (contador % 12 === 0) {
      estadoIdle ++;
    }
    mostrarAnimacion(idle, estadoIdle, posX, 217);
    if (contador > 750) {
      estadoGlobal = 1;
      continua = true;
    }
  }
  if (estadoGlobal === 1) {
    if (estadoRun >= run.length-1) {
      estadoRun = 0;
    } else if (frameCount % 10 === 0) {
      estadoRun ++;
    }
    if (!continua) {
      posX = posX + 1;
    } else {
      velocidadBG = velocidadBG + 4;
    }


    mostrarAnimacion(run, estadoRun, posX, 217);
    if (posX === 300 && !(contadorEsMayorA(contador, 750))) {
      estadoGlobal = 0;
    }
  }
  push();
  imageMode(CORNER);
  for (let i = 0; i < cantBG; i ++) {
    image(miBackground01, i*tamImagenXBG-(velocidadBG/2), 0+100, tamImagenXBG+6, tamImagenYBG+30);
  }
  pop();

  contador++;
  if (contadorEsMayorA(contador, 1300)) {
    continua = false;
  }
  if (contadorEsMayorA(contador, 2000)) {
    posX = 0;
    estadoGlobal = 1;
    contador = 0;
    continua = false;
    velocidadBG = 4;
  }
}

function iniciarIdle() {
  for (let i = 0; i < 7; i++) {
    miImagenIdle = loadImage("data/Idle/idle"+nf(i,2)+".png");
    idle[i] = miImagenIdle;
  }
}

function iniciarRun() {
  for (let i = 0; i < 15; i++) {
    miImagenCorriendo= loadImage("data/Run/run"+nf(i,2)+".png");
    run[i] = miImagenCorriendo;
  }
}

function mostrarAnimacion(arreglo, estado, x, y) {

  image(arreglo[estado], x, y);
}

function contadorEsMayorA (cont, num) {
  return cont > num
}
