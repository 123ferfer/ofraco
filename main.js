alert('Vai tomando vagabunda');
let nomeUsuario = "";
let texto = document.querySelector('#texto');

while(nomeUsuario == ""){
    nomeUsuario = prompt('Volta pra mim Nauan');
}

if (nomeUsuario == null){
    texto.textContent = 'Usuário';
} else{
    texto.textContent = nomeUsuario;
}


