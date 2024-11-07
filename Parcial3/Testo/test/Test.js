import assert from "node:assert";
import test from "node:test";
import { areaCuadrado } from "../src/Modulo.js";

test("areaCuadrado", () => {
    let area = areaCuadrado(5);
    assert.strictEqual(area, 25);
});
