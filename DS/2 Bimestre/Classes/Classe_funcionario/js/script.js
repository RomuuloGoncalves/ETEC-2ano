class funcionario {
	constructor(
		nome_funcionario,
		idade_funcionario,
		cpf_funcionario,
		cargo_funcionario,
		salario_funcionario
	) {
		this.nome_funcionario = nome_funcionario;
		this.idade_funcionario = idade_funcionario;
		this.cpf_funcionario = cpf_funcionario;
		this.cargo_funcionario = cargo_funcionario;
		this.salario_funcionario = salario_funcionario;
	}

	mostrarCadastro() {
		// document.getElementById("mostrar_cadastro").innerHTML += `Nome: ${this.nome_funcionario} <br> idade: ${this.idade_funcionario} <br>CPF: ${this.cpf_funcionario} <br>Cargo: ${this.cargo_funcionario} <br>Salário: ${this.salario_funcionario} <br>`

		document.getElementById(
			"mostrar_cadastro"
		).innerHTML += `<tr> <td>${this.nome_funcionario}</td> <td>${this.idade_funcionario}</td> <td>${this.cpf_funcionario}</td> <td>${this.cargo_funcionario}</td> <td>${this.salario_funcionario}</td> </tr>`;
	}
}
var verificador = 0;
var i = 0;
var cadastrarFunc = [];
function cadastrar() {
	var nome = verificarNome();
	var idade = verificarIdade();
	var cpf = verificarCpf();
	var cargo = verificarCargo();
	var salario = verificarSalario();

	console.log(verificador);

	if (verificador === 5) {
		console.log("verificou");
		verificador = 0;

		cadastrarFunc[i] = new funcionario(nome, idade, cpf, cargo, salario);
		cadastrarFunc[i].mostrarCadastro();
		i++;

		if (i >= 1) {
			let scroll = document.getElementById("active");
			scroll.classList.add("ativar");
			let p = document.getElementById("cadastro");
			p.classList.add("desativar");
		}

		const btn = document.querySelector("#btn");
		const btnText = document.querySelector("#btnText");

		btnText.innerHTML = "Cadastrado";
		btn.classList.add("active");

		setTimeout(desfazer, 100 * 10);
	}

	verificador = 0;
}

function desfazer() {
	const btn = document.querySelector("#btn");
	const btnText = document.querySelector("#btnText");

	btnText.innerHTML = "Cadastrar";
	btn.classList.remove("active");

	document.getElementById("btn").style.transition = "0.5s";
	document.getElementById("btnText").style.transition = "0.5s";

	document.getElementById("nome").value = "";
	document.getElementById("idade").value = "";
	document.getElementById("cpf").value = "";
	document.getElementById("cargo").value = "";
	document.getElementById("salario").value = "";
}

// function toggle() {
//     let scroll = document.getElementById("active");
//     scroll.classList.add("ativar");
//     let p = document.getElementById("cadastro");
//     p.classList.add("desativar");
// }

function verificarNome() {
	let nome = document.getElementById("nome").value;
	nome = nome.trim();
	let contador = 0;

	if (nome === "") {
		document.getElementById("spanNome").innerHTML = "Não pode estar vazio";
		document.getElementById("spanNome").style.color = "red";
	} else {
		document.getElementById("spanNome").innerHTML = "";

		verificador++;
		return nome;
	}
}

function verificarIdade() {
	let idade = document.getElementById("idade").value;
	idade = idade.trim();
	let contador = 0;

	for (let i = 0; i < idade.length; i++) {
		if (idade[i] === " ") {
			contador++;
		}
	}

	if (contador === idade.length) {
		document.getElementById("spanIdade").innerHTML = "Insira um valor válido";
		document.getElementById("spanIdade").style.color = "red";
	} else {
		let dataNasci = document.getElementById("idade").value;
		console.log(dataNasci);
		dataNasci = dataNasci.split("-");
		idade = 2022 - dataNasci[0];
		console.log(dataNasci[0]);

		if (idade >= 18) {
			document.getElementById("spanIdade").innerHTML = "";
			verificador++;
			return idade;
		} else {
			document.getElementById("spanIdade").innerHTML = "Idade exigida: 18 anos";
			document.getElementById("spanIdade").style.color = "red";
		}
	}
}

function verificarCpf() {
	let cpf = document.getElementById("cpf").value;
	cpf = cpf.trim();
	let cpf_array = [];
	const span = document.getElementById("spanCPF");

	for (let i = 0; i < cpf.length; i++) {
		cpf_array[i] = parseInt(cpf[i]);
	}

	if (cpf_array.length !== 11) {
		span.innerHTML = "CPF inválido";
		span.style.color = "red";
	} else {
		let cpfCopia = [];
		//apenas os 9 primeiros números
		for (let i = 0; i < 9; i++) {
			cpfCopia[i] = cpf_array[i];
		}

		let soma = 0;

		for (let i = 0; i < cpfCopia.length; i++) {
			soma += cpf_array[i] * (i + 1);
		}

		let v1 = soma % 11;

		if (v1 === 10) {
			v1 = 0;
		}

		soma = 0;

		cpfCopia[cpfCopia.length] = v1;

		console.log(cpfCopia);

		for (let i = 0; i < cpfCopia.length; i++) {
			soma += cpfCopia[i] * i;
		}

		let v2 = soma % 11;

		if (v2 === 10) {
			v2 = 0;
		}

		//verificando os 2 últimos números

		if (cpf_array[cpf_array.length - 2] === v1 && cpf_array[cpf_array.length - 1] === v2) { //CPF válido
			verificador++;
			return cpf;
		} else { //CPF inválido
			span.innerHTML = "CPF inválido";
			span.style.color = "red";
		}
	}
}

//71464995028

function verificarCargo() {
	let cargo = document.getElementById("cargo").value;
	cargo.toLowerCase();

	if (
		cargo === "marceneiro" ||
		cargo === "ourives" ||
		cargo === "cuteleiro" ||
		cargo === "luthier"
	) {
		document.getElementById("spanCargo").innerHTML = "";
		verificador++;
		return cargo;
	} else {
		document.getElementById("spanCargo").innerHTML = "Insira um cargo válido";
		document.getElementById("spanCargo").style.color = "red";
	}
}

function verificarSalario() {
	let salario = document.getElementById("salario").value;

	if (salario >= 1200) {
		document.getElementById("spanSalario").innerHTML = "";
		verificador++;
		return salario;
	} else {
		document.getElementById("spanSalario").innerHTML = "Salário mínimo exigido";
		document.getElementById("spanSalario").style.color = "red";
	}
}
