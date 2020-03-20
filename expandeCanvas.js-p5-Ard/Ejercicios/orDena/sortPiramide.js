let values;
let colors;
let i;

function setup() {
    let lienzo = createCanvas(500, 500);
    lienzo.parent('sketch');
    colorMode(HSB,360,360,360);
    i = 0;
    values = new Array(width);
    colors = new Array(width);
    // console.log(values.length);
    for(let n = 0; n < values.length; n++) {
        let val = random(width);
        let mapped = map(val,0,width,0,340);
        mapped = int(mapped);
        values[n] = val;
        colors[n] = mapped;
        // values[n].push(random(height));
        // console.log(n);
    }

}

function draw() {
    background(0);
    // console.log(i);
    if(i < values.length) {
        for(let n = 0; n < values.length-i-1; n++){
            let  a = values[n];
            let  b = values[n+1];
         
             if(a > b) {
                 values = swap(values, n, n+1);
                 colors = swap(colors, n, n+1);
             }
        }
    }   else    {
        console.log("Finalizamos");
        noLoop();
    } 
    i++;

    for(let n = 0; n < values.length; n++) {
            stroke(colors[n],360,360);
            let d = width - values[n];
            line(d/2, n, d/2 + values[n], n);
        }     
} 

function swap(array, a, b) {
    let ar = array;
    let temp = ar[a];
    ar[a] = ar[b];
    ar[b] = temp;
    return ar;
}
