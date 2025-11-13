// let sinalDeTransito = "azul";


// switch(sinalDeTransito){
//     case 'verde':
//         console.log('pode passar');
//         break;
//     case 'amarelo':
//         console.log('prestes a fechar, cuidado...');
//         break;
//     case 'vermelho':
//         console.log('fechado, não passe');
//         break;
//     default:
//         console.log('essa não é uma cor válida');
//         break;
// }


// const cor = 'vermelho';

// const sinal = {
//     verde: 'pode passar',
//     amarelo: 'atenção',
//     vermelho: 'pare'
// }

// console.log(sinal[cor] || "cor inválida");


// condicional ternário


// const estaChovendo = true;
// const estaNublado = false;

// if(estaChovendo){
//     console.log("Vou ficar em casa");
// }else{
//     console.log("vou à praia");
// }

//estaChovendo ? console.log("vou ficar em casa") : console.log("vou à praia");


// if(estaChovendo){
//     console.log("vou ficar em casa")
// }else if(!estaChovendo && estaNublado ){
//     console.log("vou ao shopping");
// }else {
//     console.log("vou à praia");
// }


// estaChovendo ? 
// console.log("vou ficar em casa") : 
// !estaChovendo && estaNublado ?  
// console.log("vou ao shopping") : 
// console.log("vou à praia");



//const admin = false;

// truthy e falsy  - true e false

// &&
//admin && console.log("O usuário é administrador");

//true && console.log("vai imprimir");

// 0, -0, 0n, "", null, undefined, NaN;

// const numero = 0;

// numero && console.log("vai imprimir");


// ??

// console.log( null ?? "vai imprimir");
// console.log( undefined ?? "vai imprimir");
// console.log( '' ?? "vai imprimir");
// console.log( 0 && 'vai imprimir');


// let contador = 10;

// while(contador < 10) {
//     console.log('Hello ' + contador);
//     contador += 1;
// }


// o programa gera um numero aleatorio de 0 a 100;
// um prompt deve pedir ao usuário para adivinhar o número
// comparar o numero aleatório com o palpite do usuário
// o programa deve responder se o palpite é maior, menor ou igual ao número aleatório
// quando o usuário acertar, o programa é encerrado.


// do while

// do{
//  console.log('Hello ', contador);
//  contador += 1;

// } while(contador < 10); 

// const numero = Math.floor(Math.random() * 101);
// console.log( numero);

// let palpite = 0;

// do {
//     palpite = parseInt(prompt("Digite um número de 0 a 100:"));
//     if( palpite !== numero){
//         console.log("Tente novamente");
//     }

// }while(palpite !== numero);

// console.log("Parabéns, você acertou");


// for, for in  e for of

// const numeros = [1, 2, 3, 4, 5, 6];

// for(indice in numeros){
//     console.log(`O indice do numero ${numeros[indice]} é ${indice}`);
// }

// for(valor of numeros){
//     console.log(valor);
// }


//const numeros = [1, 2, 3, 4, 5, 6];

// const arrayDeArrays = [
//     [1, 2, 3], // 0 
//     [4, 5, 6], // 1
//     [7, 8, 9] // 2
// ];

// for(let i = 0; i < numeros.length; i++){
//     console.log(numeros[i]);
// }

// for(let i = 0; i < arrayDeArrays.length; i++){
//     for(let j = 0; j < arrayDeArrays[i].length; j++){
//         console.log(`Lendo array de indice ${i}  e imprimindo valor de indice ${j} : ${arrayDeArrays[i][j]}`);
//     }
// }

// for (array of arrayDeArrays){
//     for (numero of array) {
//         console.log(numero)
//     }
// }

// arrayDeArrays.forEach(array => array.forEach(numero => console.log(numero)));


/// de um array de numeros, exiba a quantidade de numeros pares, a quantidade de numeros impares
// a soma dos numeros pares e a soma dos numeros impares.
//listar os numeros primos. "presente do Mateus".


// break quanto o return;
