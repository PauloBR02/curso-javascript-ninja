/*
Vamos falar um pouco sobre "Futebol". Escolha um campeonato estadual qualquer
para começar o desafio.
Declare uma variável chamada `championship` que receberá o nome do campeonato,
e imprima o nome desse campeonato no console.
*/
var championship = 'Paulista';
console.log(championship);

/*
Declare uma variável chamada `teams`, que receberá um array com 5 elementos.
Os elementos serão nomes de times do campeonato escolhido, e os nomes devem
estar na ordem em que eles aparecem na tabela no momento da solução desse
desafio.
*/
var teams = ['Corinthians', 'São Paulo', 'Palmeiras', 'Guarani', 'Ponte Preta'];

console.log( 'Times que estão participando do campeonato:', teams );

/*
Crie uma função chamada `showTeamPosition` com as seguintes características:
    - A função deve receber um número por parâmetro;
    - A função deve retornar a frase:
    "O time que está em [POSIÇÃO]º lugar é o [NOME DO TIME].";
    - Onde [POSIÇÃO] é o valor passado por parâmetro e [NOME DO TIME] é o time
    que está nessa posição no array criado acima com os nomes dos times.
    --------------
    Dica: lembre-se que arrays começam no índice zero, então a posição passada
    deve ser sempre um número a mais que o índice do array ;)
    --------------
    - A função só deve retornar a frase acima somente se o time estiver entre
    os 5 primeiros.
    - Se não houver time para a posição passada, deve retornar a mensagem:
    "Não temos a informação do time que está nessa posição."
*/
function showTeamPosition(num){
    return num<=5 ? 'O time que está em ' + num + 'º lugar é o ' + teams[num-1] + '.' : 'Não temos a informação do time que está nessa posição';
}

/*
Escolha 4 times do campeonato selecionado e mostre a posição dele, usando a
função acima. Entre esses 4, adicione 1 que não esteja entre os 5 primeiros.
*/
console.log(showTeamPosition(6)); 
console.log(showTeamPosition(5));
console.log(showTeamPosition(3));
console.log(showTeamPosition(1));
/*Não temos a informação do time que está nessa posição
O time que está em 5º lugar é o Ponte Preta.
O time que está em 3º lugar é o Palmeiras.
O time que está em 1º lugar é o Corinthians.*/

/*
Mostre os números de 20 a 30 no console (inclusive o 30), usando a estrutura de
repetição "while".
*/
var counter=20;
while(counter<=30){
    console.log(counter++);
}

/*
Crie uma função chamada `convertToHex`, com as seguintes características:
    - A função recebe uma cor por parâmetro, do tipo string. Exemplo: "red";
    - Escolha 5 cores que serão convertidas do nome da cor para o seu
    equivalente hexadecimal (pode ser qualquer tom);
    - Usando a estrutura switch, verifique se a cor passada por parâmetro é
    algum hexa escolhido. Se for, retorne a frase:
    "O hexadecimal para a cor [COR] é [HEXADECIMAL].";
    - Se a cor passada por parâmetro não estiver entre as selecionadas, mostre
    a frase:
    "Não temos o equivalente hexadecimal para [COR]."
*/
function convertToHex(cor) {
    var texto = 'O hexadecimal para a cor ' + cor + ' é ';
    switch(cor){
        case 'Vermelho':
            return texto + '#ff0000.';
            break;

        case 'Azul':
            return texto + '#0000ff.';
            break;

        case 'Verde':
            return texto + '#00ff00.';
            break;

        case 'Amarelo':
            return texto + '#ffff00.';
            break;

        case 'Rosa':
            return texto + '#ff00ff.';
            break;

        default:
            return 'Não temos o equivalente hexadecimal para ' + cor + '.';
    }
}

/*
Tente mostrar o hexadecimal de 8 cores diferentes usando a função criada acima.
*/
console.log(convertToHex('Vermelho'));
console.log(convertToHex('Verde'));
console.log(convertToHex('Azul'));
console.log(convertToHex('Rosa'));
console.log(convertToHex('Amarelo'));
console.log(convertToHex('Cinza'));
console.log(convertToHex('Preto'));
console.log(convertToHex('Branco'));
/* O hexadecimal para a cor Vermelho é #ff0000.
O hexadecimal para a cor Verde é #00ff00.
O hexadecimal para a cor Azul é #0000ff.
O hexadecimal para a cor Rosa é #ff00ff.
O hexadecimal para a cor Amarelo é #ffff00.
Não temos o equivalente hexadecimal para Cinza.
Não temos o equivalente hexadecimal para Preto.
Não temos o equivalente hexadecimal para Branco. */