/*
Neste último desafio, a minha proposta para você é: **crie a sua própria calculadora**, porém com um detalhe muito importante: **cada operação deverá ser uma função diferente no seu código**.

Primeiramente, a pessoa deverá **escolher uma opção de operação** impressa pelo programa na tela.

Depois, ela deverá **inserir os dois valores que deseja utilizar**, e o programa **imprimirá o resultado da operação em questão**.

As opções disponíveis deverão ser: **soma**, **subtração**, **multiplicação**, **divisão**, e **sair**. Nessa última, o programa deverá parar de ser executado, mostrando uma mensagem "*Até a próxima*".

Cada operação deverá ter uma função diferente no seu código, que receberá os valores inseridos como parâmetros e retornará com o resultado da operação.


*/

var prompt = require('prompt-sync')();

function calcular(op) {

    var a = lerNumero();
    var b = lerNumero();

    if (op == '+') {
        return a + b;
    } else if (op == '-') {
        return a - b;
    } else if (op == '*') {
        return a * b;
    } else if (op == '/') {
        return a / b;
    }
}

function lerNumero() {
    let num = parseFloat(prompt('Digite um valor: '));
    console.log('------------------------------------');
    return num;
}

let fim = false;

do {
    let calculo = prompt('Escolha uma operação: [1] somar, [2] subtrair, [3] multiplicar, [4] dividir, [5] sair ');
    console.log('------------------------------------');
    switch (calculo) {
        case '1':            
            console.log(`Resultado: ${calcular('+')}`);
            console.log('------------------------------------');
            break;
        case '2':
            console.log(`Resultado: ${calcular('-')}`);
            console.log('------------------------------------');
            break;
        case '3':
            console.log(`Resultado: ${calcular('*')} `);
            console.log('------------------------------------');
            break;
        case '4':
            console.log(`Resultado: ${calcular('/')}`);
            console.log('------------------------------------');
            break;
        case '5':
            console.log('Até a próxima!');
            console.log('------------------------------------');
            fim = true;
            break;
        default:
            console.log('Opção inválida!');
            console.log('------------------------------------');
            break;
    }
} while(!fim);