//Importes
import express from "express";
import { miCors } from "./Middlewares/Cors.js";
import { crearRouter } from "./Routes/Routes.js";
import { E500, E404 } from "./Middlewares/Errores.js";

//Configuracion
const app = express();
app.use(express.json());
app.use(miCors());

//Rutas;
app.use("/", crearRouter());

const PORT = process.env.PORT ?? 1234;

//Middleware de errores
app.use(E500, E404);

app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
});