/*var pessoa = {
    name: "Demetrius Vignati",
    idade: 34,
}

var contato = {
    telefone: 11-99719-1600,
    email: "demetriusvas@gmail.com"
}

var copia = {...pessoa, ...contato}
copia.idade = 88;

console.log(pessoa);
console.log(copia);
*/
var notas_turma1 = [10, 8, 4, 3];
var notas_turma2 = [5, 7, 9, 6];

var todas_notas = [...notas_turma1, ...notas_turma2]

console.log(todas_notas);