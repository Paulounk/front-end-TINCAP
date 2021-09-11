import { EventHandlerVars } from '@angular/compiler/src/compiler_util/expression_converter';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarEmpresaComponent } from './cadastrar-empresa/cadastrar-empresa.component';
import { CadastrarFamiliaComponent } from './cadastrar-familia/cadastrar-familia.component';
import { UsuarioEditComponent } from './edit/usuario-edit/usuario-edit.component';
import { EntrarComponent } from './entrar/entrar.component';



const routes: Routes = [
  {path: '', redirectTo: 'entrar', pathMatch: 'full'},
   {path: 'entrar', component: EntrarComponent},
  /*{path: 'perfil-f', component: PerfilEComponent},*/
  /*{path: 'perfil-e', component: PerfilFComponent},*/
  {path: 'cadastrar-familia', component: CadastrarFamiliaComponent},
  {path: 'cadastrar-empresa', component: CadastrarEmpresaComponent},
  {path: 'usuario-edit/:id', component: UsuarioEditComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }