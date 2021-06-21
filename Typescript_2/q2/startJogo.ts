import { Personagem, Soldado, Cavaleiro } from './personagens';
import { Jogo } from './jogo';


function main () {
  const personagem = new Personagem(1, 'José', 200);
  const soldado1 = new Soldado(2, 'Rambo', 200, 9);
  const soldado2 = new Soldado(3, 'Yure boika', 200, 6);
  const cavaleiro = new Cavaleiro(4, 'Lancelote', 200, 10);

  const jogo = new Jogo();

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

