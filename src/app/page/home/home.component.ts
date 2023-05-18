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
  products:ProductGetDTO[];
  filtro:ProductGetDTO[]


  constructor( private router:Router,private route:ActivatedRoute, private productService:ProductService){

    this.products = this.productService.listar();
    this.filtro = [];

    this.textoBusqueda = "";
    this.route.params.subscribe(params => {
      this.textoBusqueda = params["texto"];
      if(this.textoBusqueda!=null) {
        this.filtro = this.products.filter(p =>
          p.title.toLowerCase().includes(this.textoBusqueda.toLowerCase())
        );
      }else{
        this.filtro = this.products;
      }
    });


  }
  public iraBusqueda(valor:string){
    if(valor){
      this.router.navigate(["/home", valor]);
    }
  }
}


