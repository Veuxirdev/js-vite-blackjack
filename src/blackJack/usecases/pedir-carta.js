

/**
 * Retira una carta del arreglo
 * @param {Array<Strings>} deck Ejemplo : [AC, 2C,];
 * @returns {String}retorna la ultima cata como string de el arreglo de deck
 */

export const pedirCarta = ( deck ) => {

    if ( deck.length === 0 || !deck) {
        throw new Error('No hay cartas en el deck');
    }
    const carta = deck.pop();
    return carta;
}