(function(){
/*
Envolva todo o conteúdo desse arquivo em uma IIFE.
*/

/*
Crie um objeto chamado `person`, com as propriedades:
    `name`: String
    `lastname`: String
    `age`: Number
Preencha cada propriedade com os seus dados pessoais, respeitando o tipo
de valor para cada propriedade.
*/
// ?
  var person = {
	name: 'Victor',
	lastname: 'Ramide',
	age: 26
  }
/*
Mostre no console, em um array, todas as propriedades do objeto acima.
Não use nenhuma estrutura de repetição, nem crie o array manualmente.
*/
// ?
  console.log( 'Propriedades de "person": '+Object.keys(person));
/*
Crie um array vazio chamado `books`.
*/
// ?
var books = [];
/*
Adicione nesse array 3 objetos, que serão 3 livros. Cada livro deve ter a
seguintes propriedades:
`name`: String
`pages`: Number
*/
// ?
  books.push({name: 'Submarino amarelo', pages: 480});
  books.push({name: 'Harry Potter', pages: 702});
  books.push({name: 'Preacher', pages: 666});
/*
Mostre no console todos os livros.
*/
// ?
  console.log( '\nLista de livros: '+books[0].name+', '+books[1].name+' e '+books[2].name+'.');


/*
Remova o último livro, e mostre-o no console.
*/
// ?
  console.log( '\nLivro que está sendo removido: '+books.pop().name);


/*
Mostre no console os livros restantes.
*/
// ?
  console.log( '\nAgora sobraram somente os livros:'+books[0].name+' e '+books[1].name);
/*
Converta os objetos que ficaram em `books` para strings.
*/
// ?
console.log( '\nLivros em formato string:' );

/*
Mostre os livros nesse formato no console:
*/
// ?

/*
Converta os livros novamente para objeto.
*/
// ?
console.log( '\nAgora os livros são objetos novamente:' );

/*
Mostre no console todas as propriedades e valores de todos os livros,
no formato abaixo:
    "[PROPRIEDADE]: [VALOR]"
*/
// ?

/*
Crie um array chamado `myName`. Cada item desse array deve ser uma letra do
seu nome. Adicione seu nome completo no array.
*/
// ?
console.log( '\nMeu nome é:' );

/*
Juntando todos os itens do array, mostre no console seu nome.
*/
// ?

console.log( '\nMeu nome invertido é:' );

/*
Ainda usando o objeto acima, mostre no console seu nome invertido.
*/
// ?

console.log( '\nAgora em ordem alfabética:' );
/*
Mostre todos os itens do array acima, odenados alfabéticamente.
*/
// ?
)()}
