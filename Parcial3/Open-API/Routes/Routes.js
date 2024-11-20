import { Router } from "express";

export const crearRouter = () => {
    const router = new Router();

    /**
     * @swagger
     * /Home:
     *   get:
     *     summary: Regresa un Mensaje
     *     description: Devuelve el mensaje "Documentacion == ZZZ" en formato JSON.
     *     responses:
     *       200:
     *         description: Respuesta exitosa.
     *         content:
     *           application/json:
     *             schema:
     *               type: object
     *               properties:
     *                 message:
     *                   type: string
     *                   example: Documentacion == ZZZ
     */
    router.get("/", function (req, res) {
        res.json({ message: "Documentacion == ZZZ" });
    });

    return router;
};
