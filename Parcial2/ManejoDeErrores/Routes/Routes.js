import { Router } from "express";

export const crearRouter = () => {
    const nuevoRouter = new Router();

    nuevoRouter.get("/", (req, res) => {
        res.json({ mensaje: "CORS == Mi Diversion nomas" });
    });

    nuevoRouter.get("/Error", (req, res, next) => {
        const error = new Error("Error provocado intencionalmente");
        next(error); // Pasar el error al middleware de manejo de errores
    });

    return nuevoRouter;
};
