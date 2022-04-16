/*
você deve criar um programa em Javascript que perguntará **se você deseja adicionar uma comida na sua lista de compras**, e você deve poder responder com *`sim`* ou *`não`*.

Em seguida, ele perguntará **qual comida você deseja inserir**, e você digitará o nome dela, como por exemplo *`batata`*.

Depois, ele deverá perguntar **em qual categoria essa comida se encaixa**, com algumas opções já pré-definidas, como `frutas`, `laticínios`, `congelados`, `doces` e o que mais você achar interessante. Assim, você poderá separar tudo no seu devido grupo.

Por fim, caso você não queira mais adicionar nada na lista de compras e responder não na primeira pergunta, ele irá **exibir uma lista com todos os itens agrupados**, da seguinte forma:

Caso você adicione na sua lista:
banana, leite em pó, tomate, leite vegetal, chiclete, bala de ursinho, maçã, uva, abacate e leite de vaca

O programa deverá imprimir, por exemplo:
Lista de compras:
    Frutas: banana, tomate, maçã, uva, abacate
    Laticínios: leite vegetal, leite de vaca, leite em pó
    Congelados:
    Doces: chiclete e bala de ursinho

*/

var prompt = require('prompt-sync')();

let listaDeCompras = {
    frutas: ['banana', 'tomate', 'maçã', 'uva', 'abacate'],
    laticinios: ['leite vegetal', 'leite de vaca', 'leite em pó'],
    congelados: ['frango', 'carne', 'queijo', 'pizza'],
    doces: ['goiabada', 'doce de leite', 'chocolate']
};

do {
    let resposta = prompt('Você deseja adicionar algo na sua lista de compras? (Responda [1] para SIM, [2] para NÃO) ');
    console.log('------------------------------------');
    if (resposta == 1) {
        let comida = prompt('Qual comida você deseja inserir? ');
        console.log('------------------------------------');
        let categoria = prompt('Em qual categoria essa comida se encaixa? ([1] Frutas, [2] Laticínios, [3] Congelados, [4] Doces) ');
        console.log('------------------------------------');
        if (categoria == '1') {
            listaDeCompras.frutas.push(comida);
        } else if (categoria == '2') {
            listaDeCompras.laticinios.push(comida);
        } else if (categoria == '3') {
            listaDeCompras.congelados.push(comida);
        } else if (categoria == 4) {
            listaDeCompras.doces.push(comida);
        } else {
            console.log('Categoria inválida!\nReiniciando a inserção...');
        }
    } else {
        break;
    }
} while (1);

console.log('------------------------------------');
console.log('Lista de compras:');
console.log(`\tFrutas: ${listaDeCompras.frutas.join(', ')};`);
console.log(`\tLaticínios: ${listaDeCompras.laticinios.join(', ')};`);
console.log(`\tCongelados: ${listaDeCompras.congelados.join(', ')};`);
console.log(`\tDoces: ${listaDeCompras.doces.join(', ')};`);


/*
-- VERSÃO DE SEM UTILIZAR DICIONÁRIO --

//let frutas = ['banana', 'tomate', 'maçã', 'uva', 'abacate'];
//let laticinios = ['leite vegetal', 'leite de vaca', 'leite em pó'];
//let congelados = ['frango', 'carne', 'queijo', 'pizza'];
//let doces = ['goiabada', 'doce de leite', 'chocolate'];


do {
    let resposta = prompt("Você deseja adicionar algo na sua lista de compras? (Responda 1 para SIM, 2 para NÃO) ");
    if (resposta == 1){
        console.log("\n")
        let comida = prompt("Qual comida você deseja inserir? ");
        console.log("\n")
        let categoria = prompt("Em qual categoria essa comida se encaixa? ([1] Frutas, [2] Laticínios, [3] Congelados ou [4] Doces) ");
        console.log("\n")
        if (categoria == 1){
            frutas.push(comida);
        } else if (categoria == 2){
            laticinios.push(comida);
        } else if (categoria == 3){
            congelados.push(comida);
        } else if (categoria == 4){
            doces.push(comida);
        } else {
            console.log("Categoria inválida!\nReiniciando a inserção...");
        }
    } else {
        break;
    }

} while(1);

console.log("\nLista de compras:");
console.log(`\tFrutas: ${frutas.join(", ")}`);
console.log(`\tLaticínios: ${laticinios.join(", ")}`);
console.log(`\tCongelados: ${congelados.join(", ")}`);
console.log(`\tDoces: ${doces.join(", ")}`);

*/