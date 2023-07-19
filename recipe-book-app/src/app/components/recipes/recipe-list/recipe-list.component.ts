import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/models/recipe';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('a Test Recipe', 'This is simply a test', 'https://www.acouplecooks.com/wp-content/uploads/2020/12/Honey-Garlic-Shrimp-026.jpg'),
    new Recipe('another Test Recipe', 'This is simply another test', 'https://www.acouplecooks.com/wp-content/uploads/2020/11/Pizza-Soup-006.jpg')
  ];

  constructor() {}

  ngOnInit(): void {}
}
