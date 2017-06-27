import { Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import { Ingredient } from "app/shared/ingredients.model";
import { ShoppingListService } from "app/shopping-list/shopping-list.service";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('nameInput')  nameInput: ElementRef;
  @ViewChild('amountInput') amountInput: ElementRef;

  constructor(private shoppingListService: ShoppingListService) { }

  onAddItem() {
    const nameOfIng = this.nameInput.nativeElement.value;
    const amountOfIng = this.amountInput.nativeElement.value;
    const newIngredient = new Ingredient(nameOfIng, amountOfIng);
    this.shoppingListService.editIngredients(newIngredient);
  }
  ngOnInit() {
  }

}
