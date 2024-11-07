import { randomUUID } from "crypto"

import Foods from "../Food.json" with { type: "json"};

export class FoodModel {
    static async getFoods() {
        return Foods;
    }

    static async getFoodById(Key) {
        const food = Foods.find((food) => food.Key === Key);

    }

    static async addFood(food) {
        food.id = randomUUID();
        Foods.push(food);
    }

    static async updateFood(id, food) {
        const index = Foods.findIndex((f) => f.id === id);
        if (index!== -1) {
            Foods[index] = {...food, id};
        }
    }

    static async deleteFood(id) {
        const index = Foods.findIndex((f) => f.id === id);
        if (index!== -1) {
            Foods.splice(index, 1);
        }
    }

    static async searchFoods(query) {
        return Foods.filter((food) => food.name.toLowerCase().includes(query.toLowerCase()));
    }

    static async getFoodsInCategory(category) {
        return Foods.filter((food) => food.category === category);
    }

    static async getFoodsInPriceRange(minPrice, maxPrice) {
        return Foods.filter((food) => food.price >= minPrice && food.price <= maxPrice);
    }

    static async getFoodsInRatingRange(minRating, maxRating) {
        return Foods.filter((food) => food.rating >= minRating && food.rating <= maxRating);
    }
}