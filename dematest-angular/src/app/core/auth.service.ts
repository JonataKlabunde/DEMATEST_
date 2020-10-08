import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Usuario } from '../usuario/usuario';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // private readonly API = `${environment.API}usuarios`;
  
  constructor(private http: HttpClient) { }

  authenticate() {
    return this.http.get<Usuario[]>("http://3.134.79.6:8080/dematest/usuarios");
  }
}