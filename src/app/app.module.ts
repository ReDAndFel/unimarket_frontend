import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
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
import { BuysComponent } from './page/buys/buys.component';
import { DetailProductComponent } from './page/detail-product/detail-product.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AlertComponent } from './page/alert/alert.component';
import { ProductCardComponent } from './page/product-card/product-card.component';
import { ProfileComponent } from './page/profile/profile.component';
import { NavUserComponent } from './page/nav-user/nav-user.component';
import { HeaderComponent } from './page/header/header.component';



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
    BuysComponent,   
    DetailProductComponent,
    AlertComponent,
    ProductCardComponent,
    ProfileComponent,
    NavUserComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
