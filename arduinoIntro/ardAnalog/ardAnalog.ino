#define ROJO  D5
#define VERDE D6
#define AZUL  D7

#define BOTON D1
#define LDR   A0

bool boton = true;

void setup() {
  Serial.begin(115200);
  
  pinMode(ROJO, OUTPUT);     
  pinMode(VERDE, OUTPUT);    
  pinMode(AZUL, OUTPUT);   
  
  analogWrite(ROJO, 0);     
  analogWrite(VERDE, 0);    
  analogWrite(AZUL, 0);     
  
  pinMode(BOTON, INPUT);
  pinMode(LDR, INPUT);
}

void loop() {
  float analog = analogRead(LDR);
  analog = map(analog, 15, 160, 0, 250);
 
  boton = digitalRead(BOTON);
  
  if(boton == false) {
    analogWrite(ROJO, analog);
    analogWrite(VERDE , random(150);
    analogWrite(AZUL , random(180);
    Serial.println(analog);
  }
  else {
    analogWrite(ROJO, 0); 
    analogWrite(VERDE, 0); 
    analogWrite(AZUL, 0); 
  }
}
