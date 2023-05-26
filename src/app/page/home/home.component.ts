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

  
  minPrice!: string;
  maxPrice!: string;
  filter!: string;
  products: ProductGetDTO[] = [];
  roles!: string[];
  isMod = false;
  alert!: Alert;
  isLogged: boolean = false;


  constructor(private router: Router, private route: ActivatedRoute, private productService: ProductService, private tokenService: TokenService, private sessionService: SessionService) {

    
  }
  public iraBusqueda(valor: string) {
    if (valor) {
      this.router.navigate(["busqueda/titulo", valor]);
    }else{
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

    this.productService.listarAllProducts().subscribe({
      next: data => {
        this.products = data.response;
      },
      error: error => {
        console.log(error.error.response);
      }
    });
    
    this.route.paramMap.subscribe(params => {

      const titulo = params.get("textTitulo");
      const categoria = params.get("idCategoria");
      const minPrice = params.get("minPrice");
      const maxPrice = params.get("maxPrice");

      /*if (titulo == null) {
        console.log("busqueda vacía")
        
  
      }*/
  
      if (titulo != null){
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

        if (categoria != null) {    
          console.log("categoria es diferente de null!")      
  
          this.productService.listProductByCategory(parseInt(categoria,10)).subscribe({
            next: data => {
              
              this.products = data.response;
              console.log(this.products);
  
            },
            error: error => {
              console.log(error.error.response);
            }
          });
        }
  
        if (minPrice != null && maxPrice != null) {
          console.log("precio minimo y maximo es diferente de null!")      
          this.productService.listProductByPrice(parseFloat(minPrice),parseFloat(maxPrice)).subscribe({
            next: data => {
              this.products = data.response;
            },
            error: error => {
              console.log(error.error.response);
            }
          });
        }         
        
    });
    
    this.roles = this.tokenService.getRol();

    if (this.roles[0] == "MODERADOR") {

      this.isMod = true;
    }

  }
}



