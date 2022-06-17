 // definição da classe
 class Aluno{
    constructor(nome, prova, trabalho,lista){
        this.nome = nome;
        this.prova = prova;
        this.trabalho = trabalho;
        this.lista = lista;
    }

    Mostrar() {
        let aprovado = this.aprovado()

        document.write("Nome: " + this.nome + "<br>")
        document.write("Prova: " + this.prova + "<br>")
        document.write("Trabalho: " + this.trabalho + "<br>")
        document.write("Lista: " + this.lista + "<br>")
        document.write("Média: " + ((this.prova +this.lista+this.trabalho)/3).toFixed(2) + "<br>")
        document.write("Situação: " + aprovado + "<br><br>")
    }
    aprovado(){
        let media = (this.prova +this.lista+this.trabalho) / 3
        if(media > 7){
            return "Aprovado"
        }

        else{
            return "Reprovado"
        }
    }

        
    }


// criação de objeto
var a1 = new Aluno ("Rômulo", 10, 9, 9)
var a2 = new Aluno ("Pedro", 7, 5, 4)
var a3 = new Aluno ("Lucas", 8, 8, 8)
var a4 = new Aluno ("Beatriz", 10, 10, 10)

a1.Mostrar()
a2.Mostrar()
a3.Mostrar()
a4.Mostrar()