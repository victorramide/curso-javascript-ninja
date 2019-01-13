/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var arr = [1, true, 'Victor', 2.25, 'Ramide'];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function myfunction (arr){
    return arr;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log(myfunction(arr)[1]);

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
function myfunction2(arr, num){
    return arr[num];
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var arr2 = [5, 'Victor', false, {}, null];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
console.log(myfunction2(arr2, 0), myfunction2(arr2, 1), myfunction2(arr2, 2), myfunction2(arr2, 3), myfunction2(arr2, 4));

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
function book(name){
    books = {
        'Harry Potter': {
            quantidadePaginas: 700,
            autor: 'J K Rowling',
            editora: 'Rocco'
        },
        'Mitos Modernos': {
            quantidadePaginas: 300,
            autor: 'Diversos',
            editora: 'Ignis'
        },
        'javascript': {
            quantidadePaginas: 999,
            autor: 'VR',
            editora: 'Livre'
        }
    }
    return !name ? books : books[name];
}

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
console.log(book());

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
var bookName = 'javascript';
console.log('O livro '+bookName+' tem '+book(bookName).quantidadePaginas+' páginas!');

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log('O autor do livro '+bookName+' é '+book(bookName).autor+'.');

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log('O livro '+book(bookName)+' foi publicado pela editora '+book(bookName).editora+'.');
