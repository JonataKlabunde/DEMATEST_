import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastraComponent } from './cadastra/cadastra.component';
import { DetalhesComponent } from './detalhes/detalhes.component';
import { SigninComponent } from './home/signin/signin.component';
import { ListaComponent } from './lista/lista.component';


const routes: Routes = [
  // { path: '', pathMatch: 'full', redirectTo: '' },

  { path: '', component: SigninComponent },
  { path: 'clientes', component: ListaComponent },
  { path: 'cadastrar', component: CadastraComponent },
  { path: 'detalhes', component: DetalhesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
