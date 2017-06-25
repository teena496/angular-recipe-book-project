import { Component, OnInit, ViewChild, ElementRef, EventEmitter, Output } from '@angular/core';
import { Ingredient } from "app/shared/ingredients.model";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('nameInput')  nameInput: ElementRef;
  @ViewChild('amountInput') amountInput: ElementRef;

 @Output() data = new EventEmitter<Ingredient>();
  constructor() { }

  onAddItem() {
    const nameOfIng = this.nameInput.nativeElement.value;
    const amountOfIng = this.amountInput.nativeElement.value;
    const newIngredient = new Ingredient(nameOfIng, amountOfIng);
    this.data.emit(newIngredient);

  }
  ngOnInit() {
  }

}
