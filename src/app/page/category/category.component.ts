import { Component } from '@angular/core';
import {CategoryService} from "../../service/category.service";
import {CategoryDTO} from "../../model/category-dto";

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent {
  categories: CategoryDTO[];

  constructor(private categoryService: CategoryService) {
    this.categories = this.categoryService.listar();
  }
}
