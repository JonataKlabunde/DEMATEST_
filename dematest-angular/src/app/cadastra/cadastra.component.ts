import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CadastraService } from './cadastra.service';
import { Cliente } from '../cliente/Cliente';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastra',
  templateUrl: './cadastra.component.html',
  styleUrls: ['./cadastra.component.css']
})
export class CadastraComponent implements OnInit {

  cadastrarForm: FormGroup;

  constructor(
      private formBuilder: FormBuilder,
      private cadastraService: CadastraService,
      private router: Router) { }

  ngOnInit(): void {
    this.cadastrarForm = this.formBuilder.group({
      nome: ['', Validators.required],
      cpf: ['', Validators.required],
      telefone: ['', Validators.required],
      observacao: ['', Validators.required],
      endereco: ['', Validators.required]
    })
  }

  valida(){
    const nome = this.cadastrarForm.get('nome').value;
    const cpf = this.cadastrarForm.get('cpf').value;
    const telefone = this.cadastrarForm.get('telefone').value;
    const observacao = this.cadastrarForm.get('observacao').value;
    const endereco = this.cadastrarForm.get('endereco').value;

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
      this.cadastra()
    }   
  }
  
  validaCampo(parametro: string, value: any){
    if (value == ''){
      alert(parametro+ " é obrigatório!");
      return false
    }
    return true
  }

  cadastra(){
    const novoCliente = this.cadastrarForm.getRawValue() as Cliente;
    this.cadastraService
      .cadastrar(novoCliente)
      .subscribe(
        () => { this.router.navigate(['/clientes'])},
        err => console.log(err)
      )
    
  }



}
