// Constantes de salida
#define ROJO  D5
#define VERDE D6
#define AZUL  D7
// Constantes de entrada
#define BOTON D1
#define LDR   A0
// Bandera para leer el boton
bool boton = true;

void setup() {
  // Inicializacion del monitor serial a 115200 baudios
  Serial.begin(115200);
  // Declaracion de modo de operacion de los pines  
  pinMode(ROJO, OUTPUT);     
  pinMode(VERDE, OUTPUT);    
  pinMode(AZUL, OUTPUT);   
  pinMode(BOTON, INPUT);
  pinMode(LDR, INPUT);
  // Asegura que los pines de salida comiencen apagados
  analogWrite(ROJO, 0);     
  analogWrite(VERDE, 0);    
  analogWrite(AZUL, 0);     
}

void loop() {
  // Variable que aloja el valor de la fotoresistencia
  float analog = analogRead(LDR);
  // Convierte los valores en RAW de la fotoresistencia en 
  // una escala que pueda ser escrita en el LED
  analog = map(analog, 15, 160, 0, 250);
//  Lectura del pin asociado al BOTON
  boton = digitalRead(BOTON);
  // Si el boton esta en falso - "LOW" entonces:
  // Logica inversa
  if(boton == false) {
    // Enciende el led ROJO de acuerdo al valor de la fotoresistencia
    analogWrite(ROJO, analog);
    // Enciende el led VERDE en un numero random entre 0 y 150
    analogWrite(VERDE , random(150);
    // Enciende el led AZUL en un numero random entre 0 y 180
    analogWrite(AZUL , random(180);
    // Reporta en el monitor serial el valor de la fotoresistencia
    Serial.println(analog);

    // Si el boton no esta en falso - "HIGH" entonces:
  } else {
    // Apaga los LEDS
    analogWrite(ROJO, 0); 
    analogWrite(VERDE, 0); 
    analogWrite(AZUL, 0); 
  }
  // Fin del loop, comienza todo de nuevo
}
