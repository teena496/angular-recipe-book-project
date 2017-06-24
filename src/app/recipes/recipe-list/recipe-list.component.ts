import { Component, OnInit } from '@angular/core';
import { Recipe } from "app/recipes/recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  
  recipes: Recipe[] = [
    new Recipe('Recipe name 1', 'Description of recipe 1', 'http://i.dailymail.co.uk/i/pix/2016/07/28/19/36ADC69D00000578-3695870-image-a-15_1469729356684.jpg'),
    new Recipe('Recipe name 2', 'Description of recipe 2', 'http://3.bp.blogspot.com/-ddZ86wCj510/UU2TI-TaEMI/AAAAAAAAB_4/heZiFvs-dAk/s1600/doughnuts227105929_std.jpeg'),
    new Recipe('Recipe name 3', 'Description of recipe 3', 'http://i2.cdn.cnn.com/cnnnext/dam/assets/150521165141-02-microbiome-foods-restricted-super-169.jpg')
  ];
  constructor() { }

  ngOnInit() {
  }

}
