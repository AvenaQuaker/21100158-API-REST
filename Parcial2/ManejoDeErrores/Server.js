//Importes
import express from "express";
import { miCors } from "./Middlewares/Cors.js";
import { crearRouter } from "./Routes/Routes.js";
import {
    manejarError404,
    manejarError500,
} from "./Middlewares/ManejoErrores.js";

//Configuracion
const app = express();
app.use(miCors());

//Rutas;
app.use("/", crearRouter());

//Middleware para manejar errores
app.use(manejarError404, manejarError500);

const PORT = process.env.PORT ?? 1234;

app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
});
