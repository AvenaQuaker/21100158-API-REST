import { Router } from "express";
import { Verificacion } from "../Middlewares/Verificacion.js";

export const crearRouter = () => {
    const nuevoRouter = new Router();

    nuevoRouter.get("/", (req, res) => {
        const Cosita = {
            nombre: "Carlos",
            apellido: "Perez",
            edad: 25,
            direccion: {
                calle: "Calle 123",
                colonia: "Colonia 456",
                numero: 789,
            },
            telefono: "5555555555",
            correo: "carlos@example.com",
        };

        res.render("Cliente", { objeto: Cosita });
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
