import { Component } from '@angular/core';
import { CartService } from "../../service/cart.service";
import { ProductService } from "../../service/product.service";
import { TransactionDetailDto } from "../../model/transaction-detail-dto";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  products:TransactionDetailDto[];
  totalPrice:number;

  constructor(private cartService:CartService, private productService:ProductService) {

    this.products = [];
    this.totalPrice = 0;

    const idList = this.cartService.listProducts();

    if(idList.length > 0){

      for( let id of idList ){

        const productGetDTO = this.productService.get(id);
        
        if(productGetDTO!=null){
          this.products.push(new TransactionDetailDto(productGetDTO, 1));
          //this.totalPrice += productGetDTO.price;
        }
      }
    }
  }
}
