"use strict";
exports.__esModule = true;
exports.Cavaleiro = exports.Soldado = exports.Personagem = void 0;
var Personagem = /** @class */ (function () {
    function Personagem(id, nome, energia) {
        this.id = id;
        this.nome = nome;
        this.energia = energia;
    }
    Personagem.prototype.estaVivo = function () {
        if (this.energia == 0) {
            return false;
        }
        else {
            return true;
        }
    };
    Personagem.prototype.defenderAtaque = function (ataque) {
        if (ataque > this.energia) {
            this.energia = 0;
        }
        else {
            this.energia = this.energia - ataque;
        }
    };
    return Personagem;
}());
exports.Personagem = Personagem;
var Soldado = /** @class */ (function () {
    function Soldado(id, nome, energia, forceAtaque) {
        this.id = id;
        this.nome = nome;
        this.energia = energia;
        this.forceAtaque = forceAtaque;
    }
    Soldado.prototype.estaVivo = function () {
        if (this.energia == 0) {
            return false;
        }
        else {
            return true;
        }
    };
    Soldado.prototype.defenderAtaque = function (ataque) {
        if (ataque > this.energia) {
            this.energia = 0;
        }
        else {
            this.energia = this.energia - (ataque / 2);
        }
    };
    Soldado.prototype.atacar = function (Personagem) {
        var ataque = Personagem.defenderAtaque(this.forceAtaque);
    };
    return Soldado;
}());
exports.Soldado = Soldado;
var Cavaleiro = /** @class */ (function () {
    function Cavaleiro(id, nome, energia, forceAtaque) {
        this.id = id;
        this.nome = nome;
        this.energia = energia;
        this.forceAtaque = forceAtaque;
    }
    Cavaleiro.prototype.estaVivo = function () {
        if (this.energia == 0) {
            return false;
        }
        else {
            return true;
        }
    };
    Cavaleiro.prototype.defenderAtaque = function (ataque) {
        if (ataque > this.energia) {
            this.energia = 0;
        }
        else {
            var armaduraCavaleiro = (30 * ataque) / 100;
            this.energia = this.energia - (ataque - armaduraCavaleiro);
        }
    };
    Cavaleiro.prototype.atacar = function (Personagem) {
        var forceAtaqueCavaleiro = this.forceAtaque * 2;
        var ataque = Personagem.defenderAtaque(forceAtaqueCavaleiro);
    };
    return Cavaleiro;
}());
exports.Cavaleiro = Cavaleiro;
