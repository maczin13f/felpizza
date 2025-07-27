//Responsavel por adicionar os Pratos Ao Carrinho//

const inputQuantidade = document.createElement('input');

function adicionarNoCarrinho(nome, descricao, preco, imagem, quantidade) {
    const prato = {
        nome: nome,
        descricao: descricao,
        preco: preco,
        imagem: imagem,
        quantidade: quantidade
    };

    let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    carrinho.push(prato);
    localStorage.setItem('carrinho', JSON.stringify(carrinho));
}

function removePedidos() {
    localStorage.removeItem('carrinho')
location.reload();

}