//3) Crie uma enum com as siglas dos estados “PI”, “CE”, “MA” e implemente as duas  alternativas abaixo: 
var Estados;
(function (Estados) {
    Estados[Estados["PI"] = 0] = "PI";
    Estados[Estados["CE"] = 1] = "CE";
    Estados[Estados["MA"] = 2] = "MA";
})(Estados || (Estados = {}));
;
//a) Crie um laço usando for para imprimir esses valores; 
for (var i = 0; i < Object.keys(Estados).length / 2; i++) {
    console.log(Estados[i]);
}
//b) Crie um laço que imprima os índices dessa enum e diga o que aconteceu. 
for (var i = 0; i < Object.keys(Estados).length / 2; i++) {
    var estado = Estados[i];
    console.log(Object.keys(Estados).indexOf(estado));
}
