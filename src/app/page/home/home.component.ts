import { Component } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { ProductService } from "../../service/product.service";
import { ProductGetDTO } from "../../model/product-get-dto";
import { TokenService } from 'src/app/service/token.service';
import { Alert } from 'src/app/model/alert';
import { SessionService } from 'src/app/service/session.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  textoBusqueda!: string;
  minPrice!: string;
  maxPrice!: string;
  filter!: string;
  filtro: ProductGetDTO[] = [];
  roles!: string[];
  isMod = false;
  alert!: Alert;
  isLogged: boolean = false;


  constructor(private router: Router, private route: ActivatedRoute, private productService: ProductService, private tokenService: TokenService, private sessionService: SessionService) {


    this.route.params.subscribe(params => {
      this.textoBusqueda = params["text"];
      this.filter = params["filter"];
      this.minPrice = params["minPrice"];
      this.maxPrice = params["maxPrice"];
    });



  }
  public iraBusqueda(valor: string) {
    if (valor) {
      this.router.navigate(["busqueda/titulo", valor]);
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
    if (this.textoBusqueda == null && this.filter == null) {
      this.productService.listarAllProducts().subscribe({
        next: data => {
          console.log("data response=" + data.response);
          this.filtro = data.response;
        },
        error: error => {
          console.log(error.error.response);
        }
      });

    }

    if (this.textoBusqueda != null && this.filter != null ){
      if (this.filter == "categoria") {
        console.log("Entré a filtrar por categoría");

        this.productService.listProductByCategory(parseInt(this.textoBusqueda)).subscribe({
          next: data => {
            console.log("data response =" + data.response);
            this.filtro = data.response;

          },
          error: error => {
            console.log(error.error.response);
          }
        });
      }

      if (this.filter == "titulo") {
        console.log("Entré a filtrar por titulo");

        this.productService.listProductByTitle(this.textoBusqueda).subscribe({
          next: data => {
            console.log("data response=" + data.response);
            this.filtro = data.response;
          },
          error: error => {
            console.log(error.error.response);
          }
        });
      }

      if (this.filter == "precio" && this.minPrice != null && this.maxPrice != null) {

        console.log("es precios");
        this.productService.listProductByPrice(parseInt(this.minPrice), parseInt(this.maxPrice)).subscribe({
          next: data => {
            console.log(data);
            this.filtro = data.response;
          },
          error: error => {
            console.log(error.error.response);
          }
        });
      }
    }
    this.roles = this.tokenService.getRol();

    if (this.roles[0] == "MODERADOR") {

      this.isMod = true;
    }

  }
}



