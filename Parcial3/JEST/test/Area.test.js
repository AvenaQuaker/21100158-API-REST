const areaCuadrado = require("../src/Modulo.js");

describe("Pruebas para la función areaCuadrado", () => {
    test("Calcula el área de un cuadrado con lado 4", () => {
        expect(areaCuadrado(4)).toBe(16);
    });

    test("Calcula el área de un cuadrado con lado 0", () => {
        expect(areaCuadrado(0)).toBe(0);
    });

    test("Calcula el área de un cuadrado con lado 2.5", () => {
        expect(areaCuadrado(2.5)).toBeCloseTo(6.25);
    });
});
