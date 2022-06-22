const int ledVermelho = 12;
const int ledAmarelo = 11;
const int ledVerde = 10;
const int ledVermelhoPedestre = 5;
const int ledVerdePedestre = 4;

const int tempo = 2000;

void setup(){
	pinMode(ledVermelho, OUTPUT);
    pinMode(ledAmarelo, OUTPUT);
    pinMode(ledVerde, OUTPUT);
    pinMode(ledVermelhoPedestre, OUTPUT);
    pinMode(ledVerdePedestre, OUTPUT);
}

void loop(){
	digitalWrite(ledVermelho, HIGH);
	digitalWrite(ledAmarelo, LOW);
	digitalWrite(ledVerde, LOW);
    pedestre();
    delay(tempo);
  
    digitalWrite(ledVermelho, LOW);
	digitalWrite(ledAmarelo, HIGH);
	digitalWrite(ledVerde, LOW);    
    pedestre();
    delay(tempo);
  
    digitalWrite(ledVermelho, LOW);
	digitalWrite(ledAmarelo, LOW);
	digitalWrite(ledVerde, HIGH);
    pedestre();
    delay(tempo);
  
    digitalWrite(ledVermelho, LOW);
	digitalWrite(ledAmarelo, HIGH);
	digitalWrite(ledVerde, LOW); 
    pedestre();
    delay(tempo);

}


void pedestre(){
   if(digitalRead(ledVermelho) == HIGH){
       digitalWrite(ledVerdePedestre, LOW);
       digitalWrite(ledVermelhoPedestre, HIGH);
    }else{
       digitalWrite(ledVerdePedestre, HIGH);
       digitalWrite(ledVermelhoPedestre, LOW);
    }

}