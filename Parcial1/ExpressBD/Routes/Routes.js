import { Router } from "express";
import { MovieController } from "../Controllers/mySQL.js";
import { HomeController } from "../Controllers/Home.js";

export const crearRouter = () => {
    const nuevoRouter = new Router();
    const movieController = new MovieController();
    const homeController = new HomeController();

    nuevoRouter.get("/", homeController.Home);
    nuevoRouter.get("/movies", movieController.General);
    nuevoRouter.get("/movies/:id", movieController.Buscar);

    return nuevoRouter;
};
