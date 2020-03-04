// Constante del GPIO para el LED VERDE
#define VERDE D6
// Constante para el boton
#define BOTON D1
// Bandera para lectura del boton
bool boton;

// Funcion que solo se ejecuta la primera vez que el microcontrolador se enciende
void setup() {
  // Inicializa monitor serial a 115200 baudios
  Serial.begin(115200);
  //  Establece los modos de operacion de los pines 
  pinMode(VERDE, OUTPUT); 
  pinMode(BOTON, INPUT);
  // Asegura que el LED comience apagado
  digitalWrite(VERDE, LOW);        
}

// Funcion que se ejecuta continuamente mientras el microcontrolador este encendido
void loop() {
  // Lectura del boton es guardada en la bandera
  boton = digitalRead(BOTON);
  // Si el boton esta presionado, (logica inversa)
  if(boton == false) {
    // Enciende el led VERDE
    digitalWrite(VERDE, HIGH);
    // Escribe en el monitor serial el siguiente mensaje
    Serial.println("BOTON PRESIONADO");
  // Si no esta presionado
  }  else {
    // Apaga el LED
    digitalWrite(VERDE, LOW);
  }
  // Fin del loop, se ejecuta todo de nuevo
}
