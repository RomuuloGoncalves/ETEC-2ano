var tudoOK = 0;
class Computador {
    #nome;
    #qtdMemoria;
    #qtdArmazenamento;
    #dispositivoArmazenamento;
    #preco;

    constructor(
        nome,
        qtdMemoria,
        qtdArmazenamento,
        dispositivoArmazenamento,
        preco
    ) {
        this.nome = nome;
        this.qtdMemoria = qtdMemoria;
        this.qtdArmazenamento = qtdArmazenamento;
        this.dispositivoArmazenamento = dispositivoArmazenamento;
        this.preco = preco;
    }

    //verificando e mostrando o nome
    set nome(valor) {
        let nome = valor;
        nome = nome.trim();
        if (nome === "") {
            spanNome.innerHTML = "Campo vazio";
        } else {
            if (typeof nome === "string") {
                this.#nome = nome;
                tudoOK++;
                spanNome.innerHTML = "";
            } else {
                spanNome.innerHTML = "O nome dever ser um texto";
            }
        }
    }

    get nome() {
        return this.#nome;
    }

    // verificando e mostrando a quantidade de memória ram
    set qtdMemoria(valor) {
        let memoria = valor;
        memoria = memoria.trim();
        if (memoria === "") {
            spanRam.innerHTML = "Campo vazio";
        } else {
            if (memoria < 2) {
                spanRam.innerHTML =
                    "A quantidade de Ram deve ser maior que 2GB";
            } else {
                tudoOK++;
                spanRam.innerHTML = "";
                this.#qtdMemoria = memoria;
            }
        }
    }

    get qtdMemoria() {
        return this.#qtdMemoria;
    }

    // verificando e mostrando a quantidade de armazanamento
    set qtdArmazenamento(valor) {
        let armazanamento = valor;
        armazanamento = armazanamento.trim();

        if (armazanamento === "") {
            spanArmazenamento.innerHTML = "Campo vazio";
        } else {
            if (isNaN(armazanamento)) {
                spanArmazenamento.innerHTML = "Não pode ser texto";
            } else {
                if (Number(armazanamento) < 64) {
                    spanArmazenamento.innerHTML =
                        "Capacidade minima de amarzanamento: 64GB";
                } else {
                    tudoOK++;
                    spanArmazenamento.innerHTML = "";
                    this.#qtdArmazenamento = armazanamento;
                }
            }
        }
    }

    get qtdArmazenamento() {
        return this.#qtdArmazenamento;
    }

    // verficando e mostrando o dispositivo de armazenamento
    set dispositivoArmazenamento(valor) {
        let dispositivo = valor;
        dispositivo = dispositivo.trim();
        dispositivo = dispositivo.toLowerCase();

        if (dispositivo === "") {
            spanDispositivoArm.innerHTML = "Campo vazio";
        } else {
            if (dispositivo !== "hd" && dispositivo !== "ssd") {
                spanDispositivoArm.innerHTML = "O armazenamneto deve ser em HD ou SSD";
            } else {
                tudoOK++;
                spanDispositivoArm.innerHTML = "";
                this.#dispositivoArmazenamento = dispositivo;
            }
        }
    }

    get dispositivoArmazenamento() {
        return this.#dispositivoArmazenamento;
    }

    // verficando e mostrando preço
    set preco(valor) {
        let precoComputador = valor;
        precoComputador = precoComputador.trim();
        if (precoComputador === "") {
            spanPreco.innerHTML = "Campo vazio";
        } else {
            if (isNaN(precoComputador)) {
                spanPreco.innerHTML = "Não pode ser texto";
            } else {
                if (Number(precoComputador) < 1000) {
                    spanPreco.innerHTML = "O preço dever ser igual ou maior a 1000 reais";
                } else {
                    tudoOK++;
                    this.#preco = precoComputador;
                    spanPreco.innerHTML = "";
                }
            }
        }
    }

    get preco() {
        return this.#preco;
    }

    // mostrar insert
    gerarInsert() {
        tabela.innerHTML += `<td> INSERT INTO computadores VALUES (${id}, ${this.nome},${this.qtdMemoria}, ${this.qtdArmazenamento}, ${this.dispositivoArmazenamento}, ${this.preco})</td>`;
        id++
    }
}

const nome = document.getElementById("nome");
const spanNome = document.getElementById("spanNome");

const ram = document.getElementById("RAM");
const spanRam = document.getElementById("spanRAM");

const Armazenamento = document.getElementById("Armazenamento");
const spanArmazenamento = document.getElementById("spanArmazenamento");

const dispositivoArm = document.getElementById("DispositivoArm");
const spanDispositivoArm = document.getElementById("spanDispositivoArm");


const preco = document.getElementById("preco");
const spanPreco = document.getElementById("spanPreco");

const tabela = document.getElementById("mostrar_cadastro");

var pc = [];
var indice = 0;
var id = 0

function cadastrar() {
    pc[indice] = new Computador(
        nome.value,
        ram.value,
        Armazenamento.value,
        dispositivoArm.value,
        preco.value
    );
    if (tudoOK === 5) {
        pc[indice].gerarInsert();
        indice++;

        if (indice >= 1) {
            let scroll = document.getElementById("active");
            scroll.classList.add("ativar");

            let p = document.getElementById("cadastro");
            p.classList.add("desativar");
        }

        tudoOK = 0;

        setTimeout(desfazer, 1000 * 1.5);
    }
    tudoOK = 0
}

function desfazer() {
    nome.value = "";
    ram.value = "";
    Armazenamento.value = "";
    dispositivoArm.value = "";
    preco.value = "";
}
