// Importes
import express from "express";
import session from "express-session";
import passport from "passport";
import { ensureAuthenticated } from "./Middlewares/ensureAuth.js";
import { crearRouter } from "./Routes/Routes.js";
import { AuthRouter } from "./Routes/Auth.js";
import { miCors } from "./Middlewares/Cors.js";

// Configuración de Express
const app = express();
app.use(express.json());
app.use(miCors());

// Configuración de la sesión
// app.use(
//     session({
//         secret: "secret",
//         resave: false, // Cambiar a false para no reescribir sesiones si no hay cambios
//         saveUninitialized: false, // Evitar guardar sesiones vacías
//     })
// );

// Inicialización de Passport
app.use(passport.initialize());
app.use(passport.session());

//Rutas Autentification
app.use(AuthRouter());

// Rutas principales
app.use(ensureAuthenticated, crearRouter());

// Inicialización del servidor
const PORT = process.env.PORT ?? 1234;
app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
});
