/*
Vamos falar um pouco sobre "Futebol". Escolha um campeonato estadual qualquer
para começar o desafio.
Declare uma variável chamada `championship` que receberá o nome do campeonato,
e imprima o nome desse campeonato no console.
*/
var championship = 'Campeonato Baiano';
console.log(championship);

/*
Declare uma variável chamada `teams`, que receberá um array com 5 elementos.
Os elementos serão nomes de times do campeonato escolhido, e os nomes devem
estar na ordem em que eles aparecem na tabela no momento da solução desse
desafio.
*/
// ?
var teams = ['Bahia', 'Vitória', 'Bahia de Feira', 'Atlético', 'Jacobina'];
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
function showTeamPosition(numPosition){
    if(numPosition <1 || numPosition >5){
        return 'O time não está entre os cinco primeiros';
    } else if (teams[numPosition-1]===undefined){
        return 'Não temos a informação do time que está nessa posição.';
    }
    return 'O time que está em '+numPosition+'º lugar é o '+teams[numPosition-1]+'.';
}

/*
Escolha 4 times do campeonato selecionado e mostre a posição dele, usando a
função acima. Entre esses 4, adicione 1 que não esteja entre os 5 primeiros.
*/
showTeamPosition(1); //"O time que está em 1º lugar é o Bahia."
showTeamPosition(2); //"O time que está em 2º lugar é o Vitória."
showTeamPosition(3); //"O time que está em 3º lugar é o Bahia de Feira."
showTeamPosition(7); //"O time não está entre os cinco primeiros"

/*
Mostre os números de 20 a 30 no console (inclusive o 30), usando a estrutura de
repetição "while".
*/
var num = 20;
while(num <= 30){
    console.log(num);
    num++
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
function convertToHex(color){
    var hexa;
    switch(color){
        case 'preto':
            hexa = '#000000';
            break;
        case 'branco':
            hexa = '#FFFFFF';
            break;
        case 'azul':
            hexa = '#2E9AFE';
            break;
        case 'verde':
            hexa = '#01DF01';
            break;
        case 'vermelho':
            hexa = '#FF0000';
            break;
        default:
            return 'Não temos o equivalente hexadecimal para '+color+'.';
    }
    return 'O hexadecimal para a cor '+color+' é '+hexa+'.';
}

/*
Tente mostrar o hexadecimal de 8 cores diferentes usando a função criada acima.
*/
convertToHex('preto'); //"O hexadecimal para a cor preto é #000000."
convertToHex('branco'); //"O hexadecimal para a cor branco é #FFFFFF."
convertToHex('azul'); //"O hexadecimal para a cor azul é #2E9AFE."
convertToHex('verde'); //"O hexadecimal para a cor verde é #01DF01."
convertToHex('vermelho'); //"O hexadecimal para a cor vermelho é #FF0000."
convertToHex('roxo'); //"Não temos o equivalente hexadecimal para roxo."
convertToHex('laranja'); //"Não temos o equivalente hexadecimal para laranja."
convertToHex('amarelo'); //"Não temos o equivalente hexadecimal para amarelo."
