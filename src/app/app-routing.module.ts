import { NgModule } from '@angular/core';
import {ForgetPasswordComponent} from "./page/forget-password/forget-password.component";
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { LoginComponent } from './page/login/login.component';
import { SignupComponent } from './page/signup/signup.component';
import {RestorePasswordComponent} from "./page/restore-password/restore-password.component";
import {InfoPersonComponent} from "./page/info-person/info-person.component";
import {PaymentMethodInfoComponent} from "./page/payment-method-info/payment-method-info.component";
import {PaymentMethodComponent} from "./page/payment-method/payment-method.component";
import {ChangePasswordComponent} from "./page/change-password/change-password.component";
import {ProductComponent} from "./page/product/product.component";
import {AccountComponent} from "./page/account/account.component";
import {CartComponent} from "./page/cart/cart.component";
import {CategoryComponent} from "./page/category/category.component";
import {ManagementProductsComponent} from "./page/management-products/management-products.component";
import {BuysComponent} from "./page/buys/buys.component";
import { DetailProductComponent } from './page/detail-product/detail-product.component';




const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: ":filter/:text", component: HomeComponent },
  { path: "login", component: LoginComponent },
  { path: "signup", component: SignupComponent },
  { path: "olvide_mi_contraseña", component: ForgetPasswordComponent },
  { path: "restore_password", component: RestorePasswordComponent },
  { path: "change_password", component: ChangePasswordComponent },
  { path: "info_person", component: InfoPersonComponent },
  { path: "añadir_metodo_de_pago", component: PaymentMethodInfoComponent },
  { path: "metodo_de_pago/:id", component: PaymentMethodInfoComponent },
  { path: "metodos_de_pago", component: PaymentMethodComponent},
  { path: "crear_producto", component: ProductComponent },
  { path: "editar_producto/:id", component: ProductComponent },
  { path: "cuenta", component: AccountComponent },
  { path: "carrito", component: CartComponent },
  { path: "categoria", component: CategoryComponent },
  { path: "gestion_productos", component: ManagementProductsComponent },
  { path: "compras", component: BuysComponent },  
  { path: "producto/:id", component: DetailProductComponent },
  
  { path: "**", pathMatch: "full", redirectTo: "" }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
