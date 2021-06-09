//9) Crie uma classe chamada Transacao que tenha: 
//a) Um atributo chamado valor e um outro chamado desconto, ambos somente  leitura; 
//b) Um método que calcule e retorne o valor do desconto aplicado ao valor original:  valor * (1-desconto/100). 
//c) Crie métodos de acesso get para ambos os atributos. 
//d) Instancie uma classe Transacao e teste seus métodos
var Transacao = /** @class */ (function () {
    function Transacao(valor, desconto) {
        this.valor = valor;
        this.desconto = desconto;
    }
    Transacao.prototype.getValor = function () {
        console.log("Valor => " + this.valor);
    };
    Transacao.prototype.getDesconto = function () {
        console.log("Desconto => " + this.desconto);
    };
    Transacao.prototype.Desconto = function () {
        return this.valor * (1 - this.desconto / 100);
    };
    return Transacao;
}());
var operacao = new Transacao(122, 22);
console.log("Valor ap\u00F3s o desconto: " + operacao.Desconto().toFixed(2));
