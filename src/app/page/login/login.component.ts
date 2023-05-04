import { Component } from '@angular/core';
import {PersonDTO} from "../../model/person-dto";
import {LoginDTO} from "../../model/login-dto";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  login:LoginDTO;
  constructor(){
    this.login = new LoginDTO();
  }
  public iniciarSesion(){
    console.log(this.login);
  }
}

