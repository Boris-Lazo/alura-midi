let contador = 0

function playSonido (idElementoAudio){
    document.querySelector(idElementoAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');

while (contador < 9)[
    listaDeTeclas[contador].onclick = playSonido,
    contador = contador + 1,
    console.log(contador),
]

/* function playSonidoPom (){
    document.querySelector('#sonido_tecla_pom').play;
}

document.querySelector('.tecla_pom').onclick = playSonidoPom; //La función debe ser llamada sin los parentesis para que no se ejecute automaticamente.
 */