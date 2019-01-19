/*
Crie um array com 5 items (tipos variados).
*/
var myarr = [2, null, undefined, 'amazon', false];

/*
Crie uma função chamada `addItem`, que irá adicionar itens no array criado.
A função deverá retornar o array atualizado.
*/
function addItem(item){ 
  myarr.push(item); 
  return myarr;
};

/*
Adicione um novo array ao array criado no início do desafio, com ao menos 3
itens de tipos diferentes, mostrando o resultado no console.
*/
addItem([5, 'amarelo', 'azul']); //(6) [2, null, undefined, "amazon", 1.25, Array(3)]

/*
Mostre no console o segundo elemento desse último array, criado acima, com a
frase:
"O segundo elemento do segundo array é [ELEMENTO]."
*/
console.log('O segundo elemento do segundo array é '+myarr[5][1]+'.'); //O segundo elemento do segundo array é amarelo.

/*
Mostre no console quantos itens tem o primeiro array criado, com a frase:
"O primeiro array tem [QUANTIDADE DE ITENS] itens."
*/
console.log('O primeiro array tem '+myarr.length+' itens.'); //O primeiro array tem 6 itens.

/*
Agora mostre no console quantos itens tem o segundo array criado, com a frase:
"O segundo array tem [QUANTIDADE DE ITENS] itens."
*/
console.log('O segundo array tem '+myarr[5].length+' itens.'); //O segundo array tem 3 itens.

/*
Utilizando a estrutura de repetição `while`, mostre no console todos os números
pares entre 10 e 20, inclusive esses 2.
*/
var num = 10, arrNum = []
while(num>=10 && num <= 20){
	if(num % 2 === 0){
		arrNum.push(num);	
	}
	num++
}
console.log('Números pares entre 10 e 20: '+arrNum);
//Números pares entre 10 e 20: 10,12,14,16,18,20

/*
Na mesma ideia do exercício acima: mostre agora os números ímpares.
*/
var num = 10, arrNum = []
while(num>=10 && num <= 20){
	if(num % 2 !== 0){
		arrNum.push(num);	
	}
	num++
}
Números ímpares entre 10 e 20: 11,13,15,17,19
// 

/*
Repita os mesmos exercícios feitos acima, mas agora usando o loop "for".
Só vamos mudar o range:
- No primeiro "for", mostre os números pares entre 100 e 120, inclusive eles;
- No segundo "for", mostre os números ímpares entre 111 e 125, inclusive eles.
*/
var arrNum = [];
for(var num=100;num<=120;num++){
	if(num % 2 === 0){
		arrNum.push(num);	
	}
}
console.log( 'Números pares entre 100 e 120: '+arrNum);
// Números pares entre 100 e 120: 100,102,104,106,108,110,112,114,116,118,120

var arrNum = [];
for(var num=111;num<=125;num++){
	if(num % 2 !== 0){
		arrNum.push(num);	
	}
}
console.log( 'Números ímpares entre 111 e 125: '+arrNum);
// Números ímpares entre 111 e 125: 111,113,115,117,119,121,123,125
