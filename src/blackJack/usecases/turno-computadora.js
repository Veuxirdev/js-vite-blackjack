import {pedirCarta, valorCarta, crearCartaHTML} from './index'

/**
 * 
 * @param {number} puntosMinimos puntos minimos necesarios para que la computadora gane
 * @param {HTMLElement} puntosHTML elemento html para mostrar los puntos 
 * @param {HTMLElement} divCartasComputadora elemento html para mostrar las cartas
 * @param {Array<String>} deck arreglo de cartas
 */
export const turnoComputadora = ( puntosMinimos, puntosHTML, divCartasComputadora, deck = []) => {

    let puntosComputadora = 0;

    if(!puntosMinimos) throw new Error('los puntos minimos son necesarios');
    if(!puntosHTML) throw new Error('la referencia puntosHTML es necesaria');
    if(!divCartasComputadora) throw new Error('la referencia divCartasComputadora es necesaria');

    do {
        const carta = pedirCarta( deck );

        puntosComputadora = puntosComputadora + valorCarta( carta );
        puntosHTML.innerText = puntosComputadora;
        
        const imgCarta = crearCartaHTML(carta);
        divCartasComputadora.append( imgCarta );


        if( puntosMinimos > 21 ) {
            break;
        }

    } while(  (puntosComputadora < puntosMinimos)  && (puntosMinimos <= 21 ) );

    setTimeout(() => {
        if( puntosComputadora === puntosMinimos ) {
            alert('Nadie gana :(');
        } else if ( puntosMinimos > 21 ) {
            alert('Computadora gana')
        } else if( puntosComputadora > 21 ) {
            alert('Jugador Gana');
        } else {
            alert('Computadora Gana')
        }
    }, 100 );
}