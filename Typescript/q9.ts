//9) Crie uma classe chamada Transacao que tenha: 
//a) Um atributo chamado valor e um outro chamado desconto, ambos somente  leitura; 
//b) Um método que calcule e retorne o valor do desconto aplicado ao valor original:  valor * (1-desconto/100). 
//c) Crie métodos de acesso get para ambos os atributos. 
//d) Instancie uma classe Transacao e teste seus métodos

class Transacao {
    readonly valor: number;
    readonly desconto: number;

    constructor(valor: number, desconto: number) {
        this.valor = valor;
        this.desconto = desconto;
    }

    getValor(): void {
        console.log(`Valor => ${this.valor}`);
    }

    getDesconto(): void {
        console.log(`Desconto => ${this.desconto}`);
    }

    Desconto() {
        return this.valor * (1 - this.desconto / 100);
    }
}

const operacao = new Transacao(122, 22);
console.log(`Valor após o desconto: ${operacao.Desconto().toFixed(2)}`);

