import { Router } from "express";
import { Verificacion } from "../Middlewares/Verificacion.js";
import mysql from "mysql2/promise";

const config = {
    host: "localhost",
    user: "root",
    port: "3306",
    password: "sonic123@",
    database: "moviesdb",
};

const connection = await mysql.createConnection(config);

export const crearRouter = () => {
    const nuevoRouter = new Router();

    nuevoRouter.get("/", (req, res) => {
        res.json({ mensaje: "CORS == Mi Diversion nomas" });
    });

    nuevoRouter.get("/movies", async (req, res) => {
        const query = `
        SELECT title, year, director, duration, poster, rate, BIN_TO_UUID(id) as id 
        FROM movie `;

        const [result] = await connection.query(query);
        return res.json(result);
    });

    // Ruta para obtener una película específica por ID
    nuevoRouter.get("/movies/:id", async (req, res) => {
        const id = req.params.id;

        const query = `
            SELECT title, year, director, duration, poster, rate, BIN_TO_UUID(id) as id 
            FROM movie
            WHERE id = UUID_TO_BIN(?);`;

        try {
            const [result] = await connection.query(query, [id]);
            if (result.length === 0) {
                return res
                    .status(404)
                    .json({ mensaje: "Película no encontrada" });
            }

            return res.json(result);
        } catch (error) {
            console.error(error);
            return res
                .status(500)
                .json({ mensaje: "Error al obtener la película" });
        }
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
