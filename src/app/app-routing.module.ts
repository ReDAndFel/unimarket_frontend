import { NgModule } from '@angular/core';
import {ForgetPasswordComponent} from "./page/forget-password/forget-password.component";
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { LoginComponent } from './page/login/login.component';
import { SignupComponent } from './page/signup/signup.component';
import {RestorePasswordComponent} from "./page/restore-password/restore-password.component";
import {InfoPersonComponent} from "./page/info-person/info-person.component";
import {PaymentMethodComponent} from "./page/payment-method/payment-method.component";
import {ChangePasswordComponent} from "./page/change-password/change-password.component";
import {ProductComponent} from "./page/product/product.component";
import {AccountComponent} from "./page/account/account.component";
import {CartComponent} from "./page/cart/cart.component";
import {CategoryComponent} from "./page/category/category.component";
import {SearchComponent} from "./page/search/search.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "login", component: LoginComponent },
  { path: "signup", component: SignupComponent },
  { path: "forget_password", component: ForgetPasswordComponent },
  { path: "restore_password", component: RestorePasswordComponent },
  { path: "change_password", component: ChangePasswordComponent },
  { path: "info_person", component: InfoPersonComponent },
  { path: "payment_method", component: PaymentMethodComponent },
  { path: "product", component: ProductComponent },
  { path: "account", component: AccountComponent },
  { path: "cart", component: CartComponent },
  { path: "category", component: CategoryComponent },
  { path: "search/:texto", component: SearchComponent },
  { path: "**", pathMatch: "full", redirectTo: "" }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
