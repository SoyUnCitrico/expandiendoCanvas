class EspyroCentro {
    constructor(centro, radio, stepAngle) {
        this.centroCirculo = centro;
        this.radio = radio;
        this.stepAng = stepAngle;

        this.ang = 0;
        this.dirAng = 1;
        this.centroExt = createVector();
        this.freq = createVector(1,1);

        this.setPuntoExt();

        this.pointColor = color(0,0,0);
        this.lineColor = color(127);
        this.sWLine = 0.2;
        this.sWPoint = 1;



    }

    actualizar() {
        this.setPuntoExt();
        this.updateAngle();
    }

    setPuntoExt() {
        //Actualiza pExt
        // console.log(this.freq);
        this.centroExt.x = this.centroCirculo.x + (this.radio * cos(this.freq.x * this.ang));
        this.centroExt.y = this.centroCirculo.y + (this.radio * sin(this.ang * this.freq.y));

    }

    updateAngle() {
        //Actualiza angulo
        this.ang += (this.stepAng * this.dirAng);
    }

    rotaAngle(incrementoAngulo) {
        //Actualiza angulo
        this.ang += incrementoAngulo;
    }

    setDirGyro() {
        //Cambia la direccion de rotación
        this.dirAng *= -1;
    }

    setFreq(multFreq) {
        this.freq = multFreq;
    }

    setPointColor(color) {
        this.pointColor = color;
    }

    setLineColor(color) {
        this.lineColor = color;
    }

    setPointStroke(strokeWeightPoint) {
        this.sWPoint = strokeWeightPoint;
    }

    setLineStroke(strokeWeightLine) {
        this.sWLine = strokeWeightLine;
    }

    dibujarPInt() {
        //Dibuja el centro
        push();
        stroke(127);
        strokeWeight(1);
        point(this.centroCirculo.x,this.centroCirculo.y);
        pop();
    }

    dibujarPExt() {
        //Dibuja el pEx
        push();
        stroke(this.pointColor);
        strokeWeight(this.sWPoint);
        point(this.centroExt.x, this.centroExt.y);
        pop();
    }

    dibujarRadio() {
      //Dibuja el radio
      push();
      stroke(this.lineColor);
      strokeWeight(this.sWLine);
      line(this.centroExt.x,this.centroExt.y,this.centroCirculo.x,this.centroCirculo.y);
      pop();
    }

    getCentro() {
        let cnt = this.centroCirculo;
        return cnt;
    }

    getPuntoExt() {
        let pE = this.centroExt;
        return pE;
    }

    getStep() {
        let stp = this.stepAng;
        return stp;
    }

    getRadio() {
        let r = this.radio;
        return r;
    }
}
