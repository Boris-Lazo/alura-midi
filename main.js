function playSonido (idElementoAudio){
    document.querySelector(idElementoAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');

for(let contador = 0;contador < listaDeTeclas.length;contador++){

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];

    const idAudio = `#sonido_${instrumento}`;

    tecla.onclick = function (){
        playSonido(idAudio);
    };
       
}

/* //Sonido POM
function playSonidoPom (){
    document.querySelector('#sonido_tecla_pom').play;
}
document.querySelector('.tecla_pom').onclick = playSonidoPom; // Aquí se llama la función, pero sin los parentesis, porque sino el navegador nos lanzará un error ya que se ejecutaría automaticamente.

//Sonido Clap
function playSonidoClap() {
    document.querySelector('#sonido_tecla_clap').play()
}
document.querySelector('.tecla_clap').onclick = playSonidoClap; */