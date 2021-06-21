"use strict";
exports.__esModule = true;
exports.Jogo = void 0;
var personagens_1 = require("./personagens");
var Jogo = /** @class */ (function () {
    function Jogo() {
        this.personagens = [];
    }
    Jogo.prototype.incluir = function (p) {
        var personagemIgual = this.personagens.filter(function (personagem) { return personagem.id === p.id; });
        if (personagemIgual.length > 0) {
            console.log('ID já existe.');
            return;
        }
        this.personagens.push(p);
    };
    Jogo.prototype.consultar = function (id) {
        var personagem = this.personagens.filter(function (personagem) { return personagem.id === id; });
        if (personagem.length > 0) {
            return personagem[0];
        }
        return null;
    };
    Jogo.prototype.atacar = function (idAtacante, idAtacado) {
        if (idAtacante === idAtacado) {
            console.log('Error, personagem de mesmo id.');
            return;
        }
        var atacante = this.consultar(idAtacante);
        var atacado = this.consultar(idAtacado);
        if (atacante && atacado) {
            if (atacante instanceof personagens_1.Soldado || atacante instanceof personagens_1.Cavaleiro) {
                atacante.atacar(atacado);
                return;
            }
        }
    };
    Jogo.prototype.avaliarBatalha = function () {
        this.personagens.forEach(function (personagem) { return console.log(personagem.toString()); });
    };
    return Jogo;
}());
exports.Jogo = Jogo;
