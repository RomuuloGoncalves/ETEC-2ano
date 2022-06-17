var nome = [];
var preco = [];
var sabor = [];
var estoque = [];
var tipo = [];

var i = 0;
var pararLoop = 1;

function cadastro() {

	while (i < pararLoop) {
		nome[i] = document.getElementById("nome").value;
		preco[i] = document.getElementById("preco").value;
		sabor[i] = document.getElementById("sabor").value;
		estoque[i] = document.getElementById("estoque").value;
		tipo[i] = document.getElementById("tipo").value;

		adicionar =
			"<tr> <td>" +
			nome[i] +
			"</td> <td>" +
			preco[i] +
			"</td> <td>" +
			sabor[i] +
			"</td> <td>" +
			estoque[i] +
			"</td><td>" +
			tipo[i] +
			"</td> </tr>";

		recuperar = document.getElementById("mostrarDados").innerHTML;
		final = recuperar + adicionar;
		i++;
	}
	pararLoop++;

	document.getElementById("mostrarDados").innerHTML = final;
}

function toggle() {
    let table = document.getElementById("mostrarDados");
	table.classList.add("ativar");
	let h1 = document.getElementById("h1");
	h1.classList.add("desativar");
}

function resetar() {
	document.getElementById("mostrarDados").innerHTML = ""
    let table = document.getElementById("mostrarDados");
	table.classList.remove("ativar");

	document.getElementById("nome").value =""
	document.getElementById("preco").value =""
	document.getElementById("sabor").value =""
	document.getElementById("estoque").value =""
	document.getElementById("tipo").value =""
}
