import * as chai from "chai";
import chaiHttp from "chai-http";
import { app } from "../Server.js";

chai.use(chaihttp);
const { expect } = chai;

describe("Pruebas a la API", () => {
    it("Debe Responder", (done) => {
        chai.request(app)
            .get("/")
            .end((req, res) => {
                expect(res).to.have.status(200);
                done();
            });
    });
});
