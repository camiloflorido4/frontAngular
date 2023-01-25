import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PersonajesService {
  private API_PERSONAJES = "https://localhost:7189/";

  constructor(private http: HttpClient) { }

  public getPersonajes(): Observable<any> {
    return this.http.get(this.API_PERSONAJES);
  }
}
