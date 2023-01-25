import { Component } from '@angular/core';
import { PersonajesService } from './services/personajes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontPrueba';
  personaje: any ={};


  constructor(private service: PersonajesService){
  }

  ngOnInit(): void {
    this.service.getPersonajes().subscribe (personaje => {
      this.personaje = this.personaje;
    })
  }
}
