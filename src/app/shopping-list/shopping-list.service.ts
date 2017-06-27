import { Ingredient } from "app/shared/ingredients.model";

export class ShoppingListService {

    private ingredients: Ingredient[] = [
        new Ingredient('Egg', 50),
        new Ingredient('Butter', 10),
        new Ingredient('Sugar', 30)
    ];

    getIngredient() {
        return this.ingredients;
    }

    editIngredients(ing: Ingredient){
        this.ingredients.push(ing);

    }

}