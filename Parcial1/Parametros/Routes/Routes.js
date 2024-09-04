import { Router } from "express";
import { Verificacion } from "../Middlewares/Verificacion.js";

export const crearRouter = () => {
    const nuevoRouter = new Router();

    nuevoRouter.get("/", (req, res) => {
        res.json({ mensaje: "CORS == Mi Diversion nomas" });
    });

    nuevoRouter.post("/Ver", Verificacion, (req, res) => {
        res.json({ mensaje: "Verificacion Completada" });
    });

    return nuevoRouter;
};
