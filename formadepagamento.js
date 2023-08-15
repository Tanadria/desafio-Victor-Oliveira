class FormasDePagamento {
    constructor() {
        this.formas = ['dinheiro', 'debito', 'credito'];
    }

    verificarFormaDePagamento(forma) {
        return this.formas.includes(forma);
    }

    exibirFormasDisponiveis() {
        console.log('Formas de Pagamento Disponíveis:');
        this.formas.forEach(forma => {
            console.log(`- ${forma}`);
        });
    }
}
