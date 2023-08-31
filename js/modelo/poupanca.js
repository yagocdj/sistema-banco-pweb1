class Poupanca extends Conta {

    #dataAniversario;

    constructor(numero, saldo, dataAniversario) {
        super(numero, saldo);
        this.#dataAniversario = dataAniversario;
    }

    get dataAniversario() {
        return this.#dataAniversario;
    }

    set dataAniversario(novaData) {
        this.#dataAniversario = novaData;
    }

    toString() {
        return `{Poupança: ${super.numero} | saldo: ${super.saldo} | dataAniversario: ${this.#dataAniversario}}`;
    }
}