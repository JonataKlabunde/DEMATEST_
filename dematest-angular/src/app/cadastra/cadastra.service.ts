import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Cliente } from '../cliente/Cliente';

@Injectable({
  providedIn: 'root'
})
export class CadastraService {


  private clienteDetalhesId: number;

  private readonly API = `${environment.API}clientes`;

  constructor(
      private http: HttpClient,
      private router: Router) { }

  cadastrar(novoCliente: Cliente){
    novoCliente.usuario = '1' // TODO: "Usuário sendo cadastrado fixo como 1";
    return this.http.post(this.API, novoCliente);
  }

  atualizar(clienteAtualizado: Cliente) {
    return this.http.put(`${environment.API}clientes/${this.clienteDetalhesId}`, clienteAtualizado)
  }

  showDetalhes(id: number) {
    this.clienteDetalhesId = id;
    this.router.navigate(['/detalhes'])
  }

  busca(){
    return this.http.get<Cliente>(`${environment.API}/clientes/${this.clienteDetalhesId}`)
  }
}
