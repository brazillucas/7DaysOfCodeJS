/*
Seu desafio de hoje é criar os destinos possíveis de um jogo, em que o usuário consiga escolher:

1. 1. Se quer **seguir para área de Front-End**ou **seguir para a área de Back-End**.
2. Caso esteja na área de **Front-End**, se quer **aprender React** ou **aprender Vue**. Caso esteja na área de **Back-End**, poderá **aprender C#** ou **aprender Java**.
3. Depois, independente das escolhas anteriores, o usuário poderá escolher entre **seguir se especializando na área escolhida** ou **seguir se desenvolvendo para se tornar Fullstack**. Você deve exibir na tela uma mensagem específica para cada escolha.
4. Por fim, pergunte **quais são as tecnologias nas quais a pessoa gostaria de se especializar** ou de conhecer. Aqui, a pessoa pode responder N tecnologias, uma de cada vez. Então, enquanto ela continuar respondendo *ok* para a pergunta: *“Tem mais alguma tecnologia que você gostaria de aprender?”*, continue apresentando para ela o Prompt, para que ela complete o nome da tecnologia em questão. E, logo depois, apresente uma mensagem comentando algo sobre a linguagem inserida.

O importante é que a pessoa que estiver jogando possa sempre **escolher qual decisão tomar para conseguir aprender** e se desenvolver na área de programação.

Além disso, também é essencial que, ao final do jogo, ela possa **inserir quantas tecnologias quiser na lista de aprendizado**.
*/

//configurando o prompt
var prompt = require('prompt-sync')();

//Declarando variáveis
let areaDeAtuacao = aprender = especializacaoReact = especializacaoVue = especializacaoCSharp = especializacaoJava = 0;

//Laço do jogo
while (1) {
    console.clear();
    console.log("\n-- Iniciando o jogo --\n");
    console.log("-- Insira '-1' para sair do jogo --\n");

    //Perguntando a área de atuação
    areaDeAtuacao = prompt("Você quer seguir para área de Front-End ou Back-End? (Digite 1 para Front-End ou 2 para Back-End) ");
    if (areaDeAtuacao == 1) {
        console.log("\n");
        //Perguntando o framework que deseja aprender
        aprender = prompt("Você quer aprender React ou Vue? (Digite 1 para React ou 2 para Vue) ");
        if (aprender == 1) {
            console.log("\nVocê escolheu React!\n");
            //Perguntando se deseja se especializar
            especializacaoReact = prompt("Você quer se especializar na área de Front-End com React ou desenvolver para se tornar Fullstack? (Digite 1 para especialização ou 2 para Fullstack) ");
            if (especializacaoReact == 1) {
                console.log("\nVocê escolheu se especializar na área de Front-End com React!");
            } else if (especializacaoReact == 2) {
                console.log("\nVocê escolheu se desenvolver para se tornar Fullstack!");
            } else if (especializacaoReact == -1) {
                console.log("\nVocê saiu do jogo!");
                console.log("-- Até mais! -- ")
                break;
            } else {
                console.log("\n-- Escolha uma opção válida! --\n");
                continue;
            }
        } else if (aprender == 2) {
            console.log("\nVocê escolheu Vue!\n");
            especializacaoVue = prompt("Você quer se especializar na área com Vue ou desenvolver para se tornar Fullstack? (Digite 1 para especialização ou 2 para Fullstack) ");
            if (especializacaoVue == 1) {
                console.log("\nVocê escolheu se especializar na área de Front-End com Vue!");
            } else if (especializacaoVue == 2) {
                console.log("\nVocê escolheu se desenvolver para se tornar Fullstack!");
            } else if (especializacaoVue == -1) {
                console.log("\nVocê saiu do jogo!");
                console.log("-- Até mais! -- ")
                break;
            } else {
                console.log("\n-- Escolha uma opção válida! --\n");
                continue;
            }
        } else if (aprender == -1) {
            console.log("\nVocê saiu do jogo!");
            console.log("-- Até mais! -- ")
            break;
        } else {
            console.log("\nEscolha uma opção válida!");
            continue;
        }
    } else if (areaDeAtuacao == 2) {
        aprender = prompt("\nVocê quer aprender C# ou Java? (Digite 1 para C# ou 2 para Java) ");
        if (aprender == 1) {
            console.log("\n");
            especializacaoCSharp = prompt("Você quer se especializar na área de Back-End com C# ou desenvolver para se tornar Fullstack? (Digite 1 para especialização ou 2 para Fullstack) ");
            if (especializacaoCSharp == 1) {
                console.log("\nVocê escolheu se especializar na área de Back-End em C#!");
            } else if (especializacaoCSharp == 2) {
                console.log("\nVocê escolheu se desenvolver para se tornar Fullstack!");
            } else if (especializacaoCSharp == -1) {
                console.log("\nVocê saiu do jogo!");
                console.log("-- Até mais! -- ")
                break;
            } else {
                console.log("\nEscolha uma opção válida!");
                continue;
            }
        } else if (aprender == 2) {
            console.log("\n");
            especializacaoJava = prompt("Você quer se especializar na área de Back-End com Java ou desenvolver para se tornar Fullstack? (Digite 1 para especialização ou 2 para Fullstack)");
            if (especializacaoJava == 1) {
                console.log("\nVocê escolheu se especializar na área de Back-End em Java");
            } else if (especializacaoJava == 2) {
                console.log("\nVocê escolheu se desenvolver para se tornar Fullstack");
            } else if (especializacaoJava == -1) {
                console.log("\nVocê saiu do jogo!");
                console.log("-- Até mais! -- ")
                break;
            } else {
                console.log("\nEscolha uma opção válida!");
                continue;
            }
        } else if (aprender == -1) {
            console.log("\nVocê saiu do jogo!");
            console.log("-- Até mais! -- ")
            break;
        } else {
            console.log("\nEscolha uma opção válida!");
            continue;
        }
    } else if (areaDeAtuacao == -1) {
        console.log("\nVocê saiu do jogo!");
        console.log("-- Até mais! -- ")
        break;
    } else {
        console.log("\nEscolha uma opção válida!");
        continue;
    }


    let ntech = prompt("Tem mais alguma tecnologia que você gostaria de aprender? (Digite 1 para sim ou 2 para não) ");
    if (ntech == 1) {
        console.log("\n -- Você escolheu adicionar tecnologias! -- \n");
        console.log(" -- Insira '-1' para parar a inserção de tecnologias --\n");
        let ntecnologia = 0;
        let tecnologias = ["é muito interessante!", "está muito em alta.", "vai render muitas horas de estudo."];
        while (1) {
            ntecnologia = prompt(" Digite a tecnologia que você deseja aprender: ");
            if (ntecnologia != -1) {
                console.log(` - ${ntecnologia} ${tecnologias[Math.floor(Math.random() * tecnologias.length)]}\n`);
            } else {
                console.log("\n -- Você parou de adicionar tecnologias! -- \n");
                break;
            }
        }
    } else {

    }

}