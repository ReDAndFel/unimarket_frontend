import { Component } from '@angular/core';
import { CartService } from "../../service/cart.service";
import {ProductGetDTO} from "../../model/product-get-dto";
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.css']
})
export class DetailProductComponent {
  cartService:CartService;
  id!:string;

  constructor(private router: Router, private route:ActivatedRoute) {
    this.cartService = new CartService();
    this.route.params.subscribe(params => {this.id = params["id"]})
  }

  public addCart(){
    this.cartService.addProduct(parseInt(this.id));
  }

}
