import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PaymentMethodGetDto } from 'src/app/model/payment-method-get-dto';
import { PaymentMethodService } from 'src/app/service/payment-method.service';

@Component({
  selector: 'app-payment-method',
  templateUrl: './payment-method.component.html',
  styleUrls: ['./payment-method.component.css']
})
export class PaymentMethodComponent {
 
  paymentMethods:PaymentMethodGetDto[];
  idPaymentMethod!:number;

  constructor(private router: Router, private paymentMethodService:PaymentMethodService){
    this.paymentMethodService = new PaymentMethodService();
    this.paymentMethods = this.paymentMethodService.listar();

  }

  public editPaymentMethod(id:number){
    this.router.navigate(["/editar_metodo_de_pago",id]);    
  }

  public addPaymentMethod(){
    this.router.navigate(["/añadir_metodo_de_pago"]);    
  }

  public deletePaymentMethod(id:number){
    this.paymentMethods.forEach(e => {
      if(e.id == id){
        this.paymentMethods = this.paymentMethods.filter(i => i != e);
      }
      
    });
    
    console.log()
  }
  
}
