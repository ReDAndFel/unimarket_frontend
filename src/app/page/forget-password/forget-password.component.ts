import { Component } from '@angular/core';
import {LoginDTO} from "../../model/login-dto";
import {ForgetPasswordDTO} from "../../model/forget-password-dto";
import { PersonService } from 'src/app/service/person.service';
import { Alert } from 'src/app/model/alert';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent {

  forgetPassword:ForgetPasswordDTO;
  alert!: Alert;

  constructor(private personService:PersonService) {
    this.forgetPassword = new ForgetPasswordDTO();
  }

  public forgetPasswordFunction(){
    console.log("correo:" + this.forgetPassword.email);
    this.personService.recuperatePassword(this.forgetPassword.email).subscribe({
      next: data => {   
        this.alert =  new Alert(data.response,"success");
      },
      error: error => {
        this.alert = new Alert(error.error.response, "danger");
      }
    });   
  }

}
