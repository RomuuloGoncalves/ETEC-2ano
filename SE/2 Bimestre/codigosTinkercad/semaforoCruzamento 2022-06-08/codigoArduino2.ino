const int ledVermelhoA2 = 12;
const int ledAmareloA2 = 11;
const int ledVerdeA2 = 10;
const int ledVermelhoPedestreA2 = 5;
const int ledVerdePedestreA2 = 4;

const int tempoA2 = 2000;

void setup(){
	pinMode(ledVermelhoA2, OUTPUT);
    pinMode(ledAmareloA2, OUTPUT);
    pinMode(ledVerdeA2, OUTPUT);
  	pinMode(ledVermelhoPedestreA2,OUTPUT );
    pinMode(ledVerdePedestreA2,OUTPUT );

}

void loop(){
    digitalWrite(ledVermelhoA2, LOW);
	digitalWrite(ledAmareloA2, LOW);
	digitalWrite(ledVerdeA2, HIGH);
    pedestre();
    delay(tempoA2);
  
    digitalWrite(ledVermelhoA2, LOW);
	digitalWrite(ledAmareloA2, HIGH);
	digitalWrite(ledVerdeA2, LOW);    
    pedestre();
    delay(tempoA2);

	digitalWrite(ledVermelhoA2, HIGH);
	digitalWrite(ledAmareloA2, LOW);
	digitalWrite(ledVerdeA2, LOW);
    pedestre();

    delay(tempoA2);

  
    digitalWrite(ledVermelhoA2, LOW);
	digitalWrite(ledAmareloA2, HIGH);
	digitalWrite(ledVerdeA2, LOW); 
    pedestre();
    delay(tempoA2);
}

void pedestre(){
 
    if(digitalRead(ledVermelhoA2) == HIGH){
       digitalWrite(ledVerdePedestreA2, LOW);
       digitalWrite(ledVermelhoPedestreA2, HIGH);
    }else{
       digitalWrite(ledVerdePedestreA2, HIGH);
       digitalWrite(ledVermelhoPedestreA2, LOW);
    }

}