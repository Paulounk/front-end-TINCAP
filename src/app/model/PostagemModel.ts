import { InformacoesFamiliaModel } from "./InformacoesFamiliaModel"
import { UsuarioModel } from "./UsuarioModel"

export class PostagemModel{
    public id: number
    public titulo: string
    public conteudo: string
    public data: Date

    public familia: InformacoesFamiliaModel
    public usuario: UsuarioModel
}