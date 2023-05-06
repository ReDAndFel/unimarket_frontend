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
import { PaymentMethodComponent } from './page/payment-method/payment-method.component';
import { ChangePasswordComponent } from './page/change-password/change-password.component';
import { ProductComponent } from './page/product/product.component';
import { AccountComponent } from './page/account/account.component';
import { CartComponent } from './page/cart/cart.component';
import { CategoryComponent } from './page/category/category.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    ForgetPasswordComponent,
    RestorePasswordComponent,
    InfoPersonComponent,
    PaymentMethodComponent,
    ChangePasswordComponent,
    ProductComponent,
    AccountComponent,
    CartComponent,
    CategoryComponent
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
