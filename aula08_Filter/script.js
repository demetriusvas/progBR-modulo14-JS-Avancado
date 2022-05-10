
function novoAluno(nome, idade){
    return {nome, idade}
}

let alunos = [
    novoAluno("Marcio", 23),
    novoAluno("Jose", 45),
    novoAluno("Marcia", 29),
    novoAluno("Joao", 35)
];

let jogadores = [
    novoAluno("Igor", 23),
    novoAluno("Leo", 45),
    novoAluno("Michelle", 29),
    novoAluno("Maria", 35)
]

function temMenosDe30(aluno){
    return aluno.idade < 30;
}

function temMaisDe30(aluno){
    return aluno.idade > 30;
}
/*
let alunosComMenosDe30 = alunos.filter(temMaisDe30);

console.log(alunosComMenosDe30);
*/

console.log(jogadores.filter(temMaisDe30));