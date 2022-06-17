class produto{
    constructor(nome_produto, marca_produto, preco_c, preco_v){
        this.nome = nome_produto;
        this.marca = marca_produto;
        this.preco_custo = preco_c;
        this.preco_vendas = preco_v;
    }

    lucro(){
        return this.preco_vendas - this.preco_custo
    }

    mostrar(){
        document.getElementById("mostrar").innerHTML += `<div>Nome: ${this.nome} <br> Marca ${this.marca} <br> Preço de custo ${this.preco_custo} <br> Preço de venda ${this.preco_vendas} <br> Lucro: ${this.lucro()}</div> <br>`
    }

}

var produtos = [];
var i = 0;

const button = document.getElementById("btn-mobile");

button.addEventListener("click", ()=>{
    let nomeId = document.getElementById("nome").value
    let marcaId = document.getElementById("marca").value
    let precoCustoId = document.getElementById("precoC").value
    let precoVendaId = document.getElementById("precoV").value

    produtos[i] = new produto(nomeId, marcaId, precoCustoId, precoVendaId);  
    produtos[i].mostrar();

    i++
});
