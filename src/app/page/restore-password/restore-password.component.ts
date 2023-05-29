import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Alert } from 'src/app/model/alert';
import { PersonService } from 'src/app/service/person.service';
import {PasswordDTO} from "../../model/password-dto";

@Component({
  selector: 'app-restore-password',
  templateUrl: './restore-password.component.html',
  styleUrls: ['./restore-password.component.css']
})
export class RestorePasswordComponent {
  restorePassword:PasswordDTO;
  email!:string;
  alert!: Alert;

  constructor(private route: ActivatedRoute, private personService: PersonService) {
    this.restorePassword = new PasswordDTO();

    this.route.params.subscribe(params => {
      this.email = params["email"];
    });

  }
  public restorePasswordFunction(){
    this.personService.changePasswordRecuperated(this.email, this.restorePassword).subscribe({
      next: data => {   
        this.alert =  new Alert(data.response,"success");
      },
      error: error => {
        this.alert = new Alert(error.error.response, "danger");
      }
    });   
  }
  public passwordEquals():boolean{
    return this.restorePassword.password == this.restorePassword.passwordRepeated;
  }

}
