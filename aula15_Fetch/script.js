let url = "https://economia.awesomeapi.com.br/last/USD-BRL";



function converter(){
    let input = document.getElementById("valor");
    let valor = input.value;

    fetch(url)
    .then((res) => {

        return res.json()

    })
    .then((data) => {
        let rate = data.USDBRL.ask;

        let resultado = `${valor} dolares = ${rate * valor} em reais.`
        document.getElementById("resultado").innerHTML = resultado;
    });
}