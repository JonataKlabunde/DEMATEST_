import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { DetalhesComponent } from './detalhes.component';


@NgModule({
  declarations: [DetalhesComponent],
  imports: [
    ReactiveFormsModule,
    CommonModule
  ]
})
export class DetalhesModule { }
