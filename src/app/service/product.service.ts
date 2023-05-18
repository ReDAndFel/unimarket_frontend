import {forwardRef, Injectable} from '@angular/core';
import {ProductGetDTO} from "../model/product-get-dto";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products:ProductGetDTO[];
  constructor(){
    this.products = [];
    //this.products.push(new ProductGetDTO(1,new Date("2023-06-12"), "Juego", 5, "Uncharted", 2, 20000, 20000, "2", 1, 0, 1, new Date("2023-05-12"), new FileList()));
    //this.products.push(new ProductGetDTO(2,new Date("2023-06-12"), "Pelota", 5, "Pelota", 2, 20000, 20000, "2", 1, 0, 1, new Date("2023-05-12"), new FileList()));

//CREE OTROS PRODUCTOS (AL MENOS 6 MÁS)
  }
  public listar():ProductGetDTO[]{
    return this.products;
  }

  public get(idProduct:number) {
    this.products.forEach((product) => {
      if(product.id == idProduct) {
        return product;
      }
      throw new Error("No se encontró producto con ese id")
    });
  }
}
