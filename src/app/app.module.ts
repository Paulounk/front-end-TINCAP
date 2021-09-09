import { HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PerfilFComponent } from './perfil-f/perfil-f.component';
import { PerfilEComponent } from './perfil-e/perfil-e.component';
import { CadastrarFamiliaComponent } from './cadastrar-familia/cadastrar-familia.component';
import { RodapeComponent } from './rodape/rodape.component';
import { EntrarComponent } from './entrar/entrar.component';
import { MenuComponent } from './menu/menu.component';

import { CadastrarEmpresaComponent } from './cadastrar-empresa/cadastrar-empresa.component';

@NgModule({
  declarations: [
    AppComponent,
    PerfilFComponent,
    PerfilEComponent,
    CadastrarFamiliaComponent,
    RodapeComponent,
    MenuComponent,
    EntrarComponent,
    MenuComponent,
    CadastrarEmpresaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [{
    provide: LocationStrategy,
    useClass: HashLocationStrategy
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }