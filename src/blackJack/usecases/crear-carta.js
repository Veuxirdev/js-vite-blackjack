    
/**
 * 
 * @param {string} carta 
 * @returns {HTMLImageElement} imagen de la carta
 */

export const crearCartaHTML = ( carta ) => {

    if(!carta) throw Error('carta es un argumento obligatorio')

    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${ carta }.png`;
    imgCarta.classList.add('carta');
    return imgCarta;
}
    
    
    