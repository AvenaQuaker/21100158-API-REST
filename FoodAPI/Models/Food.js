import { randomUUID } from "crypto"

import Foods from "../Food.json" with { type: "json"};

export class FoodModel {
    static async getFoods() {
        return Foods;
    }

    static async getFood(Key) {
        const food = Foods.find((food) => food.Key === Key);
        return food;
    }

}