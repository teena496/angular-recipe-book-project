import { Component, OnInit } from '@angular/core';
import { Recipe } from "app/recipes/recipe.model";
import { RecipeService } from "app/recipes/recipe.service";

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipeService]
})
export class RecipesComponent implements OnInit {

  constructor(private recipeService: RecipeService) { }

  recipeSelectedFromList: Recipe;
  ngOnInit() {
    this.recipeService.listenForActiveItem.subscribe(
      (recipe: Recipe) => {this.recipeSelectedFromList = recipe;}
    );
  }

}
