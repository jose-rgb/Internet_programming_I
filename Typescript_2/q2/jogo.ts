import { Personagem, Soldado, Cavaleiro } from './personagens';

export class jogo {
   public readonly arrayPersons: object;

   constructor(arrayPersons: object) {
       this.arrayPersons = arrayPersons;
   }
   //incluir(arrayIncluir, size) {}
       
}







////////////////////////////////////////////////
const person1 = new Personagem(1, 'José', 500);
const person2 = new Soldado(2, 'Joao', 500, 10);
const person3 = new Cavaleiro(1, 'Jué', 500, 15);


console.log(person1)
console.log(person2)
console.log(person3)
