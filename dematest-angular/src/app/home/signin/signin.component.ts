import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/auth.service';
import { Usuario } from 'src/app/usuario/usuario';
import { environment } from 'src/environments/environment';

@Component({
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  loginForm: FormGroup;

  private usuarios: Usuario[];
  
  constructor(
      private formBuilder: FormBuilder,
      private authService: AuthService,
      private router: Router) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      userName: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  login(){    
    const userName = this.loginForm.get('userName').value;
    const password = this.loginForm.get('password').value;

    this.authService.authenticate()
      .subscribe( usuarios => {
        if (usuarios.find(usuario => usuario.nome == userName && usuario.senha == password) != undefined) {
          // logado
          environment.LOGGED = true
          this.router.navigateByUrl("/clientes")
        } else {
          alert("Login invalido!");
          this.loginForm.reset();
        }
      });

    
      
    
  }

}
