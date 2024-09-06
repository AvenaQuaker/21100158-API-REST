import { Router } from "express";
import { Verificacion } from "../Middlewares/Verificacion.js";

export const crearRouter = () => {
    const nuevoRouter = new Router();

    nuevoRouter.get("/", (req, res) => {
        res.json({ mensaje: "CORS == Mi Diversion nomas" });
    });

    nuevoRouter.post("/Peticion", (req, res) => {
        console.log(req.body);
        return res.json({ mensaje: "CORS == Respondiendo a la Peticion" });
    });

    return nuevoRouter;
};
