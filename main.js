  const usuario = document.getElementById('usuario');
  const container = document.getElementById('carrinho');

  // Se os elementos existem (ou seja, estamos no carrinho)
  if (usuario) {
    const nomeSalvo = localStorage.getItem('nomeUsuario');
    if (nomeSalvo) {
      usuario.textContent = nomeSalvo;
    }

    const carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];

    if (carrinho.length > 0) {
      container.innerHTML = carrinho.map(prato => `
        <div class="cardapioclone">
          <img src="${prato.imagem}" class="imgprato" alt="${prato.nome}">
          <h2>${prato.nome}</h2>
          <p><b>${prato.descricao}</b></p>
          <h3>Preço: <b>${prato.preco}</b></h3>
        </div>
      `).join('');
    } else {
      container.innerHTML = "<p>Nenhum prato foi adicionado ao carrinho.</p>";
    }
  }
