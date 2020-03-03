#define VERDE D6
#define BOTON D1

bool boton = true;

void setup() {
  Serial.begin(115200);
 
  pinMode(VERDE, OUTPUT); 
  pinMode(BOTON, INPUT);
       
  digitalWrite(VERDE, LOW);        
}

void loop() {
  boton = digitalRead(BOTON);
  
  if(boton == false) {
    digitalWrite(VERDE, HIGH);
    Serial.println("BOTON PRESIONADO");
  }
  else {
    digitalWrite(VERDE, LOW);
  }
}
