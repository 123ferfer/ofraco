alert('Vai tomando vagabunda');
let nomeUsuario = "";
let texto = document.querySelector('#texto');

while(nomeUsuario == ""){
    nomeUsuario = prompt('Qual o tamanho da peça?');
}

if (nomeUsuario == null){
    texto.textContent = 'Usuário';
} else{
    texto.textContent = nomeUsuario;
}


