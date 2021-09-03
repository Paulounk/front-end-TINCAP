import { EventHandlerVars } from '@angular/compiler/src/compiler_util/expression_converter';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarFamiliaComponent } from './cadastrar-familia/cadastrar-familia.component';

const routes: Routes = [
  {path: '', redirectTo: 'cadastrar-familia', pathMatch: 'full'},
  /*{path: 'entrar', component: EntrarComponent},*/
  /*{path: 'perfil-f', component: PerfilEComponent},*/
  /*{path: 'perfil-e', component: PerfilFComponent},*/
  {path: 'cadastrar-familia', component: CadastrarFamiliaComponent},
  /*{path: 'cadastrar-empresa', component: CadastrarEmpresaComponent}*/
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }