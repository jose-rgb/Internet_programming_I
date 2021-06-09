//4) Sobre enums, implemente o seguinte: 
//a) Crie uma enum chamada DiasSemana com os valores representando os dias  da semana segunda a domingo; 
var DiasSemana;
(function (DiasSemana) {
    DiasSemana[DiasSemana["Segunda"] = 0] = "Segunda";
    DiasSemana[DiasSemana["Ter\u00E7a"] = 1] = "Ter\u00E7a";
    DiasSemana[DiasSemana["Quarta"] = 2] = "Quarta";
    DiasSemana[DiasSemana["Quinta"] = 3] = "Quinta";
    DiasSemana[DiasSemana["Sexta"] = 4] = "Sexta";
    DiasSemana[DiasSemana["S\u00E1bado"] = 5] = "S\u00E1bado";
    DiasSemana[DiasSemana["Domingo"] = 6] = "Domingo";
})(DiasSemana || (DiasSemana = {}));
;
//b) Crie um namespace com mesmo nome e dentro dele crie uma função chamada  isDiaUtil recebe um parâmetro do tipo DiasSema e retorna false se for um  sábado ou domingo e retorna true caso contrário;
//acontece um erro: error TS2339: Property 'isDiaUtil' does not exist on type 'typeof DiasSemana'.30 DiasSemana.isDiaUtil("Terça")
//ou seja, não posso declarar um namespace com mesmo nome do enum, pois dará conflito, mais se mudar o nome:
var verificarDiasSemana;
(function (verificarDiasSemana) {
    function isDiaUtil(day) {
        if (day == "Sábado") {
            return false;
        }
        else if (day == "Domingo") {
            return false;
        }
        else {
            return true;
        }
    }
    verificarDiasSemana.isDiaUtil = isDiaUtil;
})(verificarDiasSemana || (verificarDiasSemana = {}));
//c) Escreva também um script que declara uma variável do tipo da enum e que  testa a função DiasSemana.isDiaUtil(). 
for (var i = 0; i < 7; i++) {
    var day = DiasSemana[i];
    console.log(day + ": " + verificarDiasSemana.isDiaUtil(day));
}
