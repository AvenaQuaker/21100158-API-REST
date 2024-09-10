//Importes
import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { miCors } from "./Middlewares/Cors.js";
import { crearRouter, crearRouterPARAM } from "./Routes/Routes.js";
import { crearRouterARCH } from "./Routes/Archivos.js";
import { Logger } from "./Middlewares/Logger.js";

//Configuracion
const app = express();
app.use(miCors());
app.use(express.json());

//Configuracion del Directorio Base
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

//Configuracion EJS [Motor de Plantillas]
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "Views"));

//Rutas;
app.use("/", crearRouter());
app.use("/PARAM", crearRouterPARAM());
app.use("/ARCH", crearRouterARCH());

const PORT = process.env.PORT ?? 1234;

app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
});
