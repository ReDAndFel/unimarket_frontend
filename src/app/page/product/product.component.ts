import { Component } from '@angular/core';
import {ProductDTO} from "../../model/product-dto";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  categories:string[];
  product:ProductDTO;
  images!:FileList;
  constructor(){
    this.categories = [];
    this.product = new ProductDTO();
  }
  ngOnInit(): void {
    this.categories.push('Tecnología');
    this.categories.push('Hogar');
    this.categories.push('Deportes');
    this.categories.push('Moda');
    this.categories.push('Mascotas');
  }

  onFileChange(event:any){
    if (event.target.files.length > 0) {
      this.images = event.target.files;
    }
  }

  createProduct(){
    if(this.images != null && this.images.length > 0){
      this.product.images = this.images ;
      console.log(this.product);
    }else{
      console.log('Debe seleccionar al menos una imagen');
    }
  }
  updateProduct(){
    if(this.images != null && this.images.length > 0){
      this.product.images = this.images ;
      console.log(this.product);
    }else{
      console.log('Debe seleccionar al menos una imagen');
    }
  }
}
