import { Router } from "express";
import { Verificacion } from "../Middlewares/Verificacion.js";

export const crearRouter = () => {
    const nuevoRouter = new Router();

    nuevoRouter.get("/", (req, res) => {
        res.json({ mensaje: "CORS == Mi Diversion nomas" });
    });

    return nuevoRouter;
};

export const crearRouterPARAM = () => {
    const nuevoRouter = new Router();

    nuevoRouter.post("/Body", Verificacion, (req, res) => {
        res.json({ mensaje: "Verificacion Completada" });
    });

    nuevoRouter.post("/Param/:id", (req, res) => {
        res.json({
            mensaje:
                "Verificacion Completada con Parametros con ID: " +
                req.params.id,
        });
    });

    nuevoRouter.post("/Query", (req, res) => {
        res.json({
            mensaje:
                "Verificacion Completada con Query: " +
                req.query.nombre +
                " " +
                req.query.apellido,
        });
    });

    return nuevoRouter;
};
