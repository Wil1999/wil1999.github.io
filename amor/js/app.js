// Definimos un límite de emojis en pantalla
const COUNT = 150; // Un número ideal para mantener fluida la pantalla

const SIZES = [
    'rainDrop--s', 'rainDrop--s', 'rainDrop--s', 'rainDrop--s',
    'rainDrop--m', 'rainDrop--m', 'rainDrop--m', 'rainDrop--m', 'rainDrop--m',
    'rainDrop--l', 'rainDrop--xl'
];

const EMOJI = ['💕', '💖', '❤️', '🩷', '🩵', '💞', '❤️‍🔥'];

const rainContainer = document.querySelector('.rain-container');

// Aceptamos un nuevo parámetro: 'duration' para la velocidad individual
const genRainDrop = (size, xStart, xEnd, yStart, emoji, duration)=>{
    const r = document.createElement('div');
    r.innerText = emoji;
    r.classList.add('rainDrop', size);
    r.style.setProperty('--x-start', xStart + 'vw');
    r.style.setProperty('--x-end', xEnd + 'vw');
    r.style.setProperty('--y-start', yStart + 'vh');
    r.style.setProperty('--y-end', (yStart + 110) + 'vh');
    
    // CAMBIO AQUÍ: Le asignamos una velocidad única a cada corazón directamente en su estilo
    r.style.animationDuration = duration + 's';

    return r;
}

// Ciclo modificado para crear una lluvia orgánica y constante
for(let i = 0; i < COUNT; i++){
    const size = randFromList(SIZES);
    const xStart = getRamdomArbitrary(0, 100);    
    const xEnd = getRamdomArbitrary(xStart - 15, xStart + 15);
    const emoji = randFromList(EMOJI);
    const yStart = getRamdomArbitrary(-20, -5);
    
    // CAMBIO AQUÍ 1: Cada corazón tendrá una velocidad aleatoria de caída (entre 4 y 8 segundos)
    // Esto hace que unos adelanten a otros y se rompa el "grupo"
    const duration = getRamdomArbitrary(16, 32);
    
    // CAMBIO AQUÍ 2: Multiplicamos el tiempo por el índice 'i'.
    // En lugar de salir todos al segundo 1, va a nacer un corazón nuevo cada 80 milisegundos.
    setTimeout(() => {
        if(rainContainer) {
            rainContainer.appendChild(genRainDrop(size, xStart, xEnd, yStart, emoji, duration));
        }
    }, i * 80); 
}

function randFromList(items){
    return items[Math.floor(Math.random() * items.length)];
}

function getRamdomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

let audioEnabled = false;
function play(){
    var myAudio = document.getElementById('player');
    if (myAudio && !audioEnabled) {
        myAudio.volume = 0.5;
        myAudio.play().catch(e => console.log("Esperando interacción..."));
        audioEnabled = true;
    }
}