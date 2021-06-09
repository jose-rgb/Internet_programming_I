//8) Crie uma classe chamada MeuNumero tenha:
//a) Um atributo chamado numero que seja somente leitura e inicializado no
//construtor;
//b) Um método chamado getInteiro que retorna a parte inteira do atributo numero;
//c) Um método chamado getDecimal que retorne a parte decimal do atributo
//numero.
//Dica: utilize a função Math.floor(n)
//d) Instancie uma classe MeuNumero e teste os métodos da classe. 

class MeuNumero  {
    numero: number

    constructor(numero) {
        this.numero = numero
    }
    getInteiro() {
        const inteiro = Math.floor(this.numero)
        return inteiro
    }
    getDecimal() {
        const inteiro = Math.floor(this.numero)
        const decimal = this.numero - inteiro
        return decimal.toFixed(2)
    }

}

const numero =  new MeuNumero(12.56)
console.log(`Inteiro: ${numero.getInteiro()}`);
console.log(`Decimal: ${numero.getDecimal()}`);