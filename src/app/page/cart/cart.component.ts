import { Component } from '@angular/core';
import { CartService } from "../../service/cart.service";
import { ProductService } from "../../service/product.service";
import { TransactionDetailDto } from "../../model/transaction-detail-dto";
import { ProductGetDTO } from 'src/app/model/product-get-dto';
import { TokenService } from 'src/app/service/token.service';
import { SessionService } from 'src/app/service/session.service';
import {TransactionService} from "../../service/transaction.service";
import {TransactionDto} from "../../model/transaction-dto";
import {PaymentMethodGetDto} from "../../model/payment-method-get-dto";
import {PaymentMethodService} from "../../service/payment-method.service";
import {Alert} from "../../model/alert";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  paymentMethods!:PaymentMethodGetDto[];
  products!:TransactionDetailDto[];
  transaction!:TransactionDto;
  totalPrice!:number;
  isLogged = false;
  idPerson!:string;
  idsProducts!: number[];


  constructor( private paymentMethodService: PaymentMethodService ,private transactionService : TransactionService, private cartService:CartService, private productService:ProductService, private tokenService: TokenService, private sessionService : SessionService) {

    this.isLogged = this.tokenService.isLogged();

    if(this.isLogged){
      this.idPerson = this.tokenService.getId();
      this.products = [];
      this.transaction = new TransactionDto();
      this.totalPrice = 0;

      this.paymentMethodService.listPaymentMethodByPerson(this.idPerson).subscribe({
        next: data => {

          this.paymentMethods = data.response;
        },
        error: error => {
          console.log(error.error.response);
        }
      });

      const idList = this.cartService.listProducts();

      if(idList.length > 0){

        for( let id of idList ){

          this.productService.getProduct(id).subscribe({
            next: data => {
              const producto = data.response;

              if(producto!=null){
                this.products.push(new TransactionDetailDto(producto, 1));
                this.totalPrice += producto.price;
              }

            },
            error: error => {
              console.log(error.error.response);
            }
          });


        }
      }
    }

  }
  public deleteProductCart(transactionDetail:TransactionDetailDto){

    this.products = this.products.filter(product => product != transactionDetail);
    this.updateTotalPrice();

  }

  /*ngOnInit(): void {
    const objeto = this;
    this.sessionService.currentMessage.subscribe({
      next: data => {
        objeto.actualizarSesion(data);
      }
    });
    this.actualizarSesion(this.tokenService.isLogged());
  }

  private actualizarSesion(estado: boolean) {
    this.isLogged = estado;
    if (estado) {
      this.idPerson = this.tokenService.getId()
    }
  }*/
  ngOnInit(): void {
    }

    public updateTotalPrice(){
      this.totalPrice = 0;
      for(let item of this.products){
          this.totalPrice += (item.product.price * item.units);
      }
    }

    public createTransaction(){
    this.transaction.idPerson = this.idPerson;
    this.transaction.transactionDetailDTOS = this.products;
    for(let product of this.transaction.transactionDetailDTOS){
      console.log("id producto en detail: " + product.product.id);
    }
    this.transactionService.createTransaction(this.transaction).subscribe({
      next: data => {
        console.log(data.response);
      },
      error: error => {
        console.log(error.error);
      }
    });
    }
}
