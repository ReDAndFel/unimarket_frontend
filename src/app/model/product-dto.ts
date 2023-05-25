import { ImageDto } from "./image-dto";

export class ProductDTO {

  title:string = "";
  description:string = "";
  unities:number = 0;
  realPrice:number = 0;
  category:string = "";
  discount:number = 0;
  images!: ImageDto[];
  idPerson: string = "";

  constructor(){
    
  }


}
