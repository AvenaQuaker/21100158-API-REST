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

    /**
     * @swagger
     * /users:
     *   post:
     *     summary: Crea un nuevo usuario
     *     description: Agrega un usuario a la base de datos con los datos proporcionados.
     *     requestBody:
     *       required: true
     *       content:
     *         application/json:
     *           schema:
     *             type: object
     *             required:
     *               - name
     *               - email
     *             properties:
     *               name:
     *                 type: string
     *                 description: Nombre del usuario.
     *                 example: Juan Pérez
     *               email:
     *                 type: string
     *                 description: Correo electrónico del usuario.
     *                 example: juan.perez@example.com
     *               age:
     *                 type: integer
     *                 description: Edad del usuario.
     *                 example: 25
     *     responses:
     *       201:
     *         description: Usuario creado exitosamente.
     *         content:
     *           application/json:
     *             schema:
     *               type: object
     *               properties:
     *                 id:
     *                   type: string
     *                   description: ID único del usuario.
     *                   example: 607f1f77bcf86cd799439011
     *                 name:
     *                   type: string
     *                   description: Nombre del usuario.
     *                   example: Juan Pérez
     *                 email:
     *                   type: string
     *                   description: Correo electrónico del usuario.
     *                   example: juan.perez@example.com
     *                 age:
     *                   type: integer
     *                   description: Edad del usuario.
     *                   example: 25
     *       400:
     *         description: Error en la solicitud.
     *         content:
     *           application/json:
     *             schema:
     *               type: object
     *               properties:
     *                 error:
     *                   type: string
     *                   description: Mensaje de error.
     *                   example: "El campo 'email' es obligatorio."
     */
    router.post("/users", function (req, res) {
        const { name, email, age } = req.body;

        if (!name || !email) {
            return res.status(400).json({
                error: "El campo 'name' y 'email' son obligatorios.",
            });
        }

        const user = {
            id: "607f1f77bcf86cd799439011",
            name,
            email,
            age,
        };

        res.status(201).json(user);
    });

    return router;
};
