//Importes
import express from "express";
import https from "https";
import fs from "fs";
import { miCors } from "./Middlewares/Cors.js";
import { crearRouter, crearRouterPARAM } from "./Routes/Routes.js";
import {
    manejarError404,
    manejarError500,
    manejarError400,
} from "./Middlewares/ManejoErrores.js";

// Certificados SSL
const PKey = fs.readFileSync("./Parcial2/ServerSeguro/HTTPS/key.pem", "utf8");
const Cer = fs.readFileSync("./Parcial2/ServerSeguro/HTTPS/cert.pem", "utf8");
const credentials = { key: PKey, cert: Cer };

//Configuracion
const app = express();
app.use(miCors());
app.use(express.json());

//Rutas;
app.use("/", crearRouter());
app.use("/PARAM", crearRouterPARAM());

//Middleware para manejar errores
app.use(manejarError404, manejarError500, manejarError400);

//Servidor HTTPS
const httpsServer = https.createServer(credentials, app);

const PORT = process.env.PORT ?? 1234;

httpsServer.listen(PORT, () => {
    console.log(`Server is running on port https://localhost:${PORT}`);
});
