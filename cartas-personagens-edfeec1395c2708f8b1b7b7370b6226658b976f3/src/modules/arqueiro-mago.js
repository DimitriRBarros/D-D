import { Arqueiro } from "./arqueiro.js";
import { Mago } from "./mago.js";
import { Personagem } from "./personagem.js";


export class ArqueiroMago extends Personagem {
    ladoArqueiro
    ladoMago
    static tipo = 'ArqueiroMago'
    static descricao ='Detentor de lanças e flechas mágicas!'

    constructor(nome, destreza, elementoMagico, levelMagico, inteligencia, descricao) {
        super(nome)
        this.ladoArqueiro = new Arqueiro(nome, destreza)
        this.ladoMago = new Mago(nome, elementoMagico, levelMagico, inteligencia)
        this.descricao = descricao
    }

    obterInsignia() {
        return `${this.ladoArqueiro.obterInsignia()} e ${this.ladoMago.obterInsignia()}`
    }
}