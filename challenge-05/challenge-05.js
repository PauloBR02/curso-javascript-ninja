/*
Crie uma vari�vel qualquer, que receba um array com alguns valores aleat�rios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var arr = [1, 5, 9, 10, 250];

/*
Crie uma fun��o que receba um array como par�metro, e retorne esse array.
*/
function newFunction(arg){
  return arg;
}

/*
Imprima o segundo �ndice do array retornado pela fun��o criada acima.
*/
console.log(newFunction(arr)[1]);


/*
Crie uma fun��o que receba dois par�metros: o primeiro, um array de valores; e o
segundo, um n�mero. A fun��o deve retornar o valor de um �ndice do array que foi passado
no primeiro par�metro. O �ndice usado para retornar o valor, deve ser o n�mero passado no
segundo par�metro.
*/
function newFunction2( arg, x ) {
  return arg[x];
}

/*
Declare uma vari�vel que recebe um array com 5 valores, de tipos diferentes.
*/
var arr2 = ['paulo',24,1.78,'masculino',true];

/*
Invoque a fun��o criada acima, fazendo-a retornar todos os valores do �ltimo
array criado.
*/
console.log(newFunction2(arr2,0)); //"paulo"
console.log(newFunction2(arr2,1)); //24
console.log(newFunction2(arr2,2)); //1.78
console.log(newFunction2(arr2,3)); //"masculino"
console.log(newFunction2(arr2,4)); //true

/*
Crie uma fun��o chamada `book`, que recebe um par�metro, que ser� o nome do
livro. Dentro dessa fun��o, declare uma vari�vel que recebe um objeto com as
seguintes caracter�sticas:
- esse objeto ir� receber 3 propriedades, que ser�o nomes de livros;
- cada uma dessas propriedades ser� um novo objeto, que ter� outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de p�ginas)
    - `autor` - String
    - `editora` - String
- A fun��o deve retornar o objeto referente ao livro passado por par�metro.
- Se o par�metro n�o for passado, a fun��o deve retornar o objeto com todos
os livros.
*/
function book(nome) {
  var objLivros = {
    'Navegando': {
      quantidadePaginas: 50,
      autor: 'Josias',
      editora: 'Marques'
    },
    'Pintando': {
      quantidadePaginas: 127,
      autor: 'Junior Santos',
      editora: 'Colibri'
    },
    'Aprendendo Javascript': {
      quantidadePaginas: 326,
      autor: 'Paulo',
      editora: 'Javascript'
    }
  }
    return nome ? objLivros[nome] : objLivros;
}

/*
Usando a fun��o criada acima, imprima o objeto com todos os livros.
*/
console.log(book());

/*
Ainda com a fun��o acima, imprima a quantidade de p�ginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] p�ginas!" */
console.log('O livro Pintando tem ' + book('Pintando').quantidadePaginas + ' p�ginas.');


/*
Ainda com a fun��o acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] � [AUTOR]."
*/
console.log( 'O autor do livro Aprendendo Javascript � ' + book('Aprendendo Javascript').autor + '.');

/*
Ainda com a fun��o acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log( 'O livro Navegando foi publicado pela editora ' + book('Navegando').editora + '.');
