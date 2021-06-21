"use strict";
exports.__esModule = true;
var personagens_1 = require("./personagens");
var jogo_1 = require("./jogo");
function main() {
    var personagem = new personagens_1.Personagem(1, 'José', 200);
    var soldado1 = new personagens_1.Soldado(2, 'Rambo', 200, 9);
    var soldado2 = new personagens_1.Soldado(3, 'Yure boika', 200, 6);
    var cavaleiro = new personagens_1.Cavaleiro(4, 'Lancelote', 200, 10);
    var jogo = new jogo_1.Jogo();
    jogo.incluir(personagem);
    jogo.incluir(soldado1);
    jogo.incluir(soldado2);
    jogo.incluir(cavaleiro);
    jogo.atacar(2, 1);
    jogo.avaliarBatalha();
    jogo.atacar(4, 2);
    jogo.avaliarBatalha();
    jogo.atacar(3, 4);
    jogo.avaliarBatalha();
    jogo.atacar(4, 3);
    jogo.avaliarBatalha();
}
main();
