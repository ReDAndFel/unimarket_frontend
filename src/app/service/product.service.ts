import { Injectable } from '@angular/core';
import { ProductGetDTO } from "../model/product-get-dto";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products: ProductGetDTO[];
  constructor() {
    this.products = [];
    this.products.push(new ProductGetDTO(1, new Date("2023-06-12"), "Uncharted", 5, "Uncharted videojuego", 2, 20000, 20000, "2", "Entretenimiento", 0, 1, new Date("2023-05-12")));
    this.products.push(new ProductGetDTO(2, new Date("2023-06-12"), "Pelota", 5, "Pelota epica", 3, 70000, 70000, "2", "Deporte", 0, 1, new Date("2023-05-12")));
    this.products.push(new ProductGetDTO(3, new Date("2023-06-12"), "Pantalon", 5, "Pantalon epico, pero no tan epico como la pelota", 2, 20000, 20000, "2", "Ropa", 0, 1, new Date("2023-05-12")));
    this.products.push(new ProductGetDTO(4, new Date("2023-06-12"), "Pc de burgos", 5, "Pelle", 1, 1, 1, "2", "Electronica", 0, 1, new Date("2023-05-12")));
    this.products.push(new ProductGetDTO(5, new Date("2023-06-12"), "SSD", 5, "SSD que compro burgos para el pelle", 2, 300000, 300000, "2", "Electronica", 0, 1, new Date("2023-05-12")));
    this.products.push(new ProductGetDTO(6, new Date("2023-06-12"), "Neumatico", 5, "Neumatico color negro", 1, 0, 0, "2", "Vehiculos", 0, 1, new Date("2023-05-12")));

  }
  public listar(): ProductGetDTO[] {
    return this.products;
  }

  public get(idProduct: number) {
    this.products.forEach((product) => {
      /*if (product.id == idProduct) {
        return product;
      }*/
    });
  }
}
