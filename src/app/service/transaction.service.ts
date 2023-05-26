import { Injectable } from '@angular/core';
import { TransactionDto } from '../model/transaction-dto';
import { HttpClient } from '@angular/common/http';
import { MessageDTO } from '../model/message-dto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  
  private userUrl = "http://localhost:8080/api/transacciones";

  constructor(private http: HttpClient) {}

  public createTransaction(transactionDTO: TransactionDto): Observable<MessageDTO> {
    return this.http.post<MessageDTO>(`${this.userUrl}/crear`, transactionDTO);
  }

  
  public listTransactionByPerson(idPerson:string): Observable<MessageDTO> {
    return this.http.get<MessageDTO>(`${this.userUrl}/obtener_transaction_person/${idPerson}`);
  }
  public getTransaction(idTransaction:number): Observable<MessageDTO> {
    return this.http.get<MessageDTO>(`${this.userUrl}/obtener/${idTransaction}`);
  }
}

