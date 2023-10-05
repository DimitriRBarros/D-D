import { Personagem } from "./personagem.js";

export class Arqueiro extends Personagem {
    static tipo = 'Arqueiro'
    destreza
    static descricao ='Você tem meu arco!'

constructor(nome, destreza, descricao) {
    super(nome)
    this.destreza = destreza
    this.descricao = descricao
}

obterInsignia() {
    if(this.destreza >= 5)
    return `Dominador de flechas`

    return super.obterInsignia()
}

}
