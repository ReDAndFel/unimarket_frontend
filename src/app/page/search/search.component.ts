import { Component } from '@angular/core';
import {Router} from "@angular/router";


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  constructor(private router:Router) {
  }

  public iraBusqueda(valor:string){
    if(valor){
      this.router.navigate(["/search", valor]);
    }
  }
}
