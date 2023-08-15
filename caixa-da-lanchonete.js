import {Cardapio} from "./itens.js"
import {FormasDePagamento} from "./formadepagamento.js"
class CaixaDaLanchonete {
    constructor() {
        this.cardapio = new Cardapio();
        this.formasDePagamento = new FormasDePagamento();
    }

    calcularValorDaCompra(metodoDePagamento, itens) {
        if (!this.formasDePagamento.verificarFormaDePagamento(metodoDePagamento)) {
            return 'Forma de pagamento inválida.';
        }

        if (itens.length === 0) {
            return 'Não há itens no carrinho de compra!';
        }

        let total = 0;
        const itensSelecionados = {};
        const itensPrincipais = [];
        const itensExtras = [];

        for (const item of itens) {
            const [codigo, quantidade] = item.split(',');
            const itemMenu = this.cardapio.buscarItemPorCodigo(codigo.trim());
            
            if (itemMenu) {
                if (!itemMenu.descricao.includes('(extra ')) {
                    itensPrincipais.push(itemMenu);
                } else {
                    itensExtras.push(itemMenu);
                }

                if (!quantidade) {
                    return "insira a quantidade do item"
                }

                const descricaoItem = itemMenu.descricao;
                itensSelecionados[descricaoItem] = (itensSelecionados[descricaoItem] || 0) + parseInt(quantidade);
                total += itemMenu.valor * parseInt(quantidade);
            } else {
                console.log("Item inválido!");
            }
        }

        const erroItensExtras = this.verificarItensExtras(itensPrincipais, itensExtras);
        if (erroItensExtras) {
            return erroItensExtras;
        }

        if (total === 0) {
            return 'Quantidade inválida!';
        }

        return `Total a pagar (${metodoDePagamento}): R$ ${total.toFixed(2)}`;
    }

    verificarItensExtras(itensPrincipais, itensExtras) {
        for (const extra of itensExtras) {
            if (extra.codigo.includes('chantily') && !itensPrincipais.some(principal => principal.codigo.includes('cafe'))) {
                return "Item extra (chantily) não pode ser pedido sem o principal (café)."
            } else if (extra.codigo.includes('queijo') && !itensPrincipais.some(principal => principal.codigo.includes('sanduiche'))) {
                return "Item extra (queijo) não pode ser pedido sem o principal (sanduíche)."
            }
        }
        return null;
    }
}