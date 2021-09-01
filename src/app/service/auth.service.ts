import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { UsuarioLogin } from '../model/UsuarioLogin';
import { UsuarioModel } from '../model/UsuarioModel';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

  entrar(usuarioLogin: UsuarioLogin): Observable<UsuarioLogin>{
    return this.http.post<UsuarioLogin>("https://projetointegrateste.herokuapp.com/usuario/login", usuarioLogin)
  }

  cadastar(usuario: UsuarioModel): Observable<UsuarioModel>{
    return this.http.post<UsuarioModel>("https://projetointegrateste.herokuapp.com/usuario/cadastrar", usuario)
  }

  logado(){
    let ok: boolean = false

    if(environment.token != ''){
      ok = true
    }
    return ok
  }
}
