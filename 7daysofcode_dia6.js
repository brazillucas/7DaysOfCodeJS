var prompt = require('prompt-sync')();

let listaDeCompras = {
    frutas: ['banana', 'tomate', 'maçã', 'uva', 'abacate'],
    laticinios: ['leite vegetal', 'leite de vaca', 'leite em pó'],
    congelados: ['frango', 'carne', 'queijo', 'pizza'],
    doces: ['goiabada', 'doce de leite', 'chocolate']
};

let categorias = ['Frutas', 'Laticínios', 'Congelados', 'Doces', 'Limpeza'];

do {
    let resposta = prompt('Você deseja adicionar algo na sua lista de compras? (Responda [1] para SIM, [2] para NÃO, [3] para remover algo da lista) ');
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
            console.log('------------------------------------');
        }

    } else if (resposta == 2) {
        
        break;

    } else if (resposta == 3 && Object.keys(listaDeCompras).length > 0) {     
        
        console.log('------------------------------------');
        console.log('Lista de compras atual:');
        //imprime a lista de compras
        let i = 0;

        for([key, val] of Object.entries(listaDeCompras)) {
            console.log(`\t${categorias[i]}: ${val.join(', ')}`);
            i++;
        }

        console.log('------------------------------------');
        let item = prompt("Qual item você deseja remover? ")
        console.log('------------------------------------');

        if (listaDeCompras.frutas.includes(item)) {

            listaDeCompras.frutas.splice(listaDeCompras.frutas.indexOf(item), 1);

        } else if (listaDeCompras.laticinios.includes(item)) {            

            listaDeCompras.laticinios.splice(listaDeCompras.laticinios.indexOf(item), 1);

        } else if (listaDeCompras.congelados.includes(item)) {

            listaDeCompras.congelados.splice(listaDeCompras.congelados.indexOf(item), 1);

        } else if (listaDeCompras.doces.includes(item)) {

            listaDeCompras.doces.splice(listaDeCompras.doces.indexOf(item), 1);

        } else {
            
            console.log('Item não encontrado!\nReiniciando...');
        }

    } else {

        console.log('Opção inválida!\nReiniciando a inserção...');

    }
    
} while (1);

//Impressão final da Lista de Compras
console.log('------------------------------------');
console.log('Lista de compras:');

let i = 0;

for([key, val] of Object.entries(listaDeCompras)) {
    console.log(`\t${categorias[i]}: ${val.join(', ')}`);
    i++;
}
console.log('------------------------------------');