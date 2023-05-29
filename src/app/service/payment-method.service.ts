import { Injectable } from '@angular/core';
import { PaymentMethodGetDto } from '../model/payment-method-get-dto';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MessageDTO } from '../model/message-dto';
import { PaymentMethodDTO } from '../model/payment-method-dto';

@Injectable({
  providedIn: 'root'
})
export class PaymentMethodService {

  private userUrl = "unimarket-production-29a2.up.railway.app/api/metodos_de_pago";
  constructor(private http: HttpClient) {

  }
  public createPaymentMethod(paymentMethod: PaymentMethodDTO): Observable<MessageDTO> {
    return this.http.post<MessageDTO>(`${this.userUrl}/agregar`, paymentMethod);
  }

  public updatePaymentMethod(idPaymentMethod: number, paymentMethod: PaymentMethodGetDto): Observable<MessageDTO> {
    return this.http.put<MessageDTO>(`${this.userUrl}/actualizar/${idPaymentMethod}`, paymentMethod);

  }

  public deletePaymentMethod(idPaymentMethod: number): Observable<MessageDTO> {
    return this.http.delete<MessageDTO>(`${this.userUrl}/eliminar/${idPaymentMethod}`);
  }
  public listPaymentMethodByPerson(idPerson:string): Observable<MessageDTO> {
    return this.http.get<MessageDTO>(`${this.userUrl}/obtener_metodos_de_pago_person/${idPerson}`);
  }
}
