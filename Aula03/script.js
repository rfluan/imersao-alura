var numeroSecreto = parseInt(Math.random() * 21);
var tentativas = 4;

function Chutar() {
  var elementoResultado = document.getElementById("resultado");
  var chute = parseInt(document.getElementById("valor").value);

  if (chute == numeroSecreto) {
    elementoResultado.innerHTML = "Parabéns, você acertou!";
  } else if (chute > 20 || chute < 0) {
    elementoResultado.innerHTML = "Adicione um número de 0 a 10!";
  } else if (numeroSecreto > chute) {
    elementoResultado.innerHTML = `Poxa, que pena! Você errou! O número secreto é maior que ${chute}. Você tem mais ${tentativas} tentativas.`;
    tentativas--;
  } else if (numeroSecreto < chute) {
    elementoResultado.innerHTML = `Poxa, que pena! Você errou! O número secreto é menor que ${chute}. Você tem mais ${tentativas} tentativas.`;
    tentativas--;
  }
  if (tentativas < 0) {
    elementoResultado.innerHTML = `Número máximo de tentativas alcançado. Você perdeu! O número secreto era:  ${numeroSecreto} .`;
  }
}

/*
Desafios desta aula!
[ok] Adicionar um número de tentativas para a pessoa tentar acertar e imprimir a resposta no final.
[ok] Quando a pessoa errar, deixar na mensagem se o número chutado é maior ou menor que o número secreto.
[ok] Pesquisar e aprender a diferença entre == e ===
*/