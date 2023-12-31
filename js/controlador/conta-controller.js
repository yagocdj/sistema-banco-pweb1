class ContaController {
    constructor() {
        this.repositorioContas = new RepositorioContas();
    }

    adicionarConta(conta) {
        this.repositorioContas.adicionar(conta);
    }

    listar() {
        this.repositorioContas.getContas().forEach(conta =>
            this.inserirContaNoHTML(conta)
        );
    }

    inserir(evento) {
        evento.preventDefault();
        const elementoNumero = document.querySelector('#numero');
        const elementoSaldo = document.querySelector('#saldo');
        const elementoDataAniversario = document.querySelector('#data-aniversario');
        const elementoTipoDeConta = document.querySelector('#opcoes-tipos-conta');

        const tipoDaConta = elementoTipoDeConta.value;
        let conta;
        switch (tipoDaConta) {
            case 'conta':
                conta = new Conta(elementoNumero.value,
                    Number(elementoSaldo.value));
                break;
            case 'conta-bonificada':
                conta = new ContaBonificada(elementoNumero.value,
                    Number(elementoSaldo.value));
                break;
            case 'poupanca':
                conta = new Poupanca(elementoNumero.value,
                    Number(elementoSaldo.value),
                    elementoDataAniversario.value);
                break;
            default:
                break;
        }

        this.repositorioContas.adicionar(conta);
        this.inserirContaNoHTML(conta, tipoDaConta);
    }

    inserirContaNoHTML(conta) {
        const elementoP = document.createElement('p');
        // cada classe tem o seu toString -> textContent vai ser exatamente ele
        elementoP.textContent = conta;
        const botaoApagar = document.createElement('button');
        botaoApagar.textContent = 'X';

        botaoApagar.addEventListener('click', (event) => {
            this.repositorioContas.remover(conta.numero);
            event.target.parentElement.remove();
        });

        elementoP.appendChild(botaoApagar);
        document.body.appendChild(elementoP);
    }
}
