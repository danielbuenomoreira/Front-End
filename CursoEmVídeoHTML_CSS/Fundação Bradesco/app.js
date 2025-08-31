'use strict'

const switcher = document.querySelector('.btn');

switcher.addEventListener('click', function() {
    document.body.classList.toggle('tema-escuro')

    var classname = document.body.className;
    if(classname == "tema-claro") {
        this.textContent = "Escuro";
    }
    else {
        this.textContent = "Claro";
    }
    
});

function falar() {
    const texto = document.getElementById('text').value;
    const fala = new SpeechSynthesisUtterance(texto);
    speechSynthesis.speak(fala);
  }