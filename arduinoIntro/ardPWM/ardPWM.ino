#define ROJO  D5
#define VERDE D6
#define AZUL  D7

int contador = 0;

void setup() {
  Serial.begin(115200);
  
  pinMode(ROJO, OUTPUT);     
  pinMode(VERDE, OUTPUT);    
  pinMode(AZUL, OUTPUT);   
  
  analogWrite(ROJO, 0);     
  analogWrite(VERDE, 0);    
  analogWrite(AZUL, 0);     
}

///SALIDA PWM 
void loop() {
  for(int i = 0; i < 255; i++) {
    analogWrite(ROJO, i);  
    delay(10);
  }
  delay(100);
  
  for(int i = 0; i < 255; i++) {
    analogWrite(VERDE, i);  
    delay(10);
  }
  delay(100);
  
  for(int i = 0; i < 255; i++) {
    analogWrite(AZUL, i);  
    delay(10);
  }
  delay(100);

  for(int i = 255; i > 0 ; i--) {
    analogWrite(ROJO, i);  
    delay(10);
  }
  delay(100);
  
  for(int i = 255; i > 0 ; i--) {
    analogWrite(VERDE, i);  
    delay(10);
  }
  delay(100);
  
  for(int i = 255; i > 0 ; i--) {
    analogWrite(AZUL, i);  
    delay(10);
  }

  contador++;
  Serial.println("VUELTA NO: ");
  Serial.print(contador);  
  Serial.println();
  delay(1000);                    
}
