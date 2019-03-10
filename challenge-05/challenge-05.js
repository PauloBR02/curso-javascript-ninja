/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var arr = [1, 5, 9, 10, 250];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function newFunction(arg){
  return arg;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log(newFunction(arr)[1]);


/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
function newFunction2( arg, x ) {
  return arg[x];
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var arr2 = ['paulo',24,1.78,'masculino',true];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
console.log(newFunction2(arr2,0)); //"paulo"
console.log(newFunction2(arr2,1)); //24
console.log(newFunction2(arr2,2)); //1.78
console.log(newFunction2(arr2,3)); //"masculino"
console.log(newFunction2(arr2,4)); //true

/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
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
Usando a função criada acima, imprima o objeto com todos os livros.
*/
console.log(book());

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!" */
console.log('O livro Pintando tem ' + book('Pintando').quantidadePaginas + ' páginas.');


/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log( 'O autor do livro Aprendendo Javascript é ' + book('Aprendendo Javascript').autor + '.');

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log( 'O livro Navegando foi publicado pela editora ' + book('Navegando').editora + '.');
