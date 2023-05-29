import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Alert } from 'src/app/model/alert';
import { PersonGetDTO } from 'src/app/model/person-get-dto';
import { PersonService } from 'src/app/service/person.service';
import { SessionService } from 'src/app/service/session.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  person!: PersonGetDTO;
  isLogged: boolean = false;
  idPerson!: string;
  alert!: Alert;

  constructor(private router: Router,private route: ActivatedRoute, private tokenService: TokenService, private personService: PersonService) {

    this.route.params.subscribe(params => {
      this.idPerson = params["idPerson"];
    });

    this.personService.get(this.idPerson).subscribe({
      next: data => {   
        this.person = data.response;
        console.log("person : " + this.person)
      },
      error: error => {
        console.log(error.error.response,"danger");
      }
    });   

  }
  /* ngOnInit(): void {
     const objeto = this;
     this.sessionService.currentMessage.subscribe({
       next: data => {
         objeto.actualizarSesion(data);
       }
     });
     this.actualizarSesion(this.tokenService.isLogged());
 
     /*this.personService.get(this.idPerson).suscribe({
       next: data => {
         this.person = data.response;
       }
     })
 
   }
 
   private actualizarSesion(estado: boolean) {
     this.isLogged = estado;
     if (estado) {
       this.idPerson = this.tokenService.getId();
     }
   }*/

  ngOnInit(): void {
    this.isLogged = this.tokenService.isLogged();
    if (this.isLogged) {
      this.isLogged = this.tokenService.isLogged();
      console.log("idPerson:" + this.idPerson)
      this.personService.get(this.idPerson).subscribe({
        next: data => {
          this.person = data.response;
        },
        error: error => {
          this.alert = new Alert(error.error.response, "danger");
        }
      });
    }
  }

  public updatePerson() {
    this.personService.updatePerson(this.idPerson, this.person).subscribe({
      next: data => {
        this.alert =  new Alert(data.response,"success");
      },
      error: error => {
        this.alert = new Alert(error.error.response, "danger");
      }
    });
  }

  public changePassword(){
    this.router.navigate(["/cambiar_contraseña",this.idPerson]);
  }
}
