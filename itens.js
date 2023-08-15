class CaixaDaLanchonete {
    class Cardapio {
        constructor() {
            this.itens = [
                { codigo: 'cafe', descricao: 'Café', valor: 3.00 },
                { codigo: 'chantily', descricao: 'Chantily (extra do Café)', valor: 1.50 },
                { codigo: 'suco', descricao: 'Suco Natural', valor: 6.20 },
                { codigo: 'sanduiche', descricao: 'Sanduíche', valor: 6.50 },
                { codigo: 'queijo', descricao: 'Queijo (extra do Sanduíche)', valor: 2.00 },
                { codigo: 'salgado', descricao: 'Salgado', valor: 7.25 },
                { codigo: 'combo1', descricao: '1 Suco e 1 Sanduíche', valor: 9.50 },
                { codigo: 'combo2', descricao: '1 Café e 1 Sanduíche', valor: 7.50 }
            ];
        }
    
        buscarItemPorCodigo(codigo) {
            return this.itens.find(item => item.codigo === codigo);
        }
    
        exibirCardapio() {
            console.log('Código   Descrição                     Valor');
            console.log('--------------------------------------------');
            this.itens.forEach(item => {
                console.log(`${item.codigo.padEnd(15)}${item.descricao.padEnd(30)}R$ ${item.valor.toFixed(2)}`);
            });
        }
    }