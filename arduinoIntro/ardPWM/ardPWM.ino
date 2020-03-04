// Constantes de salida para los LEDS
#define ROJO  D5
#define VERDE D6
#define AZUL  D7
// Variable que almacena la cuenta del contador que nos dira cuantas veces
// se ha ejecutado todo el codigo del loop
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


void loop() {
  // Inicializa un contador desde 0 en la variable 'i'; aumenta de 1 en 1 hasta que 'i' sea 254
  for(int i = 0; i < 255; i++) {
    // En cada repeticion realiza lo siguiente:
    // Pon el led Rojo en el valor de 'i'
    analogWrite(ROJO, i);  
    // Pausa por 10 milisegundos
    delay(10);
    // Hasta aqui termina este loop, se repetira el codigo hasta que i sea 254
  }
  // Al final deja el LED encendido en ROJO con un valor maxio de 254
  // Pausa por 100 milisegundos
  delay(100);
  
  // Misma secuencia para el led VERDE
  for(int i = 0; i < 255; i++) {
    analogWrite(VERDE, i);  
    delay(10);
  }
  // Al final ROJO y VERDE estan encendidos con un valor maximo de 254 
  // la combinacion produce color amarillo
  // Pausa por 100 milisegundos
  delay(100);
  
  for(int i = 0; i < 255; i++) {
    analogWrite(AZUL, i);  
    delay(10);
  }
  // Al final ROJO, VERDE y AZUL estan encendidos con un valor maximo de 254 
  // la combinacion produce color blanco
  // Pausa por 100 milisegundos
  delay(100);


  // Proceso inverso, ahora se iran apagando los LEDS
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

  // Aumenta en uno el contador
  contador++;
  // Reporta el numero de veces que se ha ejecutado todo el codigo mediante el
  // monitor serial
  Serial.println("VUELTA NO: ");
  Serial.print(contador);  
  Serial.println();
  // Pausa por 1000 milisegundos = 1 segundo
  delay(1000);                    
}
