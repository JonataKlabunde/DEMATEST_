import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cliente } from './Cliente';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  
  // private readonly API = `${environment.API}/clientes`;

  constructor(private http: HttpClient) { }
    
  list() {
    return this.http.get<Cliente[]>("http://3.134.79.6:8080/dematest/clientes")
  }

  deletar(id: number) {    
    // return this.http.delete(`${environment.API}/clientes/${id}`)
    return this.http.delete(`http://3.134.79.6:8080/dematest/clientes/${id}`)
  }
}
