// Definição da Classe
class Sorvete {
	constructor (nome, marca, preco) {
		this.nome = nome;
		this.marca = marca;
		this.preco = preco;
	}

	Mostrar() {
		document.write("<br>Nome:  " + this.nome );
		document.write("<br>Marca: " + this.marca);
		document.write("<br>Preço: " + this.preco);
	} 
}
var sorvetes = [];

// Criação dos Objetos
sorvetes[0] = new Sorvete("Chocolate", "icetec", 23.45);
sorvetes[1] = new Sorvete("Abacaxi",   "icetec", 39.00);
sorvetes[2] = new Sorvete("Morango",   "icebom", 89.00);
sorvetes[3] = new Sorvete("Mexirica",  "icebom",  9.00);


// Mostra os objetos na tela
for (var i=0; i<sorvetes.length; i++) {
	sorvetes[i].Mostrar();
}

/*
Baseado no exemplo anterior, crie uma classe com construtor para representar um Aluno. 
O aluno terá como atributos o nome, 3 notas sendo prova, trabalho e lista.
Essa classe deve conter, além do construtor metodos para calcular a média e exibir esses dados e indicar se está aprovado ou reprovado.

Crie 4 objetos para testar a classe e seus métodos.
*/



