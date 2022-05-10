
/* EXEMPLO DE CALLBACK SIMPLES*/
// function ola(){
//     console.log("Ola!");
// }

// function saudacao(s, nome){
//     s();
//     console.log(nome);
// }

// saudacao(ola, "Demetrius");

// ----------- CALLBACK
// let usuarios = ["Adriano", "Marcia", "Jose"];

// function inserirUsuario(nome, callback){
//     setTimeout(() => {
//         usuarios.push(nome);
//         callback();
//     }, 1000);
// }

// function listarUsuarios(){
//     console.log(usuarios);
// }

// inserirUsuario("Demetrius", listarUsuarios);

// ------------------ PROMISE

let usuarios = ["Adriano", "Marcia", "Jose"];

function inserirUsuario(nome){
    let promise = new Promise(function(resolve, reject){
        setTimeout(() => {
            usuarios.push(nome);
            let error = true;
            if(!error){
                resolve();
            }else{
                reject({msg:"Erro de qualquer coisa."});
            }
        }, 1000);
    })
    return promise;
}

function listarUsuarios(){
    console.log(usuarios);
}

inserirUsuario("Demetrius")
    .then(listarUsuarios)
    .catch((error) => {
        console.log(error.msg)
    });