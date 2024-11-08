function areaCuadrado() {
    const lado = obtenerLado();
    return lado * lado;
}

function obtenerLado() {
    return 4;
}

module.exports = { obtenerLado, areaCuadrado };
