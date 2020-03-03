#define ROJO  D5
#define VERDE D6
#define AZUL  D7

void setup() {
  pinMode(ROJO, OUTPUT);     
  pinMode(VERDE, OUTPUT);    
  pinMode(AZUL, OUTPUT);   
  
  digitalWrite(ROJO, LOW);     
  digitalWrite(VERDE, LOW);    
  digitalWrite(AZUL, LOW);     
}


//SALIDA DIGITAL
void loop() {
  digitalWrite(ROJO, HIGH);  
  delay(500);                     
  digitalWrite(ROJO, LOW); 
  delay(500);    

  digitalWrite(VERDE, HIGH);  
  delay(500);                    
  digitalWrite(VERDE, LOW); 
  delay(500);    

  digitalWrite(AZUL, HIGH);  
  delay(500);                
  digitalWrite(AZUL, LOW); 
  delay(500); 

  digitalWrite(ROJO, HIGH);  
  digitalWrite(VERDE, HIGH);  
  delay(500);                
  digitalWrite(ROJO, LOW);          
  digitalWrite(VERDE, LOW); 
  delay(500); 
  
}
