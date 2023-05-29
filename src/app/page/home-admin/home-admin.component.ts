import { Component } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { ProductService } from "../../service/product.service";
import { ProductGetDTO } from "../../model/product-get-dto";
import { Alert } from 'src/app/model/alert';
import { TokenService } from 'src/app/service/token.service';
import { ModeratorService } from 'src/app/service/moderator.service';
import { SessionService } from 'src/app/service/session.service';

@Component({
  selector: 'app-home-admin',
  templateUrl: './home-admin.component.html',
  styleUrls: ['./home-admin.component.css']
})
export class HomeAdminComponent {

  filter!: string;
  products: ProductGetDTO[] = [];
  alert!: Alert;
  isLogged: boolean = false;


  constructor(private moderatorService: ModeratorService, private router: Router, private route: ActivatedRoute, private productService: ProductService, private tokenService: TokenService, private sessionService: SessionService) {


  }
  public iraBusqueda(valor: string) {
    if (valor) {
      this.router.navigate(["busqueda/titulo", valor]);
    } else {
      this.router.navigate([""]);
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
      this.roles = this.tokenService.getRol();

      if (this.roles[0] == "MODERADOR") {

        this.isMod = true;
      }
    }
  }*/
  ngOnInit(): void {

    this.route.paramMap.subscribe(params => {

      const titulo = params.get("textTitulo");
      const state = params.get("state");

      if (titulo != null) {
        console.log("titulo es diferente de null!")
        this.productService.listProductByTitle(titulo).subscribe({
          next: data => {
            this.products = data.response;
          },
          error: error => {
            console.log(error.error.response);
          }
        });
      }

      if (state != null) {
        console.log("estado es diferente de null!");

        this.moderatorService.listProductByState(state).subscribe({
          next: data => {

            this.products = data.response;
            console.log(this.products);

          },
          error: error => {
            console.log(error.error.response);
          }
        });
      }

      if(titulo == null && state ==null){
        this.moderatorService.listarAllProducts().subscribe({
          next: data => {
            this.products = data.response;
          },
          error: error => {
            console.log(error.error.response);
          }
        });        
      }

    });
  }

}