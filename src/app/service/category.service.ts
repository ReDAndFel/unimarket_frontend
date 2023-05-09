import { Injectable } from '@angular/core';
import {CategoryDTO} from "../model/category-dto";
import {ProductGetDTO} from "../model/product-get-dto";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  categories:CategoryDTO[];
  constructor(){
    this.categories = [];
    this.categories.push(new CategoryDTO(1, "Ropa", "htpps://image.com"));
    this.categories.push(new CategoryDTO(2, "Electronica", "htpps://image.com"));

  }
  public listar():CategoryDTO[]{
    return this.categories;
  }

}
