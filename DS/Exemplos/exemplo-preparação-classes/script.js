
var dados = [];

function addSorvete() {
	var marca   = document.getElementById('marca').value;
	var sabor   = document.getElementById('sabor').value;
	var preco   = document.getElementById('preco').value;
	var estoque = document.getElementById('estoque').value;
	var tipo    = document.getElementById('tipo').value;

	var sorvete = [];

	sorvete[0] = marca;
	sorvete[1] = sabor;
	sorvete[2] = preco;
	sorvete[3] = estoque;
	sorvete[4] = tipo;

	dados[dados.length] = sorvete;
}


function makeTable() {
	var out = document.getElementById('tabela');
	var table = "<table>";

	for(var i=0; i<dados.length; i++) { 
		table += "<tr>";
		for(var j=0; j<dados[i].length; j++) {
			table += "<td>";
			table += dados[i][j];
			table += "</td>";
		}
		table += "</tr>";
	}

	table += "</table>";

	out.innerHTML = table;
}

