import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PerfilFComponent } from './perfil-f/perfil-f.component';
import { PerfilEComponent } from './perfil-e/perfil-e.component';

@NgModule({
  declarations: [
    AppComponent,
    PerfilFComponent,
    PerfilEComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
