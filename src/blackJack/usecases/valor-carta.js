

/**
 * Calcula el valor de la carta
 * @param {string} carta Ejemplo: 'AC' o '2C'
 * @returns {Number}retorna un numero quivalente al valor de la carta proporcionada
 */
export const valorCarta = ( carta ) => {

    if(!carta || carta.length === 0)
        throw new Error('carta es obligatorio que sea un string');
    const valor = carta.substring(0, carta.length - 1);
    return ( isNaN( valor ) ) ? 
            ( valor === 'A' ) ? 11 : 10
            : valor * 1;
}