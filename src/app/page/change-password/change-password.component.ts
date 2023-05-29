import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Alert } from 'src/app/model/alert';
import { PersonService } from 'src/app/service/person.service';
import { TokenService } from 'src/app/service/token.service';
import {PasswordDTO} from "../../model/password-dto";

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent {
  changePassword:PasswordDTO;
  isLogged:boolean = false;
  idPerson!:string;
  alert!: Alert;


  constructor(private route: ActivatedRoute, private personService: PersonService, private tokenService: TokenService) {
    this.isLogged = this.tokenService.isLogged();
    this.changePassword = new PasswordDTO();
    this.route.params.subscribe(params => {
      this.idPerson = params["idPerson"];
    });


  }

  public changePasswordFunction(){
    this.personService.changeOldPassword(this.idPerson, this.changePassword).subscribe({
      next: data => {   
        this.alert =  new Alert(data.response,"success");
      },
      error: error => {
        this.alert = new Alert(error.error.response, "danger");
      }
    });   
  }
  public passwordEquals():boolean{
    return this.changePassword.password == this.changePassword.passwordRepeated;
  }

}
