var nome = "Luan Ferreira"
var notaDoPrimeiroBimestre = 4
var notaDoSegundoBimestre = 7
var notaDoTerceiroBimestre = 2
var notaDoQuartoBimestre = 3

var res = document.getElementById('res')

var notaFixed = ((notaDoPrimeiroBimestre + notaDoSegundoBimestre + notaDoTerceiroBimestre + notaDoQuartoBimestre) / 4).toFixed("1")

/* var notaFinal = (notaDoPrimeiroBimestre + notaDoSegundoBimestre + notaDoTerceiroBimestre + notaDoQuartoBimestre) / 4
var notaFixed = notaFinal.toFixed("1") */

console.log("Bem vindo " + nome)

if (notaFixed <= 5) {
  res.innerHTML = `Sua média foi de ${notaFixed}: Reprovado`
} else {
  res.innerHTML = `Sua média foi de ${notaFixed}: Aprovado`
}

  var c = function(x) {
  return x*9/5+32
}

console.log(c(15))

//console.log("A média das suas notas foram: " + notaFixed)

/* Revisão
variáveis, strings, console.log, toFixed, operações matemáticas, concatenação */

/* Desafios desta aula!

[ok] Dependendo da nota, mostrar se a aluna ou aluno foi aprovada(o) ou não
[ok] Alterar o fundo da tela da maneira que achar mais legal
[ok] Imprimir na própria página o resultado, ao invés do console
[] Criar um conversor de temperaturas entre farenheit e celcius
[ok] Colocar a conta inteira da média em apenas uma linha
*/
