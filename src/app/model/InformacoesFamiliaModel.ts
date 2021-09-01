import { PostagemModel } from "./PostagemModel"

export class InformacoesFamiliaModel{
    public id: number
    public rendaFamiliar: number
    public quantidadeMembrosFamilia: number
    public cadastroProgramasSociais: boolean
    public pessoasComDeficiencia: boolean
    public descricaoSituacao: string
    
    public postagem: PostagemModel[]
}