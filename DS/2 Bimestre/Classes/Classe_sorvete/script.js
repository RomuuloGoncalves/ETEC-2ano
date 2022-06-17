 // definição da classe
 class sorvete{
    constructor(nome,marca,preco){
        this.nome = nome;
        this.marca = marca;
        this.preco = preco;
    }

    Mostrar() {
        document.write("Nome: " + this.nome + "<br>")
        document.write("Marca: " + this.marca + "<br>")
        document.write("Preço: " + this.preco + "<br><br>")
        
    }
}

// criação de objeto
var s1 = new sorvete ("Chocolate", "icetec", 23.45)
var s2 = new sorvete ("Abacaxi", "icetec", 39.00)
var s3 = new sorvete ("Morango", "icetec", 89.00)
var s4 = new sorvete ("Uva", "icetec", 10.00)

//mostrando-1
// document.write("Nome: " + s1.nome + "<br>")
// document.write("Marca: " + s1.marca + "<br>")
// document.write("Preço: " + s1.preco + "<br>")

// mostrando-2
s1.Mostrar()
s2.Mostrar()
s3.Mostrar()
s4.Mostrar()