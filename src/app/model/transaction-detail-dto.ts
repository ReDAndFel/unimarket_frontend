import {ProductGetDTO} from "./product-get-dto";

export class TransactionDetailDto {
  constructor(product: any, number: number) {
    
  }


  product!: ProductGetDTO;
  units: number = 0;
}
