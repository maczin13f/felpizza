 const carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
  const container = document.getElementById('carrinho');

    if (carrinho.length > 0) {
      container.innerHTML = carrinho.map(prato => `
        <div class="cardapioclone">
          <img src="${prato.imagem}" class="imgprato" alt="${prato.nome}">
          <h2>${prato.nome}</h2>
          <p><b>${prato.descricao}</b></p>
          <h3>Preço: <b>${prato.preco}</b></h3>
          <div class ='informacoesAdicionais'>
          <h3>Quantidade:<b>${prato.quantidade}</b></h3>
          </div>
          
          {
            constructor() {
              this.prop = ""
            }
          }>
        </div>
      `).join('');
    } else {
      container.innerHTML = "<p>Nenhum prato foi adicionado ao carrinho.</p>";
    }

    const totalPedidos = document.createElement('p');
const numPedidos = carrinho.length;
totalPedidos.textContent = `Total de pratos no carrinho: ${numPedidos}`;
document.getElementById('carrinhomain').appendChild(totalPedidos);

