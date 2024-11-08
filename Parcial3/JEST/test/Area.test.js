const { areaCuadrado, obtenerLado } = require("../src/Modulo.js");

jest.mock("../src/Modulo.js", () => ({
    ...jest.requireActual("../src/Modulo.js"),
    obtenerLado: jest.fn(),
}));

describe("Pruebas para la función areaCuadrado con función mock", () => {
    beforeEach(() => {
        obtenerLado.mockClear();
    });

    test("Calcula el área de un cuadrado cuando obtenerLado retorna 4", () => {
        obtenerLado.mockReturnValue(4);
        expect(areaCuadrado()).toBe(16);
    });

    test("Calcula el área de un cuadrado cuando obtenerLado retorna 3", () => {
        obtenerLado.mockReturnValue(3);
        expect(areaCuadrado()).toBe(9);
    });
});
