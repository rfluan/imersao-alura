var numeroSecreto = parseInt(Math.random() * 11);

function Chutar() {
  var elementoResultado = document.getElementById("resultado");
  var chute = parseInt(document.getElementById("valor").value);

  if (chute == numeroSecreto) {
    elementoResultado.innerHTML = "Parabéns, você acertou!";
  } else if (chute > 10 || chute < 0) {
    elementoResultado.innerHTML = "Adicione um número de 0 a 10!";
  } else if (chute > numeroSecreto) {
    elementoResultado.innerHTML =
      "O número chutado é MAIOR que o número secreto!";
  } else if (chute < numeroSecreto) {
    elementoResultado.innerHTML =
      "O número chutado é MENOR que o número secreto!";
  } else {
    elementoResultado.innerHTML = "Você errou!";
  }
}

/*
Desafios desta aula!
[] Adicionar um número de tentativas para a pessoa tentar acertar e imprimir a resposta no final.
[ok] Quando a pessoa errar, deixar na mensagem se o número chutado é maior ou menor que o número secreto.
[ok] Pesquisar e aprender a diferença entre == e ===

if (chute == numeroSecreto) {
    elementoResultado.innerHTML = "Parabéns, você acertou!";
  } else if (chute > 10 || chute < 0) {
    elementoResultado.innerHTML = "Adicione um número de 0 a 10!";
  } else if (chute > numeroSecreto) {
    elementoResultado.innerHTML =
      "O número chutado é MAIOR que o número secreto!";
  } else if (chute < numeroSecreto) {
    elementoResultado.innerHTML =
      "O número chutado é MENOR que o número secreto!";
  } else {
    elementoResultado.innerHTML = "Você errou!";
  }
}


*/