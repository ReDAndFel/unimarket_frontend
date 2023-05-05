import { Component } from '@angular/core';
import {PersonDTO} from "../../model/person-dto";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],

})

export class SignupComponent {
  person:PersonDTO;
  constructor(){
    this.person = new PersonDTO();
  }
  public registrar(){
    console.log(this.person);
  }
  public passwordEquals():boolean{
    return this.person.password == this.person.confirmedPassword;
  }
}
