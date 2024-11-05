import { Router } from "express";
import { generarToken, verificarToken } from "../Middlewares/Auth.js";

export const crearRouter = () => {
    const nuevoRouter = new Router();

    nuevoRouter.get("/", (req, res) => {
        res.json({ mensaje: "CORS == Mi Diversion nomas" });
    });

    nuevoRouter.get("/Error", (req, res, next) => {
        const error = new Error("Error provocado intencionalmente");
        next(error);
    });

    nuevoRouter.post("/login", (req, res) => {
        const { username, password } = req.body;

        if (username === "usuario" && password === "contraseña") {
            const token = generarToken({ username });
            res.json({ token });
        } else {
            res.status(401).json({ message: "Credenciales incorrectas" });
        }
    });

    nuevoRouter.get("/protected", verificarToken, (req, res) => {
        res.json({ message: "Acceso permitido a la ruta protegida" });
    });

    return nuevoRouter;
};
