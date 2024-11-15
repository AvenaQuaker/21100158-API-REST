let chai = require("chai");
let chaiHttp = require("chai-http");
const expect = require("chai").expect;

chai.use(chaiHttp);
const url = "http://localhost:3002";

describe("GET /api/test", () => {
    it("Deberia Regresarme la Cadena Especifica", () => {
        chai.request(url)
            .get("/api/test")
            .end(function (err, res) {
                expect(res.body.message).to.be.equal("Jest < Chai");
            });
    });
});

describe("GET /api/test", () => {
    it("Deberia Regresarme un Status de 200", () => {
        chai.request(url)
            .get("/api/test")
            .end(function (err, res) {
                expect(res).to.have.status(200);
            });
    });
});
