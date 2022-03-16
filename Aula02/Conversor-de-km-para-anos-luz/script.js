function Converter() {
    var valorElemento = document.getElementById("valor")
    var valor = valorElemento.value

    var valorEmQuilometros = parseFloat(valor)
    var valorEmAnosLuz = valorEmQuilometros / 9460536068
    var tempoPercorridoEmKm = valorEmAnosLuz * 365;
    var resAnosLuz = valorEmAnosLuz.toFixed(1)
    

    var elementoValorConvertido = document.getElementById("valorConvertido")
    var valorConvertido = `Para percorrer ${valor} quilômetros você levaria ${resAnosLuz} anos luz! ou seja: ${tempoPercorridoEmKm} dias`


    elementoValorConvertido.innerHTML = valorConvertido
}

var num = 21212121;

console.log(valor.toLocaleString())


/*
Desafios desta aula!
[ok] Adicionar outras moedas para converter.
[ok] Conversor de quilômetros para anos luz e verificar o tempo que demora para ir de uma estrela para outra.
[ok] Conversor de temperaturas entre farenheit, kelvin e celcius.
[ok] Adicionar uma linha ao projeto desenvolvido para que apareça o valor em bitcoin.
*/