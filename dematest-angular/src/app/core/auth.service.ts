import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Usuario } from '../usuario/usuario';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly API = `${environment.API}usuarios`;
  
  constructor(private http: HttpClient) { }

  authenticate() {
    return this.http.get<Usuario[]>(this.API);
  }
}
