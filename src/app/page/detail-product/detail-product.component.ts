import { Component } from '@angular/core';
import { CartService } from "../../service/cart.service";
import {ProductGetDTO} from "../../model/product-get-dto";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.css']
})
export class DetailProductComponent {
  cartService:CartService;
  productGetDTO!: ProductGetDTO;
  idProduct!:number;

  constructor(private route:ActivatedRoute) {
    this.cartService = new CartService();
    this.route.params.subscribe(params => {this.idProduct = parseInt(params["idProduct"])})
  }

  public addCart(){
    this.cartService.addProduct(this.idProduct);
  }

}
