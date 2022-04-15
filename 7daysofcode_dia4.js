/*
Agora, **o jogo vai ser contra o próprio computador**!

Você deve criar um programinha que **comece com um valor específico pré-definido entre 0 a 10** para o número que você vai adivinhar (7, por exemplo).

Em seguida, o programa vai perguntar para você qual o valor que você deseja chutar e, caso você acerte, ele irá te **parabenizar**. Caso erre, ele vai te dar **mais 2 tentativas**.

No fim, caso você não acerte nenhuma vez, ele vai **imprimir qual era o número inicial**.

Depois que o programinha estiver funcionando, tente usar um número randômico em vez de um número pré-definido.
*/

var prompt = require('prompt-sync')(); // Importando o módulo prompt-sync


do {
    //console.clear();
    /**
     * @type {number}
     * @description Preenche um número aleatório entre 0 e 10
     * by @brazillucas para ser usado como objetivo do exercício
     */
    let numero = Math.floor(Math.random() * 10);
    console.log(numero);                                                        // conferindo o número aleatório
    let tentativas = 3;                                                         // variável que armazena o número de tentativas

    console.log("--    JOGO DA ADIVINHAÇÃO    --\n");
    console.log("- O número aleatório é entre 0 e 10 -\n");                     // informações do jogo
    console.log("- Você tem 3 tentativas -\n");

    let chute = prompt("Qual o seu chute? ");                                   // variável que armazena o chute do usuário
    if (chute == -1){break;}                                                    // verifica se o usuário quer sair do jogo
    
    while (tentativas > 1) {                                                    // enquanto houver tentativas o jogo continua
        if (chute == -1) {                                                      // verifica se o usuário quer sair do jogo
            break;
        } else if (chute == numero) {                                           // se o chute for correto o jogo termina
            console.log("\nParabéns! Você acertou o número!\n");
            break;
        } else if (chute > numero) {                                            // se o chute for menor que o número o jogo avisa que o chute foi maior
            console.log("\nO número é um pouco menor que o que você chutou.");
        } else {                                                                // senão o jogo avisa que o chute foi maior
            console.log("\nO número é um pouco maior que o que você chutou.");
        }        
        tentativas -= 1;                                                       // diminui o número de tentativas em -1
        console.log(`\nVocê tem mais ${tentativas} tentativas.`);
        chute = prompt(`Qual o seu ${tentativas}º chute? `);
    }
    if (chute != numero) {
        console.log("\nQue pena, não foi dessa vez!");
        console.log(`O número era ${numero}.`);
        console.log("\nMas não desanime, você pode tentar novamente!");
        console.log("\n-- Reiniciando o jogo --");
    }

} while(1);

console.log("Até mais!")
console.log("-- Fim do Jogo --");

/*
-- CÓDIGO EM VERSÃO REDUZIDA --
ESTA VERSÃO APENAS EXECUTA O JOGO UMA VEZ, SEM O USO DE LOOPS

let numero = Math.floor(Math.random() * 10);
let tentativas = 3;  

console.log("- Você tem 3 tentativas -\n");

let chute = prompt("Qual o seu chute? ");


while (tentativas > 1) {
    if (chute == numero) {
        console.log("\nParabéns! Você acertou o número!\n");
        break;
    } else if (chute > numero) {                     
        console.log("\nO número é um pouco menor que o que você chutou.");
    } else {
        console.log("\nO número é um pouco maior que o que você chutou.");
    }        
    tentativas -= 1;
    chute = prompt(`Qual o seu ${tentativas}º chute? `);
}
if (chute != numero) {
    console.log("\nQue pena, não foi dessa vez!");
    console.log(`O número era ${numero}.`);
}


*/