import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Cliente } from '../cliente/Cliente';
import { ActivatedRoute, Router } from '@angular/router';
import { CadastraService } from '../cadastra/cadastra.service';
import { ClientesService } from '../cliente/clientes.service';
import { Observable } from 'rxjs';
import { LogicalFileSystem } from '@angular/compiler-cli/src/ngtsc/file_system';

@Component({
  selector: 'app-cadastra',
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.css']
})
export class DetalhesComponent implements OnInit {

  private detalhesForm: FormGroup;
  private clienteId: number;

  constructor(
      private formBuilder: FormBuilder,
      private cadastraService: CadastraService,
      private router: Router) { }

  ngOnInit(): void {
    this.detalhesForm = this.formBuilder.group({
      nome: ['' , Validators.required],
      cpf: ['', Validators.required],
      telefone: ['', Validators.required],
      observacao: ['', Validators.required],
      endereco: ['', Validators.required]
    })
    this.preecherCampos();
  }

  preecherCampos() {
      this.cadastraService.busca().subscribe(retorno => {
        this.detalhesForm = this.formBuilder.group({
          nome: [retorno.nome , Validators.required],
          cpf: [retorno.cpf, Validators.required],
          telefone: [retorno.telefone, Validators.required],
          observacao: [retorno.observacao, Validators.required],
          endereco: [retorno.endereco, Validators.required]
        })
      }); 
  }

  valida(){
    const nome = this.detalhesForm.get('nome').value;
    const cpf = this.detalhesForm.get('cpf').value;
    const telefone = this.detalhesForm.get('telefone').value;
    const observacao = this.detalhesForm.get('observacao').value;
    const endereco = this.detalhesForm.get('endereco').value;

    var isValid = false
    isValid = this.validaCampo('Nome', nome)
    if (!isValid) return
    isValid = this.validaCampo('CPF', cpf)
    if (!isValid) return
    isValid = this.validaCampo('Telefone', telefone)
    if (!isValid) return
    isValid = this.validaCampo('Observacao', observacao)
    if (!isValid) return
    isValid = this.validaCampo('Endereço', endereco)
    if (!isValid) return

    if (isValid){
      this.atualiza()
    }   
  }

  validaCampo(parametro: string, value: any){
    if (value == ''){
      alert(parametro+ " é obrigatório!");
      return false
    }
    return true
  }

  atualiza(){
    const clienteAtualizado = this.detalhesForm.getRawValue() as Cliente;
    this.cadastraService
        .atualizar(clienteAtualizado)
        .subscribe(
            () => { this.router.navigate(['/clientes'])},
            err => console.log(err)
        )
    
  }

}
