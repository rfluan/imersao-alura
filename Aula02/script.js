function ConverterReal() {
    var valorElemento = document.getElementById("valor")
    var valor = valorElemento.value
    var valorEmDolarNumerico = parseFloat(valor)
    var valorEmReal = valorEmDolarNumerico * 5.16
    var valorEmBitcoin = valorEmDolarNumerico * 0.000025

    var elementoValorConvertido = document.getElementById("valorConvertido")
    var valorConvertido = `O resultado em real é R$ ${valorEmReal}! e <br> em Bitcoin é ${valorEmBitcoin}`

    console.log(valorEmBitcoin)

    elementoValorConvertido.innerHTML = valorConvertido
}

function ConverterEuro() {
    var valorElemento = document.getElementById("valor")
    var valor = valorElemento.value
    var valorEmDolarNumerico = parseFloat(valor)
    var valorEmEuro = valorEmDolarNumerico * 0.91

    var elementoValorConvertido = document.getElementById("valorConvertido")
    var valorConvertido = `O resultado em Euro é € ${valorEmEuro}!`
    elementoValorConvertido.innerHTML = valorConvertido
}

/*
Desafios desta aula!
[ok] Adicionar outras moedas para converter.
[] Conversor de quilômetros para anos luz e verificar o tempo que demora para ir de uma estrela para outra.
[ok] Conversor de temperaturas entre farenheit, kelvin e celcius.
[ok] Adicionar uma linha ao projeto desenvolvido para que apareça o valor em bitcoin.
*/