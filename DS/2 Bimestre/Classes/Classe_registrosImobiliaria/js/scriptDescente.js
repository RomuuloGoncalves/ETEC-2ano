class imovel{
    constructor(endereco, valorAluguel, valorVenda, proprietario){
        this.endereco = endereco
        this.valorAluguel = valorAluguel
        this.valorVenda = valorVenda
        this.proprietario = proprietario
    }

    mostrarCadastro(){
        document.getElementById("mostrar_cadastro").innerHTML += `<tr> <td> ${this.endereco} </td> <td> ${this.valorAluguel} </td> <td> ${this.valorVenda}  </td><td> ${this.proprietario.nome}  </td><td> ${this.proprietario.cpf} </td> <td> ${this.proprietario.dataNascimento}  </td><td> ${this.proprietario.enderecoProprietaro}</td> </tr>` 
    }
}

class comodo{
    
}

class proprietario{
    constructor(nome, cpf, dataNascimento, enderecoProprietaro){
        this.nome = nome
        this.cpf = cpf
        this.dataNascimento = dataNascimento
        this.enderecoProprietaro = enderecoProprietaro
    }
}

const endereco = document.getElementById("endereco")
const vAluguel = document.getElementById("vAluguel")
const vVenda = document.getElementById("vVenda")
const qtdQuarto = document.getElementById("qtdQuarto")
const qtdBanheiro = document.getElementById("qtdBanheiro")
const nome = document.getElementById("nome")
const cpf = document.getElementById("cpf")
const enderecoPro = document.getElementById("enderecoPro")
const geralDesc = document.getElementById("geralDesc")
const dataNascimento = document.getElementById("dataNasc")

function cadastrar(){
    let proprietarios = new proprietario(nome.value, cpf.value, dataNascimento.value, endereco.value)
    let comodos = new comodo()
    let imoveis = new imovel(endereco.value, vAluguel.value, vVenda.value, proprietarios)

    imoveis.mostrarCadastro()


        let scroll = document.getElementById("active");
        scroll.classList.add("ativar");
        let p = document.getElementById("cadastro");
        p.classList.add("desativar");
    

    const btn = document.querySelector("#btn");
    const btnText = document.querySelector("#btnText");

    btnText.innerHTML = "Cadastrado";
    btn.classList.add("active");

    setTimeout(desfazer, 100 * 10);
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