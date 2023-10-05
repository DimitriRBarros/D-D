import { Personagem } from "./modules/personagem.js"
import { PersonagemView } from "./components/personagem-view.js"
import { Mago } from "./modules/mago.js"
import { Arqueiro } from "./modules/arqueiro.js"
import { ArqueiroMago } from "./modules/arqueiro-mago.js"
import { Guerreiro } from "./modules/guerreiro.js"

const magoGandalf = new Mago('Gandalf', 8, 'fogo', 7, 10)
const magoRadagast = new Mago('Radagast', 4, 'gelo', 5, 5)
const arqueiroLegolas = new Arqueiro('Legolas', 5, 7)
const arqueiroMagoThranduil = new ArqueiroMago('Thranduil', 7, 10, 'ar', 8,)
const guerreiroAragorn = new Guerreiro('Aragorn', 9)

const personagens = [magoGandalf, magoRadagast, arqueiroLegolas, arqueiroMagoThranduil, guerreiroAragorn]

new PersonagemView(personagens).render()
