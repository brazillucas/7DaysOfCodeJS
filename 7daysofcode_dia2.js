var prompt = require('prompt-sync')();

/*
- Qual o seu nome?
- Quantos anos você tem?
- Qual linguagem de programação você está estudando?
- Qual o seu github?
- Qual o seu email?
*/

/*
A saída deve ser no modelo:
"Olá [nome], você tem [idade] anos e já está aprendendo [linguagem]!"
Também imprimir o github e o email.
"Vou seguir o seu github [github] e salvar o seu email [email]!"
*/

let nome = prompt('Qual o seu nome? ');
let idade = prompt('Quantos anos você tem? ');
let linguagem = prompt('Qual linguagem de programação você está estudando? ');
let github = prompt('Qual o seu github? ');
let email = prompt('Qual o seu email? ');

console.log('------------------------------------');
console.log(`Olá ${nome}, você tem ${idade} anos e já está aprendendo ${linguagem}!`);
console.log(`Vou seguir o seu github [@${github}] e salvar o seu email [${email}]!`);

console.log('------------------------------------');

let gosta = prompt(`Você gosta de estudar ${linguagem}? Responda com o número 1 para SIM e 2 para NÃO. `);
gosta == 1 ? console.log('Muito bom! Continue estudando e você terá muito sucesso!') : console.log('\nAhh que pena... Já tentou aprender outras linguagens?');

