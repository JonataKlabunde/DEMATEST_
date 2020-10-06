
import { Component, OnInit, PipeTransform } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { FormControl } from '@angular/forms';
import { CadastraService } from '../cadastra/cadastra.service';
import { Cliente } from '../cliente/Cliente';
import { ClientesService } from '../cliente/clientes.service';



@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css'],
  providers: [DecimalPipe]
})
export class ListaComponent implements OnInit {

  clientes$: Observable<Cliente[]>
  filter = new FormControl('');
  CLIENTES: Cliente[]
  
  constructor(    
    private service: ClientesService,
    private cadastraService: CadastraService) {
  }

  ngOnInit(): void {
     this.clientes$ = this.service.list();;
      // get data of observable
      this.service.list().subscribe(clientes => {
        this.CLIENTES = clientes as Cliente[]
      })
  }

  search(text: string): Cliente[] {
    return this.CLIENTES.filter(cliente => {
      const term = text.toLowerCase();      
      return cliente.nome.toLowerCase().includes(term)
          || cliente.telefone.toLowerCase().includes(term);
    });
  }

  onChange(event){
    this.clientes$ = this.filter.valueChanges.pipe(
      startWith(''),
      map(text => this.search(event.target.value))
    );
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














