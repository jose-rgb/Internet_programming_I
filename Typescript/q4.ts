//4) Sobre enums, implemente o seguinte: 
//a) Crie uma enum chamada DiasSemana com os valores representando os dias  da semana segunda a domingo; 
enum DiasSemana  {
    "Segunda",
    "Terça", 
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado",
    "Domingo"    
};

//b) Crie um namespace com mesmo nome e dentro dele crie uma função chamada  isDiaUtil recebe um parâmetro do tipo DiasSema e retorna false se for um  sábado ou domingo e retorna true caso contrário;

//acontece um erro: error TS2339: Property 'isDiaUtil' does not exist on type 'typeof DiasSemana'.30 DiasSemana.isDiaUtil("Terça")
//ou seja, não posso declarar um namespace com mesmo nome do enum, pois dará conflito, mais se mudar o nome:


namespace verificarDiasSemana {
    export function isDiaUtil(day) {
        if(day == "Sábado") {
            return false
        } else if(day == "Domingo") {
            return false
        } else {
            return true
        }
    }

}


//c) Escreva também um script que declara uma variável do tipo da enum e que  testa a função DiasSemana.isDiaUtil(). 
for (let i: number = 0; i < 7; i++ ) {
    
    let day: string = DiasSemana[i];
    console.log(`${day}: ${verificarDiasSemana.isDiaUtil(day)}`);
}

