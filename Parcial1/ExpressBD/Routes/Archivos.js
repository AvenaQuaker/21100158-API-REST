import { Router } from "express";
import multer from "multer";
import path from "path";
import { fileURLToPath } from "url";

//Multer
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "./Parcial1/FormularioArchivos/Uploads/");
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    },
});
const upload = multer({ storage });

// Obtener el directorio base correctamente
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Router de Archivos
export const crearRouterARCH = () => {
    const nuevoRouter = new Router();

    nuevoRouter.post("/Enviar", upload.single("archivo"), (req, res) => {
        console.log(req.file);
    });

    nuevoRouter.get("/Recibir", (req, res) => {
        const filePath = path.join(__dirname, "../Uploads", "porta.png");
        res.sendFile(filePath, (err) => {
            if (err) {
                console.error("Error al enviar el archivo:", err);
                res.status(500).send("Error al mostrar el archivo.");
            }
        });
    });

    return nuevoRouter;
};
