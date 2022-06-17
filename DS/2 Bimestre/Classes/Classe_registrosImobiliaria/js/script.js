class imovel{
    constructor(endereco_imovel, valorAluguel_imovel, valorVenda_imovel, descricaoGeral_imovel, proprietario){
        this.endereco_imovel = endereco_imovel
        this.valorAluguel_imovel = valorAluguel_imovel
        this.valorVenda_imovel = valorVenda_imovel
		this.descricaoGeral_imovel = descricaoGeral_imovel
		this.proprietario = proprietario
    }
	mostrarCadastro() {
		document.getElementById("mostrar_cadastro").innerHTML += `<tr> <td>${this.endereco_imovel}</td> <td>${this.valorAluguel_imovel}</td> </tr>`;
		console.log(this.proprietario.nome)
	}
}

class comodo{
    constructor(qtd_quartos, qtd_banheiro){
        this.qtd_quartos = qtd_quartos
        this.qtd_banheiro = qtd_banheiro
    }
}

class proprietario{
    constructor(
		nome_proprietario,
		cpf_proprietario,
		endereco_proprietario,
	) {
		this.nome_proprietario = nome_proprietario;
		this.cpf_proprietario = cpf_proprietario;
		this.endereco_proprietario =endereco_proprietario
	}	mostrarCadastro() {

		document.getElementById(
			"mostrar_cadastro"
		).innerHTML += `<tr> <td>${this.endereco_imovel}</td> <td>${this.valorAluguel_imovel}</td> </tr>`;
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

var cadastro = []
var l = 0
var c = 0

function cadastrar(){


   cadastro[l] = new proprietario(nome.value, cpf.value, enderecoPro.value, geralDesc.value)
   cadastro[l].mostrarCadastroP()
//    c++
//    cadastro[l][c] = new comodo(qtdQuarto.value ,qtdBanheiro.value)
//    c++
//    cadastro[l][c] = new imovel(endereco.value, vAluguel.value, vVenda.value)
//    c++
//    l++  
   
}