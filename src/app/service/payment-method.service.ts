import { Injectable } from '@angular/core';
import { PaymentMethodGetDto } from '../model/payment-method-get-dto';

@Injectable({
  providedIn: 'root'
})
export class PaymentMethodService {

  paymentMethods: PaymentMethodGetDto[];
  constructor() {
    this.paymentMethods = []; 
    this.paymentMethods.push(new PaymentMethodGetDto(1,"BBVA","Pepito","1000459920123",new Date("2028-06-01"),589,true,"100485939123"));
    this.paymentMethods.push(new PaymentMethodGetDto(2,"Nequi","Pepito","31293912312031",new Date("2028-06-01"),555,true,"100485939123"))
  }
  public addPaymentMethod(idPaymentMethod:number) {
     
  }
  public removeProduct(id: number) {
    
  }

  public listar(): PaymentMethodGetDto[] {
    return this.paymentMethods;
  }
}
