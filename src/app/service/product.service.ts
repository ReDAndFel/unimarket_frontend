import { Injectable } from '@angular/core';
import { ProductGetDTO } from "../model/product-get-dto";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products:ProductGetDTO[];
  constructor(){
    this.products = [];
    this.products.push(new ProductGetDTO(1,new Date("2023-06-12"), "Uncharted", 5, "Uncharted videojuego", 2, 20000, 20000, "2", 1, 0, 1, new Date("2023-05-12")));
    this.products.push(new ProductGetDTO(2,new Date("2023-06-12"), "Pelota", 5, "Pelota epica", 3, 70000, 70000, "2", 1, 0, 1, new Date("2023-05-12")));
    this.products.push(new ProductGetDTO(2,new Date("2023-06-12"), "Pantalon", 5, "Pantalon epico, pero no tan epico como la pelota", 2, 20000, 20000, "2", 1, 0, 1, new Date("2023-05-12")));
    this.products.push(new ProductGetDTO(2,new Date("2023-06-12"), "Pc de burgos", 5, "Pelle", 1, 1, 1, "2", 1, 0, 1, new Date("2023-05-12")));
    this.products.push(new ProductGetDTO(2,new Date("2023-06-12"), "SSD", 5, "SSD que compro burgos para el pelle", 2, 300000, 300000, "2", 1, 0, 1, new Date("2023-05-12")));
    this.products.push(new ProductGetDTO(2,new Date("2023-06-12"), "Negro", 5, "Persona de color", 1, 0, 0, "2", 1, 0, 1, new Date("2023-05-12")));






//CREE OTROS PRODUCTOS (AL MENOS 6 ó  MÁS)
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
