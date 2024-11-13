import { Router } from "express";
import { FoodController } from "../Controllers/Food.js";

export const crearRouter = ({ foodModel }) => {
    const nuevoRouter = new Router();
    const foodController = new FoodController({ foodModel: foodModel });

    nuevoRouter.get("/", foodController.Home);
    nuevoRouter.get("/Foods", foodController.GetAll);
    nuevoRouter.get("/Foods/:key", foodController.GetFood);
    nuevoRouter.post("/Foods", foodController.CreateFood);

    return nuevoRouter;
};
