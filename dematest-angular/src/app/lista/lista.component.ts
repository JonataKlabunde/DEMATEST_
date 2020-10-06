import { DecimalPipe } from '@angular/common';
import { Component, Input, OnInit, PipeTransform } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { CadastraService } from '../cadastra/cadastra.service';
import { Cliente } from '../cliente/Cliente';
import { ClientesService } from '../cliente/clientes.service';


@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  clientes$: Observable<Cliente[]>
  
  filter = new FormControl('');

  constructor(
      private service: ClientesService,
      private cadastraService: CadastraService) {}

  
  ngOnInit(): void {     
    this.clientes$ = this.service.list();    
  }

  detalhes(id: number){
    this.cadastraService.showDetalhes(id);    
  }
  deletar(id: number){
    this.service.deletar(id).subscribe(() => {
      location.reload()
      alert("Cliente deletado")
    })
  }
}










