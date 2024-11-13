import Foods from "../Food.json" with { type: "json"};

export class FoodModel {
    static async getFoods() {
        return Foods;
    }

    static async getFood(Key) {
        let KeyINT = parseInt(Key)
        const food = Foods.find(food => food.Key === KeyINT);
        return food;
    }

    static async createFood({ food } ) {
        console.log(food);
        let nuevoID = 1;
        Foods.forEach((food)=>{nuevoID++;})

        const newDish = {
            Key: nuevoID,
            ...food,
        }

        Foods.push(newDish);
        return newDish;
    }
}