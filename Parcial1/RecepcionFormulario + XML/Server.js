//Importes
import express from "express";
import multer from "multer";
import bodyParser from "body-parser";
import bodyParserXml from "body-parser-xml";
import { miCors } from "./Middlewares/Cors.js";
import { crearRouter } from "./Routes/Routes.js";
import { Logger } from "./Middlewares/Logger.js";

//Configuracion
const app = express();
const upload = multer();
bodyParserXml(bodyParser);

app.use(miCors());
app.use(express.json());
app.use(express.text());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.xml());
app.use(upload.none());

//Rutas;
app.use("/", crearRouter());

const PORT = process.env.PORT ?? 1234;

app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
});
