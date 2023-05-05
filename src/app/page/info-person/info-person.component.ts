import { Component } from '@angular/core';
import {PersonDTO} from "../../model/person-dto";

@Component({
  selector: 'app-info-person',
  templateUrl: './info-person.component.html',
  styleUrls: ['./info-person.component.css']
})
export class InfoPersonComponent {
  person:PersonDTO;
  constructor() {
    this.person = new PersonDTO();
  }

  public updatePerson(){
    console.log(this.person);
  }
}
