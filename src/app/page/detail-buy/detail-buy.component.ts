import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductGetDTO } from 'src/app/model/product-get-dto';
import { TransactionDetailGetDto } from 'src/app/model/transaction-detail-get-dto';
import { ProductService } from 'src/app/service/product.service';
import { TokenService } from 'src/app/service/token.service';
import { TransactionDetailService } from 'src/app/service/transaction-detail.service';

@Component({
  selector: 'app-detail-buy',
  templateUrl: './detail-buy.component.html',
  styleUrls: ['./detail-buy.component.css']
})
export class DetailBuyComponent {
  transactionsDetails!: TransactionDetailGetDto[];
  isLogged: boolean = false;
  idTransaction!: number;
  productsTransactionDetail!:ProductGetDTO[];

  constructor(private route: ActivatedRoute,private productService: ProductService, private router: Router,  private transactionDetailService: TransactionDetailService, private tokenService: TokenService) {

    this.route.params.subscribe(params => {
      this.idTransaction = params["idTransaction"];     
    });

    this.transactionDetailService.listTransactionDetailsByTransaction(this.idTransaction).subscribe({
      next: data => {
        
        this.transactionsDetails = data.response;
        console.log("lista transacciones=" + this.transactionsDetails);
      },
      error: error => {
        console.log(error.error.response);
      }
    });
    

  }
  
  ngOnInit(): void {
    this.isLogged = this.tokenService.isLogged();
    
    /*for(let transactionDetail of this.transactionsDetails){
      this.productService.getProduct(transactionDetail.idProduct).subscribe({
        next: data => {
          this.productsTransactionDetail.push(data.response);
        },
        error: error => {
          console.log(error.error.response);
        }
      });
    }*/

  } 

  getNameProduct(idProduct:number){
    for(let product of this.productsTransactionDetail){
      if(product.id == idProduct){
        return product.title;
      }
    }
    return "";
  }

}
