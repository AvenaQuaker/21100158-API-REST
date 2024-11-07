import { areaCuadrado } from "../src/Modulo.js";
import test from "node:test";
import * as chai from "chai";

test("Igual que el Correcto", () => {
    let area = areaCuadrado(5);
    chai.assert.equal(area, 25);
    chai.assert.typeOf(area, "number");
});

test("Es de Tipo Numerico", () => {
    let area = areaCuadrado(5);
    chai.expect(area).to.be.a("number");
});
