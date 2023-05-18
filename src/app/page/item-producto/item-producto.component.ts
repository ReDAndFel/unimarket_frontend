import {Component, Input} from '@angular/core';
import {ProductGetDTO} from "../../model/product-get-dto";

@Component({
  selector: 'app-item-producto',
  templateUrl: './item-producto.component.html',
  styleUrls: ['./item-producto.component.css']
})
export class ItemProductoComponent {

  @Input() object!:ProductGetDTO;



}
