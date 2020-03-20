let filas;      // Y
let columnas;   // X
let size = 30;
let interLineado = 15;

let posInicial;
let posLetra;
let arrayLetras = [];
let gridLetras;
let index;

function setup() {
    let cnv = createCanvas(500,500);
    cnv.parent('sketch');
    colorMode(HSB,360,360,360);
    frameRate(10);

    columnas = int(width / (size + interLineado));
    filas = int(height / (size + interLineado));

    index = 0;
    posInicial = createVector(size/2,size/2);
    posLetra = createVector();
    gridLetras = make2DArray(columnas,filas);
    for(let f = 0; f < filas; f++){
        for(let c = 0; c < columnas; c++){
            // gridLetras[c][f] = char(int(random(65,90)));
            gridLetras[c][f] = char(int(random(97,123)));
        }
    }
}

function draw() {
    background(0);
    for(let f = 0; f < filas; f++){
        for(let c = 0; c < columnas; c++){
            // Calcula la posicion de las letras
            posLetra.x = posInicial.x + (size * c) + (interLineado * c);
            posLetra.y = posInicial.y + (size * f) + (interLineado * f);

            // Dibuja la letra en la posicion correspondiente
            textSize(size+5);
            textStyle(BOLD);
            let h = map(unchar(gridLetras[c][f]),97,123,0,360);
            // fill('#ED225D');
            fill(h,360,360);
            textAlign(CENTER,CENTER);
            text(gridLetras[c][f], posLetra.x, posLetra.y);
        }
    }

    arrayLetras = copy2D1D(gridLetras);
    if(index < arrayLetras.length) {
        for(let n = 0; n < arrayLetras.length - index - 1; n++){
            let  a = arrayLetras[n];
            let  b = arrayLetras[n+1];

             if(a > b) {
                 arrayLetras = swap(arrayLetras, n, n+1);
                //  colors = swap(colors, n, n+1);
             }
        }
    }   else    {
        // fill('#3030AD');
        fill(50,360,360);
        textAlign(CENTER,CENTER);
        textSize(100);
        textStyle(BOLD);
        text('FIN', width/2, height/2);
        console.log("Finalizamos");
        noLoop();
    }
    index++;
    gridLetras = copy1D2D(arrayLetras);




}

function make2DArray(columnas, filas) {
    let arr = new Array(columnas);
    for (let i = 0; i < arr.length; i++) {
        arr[i] = new Array(filas);
    }
    return arr;
}

function copy1D2D(array1D) {
    let array2D = make2DArray(columnas, filas);
    let k = 0;
    for(let f = 0; f < filas; f++){
        for(let c = 0; c < columnas; c++){
            array2D[c][f] = array1D[k];
            k++;
        }
    }
    return array2D;
}

function copy2D1D(array2D) {
    let array1D =[];
    let k = 0;
    for(let f = 0; f < filas; f++){
        for(let c = 0; c < columnas; c++){
            array1D[k] = array2D[c][f];
            k++;
        }
    }
    return array1D;
}


function swap(array, a, b) {
    let ar = array;
    let temp = ar[a];
    ar[a] = ar[b];
    ar[b] = temp;
    return ar;
}
