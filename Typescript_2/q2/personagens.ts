export class Personagem {
    public readonly id: number;
    public readonly nome: string;
    public energia: number;

    constructor(id: number, nome: string, energia: number) {
        this.id = id;
        this.nome = nome;
        this.energia = energia;
    }

    estaVivo(){
        if ( this.energia == 0) {
            return false
        } else {
            return true
        }
    }

    defenderAtaque(ataque) {
        if (ataque > this.energia) {
            this.energia = 0;
        }
        else {
            this.energia = this.energia - ataque; 
        }

    }
}


export class Soldado {
    public readonly id: number;
    public readonly nome: string;
    public energia: number;
    public forceAtaque: number;


    constructor(id: number, nome: string, energia: number, forceAtaque: number ) {
        this.id = id;
        this.nome = nome;
        this.energia = energia;
        this.forceAtaque = forceAtaque;
    }

    estaVivo(){
        if ( this.energia == 0) {
            return false
        } else {
            return true
        }
    }

    defenderAtaque(ataque) {
        if (ataque > this.energia) {
            this.energia = 0;
        }
        else {
            this.energia = this.energia - (ataque / 2); 
        }

    }

    atacar(Personagem) {
        let ataque = Personagem.defenderAtaque(this.forceAtaque);

    }
}


export class Cavaleiro {
    public readonly id: number;
    public readonly nome: string;
    public energia: number;
    public forceAtaque: number;


    constructor(id: number, nome: string, energia: number, forceAtaque: number) {
        this.id = id;
        this.nome = nome;
        this.energia = energia;
        this.forceAtaque = forceAtaque;
        
    }

    estaVivo(){
        if ( this.energia == 0) {
            return false
        } else {
            return true
        }
    }

    defenderAtaque(ataque) {
        if (ataque > this.energia) {
            this.energia = 0;
        }
        else {
            let armaduraCavaleiro = (30 * ataque ) /100 
            this.energia = this.energia - (ataque - armaduraCavaleiro); 
        }

    }

    atacar(Personagem) {
        let forceAtaqueCavaleiro = this.forceAtaque * 2
        let ataque = Personagem.defenderAtaque(forceAtaqueCavaleiro);

    }
}


