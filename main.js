const data = new Date();
let quantia = JSON.parse(localStorage.getItem('quantidade'));


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

// Captura todos os pratos do cardápio
const pratos = document.querySelectorAll('.cardapio');
const secaoCardapio = document.getElementById('pratos');
const secaoInfo = document.querySelector('#pratosinfo');
const pratosInfo = document.querySelectorAll('.infoprato'); // use class nas divs dentro de #pratosinfo

pratos.forEach(pratoDiv => {
  const nome = pratoDiv.querySelector('h2').textContent;
  const descricao = pratoDiv.querySelector('p').textContent;
  const preco = pratoDiv.querySelector('h3').textContent.replace('Preço: ', '');
  const imagem = pratoDiv.querySelector('img').getAttribute('src');

  // Botão adicionar ao carrinho
  const botao = document.createElement('button');
  botao.textContent = 'Adicionar ao carrinho';
  botao.onclick = function () {
    
    const quantidadeSelecionada = Number(inputQuantidade.value);

 inputQuantidade.value = 1;
    
    const carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    const jaExiste = carrinho.some(item => item.nome === nome && item.descricao === descricao);
    if (jaExiste) {
      alert(`O prato "${nome}" já foi adicionado ao carrinho.`);
      return;
      
    }
    adicionarNoCarrinho(nome, descricao, preco, imagem, quantidadeSelecionada);
    atualizarContadorCarrinho();
  };

  // Botão quantidade
  const btnQuantidade = document.createElement('button');
  btnQuantidade.className = 'btnQuantidadeAdd';
  btnQuantidade.textContent = '➕';

  const inputQuantidade = document.createElement('input');
  inputQuantidade.type = 'number';
  inputQuantidade.value = 1;
  inputQuantidade.min = 1;
  inputQuantidade.max = 6;

  btnQuantidade.addEventListener('click', function () {
    let valorAtual = Number(inputQuantidade.value);
    if (valorAtual < 6) {
      inputQuantidade.value = valorAtual + 1;
    }
  });

  pratoDiv.appendChild(botao);
  pratoDiv.appendChild(inputQuantidade);
  pratoDiv.appendChild(btnQuantidade);
  
  const imgCardapio = pratoDiv.querySelector('.cardapio img')

  // Clique no prato mostra info
 //imgCardapio.addEventListener('click', function () {
    // Esconde o cardápio principal
  // secaoCardapio.style.display = 'none';

    // Mostra a seção de info
   // secaoInfo.style.display = '';

    // Esconde todas as infos
  //  pratosInfo.forEach(info => {
    //  info.style.display = 'none';
   // });

    // Mostra a info do prato clicado
   // const idPrato = this.id;
  //  const pratoInfo = document.getElementById(idPrato + '-info');
  //  if (pratoInfo) {
    //  pratoInfo.style.display = '';
    }
  });
});
