/* MANEIRAS DE CRIAR FUNÇÕES 

------ MANEIRA 1
function dobro(x){
    console.log(2*x);
}

------ MANEIRA 2
let dobro = function(x){
    console.log(2*x);
}


------ MANEIRA 3 */
let dobro = x => 2 * x;

console.log(dobro(7));