function verificaCPF(cpf) {

    let cpfCopia = []
    //apenas os 9 primeiros números 
    for (let i = 0; i < 9; i++) {
        cpfCopia[i] = cpf[i]
        
    }

	let soma = 0;

	for (let i = 0; i < cpfCopia.length; i++) {
		soma += cpf[i] * (i + 1);
	}

	let v1 = soma % 11;

	if (v1 === 10) {
		v1 = 0;
	}

	soma = 0;
	cpfCopia[ cpfCopia.length] = v1;
    console.log(cpfCopia)

	for (let i = 0; i <  cpfCopia.length; i++) {
		soma += cpfCopia[i] * i;
	}

	let v2 = soma % 11;

	if (v2 === 10) {
		v2 = 0;
	}

    /////////

    if(cpf[cpf.length -2] === v1 && cpf[cpf.length -1] === v2){
        return true
    }

   
	else return false;
}

// console.log(verificaCPF());