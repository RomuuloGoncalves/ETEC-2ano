class Conta {
	#saldo;

	constructor(saldoInicial) {
		this.#saldo = saldoInicial;
	}

	deposito(valor) {
		this.#saldo += valor;
	}

	saque(valor) {
		this.#saldo -= valor;
	}

	ConsultaSaldo() {
		return this.#saldo;
	}
}

conta = new Conta(1000);
conta.deposito(500);
conta.saque(400);
document.write("Saldo: " + conta.ConsultaSaldo());



