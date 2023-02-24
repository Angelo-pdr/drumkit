const sons ={
    'A': 'boom.wav',
    'S': 'clap.wav',
    'D': 'hihat.wav',
    'F': 'kick.wav',
    'G': 'openhat.wav',
    'H': 'ride.wav',
    'J': 'snare.wav',
    'K': 'tink.wav',
    'L': 'tom.wav',
}

const criarDiv = (texto) => {
    const div = document.createElement('div')
    div.classList.add('drum__key')
    div.innerHTML = texto;
    div.id = texto;
    document.getElementById('drum').appendChild(div)
}

const exibir = (sons) => Object.keys(sons).forEach(criarDiv)

function tocaSom(letra){
    const audio = new Audio(`./sounds/${sons[letra]}`)
    audio.play()
}

const adicionarEfeito = (letra) => document.getElementById(letra).classList.toggle('active')

function ativaDiv(event){
    const letra = event.type == 'click' ? event.target.id : event.key.toUpperCase()

    const letraPemitida = sons.hasOwnProperty(letra)
    if(letraPemitida){
        adicionarEfeito(letra)
        tocaSom(letra)
    }
}


exibir(sons)
document.querySelector('.drum').addEventListener('click', ativaDiv)
window.addEventListener('keyup', ativaDiv)