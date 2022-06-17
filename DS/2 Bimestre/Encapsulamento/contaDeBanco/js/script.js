var contarConsultas = 0;

class Conta{
    #saldo
    constructor(saldo){
        this.saldoInicial = saldo
    }

    set saldoInicial(saldo){
        if(typeof(saldo) !== "number" || saldo <= 0 ){
            throw "Saldo inicial inválido"
        } else{
            this.#saldo = saldo
        }
    }

    get saldo(){
        return this.#saldo
    }

    set saldo(novoSaldo){
        if(typeof(novoSaldo) !== "number" || novoSaldo <= 0 ){
            throw "Novo saldo inválido"
        } else{
            this.#saldo = novoSaldo
        }
    }

    deposito(depositado) {
        let taxa = ((depositado * 1) / 100);
        this.#saldo -= taxa;
        this.#saldo += depositado;
    }

    saque(valor) {
        let taxa = (valor * 1.5) / 100;
        this.#saldo -= taxa;
        this.#saldo -= valor;
    }

    consulta() {
        if (contarConsultas === 5) {
            this.#saldo -= 0.1;
            contarConsultas = 0;
        }

        contarConsultas++
        console.log(this.#saldo.toFixed(2));
        return this.#saldo
    }
    transferencia(destino, quantia){
        destino.deposito(quantia)
        this.#saldo -= quantia
    }
}

conta = new Conta(100)
usuario = new Conta(200)
console.log(conta.saldo)

conta.saldo = 5
console.log(conta.saldo)


conta.deposito(500);
console.log(conta.saldo)

conta.saque(100);
console.log(conta.saldo)

for (let i = 0; i < 11; i++) {
    conta.consulta();
}

usuario.transferencia(conta, 100)

console.log(conta.saldo)
console.log(usuario.saldo)




