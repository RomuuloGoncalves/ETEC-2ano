
// Uma imobiliária deseja um sistema para manter registro de seus negócios. 

// Segundo o gerente de negócios, o sistema deve permitir cadastro do endereço completo do imóvel, seu valor de aluguel e venda, descrição dos cômodos como quantidade de quartos, sala, banheiros, garagem, nome, cpf, endereço e data de nascimento do proprietário, bem como uma descrição geral do imóvel.

// Você faz parte do time de desenvolvimento desse sistema, onde sua tarefa, inicialmente, é criar as classes do módulo de cadastros.



class Endereco {
	constructor(log, num, bairro, cidade) {
		this.log    = log;
		this.num    = num;
		this.bairro = bairro;
		this.cidade = cidade;
	}
}


class Proprietario {
	constructor(nome, cpf, endereco, nasc) {
		this.nome     = nome;
		this.cpf      = cpf;
		this.endereco = endereco;
		this.nasc     = nasc;
	}
}






class Imovel {
	constructor(endereco, aluguel, venda, banheiros, vagas, desc, proprietario) {
		this.endereco     = endereco;
		this.aluguel      = aluguel;
		this.venda        = venda;
		this.banheiros    = banheiros;
		this.vagas        = vagas;
		this.desc         = desc;
		this.proprietario = proprietario;
	}
}






var endCasa  = new Endereco("Rua Ada Lovelace", 42, "Beija Flor", "Sucupira");
var endApt   = new Endereco("Av. Alan Turing", 84, "Alto da Compadecida", "Sorocaba");
var endProp1 = new Endereco("Rua Grace Hopper", 34, "Cobol", "Manhatan");
var endProp2 = new Endereco("Rua Encantada", 34, "Java", "Cupuaçu");








var prop1    = new Proprietario("Ariano Suassuna", "123.345.765.98", endProp1, new Date("1923-03-29"));
var prop2   = new Proprietario("Richard Feyman", "345.567.789.12", endProp2, new Date("1923-03-29"));


var apt  = new Imovel(endApt , 1200, 300000, 2, 1, "Meu apê", prop1);
var casa = new Imovel(endCasa, 1700, 875000, 3, 2, "Meu cafofo", prop2);



document.write("Apartamento: " + JSON.stringify(apt, null, 4));
document.write("<br>");
document.write("<br>");
document.write("Casa: "        + JSON.stringify(casa, null, 4));





