import { Component, Input} from '@angular/core';
import { ProductGetDTO } from 'src/app/model/product-get-dto';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {
  @Input() product!:ProductGetDTO;
}
