import { Component } from '@angular/core';
import { CartService } from "../../service/cart.service";
import { ProductGetDTO } from "../../model/product-get-dto";
import { ActivatedRoute, Router } from '@angular/router';
import { TokenService } from 'src/app/service/token.service';
import { SessionService } from 'src/app/service/session.service';
import { ProductService } from 'src/app/service/product.service';
import { Alert } from 'src/app/model/alert';
import { CommentDto } from 'src/app/model/comment-dto';
import { CommentService } from 'src/app/service/comment.service';
import { CommentGetDto } from 'src/app/model/comment-get-dto';
import { ModeratorService } from 'src/app/service/moderator.service';

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.css']
})
export class DetailProductComponent {
  id!: string;
  isLogged: boolean = false;
  idPerson!: string;
  product!: ProductGetDTO;
  alert!: Alert;
  comment!: CommentDto;
  comments!: CommentGetDto[];
  favoriteProducts!: ProductGetDTO[];
  roles!: string[];
  isMod = false;

  constructor(private moderatorService: ModeratorService,private commentService: CommentService, private router: Router, private route: ActivatedRoute, private cartService: CartService, private tokenService: TokenService, private sessionService: SessionService, private productService: ProductService) {
    this.isLogged = this.tokenService.isLogged();

    this.route.params.subscribe(params => { this.id = params["id"] })

    this.comment = new CommentDto();

    this.productService.getProduct(parseInt(this.id)).subscribe({
      next: data => {
        this.product = data.response;
        console.log("product : " + this.product)
      },
      error: error => {
        this.alert = new Alert(error.error.response, "danger");
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
    if (this.isLogged) {
      this.idPerson = this.tokenService.getId();

      this.productService.listFavoriteProducts(this.idPerson).subscribe({
        next: data => {
          this.favoriteProducts = data.response;
        },
        error: error => {
          console.log(error.error.response);
        }
      });

    }
    this.roles = this.tokenService.getRol();

    if (this.roles[0] == "MODERADOR") {

      this.isMod = true;
    }

  }

  public createComment() {
    if (this.comment.puntuation != null) {
      this.comment.idPerson = this.idPerson;
      this.comment.idProduct = parseInt(this.id);
      this.commentService.createComment(this.comment).subscribe({
        next: data => {
          this.alert = new Alert(data.response, "success");
        },
        error: error => {
          this.alert = new Alert(error.error.response, "danger");
        }
      });
    } else {
      this.alert = new Alert("Debe seleccionar una puntuacion", "danger");
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
      this.idPerson = this.tokenService.getId();
      this.isFavorite = this.productService.isFavorite(this.idPerson,parseInt(this.id));
    }
  }*/

  public addCart(productID: number) {
    this.cartService.addProduct(productID);
  }

  public addFavorite(productID: number) {
    let flagFavorite = false;
    for (let productFavorite of this.favoriteProducts) {
      if (productFavorite.id == productID) {
        flagFavorite = true;
        break;
      }
    }
    if (!flagFavorite) {
      this.productService.addProductToFavorite(this.idPerson, productID).subscribe({
        next: data => {
          //this.alert = new Alert(data.response, "success");
          console.log(data.response);
          console.log("producto agregado: " + productID);

        },
        error: error => {
          this.alert = new Alert(error.error, "danger");
          console.log(error.error)
        }
      });
    } else {
      this.productService.deleteProductToFavorite(this.idPerson, productID).subscribe({
        next: data => {
          console.log(data.response)
          console.log("producto eliminado: " + productID);

          //this.alert = new Alert(data.response, "success");
        },
        error: error => {
          console.log(error.error)
          //this.alert = new Alert(error.error, "danger");
        }
      });
    }

  }

  public removeFavorite(productID: number) {
    this.productService.deleteProductToFavorite(this.idPerson, productID).subscribe({
      next: data => {
        this.alert = new Alert(data.response, "success");
      },
      error: error => {
        this.alert = new Alert(error.error, "danger");
      }
    });
  }

  public reviewProduct(productID: number) {

    this.moderatorService.reviewProduct(productID,this.product).subscribe({
      next: data => {
        this.alert = new Alert(data.response, "success");
      },
      error: error => {
        this.alert = new Alert(error.error, "danger");
      }
    });
  }


}
