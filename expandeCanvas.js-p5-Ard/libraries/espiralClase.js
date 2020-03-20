class Espiral {
    constructor(posicion, numeroAtomos, radioInit, incrementoRad) {
        this.nodos = [];
        this.numAtomos = numeroAtomos;

        this.startAng = random(TWO_PI);
        this.endAng = (4 * TWO_PI) + this.startAng;
        this.stepAng = (this.endAng - this.startAng) / 60;
        this.angRotacion = this.stepAng;

        // this.centro = posicion.copy();
        this.centro = createVector(posicion[0], posicion[1]);

        this.colorVertex = color(random(170), random(60), random(120));
        this.strokeColor = color(random(150,255), random(100,255), random(120), random(100,250));
        this.sW = 3;

        this.radius = radioInit;
        this.incrementoRadio = incrementoRad;
        this.noiseRadio = random(100);
        this.estaRotando = false;

        this.initPuntos();
        // console.log(this.reportaData());

        }

        initPuntos() {
            let rad = this.radius;
            let ruidoRad = this.noiseRadio;

            for(let ang = this.startAng;  ang <= this.endAng; ang += this.stepAng) {
                let thisRad = rad + (80 * noise(ruidoRad)); 
                
                let xS = this.centro.x + (thisRad * Math.cos(ang));
                let yS = this.centro.y + (thisRad * Math.sin(ang));
                
                this.nodos.push(xS,yS);
                rad += random(2,this.incrementoRadio);
                ruidoRad += 0.25;
            }  
        }

        resetPuntos() {
            let rad = random(this.radius);
            let ruidoRad = random(this.noiseRadio);
            let ang = 0;
            

            for(let i = 0; i < this.nodos.length; i+=2) { 
                let thisRad = rad + (80 * noise(ruidoRad)); 

                let xS = this.centro.x + (thisRad * Math.cos(ang));
                let yS = this.centro.y + (thisRad * Math.sin(ang));
                
                this.nodos[i] = xS;
                this.nodos[i+1] = yS;
                rad += random(5,this.incrementoRadio);
                ruidoRad += random(0.25);
                ang += random(this.stepAng*2);
            }  
        }

        reportaData() {
            return {
                "numAtom": this.numAtomos,
                "angInicial": this.startAng,
                "anguloFinal": this.endAng,
                "pasoAngulo": this.stepAng,
                "angRotacion": this.angRotacion,
                "anchoTrazo": this.sW,
                "radiusGiro": this.radius,
                "incrementoRadio": this.incrementoRadio,
                "ruidoRadio":  this.noiseRadios,
                "posCentro": this.centro.toString(),
                "colorTrazo": this.strokeColor.toString(),
                "colorPunto": this.colorVertex.toString()
            }
        }

        dibujaLineas() {
            push();
            colorMode(HSB);
            strokeWeight(this.sW);
            stroke(this.strokeColor);
            noFill();

            // stroke(random(255));
            // beginShape();
            // beginShape(POINTS);
            beginShape(LINES);
            // beginShape(TRIANGLE_STRIP);
            // beginShape(TRIANGLES);
            // beginShape(TRIANGLE_FAN);
            // beginShape(QUADS);
            // beginShape(QUAD_STRIP)
            for(let i = 0; i < this.nodos.length - 1; i+=2) {
                vertex(this.nodos[i], this.nodos[i+1]);
            }
            endShape();
            // endShape(CLOSE);
            pop();
        }

        dibujaEspiral() {
            push();
            strokeWeight(1, random(100));
            stroke(127);
            noFill();

            // stroke(random(255));
            beginShape();
            for(let i = 0; i < this.nodos.length - 1; i+=2) {
                vertex(this.nodos[i], this.nodos[i+1]);
            }
            endShape();
            // endShape(CLOSE);
            pop();
        }

        dibujaVertex() {
            push();
            colorMode(HSB);
            strokeWeight(4);
            // stroke(170,60,100);
            stroke(this.colorVertex);
            noFill();

            beginShape(POINTS);
            for(let i = 0; i < this.nodos.length - 1; i+=2) {
                vertex(this.nodos[i], this.nodos[i+1]);
            }
            endShape();
            // endShape(CLOSE);
            pop();

        }

        dibujaRadios() {
            push();
            // colorMode(RGB);
            strokeWeight(1);
            stroke(random(20,100), random(250));
            // stroke(random(255));
            for(let i = 0;  i <= this.nodos.length - 2; i += 2) {
                line(this.centro.x, this.centro.y, this.nodos[i], this.nodos[i+1]);
            }
            pop();
        }

        getColor() {
            return this.strokeColor;
        }
        
        getColorVertex() {
            return this.colorVertex;
        }

        setColor(nuevoColor) {
            this.strokeColor = nuevoColor;
        }

        setColorVertex(nuevoColor) {
            this.colorVertex = nuevoColor;
        }

        giraPuntos() {
            let ang = this.startAng;
            for(let i = 0; i <= this.nodos.length - 2; i+=2) {
                let seno = Math.sin(ang);
                let coseno = Math.cos(ang);
                
                let xO = this.nodos[i] - this.centro.x;
                let yO = this.nodos[i+1] - this.centro.y;
                // console.log(radioY);
                let xN = xO * coseno - yO * seno;
                let yN = xO * seno + yO * coseno;

                xN += this.centro.x;
                yN += this.centro.y; 

                this.nodos[i] = xN;
                // console.log(this.nodos[i]);
                this.nodos[i + 1] = yN;
                
                if(this.estaRotando) {
                    ang += this.angRotacion/512;
                }

            }
            // console.log(this.nodos);
        }

        rotarEspiral(paso) {
            this.startAng += paso;
            // this.endAng += paso;
            this.giraPuntos();
        }

        rotar() {
            this.estaRotando =! this.estaRotando;
        }

        setRotacion(angulo) {
            this.angRotacion = angulo;   
        }
}