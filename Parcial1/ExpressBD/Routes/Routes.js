import { Router } from "express";
import { MovieController } from "../Controllers/mySQL.js";

export const crearRouter = () => {
    const nuevoRouter = new Router();
    const movieController = new MovieController();

    nuevoRouter.get("/movies", movieController.General);
    nuevoRouter.get("/movies/:id", movieController.Buscar);

    return nuevoRouter;
};
