const int ledVermelho = 10;
const int ledAmarelo = 9;
const int ledVerde = 8;
const int botaoPedestre = 12;

void setup(){
  pinMode(ledVermelho, OUTPUT);
  pinMode(ledAmarelo, OUTPUT);
  pinMode(ledVerde, OUTPUT);
  
  pinMode(botaoPedestre, INPUT);
  
  digitalWrite(ledVerde, HIGH);
  digitalWrite(ledAmarelo, LOW);
  digitalWrite(ledVermelho, LOW);



}

void loop(){
  //ler o botão pra ver se o usuario pressionou
  if(digitalRead(botaoPedestre) == HIGH){
  	semaforo();
  }
}

void semaforo(){
  delay(2000);
  digitalWrite(ledVerde, LOW);
  digitalWrite(ledAmarelo, HIGH);
  
  delay(2000);
  digitalWrite(ledAmarelo, LOW);
  digitalWrite(ledVermelho, HIGH);
  
  delay(5000);
  digitalWrite(ledVermelho, LOW);
  digitalWrite(ledVerde, HIGH);
 
}