//Importes
import express from "express";
import { miCors } from "./Middlewares/Cors.js";
import { crearRouter, crearRouterPARAM } from "./Routes/Routes.js";
import { crearRouterARCH } from "./Routes/Archivos.js";
import { Logger } from "./Middlewares/Logger.js";

//Configuracion
const app = express();
app.use(miCors());
app.use(express.json());

//Rutas;
app.use("/", crearRouter());
//app.use("/PARAM", crearRouterPARAM());
//app.use("/ARCH", crearRouterARCH());

const PORT = process.env.PORT ?? 1234;

app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
});
