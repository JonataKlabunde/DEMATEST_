import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms'
import { CommonModule } from '@angular/common';
import { CadastraComponent } from './cadastra.component';


@NgModule({
    declarations: [ CadastraComponent ],
    imports: [
        ReactiveFormsModule,
        CommonModule
    ]
})
export class CadastraModule { }