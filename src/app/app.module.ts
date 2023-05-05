import { NgModule } from '@angular/core';
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
import { AddPaymentMethodComponent } from './page/add-payment-method/add-payment-method.component';
import { ChangePasswordComponent } from './page/change-password/change-password.component';
import { UpdatePaymentMethodComponent } from './page/update-payment-method/update-payment-method.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    ForgetPasswordComponent,
    RestorePasswordComponent,
    InfoPersonComponent,
    AddPaymentMethodComponent,
    ChangePasswordComponent,
    UpdatePaymentMethodComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
