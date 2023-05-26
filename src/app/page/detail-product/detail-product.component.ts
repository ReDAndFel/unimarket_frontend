import { Component } from '@angular/core';
import { CartService } from "../../service/cart.service";
import {ProductGetDTO} from "../../model/product-get-dto";
import { ActivatedRoute, Router } from '@angular/router';
import { TokenService } from 'src/app/service/token.service';
import { SessionService } from 'src/app/service/session.service';
import { ProductService } from 'src/app/service/product.service';
import { Alert } from 'src/app/model/alert';
import { CommentDto } from 'src/app/model/comment-dto';
import { CommentService } from 'src/app/service/comment.service';
import { CommentGetDto } from 'src/app/model/comment-get-dto';

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.css']
})
export class DetailProductComponent {
  id!:string;
  isLogged:boolean = false;
  idPerson!:string;
  product!:ProductGetDTO;
  isFavorite : boolean = false;
  alert!:Alert;
  comment!:CommentDto;
  comments!:CommentGetDto[];

  constructor(private commentService: CommentService,private router: Router, private route:ActivatedRoute, private cartService:CartService, private tokenService : TokenService, private sessionService : SessionService, private productService : ProductService) {
    this.route.params.subscribe(params => {this.id = params["id"]})

    this.comment = new CommentDto();

    this.productService.getProduct(parseInt(this.id)).subscribe({
      next: data => {   
        this.product = data.response;
        console.log("product : " + this.product)
      },
      error: error => {
        this.alert =  new Alert(error.error.response,"danger");
      }
    });  
    
    this.commentService.listCommentProduct(parseInt(this.id)).subscribe({
      next: data => {
        this.comments = data.response;
      },
      error: error => {
        console.log(error.error);
      }
    });
  }
  ngOnInit(): void {
    this.isLogged = this.tokenService.isLogged();
    if(this.isLogged){
      this.idPerson = this.tokenService.getId();
      this.isFavorite = this.productService.isFavorite(this.idPerson,parseInt(this.id));
    }   
  }

  public createComment(){   
    if(this.comment.puntuation != null){
      this.comment.idPerson = this.idPerson;
      this.comment.idProduct = parseInt(this.id);
      this.commentService.createComment(this.comment).subscribe({
        next: data => {
          this.alert = new Alert (data.response,"success");
        },
        error: error => {
          this.alert = new Alert (error.error.response,"danger");
        }
      });
    }else{
      this.alert = new Alert ("Debe seleccionar una puntuacion","danger");
    }
      
  }
  /*ngOnInit(): void {
    const objeto = this;
    this.sessionService.currentMessage.subscribe({
      next: data => {
        objeto.actualizarSesion(data);
      }
    });
    this.actualizarSesion(this.tokenService.isLogged());
  }

  private actualizarSesion(estado: boolean) {
    this.isLogged = estado;
    if (estado) {
      this.idPerson = this.tokenService.getId()     
    }
  }*/

  public addCart(){
    this.cartService.addProduct(parseInt(this.id));
  }

}
