const divtitulo = document.querySelector('.divtitulo');
const inputnome = document.getElementById('inputnome');
const inputtel = document.getElementById('inputtel');
const inputendereco = document.getElementById('inputendereco');

const nomecontent = inputnome.value;

inputnome.addEventListener('keydown', function(key){
  if(key.key == 'Enter') {
    usuario.textContent = inputnome.value;
    localStorage.setItem('nomeUsuario', inputnome.value); // salva o nome
    window.location.href = 'main.html'
  }
})