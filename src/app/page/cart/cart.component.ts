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
  valorTotal:number;
  constructor(private cartService:CartService, private productService:ProductService) {
    this.products = [];
    this.valorTotal = 0;
    this.products = [];
    this.valorTotal = 0;
    const codeList = this.cartService.listar();
    if(codeList.length > 0){
      for( let cod of codeList ){
        const product = this.productService.get(cod);
        if(product!=null){
          this.products.push(new TransactionDetailDto(product, 1));
          this.valorTotal += product.;
        }
      }
    }
  }
}
