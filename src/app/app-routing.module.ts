import { EventHandlerVars } from '@angular/compiler/src/compiler_util/expression_converter';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EntrarComponent } from './entrar/entrar.component';

/*import { CadastrarEmpresaComponent } from './cadastrar-empresa/cadastrar-empresa.component';
import { CadastrarFamiliaComponent } from './cadastrar-familia/cadastrar-familia.component';*/

import { HomeComponent } from './home/home.component';
import { SobreComponent } from './sobre/sobre.component';



const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'sobre', component: SobreComponent},
  {path: 'entrar', component: EntrarComponent},
/*{path: 'perfil-f', component: PerfilEComponent},
  {path: 'perfil-e', component: PerfilFComponent},
  {path: 'cadastrar-familia', component: CadastrarFamiliaComponent}
  {path: 'cadastrar-empresa', component: CadastrarEmpresaComponent}*/ 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }