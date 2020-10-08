import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListaComponent } from './lista.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [ListaComponent],
  imports: [
    NgbModule,
    ReactiveFormsModule,
    CommonModule,
    FormsModule
  ]
})
export class DetalhesModule { }
