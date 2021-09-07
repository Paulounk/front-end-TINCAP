import { EventHandlerVars } from '@angular/compiler/src/compiler_util/expression_converter';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarFamiliaComponent } from './cadastrar-familia/cadastrar-familia.component';
import { EntrarComponent } from './entrar/entrar.component';

const routes: Routes = [
  {path: '', redirectTo: 'cadastrar-familia', pathMatch: 'full'},
  /*{path: 'perfil-f', component: PerfilEComponent},*/
  {path: 'entrar', component: EntrarComponent},
  /*{path: 'perfil-e', component: PerfilFComponent},*/
  {path: 'cadastrar-familia', component: CadastrarFamiliaComponent}
  /*{path: 'cadastrar-empresa', component: CadastrarEmpresaComponent}*/
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }