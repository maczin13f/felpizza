const usuario = document.getElementById('usuario');

   if (usuario) {
    const nomeSalvo = localStorage.getItem('nomeUsuario');
    if (nomeSalvo) {
      usuario.textContent = nomeSalvo;
    }
}