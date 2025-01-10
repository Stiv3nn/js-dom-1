//Consegna:
//Inseriamo in pagina l’immagine della lampadina spenta che trovate in allegato e accanto un bottone con la scritta “Accendi”.
//Al click del bottone, la lampadina dovrà accendersi (dovremo quindi utilizzare l’immagine della lampadina accesa, sempre in allegato)


//Array per le immagini
const img = [
    'img/white_lamp.png',
    'img/yellow_lamp.png'
];

let imgIndice = 0;

function changeImage() {

    //ciclo per il cambio dell'immagine
    imgIndice = (imgIndice + 1) % img.length;
    document.getElementById('off').src = img[imgIndice];
}