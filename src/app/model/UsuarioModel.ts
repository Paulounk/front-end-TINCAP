import { PostagemModel } from "./PostagemModel"

export class UsuarioModel{
    public id: number
    public nomeCompleto: string
    public email: string
    public usuario: string
    public senha: string

    public postagem: PostagemModel[]
}