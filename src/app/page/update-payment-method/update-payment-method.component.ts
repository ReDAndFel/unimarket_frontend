import { Component } from '@angular/core';
import {PaymentMethodDTO} from "../../model/payment-method-dto";

@Component({
  selector: 'app-update-payment-method',
  templateUrl: './update-payment-method.component.html',
  styleUrls: ['./update-payment-method.component.css']
})
export class UpdatePaymentMethodComponent {
  paymentMethod:PaymentMethodDTO;
  constructor() {
    this.paymentMethod = new PaymentMethodDTO;
  }

  public updatePaymentMethod(){
    console.log(this.paymentMethod);
  }

}
