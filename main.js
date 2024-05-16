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
    
    tecla.onkeydown = function(event) {
        if (event.code === 'Space' || event.code === 'Enter'){
            tecla.classList.add('activa');
        }
    }
    tecla.onkeyup = function(){
        tecla.classList.remove('activa');
    }

    // //Codigo dado por Gemini
    // tecla.onkeydown = function(event) {
    //     if (event.keyCode === 13) { // Check if Enter key is pressed
    //         tecla.classList.add('activa'); // Activate the key
    //         playSonido(idAudio); // Play the sound
    
    //         // Add a timeout to deactivate the key after a short delay
    //         setTimeout(function() {
    //             tecla.classList.remove('activa'); // Deactivate the key
    //         }, 100); // Adjust the timeout value as needed
    //     }
    // };    
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