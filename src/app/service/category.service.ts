import { Injectable } from '@angular/core';
import {CategoryDTO} from "../model/category-dto";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  categories:CategoryDTO[];
  constructor(){
    this.categories = [];
    this.categories.push(new CategoryDTO(1, "Ropa", "https://cdn-icons-png.flaticon.com/512/62/62918.png"));
    this.categories.push(new CategoryDTO(2, "Electronica", "https://cdn-icons-png.flaticon.com/512/6558/6558953.png"));

  }
  public listar():CategoryDTO[]{
    return this.categories;
  }

}
