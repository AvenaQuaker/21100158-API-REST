import mysql from "mysql2/promise";
import { randomUUID } from "crypto";
import { validateMovie, validatePartialMovie } from "../Schemas/Schema.js";

const config = {
    host: "localhost",
    user: "root",
    port: "3306",
    password: "sonic123@",
    database: "moviesdb",
};

const connection = await mysql.createConnection(config);

/**
 * Controlador de las Peliculas para la BD
 */
export class MovieController {
    constructor() {}

    /**
     * Funcion para Obtener todas las peliculas de la BD
     * @returns {Array} Obtiene un arreglo con todas las peliculas de la BD
     */
    General = async (req, res) => {
        const query = `
        SELECT title, year, director, duration, poster, rate, BIN_TO_UUID(id) as id 
        FROM movie `;

        const [result] = await connection.query(query);
        return res.json(result);
    };

    /**
     * Funcion para Obtener una pelicula especifica por ID
     * @param {string} ID - ID del Libro
     * @returns {object} Regresa la pelicula en cuestion si la encuentra
     */
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

    /**
     * Funcion para Insertar una Pelicula
     * @param {object} Movie - Objecto de Pelicula para insertar
     * @returns {object} Regresa la pelicula en cuestion si la operacion es exitosa
     */
    Agregar = async (req, res) => {
        let result = validateMovie(req.body);
        if (result.error) {
            return res
                .status(400)
                .json({ error: JSON.parse(result.error.message) });
        }

        const query1 = `
        INSERT INTO movie (id,title, year, director, duration, poster, rate)
        VALUES (UUID_TO_BIN(?),?,?,?,?,?,?);`;

        const query2 = `
        INSERT INTO movie_genres (movie_id, genre_id) 
        VALUES (UUID_TO_BIN(?), ?);`;

        const query3 = `
        SELECT * FROM genre`;

        const id = randomUUID();

        const movieData = await connection.query(query1, [
            id,
            result.data.title,
            result.data.year,
            result.data.director,
            result.data.duration,
            result.data.poster,
            result.data.rate,
        ]);

        const [genres] = await connection.query(query3);
        const movieGenres = result.data.genre;
        const movieInsertions = [];
        genres.forEach((genre) => {
            if (movieGenres.includes(genre.name)) {
                movieInsertions.push(genre.id);
            }
        });

        movieInsertions.forEach((genreID) => {
            connection.query(query2, [id, genreID]);
        });

        const newMovie = {
            id,
            ...result.data,
        };

        result = { newMovie };

        res.status(201).json(result);
    };

    /**
     * Funcion para Borrar una Pelicula
     * @param {string} ID - Recibe el ID de la Pelicula
     * @returns {object} Regresa un mensaje de borrado, si la operacion es exitosa
     */
    Borrar = async (req, res) => {
        const { id } = req.params;

        const query = `
        DELETE FROM movie WHERE id = UUID_TO_BIN(?);`;

        const [movieDeletion] = await connection.query(query, id);

        if (!movieDeletion)
            return res.status(404).json({ message: "Pelicula no encontrada" });

        return res.json({ message: "Movie Deleted" });
    };

    /**
     * Funcion para Actualizar una Pelicula
     * @param {object} Movie - Objecto de Pelicula para Actualizar
     * @returns {object} Regresa un mensaje si la operacion fue exitosa o fracaso
     */
    Actualizar = async (req, res) => {
        const id = req.body.id;

        let query = `UPDATE movie SET `;
        const updates = [];
        const values = [];

        for (const [key, value] of Object.entries(req.body)) {
            if (key != "id") {
                updates.push(`${key} = ? `);
                values.push(value);
            }
        }

        query += updates.join(`, `);
        query += `WHERE id = UUID_TO_BIN(?);`;
        values.push(id);

        console.log(req.body);
        console.log(query);

        const [Resultado] = await connection.query(query, values);
        if (Resultado.affectedRows > 0) {
            return res.json({ respuesta: "TERRIBLE LO QUE PASO" });
        }
        return res.json({ respuesta: "PASO ALGO MALO" });
    };
}
