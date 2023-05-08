import { Component } from '@angular/core';
import {ProductDTO} from "../../model/product-dto";
import {ActivatedRoute} from "@angular/router";
import {ProductService} from "../../service/product.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  textoBusqueda:string;
  constructor(private route:ActivatedRoute,private productService:ProductService)){

    this.productos = this.productService.listar();
    this.filtro = [];

    this.textoBusqueda = "";
    this.route.params.subscribe(params => {this.textoBusqueda = params["texto"];
    this.filtro = this.productos.filter( p =>
    p.nombre.toLowerCase().includes(this.textoBusqueda.toLowerCase()) );
    });
  }

}
