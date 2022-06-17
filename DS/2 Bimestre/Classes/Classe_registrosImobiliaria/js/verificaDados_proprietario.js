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