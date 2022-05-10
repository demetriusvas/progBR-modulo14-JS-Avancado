/*
function novoAluno(nome, idade){
    return {nome, idade}
}

let alunos = [
    novoAluno("Marcio", 23),
    novoAluno("Jose", 45),
    novoAluno("Marcia", 29),
    novoAluno("Joao", 35)
];

function alunoDaquiA5anos(aluno){
    aluno.idade += 5;
    return aluno;
}

console.log(alunos.map(alunoDaquiA5anos));
*/

let alunoA = { nome: "Demetrius", idade: 34};
let alunoB = { ...alunoA }
alunoB.idade = 25;