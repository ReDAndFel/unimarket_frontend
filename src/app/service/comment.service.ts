import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CommentDto } from '../model/comment-dto';
import { Observable } from 'rxjs';
import { MessageDTO } from '../model/message-dto';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  private userUrl = "http://localhost:8080/api/comentarios";
  constructor(private http: HttpClient) {

  }
  public createComment(commentDto: CommentDto): Observable<MessageDTO> {
    return this.http.post<MessageDTO>(`${this.userUrl}/comentar`, commentDto);
  }

  public listCommentProduct(idProduct:number): Observable<MessageDTO> {
    return this.http.get<MessageDTO>(`${this.userUrl}/obtener_comentarios_producto/${idProduct}`);
  }
}
