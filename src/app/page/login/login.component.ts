import { Component } from '@angular/core';
import {LoginDTO} from "../../model/login-dto";
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  login:LoginDTO;
  constructor(public router:Router){
    this.login = new LoginDTO();
  }
  public signIn(){
    console.log(this.login);
    this.router.navigateByUrl("/");
  }
}

