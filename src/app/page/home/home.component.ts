import { Component } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ProductService} from "../../service/product.service";
import {ProductGetDTO} from "../../model/product-get-dto";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  textoBusqueda:string;
  filter:string;
  products!:ProductGetDTO[];
  filtro:ProductGetDTO[]


  constructor( private router:Router,private route:ActivatedRoute, private productService:ProductService){

    this.filtro = [];

    this.productService.listarAllProducts().subscribe({
      next: data => {
        this.products = data.response;
        this.filtro = this.products;
      },
      error: error => {
        console.log(error.error);
      }
    });

    this.textoBusqueda = "";
    this.filter = "";
    this.route.params.subscribe(params => {
      this.textoBusqueda = params["text"];
      this.filter = params["filter"];
      if(this.textoBusqueda!=null && this.filter!=null) {
        if(this.filter == "categoria"){
          this.filtro = this.products.filter(p =>
            p.category.toLowerCase().includes(this.textoBusqueda.toLowerCase())
          );
        }
        if(this.filter == "busqueda"){
          this.filtro = this.products.filter(p =>
            p.title.toLowerCase().includes(this.textoBusqueda.toLowerCase())
          );
        }
      }else{
        this.filtro = this.products;
      }
    });


  }
  public iraBusqueda(valor:string){
    if(valor){
      this.router.navigate(["/busqueda", valor]);
    }
  }
}


