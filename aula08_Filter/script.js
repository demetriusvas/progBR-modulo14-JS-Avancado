
function novoAluno(nome, idade){
    return {nome, idade}
}

let alunos = [
    novoAluno("Marcio", 23),
    novoAluno("Jose", 45),
    novoAluno("Marcia", 29),
    novoAluno("Joao", 35)
];

function temMenosDe30(aluno){
    return aluno.idade < 30;
}
/*
let alunosComMenosDe30 = alunos.filter(temMaisDe30);

console.log(alunosComMenosDe30);
*/

console.log(alunos.filter(temMenosDe30));