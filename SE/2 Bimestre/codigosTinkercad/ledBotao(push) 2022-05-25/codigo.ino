const int led = 12;
const int botao = 10;


/*
O botão é um dispositivo de leitura, então ele recebe um
comando
*/

void setup(){
  
  pinMode(led, OUTPUT);
  pinMode(botao, INPUT);
  
}

void loop(){
  
	if(digitalRead(botao) == HIGH){
		digitalWrite(led, HIGH);
    } else {
    	digitalWrite(led, LOW);
    }
  
}