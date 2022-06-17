class Filme {
    #titulo
    #duracao
    #genero
    constructor(titulo, duracao, genero){
        this.titulo = titulo
        this.duracao = duracao
        this.genero = genero
    }

    get titulo(){
        return this.#titulo
    }

    set titulo(titulo){

        if(titulo === "" || typeof(titulo) === "number"){
            throw("Coloque o nome de um filme válido")
        }else{
            this.#titulo = titulo
        }
    }

    get duracao(){
        return this.#duracao
    }

    set duracao(duracao){
        if(duracao <= 0){
            throw("A duração deve ser maior que zero")
        }else{
            this.#duracao = duracao
        }
    } 

    get genero(){
        return this.#genero
    }

    set genero(genero){
        genero = genero.toLowerCase()
        if(genero != "romance" && genero != "terror" && genero != "comédia"){
            throw("O gênero deve ser Romance, Terror ou Comédia")
        }else{
            this.#genero = genero
        }
    } 
}



var filme = new Filme("Algum-filme", 180, "romance")
console.log(filme.titulo)

filme.titulo = "a"
console.log(filme.titulo)

filme.duracao = 0
console.log(filme.duracao)