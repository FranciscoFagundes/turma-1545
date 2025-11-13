// const nomes = ["Francisco", "Mateus", "Bruna"];
// const enderecos = ["Rua Sem Nome, n 11", "Rua do Mateus n 12", "Rua da Bruna, n 13"];
// const telefones = ["9999999", "9999999", "9999999"];
// const emails = ["test@test.com", "test@test.com", "test@test.com"];


// console.log( 
//     `
//      Nome: ${nomes[0]}
//      Endereço: ${enderecos[0]}
//      Telefone: ${telefones[0]}
//      Email: ${emails[0]}

//      Nome: ${nomes[1]}
//      Endereço: ${enderecos[1]}
//      Telefone: ${telefones[1]}
//      Email: ${emails[1]}

//      Nome: ${nomes[2]}
//      Endereço: ${enderecos[2]}
//      Telefone: ${telefones[2]}
//      Email: ${emails[2]}
//     `);

// const contatos = [
//     ["Francisco", "Mateus", "Bruna"],
//     ["Rua Sem Nome, n 11", "Rua do Mateus n 12", "Rua da Bruna, n 13"],
//     ["9999999", "9999999", "9999999"],
//     ["test@test.com", "test@test.com", "test@test.com"]
// ]


// console.log( 
//     `
//      Nome: ${contatos[0][0]}
//      Endereço: ${contatos[1][0]}
//      Telefone: ${contatos[2][0]}
//      Email: ${contatos[3][0]}

//      Nome: ${contatos[0][1]}
//      Endereço: ${contatos[1][1]}
//      Telefone: ${contatos[2][1]}
//      Email: ${contatos[3][1]}

//      Nome: ${contatos[0][2]}
//      Endereço: ${contatos[1][2]}
//      Telefone: ${contatos[2][2]}
//      Email: ${contatos[3][2]}
//     `);


// const contato = {
//                     nome: "Francisco",
//                     endereco: "Rua Sem Nome",
//                     telefone: "999999999",
//                     email: "test@test.com"
//                 }


// console.log(contato);

// console.log(
//     `
//         Nome: ${contato.nome}
//         Endereço: ${contato.endereco}
//         Telefone: ${contato.telefone}
//         Email: ${contato.email}

//     `
//     );

// const contatos = [
//                 {
//                     nome: "Francisco",
//                     endereco: "Rua Sem Nome",
//                     telefone: "999999999",
//                     email: "test@test.com"
//                 },
//                 {
//                     nome: "Bruna",
//                     endereco: "Rua Sem Nome",
//                     telefone: "999999999",
//                     email: "test@test.com"
//                 },
//                 {
//                     nome: "Ana",
//                     endereco: "Rua Sem Nome",
//                     telefone: "999999999",
//                     email: "test@test.com"
//                 }

// ];

// console.log(contatos[0].nome);


// class Contato {
//  constructor(nome, endereco, telefone, email){
//     this.nome = nome;
//     this.endereco = endereco;
//     this.telefone = telefone;
//     this.email = email;
//  }

// }


// const contato = new Contato();

// contato.nome = "Francisco";
// contato.endereco = "Rua sem nome";

// console.log(contato);


// const contato = new Object();

// contato.nome = "Francisco";
// contato.endereco = "Rua Sem nome";

// console.log(contato);


// const nome = "Francisco";
// const endereco = "Rua Sem Nome";
// const telefone = "999999999";
// const email = "test@test.com";

// const contato = { nome, endereco, telefone, email };

// console.log(contato);

// const campoNome = document.getElementById('nome');
// const campoEndereco = document.getElementById('endereco');
// const campoTelefone = document.getElementById('telefone');
// const campoEmail = document.getElementById('email');

// const botao = document.getElementById('botao');


// botao.addEventListener("click", () => {
//     const contato = new Object();
//     contato.nome = campoNome.value;
//     contato.endereco = campoEndereco.value;
//     contato.telefone = campoTelefone.value;
//     contato.email = campoEmail.value;

//     console.log(contato);
// });


// JSON - JavaScript Object Notation


// const contatos = [];

// const contato01 = {
//     nome: "Francisco",
//     email: "test@test.com"
// }


// console.log(contatos);

// contatos.push(contato01);

// console.log(contatos);


// const contatos = [
//     {
//         nome: "Francisco",
//         email: "test@test.com"
//     },
//     {
//         nome: "Sara",
//         email: "test@test.com"
//     },
//     {
//         nome: "Wesllen",
//         email: "test@test.com"
//     },
//     {
//         nome: "Bruno",
//         email: "test@test.com"
//     },
//     {
//         nome: "Francisco",
//         email: "francisco@test.com"
//     }
// ]


//const francisco = contatos.filter(contato => contato.nome === "Francisco");

//console.log(francisco);


// < <= > >= != && || ==

//console.log(1 !== "1");


//const primeiroFrancisco = contatos.find(contato => contato.nome === "Francisco");

//console.log(primeiroFrancisco);


//const mapNome = contatos.map(contato => contato.nome = "Josefa");


//console.log(mapNome);

// const numeros = [1, 2, 3, 4, 5, 6];

// const numerosDobrados = numeros.map( numero => numero * 2);

// console.log(numerosDobrados);


// const mapNome = contatos.map(contato => { return { ...contato, nome: "Josefa" };
// });

// console.log(mapNome);


// const numeros = [1, 2, 3, 4, 5, 6];

// const soma = numeros.reduce((acumulador, valor) => acumulador + valor, 0 );

// console.log(soma);

// const numeros = [10, 20, 30];

// console.log(numeros.some(numero => numero > 50));
// console.log(numeros.every(numero => numero > 0));
// console.log(numeros.every(numero => numero % 2 == 0));


// const numero10 = numeros.filter(numero => numero === 10);

// console.log(numero10);


//const nomes = []

// const coisas = [1, "2", false, [1, 2 , 3], {nome: "Francisco"}];

// console.log(typeof(coisas));


// const nomes = ["Ana", "Francisco", "Murilo"];


// nomes.forEach(nome => console.log(nome));

// let estaChovendo = false;


// if(estaChovendo){
//     console.log('Não vou à praia');
// } else {
//     console.log('Vou à praia tomar caldinho de feijão');
// }


//let numero = 0;


// if(numero % 2 === 0) {
//     console.log("O número é par");
// } else {
//     console.log("O número é impar");
// }


// let numero = prompt("Digite um número");

// if(numero > 0){
//     console.log("O numero é positivo");
// }else if(numero < 0) {
//     console.log("O número é negativo");
// } else {
//     console.log( "O numero é igual a zero");
// }

// 18.5 abaixo do peso
// > 25 peso normal
// > 30 sobrepeso
// > 35 obesidade grau I
// > 40 obesidade grau II

// peso / altura * altura
