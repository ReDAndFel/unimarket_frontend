import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MessageDTO } from '../model/message-dto';

@Injectable({
  providedIn: 'root'
})
export class TransactionDetailService {
  private userUrl = "unimarket-production-29a2.up.railway.app/api/detalles_transacciones";

  constructor(private http: HttpClient) {}

  public listTransactionDetailsByTransaction(idTransaction:number): Observable<MessageDTO> {
    return this.http.get<MessageDTO>(`${this.userUrl}/obtener_detalles_transaccion/${idTransaction}`);
  }
  
}
