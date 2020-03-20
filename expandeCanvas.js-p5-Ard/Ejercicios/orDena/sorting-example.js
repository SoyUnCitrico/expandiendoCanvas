let values;
let i;
let j;

function setup() {
    let lienzo = createCanvas(500, 500);
    lienzo.parent('sketch');
    i = 0;
    j = 0;
    values = new Array(width);
    // console.log(values.length);
    for(let n = 0; n < values.length; n++) {
        // let val = random(height);
        // let map = map()
        values[n] = random(height);
        // values[n].push(random(height));
    }

}

function draw() {
    background(0);
    if(i < values.length) {
        for(let n = 0; n < values.length-i-1; n++){
            let  a = values[n];
            let  b = values[n+1];
         
             if(a > b) {
                 values = swap(values, n, n+1);
             }
        }
    }   else    {
        console.log("Finalizamos");
        noLoop();
    } 
    i++;

    for(let n = 0; n < values.length; n++) {
            stroke(255);
            line(n, height, n, height - values[n]);
        }     
} 

function swap(array, a, b) {
    let ar = array;
    let temp = ar[a];
    ar[a] = ar[b];
    ar[b] = temp;
    return ar;
}