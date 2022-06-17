function validaFaltas(qtd, aulas_dadas) {

	if(qtd < 0 || qtd > aulas_dadas) {
		return false;
	}
	else {
		return true;
	}
} 

function validaMencao(mencao) {
	mencoes_validas = ['I', 'R', 'B', 'MB'];

	mencao = mencao.toUpperCase();

	if (mencoes_validas.includes(mencao)) 
		return true;
	else
		return false;
}

function validaForm() {

	var aulas  = Number(document.getElementById("aulasDadas").value);
	var faltas = Number(document.getElementById("faltas").value);
	var mencao = document.getElementById("mencao").value;

	var ok = true;

	if (!validaFaltas(faltas, aulas)) {
		alert("Faltas inválidas");
		ok = false;
	}

	if (!validaMencao(mencao)) {
		alert("Menção inválida");
		ok = false;
	}

	if (ok) {
		// alert("Dados salvos");
		document.write(Insert(aulas, faltas, mencao));
	}
}

function Insert(faltas, aulas_dadas, mencao) {

	return "INSERT INTO Boletin (Faltas, Aulas, Mencao) VALUES ('"+faltas+"', '"+aulas_dadas+"', '"+mencao+"');";

}





