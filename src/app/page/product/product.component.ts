import { Component, Input } from '@angular/core';
import { ProductDTO } from "../../model/product-dto";
import { Router } from '@angular/router';
import { ImageDto } from 'src/app/model/image-dto';
import { ImageService } from 'src/app/service/image.service';
import { CategoryService } from 'src/app/service/category.service';
import { ProductService } from 'src/app/service/product.service';
import {CategoryDTO} from "../../model/category-dto";
import {TokenService} from "../../service/token.service";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  categories: CategoryDTO[];
  product: ProductDTO;
  images!: any[];
  textButton!: string;

  constructor(private router: Router, private imageService: ImageService, private categoryService: CategoryService, private productService: ProductService, private  tokenService:TokenService) {
    this.categories = [];
    this.product = new ProductDTO();
    if (this.router.url == "/crear_producto") {
      this.textButton = "Publicar producto"
    } else {
      this.textButton = "Guardar cambios"
    }
  }
  ngOnInit(): void {
    this.categoryService.getCategories().subscribe({
      next: data => {
        this.categories = data.response;
      },
      error: error => {
        console.log(error.error.response);
      }
    });
  }

  onFileChange(event: any) {
    if (event.target.files.length > 0) {
      this.images = event.target.files;
    }
  }

  public subirImagenes() {
    if (this.images != null && this.images.length > 0) {
      const objeto = this.product;

      const formData = new FormData();
      formData.append('file', this.images[0]);

      this.imageService.subir(formData).subscribe({
        next: data => {
          objeto.images.push( new ImageDto(data.response.public_id, data.response.url) );
        },
        error: error => {
          console.log(error.error);
        }
      });
    } else {
      console.log('Debe seleccionar al menos una imagen y subirla');
    }
  }

  createProduct() {
    if (this.product.images.length > 0) {
      //this.product.id_person = this.tokenService.getCedula();
      this.productService.createProduct(this.product).subscribe({
        next: data => {
          console.log(data.response);
        },
        error: error => {
          console.log(error.error);
        }
      });
    } else {
      console.log('Debe seleccionar al menos una imagen y subirla');
    }
  }
  updateProduct() {
    if (this.images != null && this.images.length > 0) {
      this.product.images = this.images;
      console.log(this.product);
    } else {
      console.log('Debe seleccionar al menos una imagen');
    }
  }
}
