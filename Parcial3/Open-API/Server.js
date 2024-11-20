//Importes
import express from "express";
import path from "path";
import { miCors } from "./Middlewares/Cors.js";
import { crearRouter } from "./Routes/Routes.js";
import swaggerJSDoc from "swagger-jsdoc";
import swaggerUI from "swagger-ui-express";

//Configuracion
const app = express();
app.use(miCors());

//Swagger
const swaggerOptions = {
    swaggerDefinition: {
        info: {
            title: "Dishes-API Documentation",
            description: "API REST for Gastronomy purposes",
            version: "1.0.0",
            license: {
                name: "Licensed Under MIT",
                url: "https://spdx.org/licenses/MIT.html",
            },
            contact: {
                name: "JSONPlaceholder",
                url: "https://jsonplaceholder.typicode.com",
            },
        },
        servers: [
            {
                url: "http://localhost:1234",
                description: "Localhost server",
            },
        ],
    },
    apis: ["./Routes/*.js"],
};

//Rutas;
app.use("/Home", crearRouter());

//Consumir Documentacion
const swaggerDocs = swaggerJSDoc(swaggerOptions);
app.use("/Doc", swaggerUI.serve, swaggerUI.setup(swaggerDocs));

const PORT = process.env.PORT ?? 1234;

app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}/Doc`);
});