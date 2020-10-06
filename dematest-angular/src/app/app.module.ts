import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app.routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ListaComponent } from './lista/lista.component';
import { HomeModule } from './home/home.module';
import { CadastraModule } from './cadastra/cadastra.module';
import { DetalhesModule } from './detalhes/detalhes.module';

@NgModule({
  declarations: [
    AppComponent,
    ListaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    HomeModule,
    CadastraModule,
    DetalhesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
