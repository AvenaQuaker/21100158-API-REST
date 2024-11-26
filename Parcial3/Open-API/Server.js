//Importes
import express from "express";
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
        openapi: "3.0.0",
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
        components: {},
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
app.use("/", crearRouter());

//Consumir Documentacion
const swaggerDocs = swaggerJSDoc(swaggerOptions);
app.use("/Doc", swaggerUI.serve, swaggerUI.setup(swaggerDocs));

//Obtener el objeto de Swagger
app.get("/Spec", (req, res) => {
    res.json(swaggerDocs);
});

const PORT = process.env.PORT ?? 1234;

app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}/Doc`);
});
