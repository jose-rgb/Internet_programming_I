//8) Crie uma classe chamada MeuNumero tenha:
//a) Um atributo chamado numero que seja somente leitura e inicializado no
//construtor;
//b) Um método chamado getInteiro que retorna a parte inteira do atributo numero;
//c) Um método chamado getDecimal que retorne a parte decimal do atributo
//numero.
//Dica: utilize a função Math.floor(n)
//d) Instancie uma classe MeuNumero e teste os métodos da classe. 
var MeuNumero = /** @class */ (function () {
    function MeuNumero(numero) {
        this.numero = numero;
    }
    MeuNumero.prototype.getInteiro = function () {
        var inteiro = Math.floor(this.numero);
        return inteiro;
    };
    MeuNumero.prototype.getDecimal = function () {
        var inteiro = Math.floor(this.numero);
        var decimal = this.numero - inteiro;
        return decimal.toFixed(2);
    };
    return MeuNumero;
}());
var numero = new MeuNumero(12.56);
console.log("Inteiro: " + numero.getInteiro());
console.log("Decimal: " + numero.getDecimal());
