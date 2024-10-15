//Importes
import express from "express";
import { miCors } from "./Middlewares/Cors.js";
import { crearRouter, crearRouterPARAM } from "./Routes/Routes.js";
import {
    manejarError404,
    manejarError500,
    manejarError400,
} from "./Middlewares/ManejoErrores.js";

//Configuracion
const app = express();
app.use(miCors());
app.use(express.json());

//Rutas;
app.use("/", crearRouter());
app.use("/PARAM", crearRouterPARAM());

//Middleware para manejar errores
app.use(manejarError404, manejarError500, manejarError400);

const PORT = process.env.PORT ?? 1234;

app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
});
