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
  id!:number;

  constructor(private route:ActivatedRoute) {
    this.cartService = new CartService();
    this.route.params.subscribe(params => {this.id = parseInt(params["id"])})
  }

  public addCart(){
    this.cartService.addProduct(this.id);
  }

}
