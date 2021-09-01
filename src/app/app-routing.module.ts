import { EventHandlerVars } from '@angular/compiler/src/compiler_util/expression_converter';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: 'entrar', pathMatch: 'full'},
  {path: 'entrar', component: EntrarComponent},
  {path: 'perfil-f', component: Perfil-EComponent},
  {path: 'perfil-e', component: Perfil-FComponent},
  {path: 'cadastrar-familia', component: Cadastrar-FamiliaComponent},
  {path: 'cadastrar-empresa', component: Cadastrar-EmpresaComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }