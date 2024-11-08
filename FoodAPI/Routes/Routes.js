import { Router } from "express";
import { FoodController } from "../Controllers/Food.js";

export const crearRouter = ({ foodModel }) => {
    console.log({ foodModel });

    const nuevoRouter = new Router();
    const foodController = new FoodController({ foodModel: foodModel });

    nuevoRouter.get("/Foods", foodController.GetAll);

    return nuevoRouter;
};
