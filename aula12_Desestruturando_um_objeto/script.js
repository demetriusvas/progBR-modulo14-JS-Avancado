var aluno = {
    matricula: 1234,
    nome: "Demetrius",
    telefone: 11997191600,
    cidade: "São Paulo"
}

var aluno1 = {
    matricula: 1231,
    nome: "João",
    telefone: 11999999999,
    cidade: "São Paulo"
}

var aluno2 = {
    matricula: 1232,
    nome: "José",
    telefone: 11888888888,
    cidade: "São Paulo"
}

var alunos = [aluno, aluno1, aluno2]

var [marcos, ...outros] = alunos

console.log(marcos);
console.log(outros);

// var {...copia} = aluno;
// copia.nome = "João";
// console.log(copia);

