// console.log("Olá mundo");


// function helloWorld() {
//     console.log("Hello World!");
// }

// helloWorld();
// helloWorld();
// helloWorld();
// helloWorld();
// helloWorld();
// helloWorld();
// helloWorld();
// helloWorld();

// let numero01 = 10;

// let numero02 = 20;


// console.log(numero01 + numero02);


// function somaDevalores(numero01, numero02){
//     console.log(numero01 + numero02);
// }


// somaDevalores(30, 40);

// somaDevalores(35, 43);

// somaDevalores(24, 32);

// somaDevalores(10, "Francisco");

// function somaDevalores(numero01, numero02){
//     return numero01 + numero02;
// }

// let soma = somaDevalores(10, 20);

// console.log(soma);


// const nomes = ["Francisco", "Mateus", "Murilo"];

//const mateus = nomes.find((nome => nome === "Mateus"));

// const mateus = nomes.find((nome) => {
//     return nome === "Mateus";
// })

// console.log(mateus);


// function somaDevalores(numero01, numero02) {
//     return numero01 + numero02;
// }

// const somaDevaloresArrowFunction = (numero01, numero02) => {
//     return numero01 + numero02;
// }

// const somaDevaloresMaisSimples = (numero01, numero02) => numero01 + numero02;

// pelo menos 8 caracteres
// deve conter pelo menos 1 numero
// pelo menos 1 caractere especial
// pelo menos 1 letra maiuscula




// const compose = (funcao01, funcao02) => function(){
//     return funcao02(funcao01(...arguments))
// }


// const converterEArredondar = compose(parseFloat, Math.round);

// console.log(converterEArredondar("10.5"));


// console.log(Math.round(parseFloat("10.5")));


// const toUpperCase = str => str.toUpperCase();

// const trim = str => str.trim();


// const trimAndUppercase = compose(trim, toUpperCase);

// console.log(trimAndUppercase("  teste     "));


// const result = [];

//  result
//     .filter()
//     .map()
//     .find()


// funcao de alta-ordem



// const somar = (a, b) => a + b;
// const subtrair = (a, b) => a - b;
// const multiplicar = (a, b) => a * b;
// const dividir = (a, b) => a / b;


// const calcular = (operacao, a, b) => operacao(a,b);



// console.log(calcular(somar, 10, 30));

// console.log(calcular(multiplicar, 20, 40));


///Array de produtos


// { nome: Camisa, preco: 50, quantidade: 10}


/// calcular o preco total do estoque do produto 
// aplicar 10% de desconto
//  filtrar os produtos com o preco acima de 50

