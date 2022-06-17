function feedback() {
    let nome = verificarNome();
    let cpf = verificarCPF();
    let cargo = verificarCargo();
    let salario = verificarSalario();

    let insert = "insert into Funcionario values ('" + nome + "', '" + cpf + ", '" + cargo + "', " + salario + ")"

    if (nome !== false && cpf && cargo && salario) {
        let ativar = document.getElementById("realizado")
        ativar.classList.add("ativar")
        document.getElementById("realizado").innerHTML = "Cadastro realizado com sucesso"
        document.getElementById("cadastro").innerHTML = insert
    }

    else{
        let ativar = document.getElementById("realizado")
        ativar.classList.remove("ativar")
        document.getElementById("realizado").innerHTML = " "
        document.getElementById("cadastro").innerHTML = " "
    }
}

function verificarNome() {
    let nome = document.getElementById("nome").value;
    let indice = nome.length;
    let espaco = 0;

    for (let i = 0; i < indice; i++) {
        if (nome[i] == " ") {
            espaco++;
        }
    }

    if (espaco == indice) {
        document.getElementById("feedback_nome").innerHTML = "Preencha o campo 'Nome' ";
        return false
    } else {
        document.getElementById("feedback_nome").innerHTML = " ";
        return nome;
    }
}

function verificarCPF() {
    let cpf = document.getElementById("cpf").value;
    let tamanho_cpf = cpf.length;
    let multiplicar = [];
    let multiplicador = 10;
    let soma = 0;
    let cpf2 = [];
    let verificar_igualdade = 0;

    ///////

    
    let espaco_cpf = 0;

    for (let i = 0; i < tamanho_cpf; i++) {
        if (cpf[i] == " ") {
            espaco_cpf++;
        }
    }

    if (espaco_cpf == tamanho_cpf) {
        document.getElementById("feedback_cpf").innerHTML = "Preencha o campo 'CPF'";
    } else {
        

    //////////

    for (let i = 0; i < 9; i++) {
        multiplicar[i] = cpf[i] * multiplicador;
        multiplicador--;
        soma += multiplicar[i];
    }

    resto = soma % 11;
    primeiro_verificador = 11 - resto;

    if (resto >= 10) {
        primeiro_verificado = 0;
    }

    for (i = 0; i <= 9; i++) {
        cpf2[i] = cpf[i];

        if (i == 9) {
            cpf2[i] = primeiro_verificador;
        }
    }

    soma = 0;
    multiplicador = 11;

    for (i = 0; i < 10; i++) {
        multiplicar[i] = cpf2[i] * multiplicador;
        multiplicador--;
        soma += multiplicar[i];
    }

    resto = soma % 11;
    segundo_verificador = 11 - resto;

    if (segundo_verificador >= 10) {
        segundo_verificador = 0;
    }

    cpf2_tamanho = cpf2.length;
    cpf2[cpf2_tamanho] = segundo_verificador;

    for (i = 0; i < tamanho_cpf; i++) {
        if (cpf[i] != cpf2[i]) {
            verificar_igualdade++;
        }
    }

    if (verificar_igualdade > 0) {
        document.getElementById("feedback_cpf").innerHTML = "Por favor, inserir um cpf valido";
    } else {
        document.getElementById("feedback_cpf").innerHTML = ""
        return cpf;
    }
}

}

function verificarCargo() {
    let cargo = document.getElementById("cargo").value;
    let tamanho_cargo = cargo.length;
    let espaco = 0;

    for (let i = 0; i < tamanho_cargo; i++) {
        if (cargo[i] == " ") {
            espaco++;
        }
    }

    if (espaco == tamanho_cargo) {
        document.getElementById("feedback_cargo").innerHTML ="Preencha o campo 'Cargo'";
    } else {
        cargo = cargo.trim();
        cargo = cargo.toLowerCase();

        if (
            cargo == "cozinheiro" ||
            cargo == "metri" ||
            cargo == "garçom" ||
            cargo == "recepcionista"
        ) {
            document.getElementById("feedback_cargo").innerHTML = " "
            return cargo;
        } else {
            document.getElementById("feedback_cargo").innerHTML = 
                "Verifique se o cargo é valido ou se está escrito corretamente"
            ;
        }
    }
}

function verificarSalario() {
    let salario = document.getElementById("salario").value;
    let indice_salario = salario.length;
    let espaco = 0;

    for (let i = 0; i < indice_salario; i++) {
        if (nome[i] == " ") {
            espaco++;
        }
    }

    if (espaco == indice_salario) {
        document.getElementById("feedback_salario").innerHTML  = "Preencha o campo 'Salário'";
    } else {
        if (salario < 1212.00) {
            document.getElementById("feedback_salario").innerHTML  = "O salário dever ser acima do salário minímo";
        } else {
            document.getElementById("feedback_salario").innerHTML  = " ";
            return salario;
        }
    }
}