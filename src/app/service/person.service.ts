import { Injectable } from '@angular/core';
import { MessageDTO } from '../model/message-dto';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { PasswordDTO } from '../model/password-dto';
import { PersonGetDTO } from '../model/person-get-dto';

@Injectable({
  providedIn: 'root'
})
export class PersonService {
  private userUrl = "unimarket-production-29a2.up.railway.app/api/personas";

  constructor(private http: HttpClient) { }
  
  public updatePerson(id:string, person:PersonGetDTO): Observable<MessageDTO> {
    return this.http.put<MessageDTO>(`${this.userUrl}/actualizar/${id}`, person);
  }

  public changePasswordRecuperated(Email:string, password:PasswordDTO): Observable<MessageDTO> {
    return this.http.put<MessageDTO>(`${this.userUrl}/restaurar_contraseña/${Email}`, password);
  }

  public changeOldPassword(idPerson:string, password:PasswordDTO): Observable<MessageDTO> {
    return this.http.put<MessageDTO>(`${this.userUrl}/cambiar_contraseña/${idPerson}`, password);
  }

  public recuperatePassword(email:string): Observable<MessageDTO> {
    return this.http.post<MessageDTO>(`${this.userUrl}/recuperar_contraseña`, email);
  }
  public get(idPerson:string): Observable<MessageDTO> {
    return this.http.get<MessageDTO>(`${this.userUrl}/obtener/${idPerson}`);
  }
}
