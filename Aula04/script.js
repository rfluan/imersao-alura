var listaFilmes = [
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXhERtxmqWKErqEPFbIhL-0wfg2wLKHJfWJu6aJ3Rj3Q_lBDauTXqXUlcJ3A8GBKZDcwo&usqp=CAU",

  "https://sm.ign.com/ign_br/tv/m/my-hero-ac/my-hero-academia_f9ae.jpg",
  
  "https://media.fstatic.com/XcbavtyoNtRzTHPYHEBzbJ24pvg=/290x478/smart/media/movies/covers/2015/04/akame-ga-kill_t101243.jpg"
];

for (var i = 0; i < listaFilmes.length; i++) {
  document.write("<img src=" + listaFilmes[i] + ">");
}

/*

  Desafios desta aula!
  
[ok] Escolher o seu tema preferido para adaptar ao nosso código, ou seja, ao invés de filmes pode ser uma lista de animes, HQ's, cursos, capas de jogos...
[] Tentar implementar outras versões da estrutura de repetição que fizemos com for, como por exemplo com foreach ou while
[] Criar uma condição para não adicionar filmes repetidos, caso eles já tenham sido adicionados anteriormente
[] Criar um campo e botão para adicionar a imagem pela tela, e não direto no código


  Conteúdo detalhado desta aula
Criar uma primeira array de filmes usando a sintaxe [];

Utilizar o método filmes.push("Nome Do Filme") para inserir um novo elemento na lista (ou seja, um novo filme na array);
Descobrir a quantidade de elementos em uma array com o método array.length;

Selecionar elementos de uma array utilizando a sintaxe array[número], lembrando sempre que o primeiro índice começa com zero, ou seja, array[0] para o primeiro elemento;

Utilizar a instrução for para iterar, ou seja, percorrer todos os elementos de uma array;

Criar uma array com imagens de pôsters de alguns filmes que gostamos;

Montar a lógica do programa que vai iterar esta array de filmes e exibir cada um deles na tela, integrando o for do JavaScript com document.write().


*/
