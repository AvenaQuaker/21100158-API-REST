import { Router } from "express";

/**
 * @swagger
 * tags:
 *   name: Schema
 *   description: API que ps no hace nada
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Dish:
 *       type: object
 *       properties:
 *         Key:
 *           type: integer
 *           description: Clave única del platillo.
 *         Nombre:
 *           type: string
 *           description: Nombre del platillo.
 *         Origen:
 *           type: string
 *           description: Origen del platillo.
 *         Ingredientes:
 *           type: array
 *           items:
 *             type: string
 *           description: Lista de ingredientes del platillo.
 *         Imagen:
 *           type: string
 *           description: URL de la imagen del platillo.
 */
export const crearRouter = () => {
    const router = new Router();

    /**
     * @swagger
     * /Home:
     *   get:
     *     summary: Regresa un Mensaje
     *     tags: [Foods]
     *     description: Devuelve el mensaje "Documentacion == ZZZ" en formato JSON.
     *     responses:
     *       200:
     *         description: Respuesta exitosa.
     *         content:
     *           application/json:
     *             schema:
     *               $ref: '#/components/schemas/Dish'
     */
    router.get("/", function (req, res) {
        res.json({ message: "Documentacion == ZZZ" });
    });

    return router;
};
