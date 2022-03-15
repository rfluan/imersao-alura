function ConverterReal() {
    var valorElemento = document.getElementById("valor")
    var valor = valorElemento.value
    var valorEmDolarNumerico = parseFloat(valor)
    var valorEmReal = valorEmDolarNumerico * 5.16

    var elementoValorConvertido = document.getElementById("valorConvertido")
    var valorConvertido = `O resultado em real é R$ ${valorEmReal}!`
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
[] Conversor de temperaturas entre farenheit, kelvin e celcius.
[] Adicionar uma linha ao projeto desenvolvido para que apareça o valor em bitcoin.
*/