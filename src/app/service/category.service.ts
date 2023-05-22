import { Injectable } from '@angular/core';
import {CategoryDTO} from "../model/category-dto";
import { HttpClient } from '@angular/common/http';
import { MessageDTO } from '../model/message-dto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private catURL = "http://localhost:8080/api/categorias";  

  constructor(private http: HttpClient){
    
  }
  public getCategories(): Observable<MessageDTO> {
    return this.http.get<MessageDTO>(`${this.catURL}/obtener`);
    }
  /*public listar():CategoryDTO[]{
    return this.categories;
  }*/

}
