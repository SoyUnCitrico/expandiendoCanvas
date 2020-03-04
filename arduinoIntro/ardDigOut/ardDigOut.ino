// Variabes de salida para el control de LEDs
// Cada uno de los LED's se encuentra conectado directamente a esos pines  
// en el NODEMCU mediante la placa de circuito electrico "PCB"
#define ROJO  D5
#define VERDE D6
#define AZUL  D7

// Codigo de configuracion de incio, solo se ejecuta la primera vez al encender el NODEMCU
void setup() {
  // Declaracion de la funcion de los pines 
  pinMode(ROJO, OUTPUT);     
  pinMode(VERDE, OUTPUT);    
  pinMode(AZUL, OUTPUT);   
  // Se asegura de que los LEDs comiencen apagados
  digitalWrite(ROJO, LOW);     
  digitalWrite(VERDE, LOW);    
  digitalWrite(AZUL, LOW);     
}


void loop() {
  // Pon el pin que esta conectado al led ROJO en un valor alto 'HIGH'
  digitalWrite(ROJO, HIGH);  
  // Deten el funcionamiento por 500 milisegundos
  delay(500);                     
  // Pon el pin ROJO en un valor bajo 'LOW'
  digitalWrite(ROJO, LOW); 
  // Deten el funcionamiento por 500 milisegundos
  delay(500);    

  // Ahora la misma secuencia con el LED verde
  digitalWrite(VERDE, HIGH);  
  delay(500);                    
  digitalWrite(VERDE, LOW); 
  delay(500);    
  // Ahora la misma secuencia con el LED azul
  digitalWrite(AZUL, HIGH);  
  delay(500);                
  digitalWrite(AZUL, LOW); 
  delay(500); 
  // Ahora la misma secuencia con los LEDs rojo y verde
  // La mezcla produce un color amarillo
  digitalWrite(ROJO, HIGH);  
  digitalWrite(VERDE, HIGH);  
  delay(500);                
  digitalWrite(ROJO, LOW);          
  digitalWrite(VERDE, LOW); 
  delay(500); 
  
}
