import { Component } from '@angular/core';
import {PaymentMethodDTO} from "../../model/payment-method-dto";

@Component({
  selector: 'app-add-payment-method',
  templateUrl: './add-payment-method.component.html',
  styleUrls: ['./add-payment-method.component.css']
})
export class AddPaymentMethodComponent {
  paymentMethod:PaymentMethodDTO;
  constructor() {
    this.paymentMethod = new PaymentMethodDTO;
  }

  public createPaymentMethod(){
    console.log(this.paymentMethod);
  }

}
