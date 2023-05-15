import { Component } from '@angular/core';
import { CartService } from "../../service/cart.service";
import {ProductGetDTO} from "../../model/product-get-dto";

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.css']
})
export class DetailProductComponent {
  cartService:CartService;
  productGetDTO!: ProductGetDTO;

  constructor() {
    this.cartService = new CartService();
  }

  public agregarCarrito(){
    this.cartService.agregar(this.productGetDTO.id);
  }

}
