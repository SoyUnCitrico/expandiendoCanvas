var RED = "red";
var GREEN = "green";
var BLUE = "blue";
var HUE = "hue";
var SATURATION = "saturation";
var BRIGHTNESS = "brightness";
var GRAYSCALE = "grayscale";
var ALPHA = "alpha";

var img;
var colors = [];
var sortMode = null;

function preload() {
  loadImage('Ejercicios/data/pic6.jpg', setImage);
}

function setup() {
  // let cnv = createCanvas(fullscreen([val]));
  let cnv = createCanvas(500, 500);
  cnv.parent('sketch');
  // noCursor();
  noStroke();
  ellipseMode(CORNER);
}

function draw() {
  background(0);
  var tileCount = floor(width / max(mouseX, 5));
  var rectSize = width / tileCount;

  img.loadPixels();
  colors = [];

  for (var gridY = 0; gridY < tileCount; gridY++) {
    for (var gridX = 0; gridX < tileCount; gridX++) {
      var px = int(gridX * rectSize);
      var py = int(gridY * rectSize);
      var i = (py * img.width + px) * 4;
      var c = color(img.pixels[i], img.pixels[i + 1], img.pixels[i + 2], img.pixels[i + 3]);
      colors.push(c);
    }
  }

  sortColors(colors, sortMode);

  var i = 0;
  for (var gridY = 0; gridY < tileCount; gridY++) {
    for (var gridX = 0; gridX < tileCount; gridX++) {
      fill(colors[i]);
      rect(gridX * rectSize, gridY * rectSize, rectSize, rectSize);
      i++;
    }
  }
}

function keyReleased() {
  if (key == 't' || key == 'T') writeFile([gd.ase.encode(colors)], timestamp(), 'ase');
  if (key == 's' || key == 'S') saveCanvas(timestamp(), 'png');

  if (key == '1') loadImage('Ejercicios/data/pic6.jpg', setImage);
  if (key == '2') loadImage('Ejercicios/data/pic7.jpg', setImage);
  if (key == '3') loadImage('Ejercicios/data/pic8.jpg', setImage);
  if (key == '4') loadImage('Ejercicios/data/pic9.jpg', setImage);
  if (key == '5') loadImage('Ejercicios/data/pic10.jpg', setImage);
  if (key == '6') loadImage('Ejercicios/data/pic11.jpg', setImage);
  if (key == '7') loadImage('Ejercicios/data/pic12.jpg', setImage);
  if (key == '8') loadImage('Ejercicios/data/pic13.jpg', setImage);
  
  if (key == 'a') {
    sortMode = null;
    console.log("RAW");
  }
  if (key == 'b') {
    sortMode = RED;
    console.log("RED");
  }
  if (key == 'c') {
    sortMode = GREEN;
    console.log("GREEN");
  }
  if (key == 'd') {
    sortMode = BLUE;
    console.log("BLUE");
  }
  if (key == 'e'){
    sortMode = HUE;
    console.log("HUE");
  }
  if (key == 'f') {
    sortMode = GRAYSCALE;
    console.log("GRAY");
  }
  if (key == 'g') {
    sortMode = SATURATION;
    console.log("SAT");
  }
  if (key == 'h') {
    sortMode = BRIGHTNESS;
    console.log("BRILLO");
  }
  if (key == 'l') {
    sortMode = ALPHA;
    console.log("ALPHA");
  }
}

function setImage(loadedImageFile) {
  img = loadedImageFile;
  img.resize(500,500);
}
// ///////////////////////////////////////////////

var sortColors = function(colors, method) {

   // sort red
  if (method == RED) colors.sort(function (a, b) {
    if (red(a) < red(b)) return -1;
    if (red(a) > red(b)) return 1;
    return 0;
  });

   // sort green
  if (method == GREEN) colors.sort(function (a, b) {
    if (green(a) < green(b)) return -1;
    if (green(a) > green(b)) return 1;
    return 0;
  });

   // sort blue
  if (method == BLUE) colors.sort(function (a, b) {
    if (blue(a) < blue(b)) return -1;
    if (blue(a) > blue(b)) return 1;
    return 0;
  });

  // sort hue
  if (method == HUE) colors.sort(function (a, b) {
    //convert a and b from RGB to HSV
    var aHue = chroma(red(a), green(a), blue(a)).get('hsv.h');
    var bHue = chroma(red(b), green(b), blue(b)).get('hsv.h');

    if (aHue < bHue) return -1;
    if (aHue > bHue) return 1;
    return 0;
  });

  // sort saturation
  if (method == SATURATION) colors.sort(function (a, b) {
    //convert a and b from RGB to HSV
    var aSat = chroma(red(a), green(a), blue(a)).get('hsv.s');
    var bSat = chroma(red(b), green(b), blue(b)).get('hsv.s');

    if (aSat < bSat) return -1;
    if (aSat > bSat) return 1;
    return 0;
  });

  // sort brightness
  if (method == BRIGHTNESS) colors.sort(function (a, b) {
    //convert a and b from RGB to HSV
    var aBright = chroma(red(a), green(a), blue(a)).get('hsv.v');
    var bBright = chroma(red(b), green(b), blue(b)).get('hsv.v');

    if (aBright < bBright) return -1;
    if (aBright > bBright) return 1;
    return 0;
  });

  // sort grayscale
  if (method == GRAYSCALE) colors.sort(function (a, b) {
    var aGrey = (red(a) * 0.222 + green(a) * 0.707 + blue(a) * 0.071);
    var bGrey = (red(b) * 0.222 + green(b) * 0.707 + blue(b) * 0.071);

    if (aGrey < bGrey) return -1;
    if (aGrey > bGrey) return 1;
    return 0;
  });

   // sort alpha
  if (method == ALPHA) colors.sort(function (a, b) {
    if (alpha(a) < alpha(b)) return -1;
    if (alpha(a) > alpha(b)) return 1;
    return 0;
  });

  return colors;
};


var timestamp = function(){
  var date = new Date();
  var year = date.getFullYear();
  var month = date.getMonth() + 1;
  var day = date.getDate();
  var hour = date.getHours();
  var minute = date.getMinutes();
  var second = date.getSeconds();
  var millis = date.getMilliseconds();

  year = year.toString().substr(2);
  month = ("00" + month).substr(-2, 2);
  day = ("00" + day).substr(-2, 2);
  minute = ("00" + minute).substr(-2, 2);
  second = ("00" + second).substr(-2, 2);

  return [year, month, day, "_", hour, minute, second, "_", millis].join('');
};

