
// Crie uma classe para representar um funcionário. As instâncias devem ter nome, data de nacimento, cpf, cargo e salário. Ao criar uma nova instancia, devem ser aceitos somente dados válidos de acordo com os seguintes critérios.


// * O nome não pode ser vazio.
// * A idade não pode ser inferior a 18 anos
// * O cpf de ser um número válido conforme os dígitos verificadores.
// * Os cargos disponíveis são Marceneiro, Ourives, Cuteleiro e Luthier
// * O salário não pode ser inferior ao salário mínimo.



// Crie uma interface para coleta dos dados.



const cargosValidos = ["Marceneiro", "Ourives", "Cuteleiro", "Luthier"];
const salarioMinimo = 12000;


class Funcionario {
	constructor(nome, nasc, cpf, cargo, salario) {
		this.nome    = nome;
		this.nasc    = nasc;
		this.cpf     = cpf;
		this.cargo   = cargo;
		this.salario = salario;

		var today = new Date();
		this.idade = today.getFullYear() - nasc.getFullYear();
	}


	checkNome() {
		return this.nome != "";
	}

	checkIdade() {
		return this.idade >= 18;
	}

	checkCpf() {
		return true;
	}

	checkCargo() {
		return cargosValidos.includes(this.cargo);
	}

	checkSalario() {
		return this.salario >= salarioMinimo;
	}
}


function Salvar() {
	var nome    = document.getElementById('nome').value;
	var nasc    = new Date(document.getElementById('nasc').value);
	var cpf     = document.getElementById('cpf').value;
	var cargo   = document.getElementById('cargo').value;
	var salario = document.getElementById('salario').value;

	var funcionario = new Funcionario(nome, nasc, cpf, cargo, salario);

	var ok = true;

	if (!funcionario.checkNome()) {
		alert("Verifique o nome");
		var ok = false;
	}

	if (!funcionario.checkIdade()){ 
		alert("Verifique a idade");
		var ok = false;
	}

	if (!funcionario.checkCpf()){ 
		alert("Verifique o CPF");
		var ok = false;
	}

	if (!funcionario.checkCargo()){ 
		alert("Verifique o cargo");
		var ok = false;
	}

	if (!funcionario.checkSalario()){ 
		alert("Verifique o salário");
		var ok = false;
	}

	if(ok) {
		alert("OK!");
	}
}


