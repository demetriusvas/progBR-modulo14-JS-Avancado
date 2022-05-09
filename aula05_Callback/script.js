
/* EXEMPLO DE CALLBACK SIMPLES*/
// function ola(){
//     console.log("Ola!");
// }

// function saudacao(s, nome){
//     s();
//     console.log(nome);
// }

// saudacao(ola, "Demetrius");

let usuarios = ["Adriano", "Marcia", "Jose"];

function inserirUsuario(nome, callback){
    setTimeout(() => {
        usuarios.push(nome);
        callback();
    }, 1000);
}

function listarUsuarios(){
    console.log(usuarios);
}

inserirUsuario("Demetrius", listarUsuarios);

