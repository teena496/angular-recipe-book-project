import { Component, OnInit } from '@angular/core';
import { Ingredient } from "app/shared/ingredients.model";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  newIng: Ingredient;

ingredients: Ingredient[] = [
  new Ingredient('Egg', 50),
  new Ingredient('Butter', 10),
  new Ingredient('Sugar', 30)
];

  constructor() { }

  ngOnInit() {
  }
  
  addTheIng(data: Ingredient) {
    this.ingredients.push(data);
  }

}
