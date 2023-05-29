import { Component } from '@angular/core';
import { SessionService } from 'src/app/service/session.service';
import { TokenService } from 'src/app/service/token.service';
import {ProductService} from "../../service/product.service";
import {ProductGetDTO} from "../../model/product-get-dto";

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent {
  isLogged = false;
  isMod = false;
  idPerson:string = ""
  name:string = "";
  roles!: string[];
  favoriteProducts!:ProductGetDTO[];

  constructor( private productService:ProductService, private tokenService: TokenService, private sessionService : SessionService) {
    this.isLogged = this.tokenService.isLogged();



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
      this.name = this.tokenService.getName();
      this.roles = this.tokenService.getRol();

      this.productService.listFavoriteProducts(this.idPerson).subscribe({
        next: data => {
          this.favoriteProducts = data.response;
        },
        error: error => {
          console.log(error.error.response);
        }
      });

      if (this.roles[0] == "MODERADOR") {

        this.isMod = true;
      }
    }
  }*/
  ngOnInit(): void {

    if (this.isLogged) {
      this.idPerson = this.tokenService.getId();
      this.name = this.tokenService.getName();

      this.roles = this.tokenService.getRol();
      if (this.roles[0] == "MODERADOR") {
        this.isMod = true;
      }

      this.productService.listFavoriteProducts(this.idPerson).subscribe({
        next: data => {
          this.favoriteProducts = data.response;
        },
        error: error => {
          console.log(error.error.response);
        }


      });

    }
  }
  public logout() {
      this.tokenService.logout();
    }
  }
