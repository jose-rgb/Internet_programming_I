"use strict";
exports.__esModule = true;
exports.jogo = void 0;
var personagens_1 = require("./personagens");
var jogo = /** @class */ (function () {
    function jogo(arrayPersons) {
        this.arrayPersons = arrayPersons;
    }
    return jogo;
}());
exports.jogo = jogo;
////////////////////////////////////////////////
var person1 = new personagens_1.Personagem(1, 'José', 500);
var person2 = new personagens_1.Soldado(2, 'Joao', 500, 10);
var person3 = new personagens_1.Cavaleiro(1, 'Jué', 500, 15);
console.log(person1);
console.log(person2);
console.log(person3);
