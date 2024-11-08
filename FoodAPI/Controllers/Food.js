export class FoodController {
    constructor({ foodModel }) {
        this.foodModel = foodModel;
    }

    GetAll = async (req, res) => {
        const dishes = await this.foodModel.getFoods();
        res.json(dishes);
    };
}
