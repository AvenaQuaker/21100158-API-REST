import mysql from "mysql2/promise";

const config = {
    host: "localhost",
    user: "root",
    port: "3306",
    password: "sonic123@",
    database: "moviesdb",
};

const connection = await mysql.createConnection(config);

export class MovieController {
    constructor() {}

    General = async (req, res) => {
        const query = `
        SELECT title, year, director, duration, poster, rate, BIN_TO_UUID(id) as id 
        FROM movie `;

        const [result] = await connection.query(query);
        return res.json(result);
    };

    Buscar = async (req, res) => {
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
    };
}
