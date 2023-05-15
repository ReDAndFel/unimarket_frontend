import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './page/home/home.component';
import { LoginComponent } from './page/login/login.component';
import { SignupComponent } from './page/signup/signup.component';
import { ForgetPasswordComponent } from './page/forget-password/forget-password.component';
import { RestorePasswordComponent } from './page/restore-password/restore-password.component';
import { InfoPersonComponent } from './page/info-person/info-person.component';
import { PaymentMethodInfoComponent } from './page/payment-method-info/payment-method-info.component';
import { ChangePasswordComponent } from './page/change-password/change-password.component';
import { ProductComponent } from './page/product/product.component';
import { AccountComponent } from './page/account/account.component';
import { CartComponent } from './page/cart/cart.component';
import { CategoryComponent } from './page/category/category.component';
import { ManagementProductsComponent } from './page/management-products/management-products.component';
import { PaymentMethodComponent } from './page/payment-method/payment-method.component';
import { CategoryCardComponent } from './page/category-card/category-card.component';
import { BuysComponent } from './page/buys/buys.component';
import { SellsComponent } from './page/sells/sells.component';
import { DetailProductComponent } from './page/detail-product/detail-product.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    ForgetPasswordComponent,
    RestorePasswordComponent,
    InfoPersonComponent,
    PaymentMethodInfoComponent,
    ChangePasswordComponent,
    ProductComponent,
    AccountComponent,
    CartComponent,
    CategoryComponent,
    ManagementProductsComponent,
    PaymentMethodComponent,
    CategoryCardComponent,
    BuysComponent,
    SellsComponent,
    DetailProductComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
