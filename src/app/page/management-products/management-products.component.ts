import { Component } from '@angular/core';
import {ProductService} from "../../service/product.service";
import {ProductGetDTO} from "../../model/product-get-dto";

@Component({
  selector: 'app-management-products',
  templateUrl: './management-products.component.html',
  styleUrls: ['./management-products.component.css']
})
export class ManagementProductsComponent {
  products: ProductGetDTO[];
  selectedList: ProductGetDTO[];
  selected!: ProductGetDTO;
  textBtnDelete: string;
  btnText:string;
  iconText:string;

  constructor(private productService: ProductService) {
    this.products = [];
    this.selectedList = [];
    this.textBtnDelete = "";
    this.btnText = "";
    this.iconText = "";
  }

  ngOnInit(): void {
    this.products = this.productService.listar();
  }

  public select(product: ProductGetDTO, state: boolean) {
    if (state) {
      this.selectedList.push(product);
    } else {
      this.selectedList = this.selectedList.filter(i => i != product);
    }
    this.updateMessage();
  }

  private updateMessage() {
    const tam = this.selectedList.length;
    if (tam != 0) {
      if (tam == 1) {
        this.textBtnDelete = "1 elemento";
      } else {
        this.textBtnDelete = tam + " elementos";
      }
    } else {
      this.textBtnDelete = "";
    }
  }

  public deleteProduct() {
    this.selectedList.forEach(e => {
      this.products = this.products.filter(i => i != e);
    });
    this.selectedList = [];
    this.updateMessage();
  }

  public createProduct() {
    this.btnText = "Crear nuevo";
    this.iconText = "plus";
    this.selected = (new ProductGetDTO(0, "", "", "", "", "", "", "", "", 0, 0, 0, "", ""));
  }

  public updateProduct(item:ProductGetDTO) {
    this.btnText = "Actualizar";
    this.iconText = "pencil";
    this.selected = Object.create(item);
  }
  public sendInfo() {
    if(this.btnText == "Actualizar"){
      const indice = this.products.findIndex( e => this.selected.id == e.id );
      this.products[indice] = this.selected;
    }else{
      this.products.push(this.selected);
    }
    document.getElementById("cerrar-m")?.click();
  }



}

