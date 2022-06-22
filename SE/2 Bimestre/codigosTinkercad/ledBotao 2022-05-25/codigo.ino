const int led = 12;
const int botao = 10;

bool estadoBotao = 0;
bool estadoLed = 1;

void setup(){
	pinMode(led, OUTPUT);
	pinMode(botao, INPUT);
}

void loop(){
	estadoBotao = digitalRead(botao);
    if(estadoBotao == LOW){
      estadoLed = !estadoLed;
      digitalWrite(led, estadoLed);
      while(digitalRead(botao) == LOW);
    }
}