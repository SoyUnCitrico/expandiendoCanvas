'use strict'
let col = 2;
let fil = 2;
let numFlores = col * fil;

let flores = [numFlores];
let centros = [];
let centro = [];

let espirales = [];
let numEspirales = 1;

let radio = 80;
let anguloInicio = 0;
let separacion = radio * 3;
let colorFlor, colorCentro, colorPistilo, colBack;
let dibujarFlor = true;
let dibujarEspiral = true;

let datos;
var socket = io.connect('http://localhost:8080');

function setup() {
    let cnv = createCanvas(500,500);
    cnv.parent('sketch');
    smooth();
    centro.push(width/2, height/2);
    centros = make2DArray(col, fil);
    // console.log(centros);
    let posInicial = createVector(radio * 1.5 ,radio * 1.5);

    // Inicializacion de variables
    let c = 0;
    let f = 0;
    let i = 0;
    
    for(let a = 0; a < numFlores; a++) {
        // console.log(c);
        // console.log(f);
        let x = posInicial.x + (separacion * c);
        let y = posInicial.y + (separacion * f);
        centros[a] = [x,y];

        c++;

        if(c > col - 1){
            c = 0;
            f++;
            i++;
        }
    }

    console.log(centros);

    colBack = color(15, 15, 100, 190);
    // colBack = color(0);

    // Inicializacion de la flor
    for(let i = 0; i < numFlores; i++) {
        let colorFlor = color(random(180),random(220), random(150));
        let colorCentro = color(random(100, 190),random(90, 150), random(15)); 
        let colorPistilo = color(random(40),random(7),random(220));
        flores[i] = new Flor(centros[i], radio, 0, colorFlor, colorCentro, colorPistilo);
        let colorStrokePetalo = color(random(180),random(220), random(150));
        let colorStrokeCentro = color(random(100)); 
        let colorStrokePistilo = color(random(40),random(7),random(220));
        
        flores[i].setColorTrazoCentro(colorStrokeCentro);
        flores[i].setColorTrazoPistilos(colorStrokePistilo);
        flores[i].setColorTrazoPetalos(colorStrokePetalo);
    }

    for(let i = 0; i < numEspirales; i ++) {
        espirales[i] = new Espiral(centro, 1, 4, 5);
    }


}

function draw() {
    background(colBack);
    if(dibujarEspiral) {
        for(let i = 0; i < numEspirales; i ++) {
            // espirales[i].dibujaEspiral();
            espirales[i].dibujaLineas();
            espirales[i].dibujaVertex();
            // espirales[i].dibujaRadios();
            espirales[i].rotarEspiral(PI*7);    
        }
    }

    if(dibujarFlor) {
        for(let i = 0; i < numFlores; i++) {
            flores[i].dibujaTodo();
            // flor.rotarFlor(PI*121);
            if(flores[i].petalosRotando)
                flores[i].rotarPetalos(-PI/256);
            if(flores[i].pistilosRotando) 
                flores[i].rotarPistilos(PI/256);
        }
    }
    // noLoop();
}


function keyPressed() {
    // Dibuja la Flor
    if(key == 'f'){
        dibujarFlor = !dibujarFlor;
    }
 
    if(key == 'b'){
        colBack = color(random(15), random(120), random(100), random(190));
    }

    // Dibuja la espiral
    if(key == 'e'){
        dibujarEspiral = !dibujarEspiral;
    }

    // Gira la espiral
    if(key == 'v'){
        for(let i = 0; i < numEspirales; i ++) {
            espirales[i].rotar();
        }
        console.log("Rotando Espiral")
    }

    // Envia los datos de la espiral por socket
    if(key == 'm'){
        for(let i = 0; i < numEspirales; i ++) {
            let datos = espirales[i].reportaData();
            socket.emit('mensaje', `Los datos de ESPIRAL: ${i+1}`);    
            socket.emit('mensaje', datos);    
        }
    }

    if(key == 'c'){        
        for(let i = 0; i < numEspirales; i ++) {
            espirales[i].setColor(color(random(150,255), random(100,255), random(120), random(100,250)));   
        }
        console.log("Cambio de color de Linea");
    }

    if(key == 'p'){        
        for(let i = 0; i < numEspirales; i ++) {
            espirales[i].setColorVertex(color(random(255), random(255), random(255), random(100,250)));   
        };
        console.log("Cambio del color de Punto");
    }

    if(key == 'r'){
        for(let i = 0; i < numEspirales; i ++) {
            let datos = espirales[i].resetPuntos();
        }
        console.log("Reset de la Espiral");
    }

    // Envia los datos de la flor por socket
    if(key == 'n') {

        socket.emit('mensaje', "Los datos de la flor son:");
        for(let i = 0; i < numFlores; i++) {
            let dates = flores[i].reportaData();
            // console.log(dates);
            socket.emit('mensaje', dates);    
        }
    }

    if(key == '1') {
        for(let i = 0; i < numFlores; i++) {
            flores[i].changePistilosTrazo();
        }
    }

    if(key == '2') {
        for(let i = 0; i < numFlores; i++) {
            flores[i].changePetalosTrazo();
        }
    }

    if(key == '3') {
        for(let i = 0; i < numFlores; i++) {
            flores[i].changeCentroTrazo();
        }
    }

    if(key == '4') {
        for(let i = 0; i < numFlores; i++) {
            flores[i].setColorPetalos(color(random(180),random(220), random(150)));
            flores[i].setColorCentro(color(random(100, 190),random(90, 150), random(15))); 
            flores[i].setColorPistilos(color(random(40),random(7),random(100,220)));
        }
    }

    if(key == '5') {
        for(let i = 0; i < numFlores; i++) {
            flores[i].changeRotacionPetalos();
        }
        console.log("Rotando Petalos de la Flor");
    }

    if(key == '6') {
        for(let i = 0; i < numFlores; i++) {
            flores[i].changeRotacionPistilos();
        }
        console.log("Rotando Pistilos de la Flor");
    }

    // if(key == 'g') {        
    //     console.log("Grabando");
    //     saveFrames("espiral", "png", 15, 30);
    // }
}

function make2DArray(columnas, filas) {
    let arr = new Array(columnas);
    for (let i = 0; i < arr.length; i++) {
        arr[i] = new Array(filas);
    }
    return arr;
}