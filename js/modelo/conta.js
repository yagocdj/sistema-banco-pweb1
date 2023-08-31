class Conta {

    #saldo;
    #numero;

    constructor(numero, saldo=0) {
        this.#saldo = saldo;
        this.#numero = numero;
    }

    debitar(valor) {
        if (this.#saldo >= valor){
            this.#saldo -= valor;
        }
    }

    creditar(valor) {
        this.#saldo += valor;
    }

    transferir(destino, valor) {
        this.debitar(valor);
        destino.creditar(valor);
    }

    get saldo() {
        return this.#saldo;
    }

    get numero() {
        return this.#numero;
    }

    toString() {
        return `{Conta: ${this.#numero} | saldo: ${this.#saldo}}`;
    }

}
