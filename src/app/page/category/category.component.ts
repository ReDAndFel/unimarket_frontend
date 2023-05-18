import { Component } from '@angular/core';
import {CategoryService} from "../../service/category.service";
import {CategoryDTO} from "../../model/category-dto";
import { Router } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent {
  categories: CategoryDTO[];

  constructor(private categoryService: CategoryService,private router: Router) {
    this.categories = this.categoryService.listar();
  }

  public selectCategory(category:string){
    console.log("bien");
    this.router.navigate(["/home/categoria",category]);
  }
}
