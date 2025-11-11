//console.log("Olá mundo!");

// let nome = "Rodrigo";

// let nomeAlterado = nome.replaceAll("o", "a");

// console.log(nomeAlterado);



// let nome = "Francisca";
// let sobrenome = "Fagundes";


//console.log(nome + " " +  sobrenome);

// console.log(`${nome} ${sobrenome}`);

//console.log(nome.length);
//console.log(nome.trim().length)

// console.log(nome.toUpperCase());

// console.log(nome.toLowerCase());

//console.log(nome.trim() + sobrenome);

// trimStart() e trimEnd()

//console.log(nome.replace(" ", ""));

//console.log(nome.slice(0, 3));

//console.log(nome.substring(2, 4));


// console.log(nome.indexOf("a"));
// console.log(nome.lastIndexOf("a"));


//let fruta = "banana";

// console.log(fruta.includes("na"));

// console.log(fruta.startsWith("b"));

// console.log(fruta.endsWith("a"));

// console.log(fruta.split("a"));

// let nome = "Francisco/Fagundes";

// console.log(nome.split("/"));


// let nome = "Francisco ";

// let sobrenome = "Fagundes";


// console.log(nome.concat(sobrenome));


// let letras = ["F", "r", "a", "n"];

// console.log(letras.join(""));



//let numeros = [1, 2, 3, 4, 5, 6]; // arrays unidimensionais ou vetores. arrays multidimensionais ou matrizes.

//console.log(numeros);

// console.log(numeros[3]);

// console.log(numeros.length);

// numeros.push(7);

// console.log(numeros);

// numeros.pop();

// console.log(numeros);

// numeros.shift();

// console.log(numeros);

// numeros.unshift(0);

// console.log(numeros);

// console.log(numeros.toString());

// console.log(Array.isArray(numeros));

// console.log(Array.of(1, 2, 3));


//console.log(numeros.find(numero => numero > 3));

//console.log(numeros.includes(17));

//console.log(numeros.filter(numero => numero > 3));


//let numeros02 = [5, 6, 3, 8, 1, 0, 2];

// let numeros = [1, 2, 3, 4, 5, 6];

// console.log(numeros);

// numeros.splice(1, 2, 7, 8, 9);

// console.log(numeros);


// let numeros02 = [5, 11, 111, 6, 3, 8, 1, 0, 2];

// console.log(numeros02.sort((a , b) => a - b ));

// console.log(numeros02.reverse());


// let numero = 2.5;

// console.log(Math.round(numero));
// console.log(Math.PI);
// console.log(Math.random());
// console.log(Math.floor(numero));
// console.log(Math.ceil(numero));
// console.log(Math.pow(2, 3));
// console.log(Math.sin(Math.PI/6));


// + - * / %

// console.log( 5 % 2);


// Notas do aluno  --- media aritimetica, média ponderada, médias arredondadas

// array das notas. array dos pesos 

// imprimir a maior e a menor nota.

// imprimir a diferença entre as notas(maior e menor).

// camelCase, PascalCase, snake_case, kebab-case 


//let valorDaCocaCola =



const notas = [7.8, 9.6, 6.5];

const pesos = [2, 3, 1];

//media aritmética
const mediaAritmetica = (notas[0] + notas[1] + notas[2]) / notas.length; 

//média ponderada 
const somaPonderada = (notas[0] * pesos[0]) + (notas[1] * pesos[1]) + (notas[2] * pesos[2]);
const somaPesos = pesos[0] + pesos[1] + pesos[2];
const mediaPonderada = somaPonderada / somaPesos;

//arredondando as médias

const mediaAritmeticaArredondada = Math.round(mediaAritmetica * 10) / 10;
const mediaPonderadaArredondada = Math.round(mediaPonderada * 10) /10;

const maiorNota = Math.max(...notas);
const menorNota = Math.min(...notas);

const diferenca = Math.abs(maiorNota - menorNota);

console.log( "Notas: ", notas);
console.log("média aritmética: ", mediaAritmetica);
console.log("Média aritmética arredondada: ", mediaAritmeticaArredondada);
console.log("média ponderada: ", mediaPonderada);
console.log("Média ponderada arredondada: ", mediaPonderadaArredondada);
console.log("Maior nota: ", maiorNota);
console.log("Menor nota: ", menorNota);
console.log("Diferença: ", diferenca);





