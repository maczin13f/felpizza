//Responsavel por adicionar os Pratos Ao Carrinho//

function adicionarNoCarrinho(nome, descricao, preco, imagem) {
    const prato = {
        nome: nome,
        descricao: descricao,
        preco: preco,
        imagem: imagem
    };

    let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    carrinho.push(prato);
    localStorage.setItem('carrinho', JSON.stringify(carrinho));
}
