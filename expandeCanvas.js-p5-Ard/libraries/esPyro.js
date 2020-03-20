class Espyro {
    constructor(centro, radio, stepAngle,ang) {
        this.centroCirculo = centro;
        this.radio = radio;
        this.stepAng = stepAngle;

        this.ang = ang;
        this.dirAng = 1;
        this.centroExt = createVector();
        this.centroEspyro = createVector();
        this.freq = createVector(1,1);
        this.freqEspyro = createVector(1,1);

        this.InnerRadio = radio/int(random(1,8));
        this.espyroRadio = this.InnerRadio * random(0.2, 0.8);

        this.k = this.InnerRadio/this.radio;
        this.l = this.espyroRadio/this.InnerRadio;



        this.setPuntoExt();
        console.log('PuntoExterior.seteado');
        console.log(this.centroExt);

        this.setPointEsp();
        console.log('PuntoInterior.seteado');
        console.log(this.centroEspyro);

        this.pointColor = color(0,0,0);
        this.lineColor = color(127);
        this.sWLine = 0.2;
        this.sWPoint = 1;
    }


    actualizar() {
        this.setPuntoExt();
        this.setPointEsp();
        this.updateAngle();
        this.rotaAngle(0.2);
    }

    setPuntoExt() {
        //Actualiza pExt
        // console.log(this.freq);
        this.centroExt.x = this.centroCirculo.x + (this.radio * cos(this.freq.x * this.ang));
        this.centroExt.y = this.centroCirculo.y + (this.radio * sin(this.ang * this.freq.y));

    }

    setPointEsp() {
        //Actualiza el punto del Espirografo
        this.centroEspyro.x = this.centroCirculo.x  + (this.radio * (((1-this.k) * cos(this.ang)) + ((this.l * this.k) * cos(this.freqEspyro.x*(1-this.k) * this.ang / this.k))));
        this.centroEspyro.y = this.centroCirculo.y  + (this.radio * (((1-this.k) * sin(this.ang)) - ((this.l * this.k) * sin(this.freqEspyro.y*(1-this.k) * this.ang / this.k))));
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

    setThetaDirGyro() {
        //Cambia la direccion de rotación
        this.dirTheta *= -1;
    }

    setFreq(multFreq) {
        this.freq = multFreq;
    }

    setFreqEspyro(multFreq) {
        this.freqEspyro = multFreq;
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

    dibujarPuntoCentro() {
        //Dibuja el centro
        push();
        stroke(127);
        strokeWeight(1);
        point(this.centroCirculo.x,this.centroCirculo.y);
        pop();
    }

    dibujarPExt() {
        //Dibuja el Punto Exterior de este Circulo
        push();
        stroke(this.pointColor);
        strokeWeight(this.sWPoint);
        point(this.centroExt.x, this.centroExt.y);
        pop();
    }

    dibujarPuntoEspyro() {
        //Dibuja un circulo alrededor del PExt
        push();
        // noFill();
        // ellipse(this.centroEspyro.x, this.centroEspyro.y, this.espyroRadio*2,this.espyroRadio*2);
        stroke(this.pointColor);
        strokeWeight(2);
        point(this.centroEspyro.x, this.centroEspyro.y);
        pop();

    }

    dibujarRadioEspyro(){
        push();        
        stroke(this.lineColor);
        strokeWeight(0.2);
        line(this.centroEspyro.x, this.centroEspyro.y,this.centroExt.x,this.centroExt.y);
        pop();
    }
    dibujarCircExt() {
        //Dibuja un circulo alrededor del PExt
        push();
        noFill();
        ellipse(this.centroExt.x, this.centroExt.y,this.radio,this.radio);
        pop();

    }



    dibujarCirculo() {
        //Dibuja un circulo alrededor del centro
        push();
        noFill();
        stroke(this.lineColor)
        ellipse(this.centroCirculo.x, this.centroCirculo.y, this.radio * 2, this.radio * 2);
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
