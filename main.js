const data = new Date();

function obterDiaAtual() {
  const diaAtual = new Intl.DateTimeFormat('pt-BR', { weekday: 'long' }).format(data);
  console.log('Hoje é:', diaAtual);
}
obterDiaAtual();

function atualizarContadorCarrinho() {
  const contador = document.getElementById('contador');
  const carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
  if (contador) {
    contador.textContent = carrinho.length;
  }
}
atualizarContadorCarrinho();

// Captura todos os pratos existentes no HTML
const pratos = document.querySelectorAll('.cardapio');

// ... código anterior ...

pratos.forEach(pratoDiv => {
  const nome = pratoDiv.querySelector('h2').textContent;
  const descricao = pratoDiv.querySelector('p').textContent;
  const preco = pratoDiv.querySelector('h3').textContent.replace('Preço: ', '');
  const imagem = pratoDiv.querySelector('img').getAttribute('src');

  const botao = document.createElement('button');
  botao.textContent = 'Adicionar ao carrinho';

  const btnQuantidade = document.createElement('button');
  btnQuantidade.className = 'btnQuantidadeAdd';
  btnQuantidade.textContent = '➕'; // símbolo mais claro para adicionar

  const inputQuantidade = document.createElement('input');
  inputQuantidade.className = 'inputQuantidadeNumber';
  inputQuantidade.type = 'number';
  inputQuantidade.value = 1; // começa com 1
  inputQuantidade.min = 1;
    inputQuantidade.value.max = 6

  // evento de clique no botão de quantidade
  btnQuantidade.addEventListener('click', function () {
    inputQuantidade.value = Number(inputQuantidade.value) + 1;
    if (inputQuantidade.value > 6) {
      inputQuantidade.value = Number(inputQuantidade.value) -1;
    }
  });

  // botão de adicionar ao carrinho
  botao.onclick = function () {
    const carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];

    const jaExiste = carrinho.some(item => item.nome === nome && item.descricao === descricao);
    if (jaExiste) {
      alert(`O prato "${nome}" já foi adicionado ao carrinho.`);
      return;
    }

    adicionarNoCarrinho(nome, descricao, preco, imagem);
    atualizarContadorCarrinho();
  };

  pratoDiv.appendChild(botao);
  pratoDiv.appendChild(btnQuantidade);
  pratoDiv.appendChild(inputQuantidade);
});
