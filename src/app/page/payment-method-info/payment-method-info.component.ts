import { Component } from '@angular/core';
import {PaymentMethodDTO} from "../../model/payment-method-dto";

@Component({
  selector: 'app-payment-method',
  templateUrl: './payment-method-info.component.html',
  styleUrls: ['./payment-method-info.component.css']
})
export class PaymentMethodInfoComponent {
  paymentMethod:PaymentMethodDTO;
  constructor() {
    this.paymentMethod = new PaymentMethodDTO;
  }

  public createPaymentMethod(){
    console.log(this.paymentMethod);
  }
  public updatePaymentMethod(){
    console.log(this.paymentMethod);
  }

}
