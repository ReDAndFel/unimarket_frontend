import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MessageDTO } from '../model/message-dto';
import { ProductGetDTO } from '../model/product-get-dto';

@Injectable({
  providedIn: 'root'
})
export class ModeratorService {

  private userUrl = "unimarket-production-29a2.up.railway.app/api/moderador";

  constructor(private http: HttpClient) { }

  public listarAllProducts(): Observable<MessageDTO> {
    return this.http.get<MessageDTO>(`${this.userUrl}/obtener_productos`);
  }
  
  public listProductByState(state: string): Observable<MessageDTO> {
    return this.http.get<MessageDTO>(`${this.userUrl}/obtener_productos_estado/${state}`);
  }

  public reviewProduct(idProduct: number, productGetDto: ProductGetDTO): Observable<MessageDTO> {
    return this.http.put<MessageDTO>(`${this.userUrl}/revisar_producto/${idProduct}`,productGetDto);
  }

}
