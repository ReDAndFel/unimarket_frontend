import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TransactionGetDto } from 'src/app/model/transaction-get-dto';
import { PaymentMethodService } from 'src/app/service/payment-method.service';
import { SessionService } from 'src/app/service/session.service';
import { TokenService } from 'src/app/service/token.service';
import { TransactionService } from 'src/app/service/transaction.service';

@Component({
  selector: 'app-buys',
  templateUrl: './buys.component.html',
  styleUrls: ['./buys.component.css']
})
export class BuysComponent {
  transactions!: TransactionGetDto[];
  isLogged: boolean = false;
  idPerson!: string;

  constructor(private route: ActivatedRoute, private router: Router, private paymentMethodService: PaymentMethodService, private transactionService: TransactionService, private tokenService: TokenService) {

    this.route.params.subscribe(params => {
      this.idPerson = params["idPerson"];
    });

  }
  ngOnInit(): void {
    this.isLogged = this.tokenService.isLogged();
    if (this.isLogged) {

      this.transactionService.listTransactionByPerson(this.idPerson).subscribe({
        next: data => {
          this.transactions = data.response;
          console.log("transacciones:"+this.transactions);
        },
        error: error => {
          console.log(error.error.response);
        }
      });
    }

  }

  public getTransactionDetail(idTransaction:number){
    this.router.navigate(["compra/", idTransaction]);
  }
}
