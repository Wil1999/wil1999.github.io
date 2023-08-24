// Definimos un limite de hasta 100 emojis en pantalla
const COUNT = 100;

// Definimos tamaños de emojis que se seleccionaran aleatorios en un arreglo
const SIZES = [
    'rainDrop--s',
	'rainDrop--s',
	'rainDrop--s',
	'rainDrop--s',
	'rainDrop--m',
	'rainDrop--m',
	'rainDrop--m',
	'rainDrop--m',
	'rainDrop--m',
	'rainDrop--l',
	'rainDrop--xl'
];

// Creamos un lista de los emojis que podrian salir en pantallla en un arreglo
const EMOJI = [
    '😀',
    '😁',
    '😘',
    '🙈',
    '🌻',
    '😄',
    '🌷',
    '😆',
    '😉',
    '😊',
    '💕',
    '😍',
    '😘',
    '🥰',
    '😗'
];

// Seleccionamos nuestro contenedor
const rainContainer = document.querySelector('.rain-container');
// Generamos nuevas gotas de emoji
const genRainDrop = (size, xStart, xEnd, yStart, emoji)=>{
    // Creamos los nuevos elementos contenedores de nuestros emojis
    const r = document.createElement('div');
    r.innerText = emoji;
    r.classList.add('rainDrop', size);
    r.style.setProperty('--x-start', xStart + 'vw');
    r.style.setProperty('--x-end', xEnd + 'vw');
    r.style.setProperty('--y-start', yStart + 'vh');
    r.style.setProperty('--y-end', yStart + 200 + 'vh');

    return r;
}

//Creamos un ciclo para recorrer todos nuestros elementos
for(let i=0; i<COUNT; i++){
    // declaramos size y creamos la funcion para hacer el random de nuestros SIZES
    const size = randFromList(SIZES);
    // para buscar un randon en el inicio del eje X
    const xStart = getRamdomArbitrary(0,100);    
    // para buscar un randon en el fin del eje X
    const xEnd = getRamdomArbitrary(xStart - 20, xStart + 20);
    // ahora vamos a crear un rando para nuestros emojis usamos la funcion de SIZE
    const emoji = randFromList(EMOJI);
    // agregamos un ramdon para nuestro eje y
    const yStart = getRamdomArbitrary(-100,0);
    // llamamos a nuestro contenedor y le agregamos nuestros nuevos elementos
    // Modified
    setTimeout(() =>{ rainContainer.appendChild(genRainDrop(size, xStart, xEnd, yStart, emoji))}, 1000);

}



// 1 función para hacer el randon de la lista de tamaños SIZES
function randFromList(items){
    // math.floor nos devolvera un numero entero de lo que saldra del math.ramdom
    return items[Math.floor(Math.random()*items.length)];
}

// función para el random
function getRamdomArbitrary(min,max) {
    return Math.random() * (max - min) + min;
}

function play(){
    var myAudio = document.getElementById('player')
          myAudio.volume = 0.5;
          myAudio.play()
          audioEnabled = true
}