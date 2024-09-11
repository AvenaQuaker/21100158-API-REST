//Importes
import express from "express";
import { miCors } from "./Middlewares/Cors.js";
import { crearRouter } from "./Routes/Routes.js";

//Configuracion
const app = express();
app.use(miCors());
app.use(express.json());

//Rutas;
app.use("/", crearRouter());

const PORT = process.env.PORT ?? 1234;

app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
});
