console.log( false == '0' );
console.log( null == undefined );
console.log( " \t\r\n" == 0 );
console.log( ' ' == 0 );


let numeroUm = 1;
let stringUm = '1';
let numeroTrinta = 30;
let stringTrinta = '30';
let numeroDez = 10;
let stringDez = '10';

if (numeroUm == stringUm) {
    console.log("As variáveis  numeroUm  e  stringUm  têm o mesmo valor, mas tipos diferentes.");
} else {
    console.log("As variáveis  numeroUm  e  stringUm  não têm o mesmo valor.");
}

if (numeroTrinta === stringTrinta) {
    console.log("As variáveis  numeroTrinta  e  stringTrinta  têm o mesmo valor e mesmo tipo.");
} else {
    console.log("As variáveis  numeroTrinta  e  stringTrinta  não têm o mesmo tipo.");
}

if (numeroDez == stringDez) {
    console.log("As variáveis  numeroDez  e  stringDez  têm o mesmo valor, mas tipos diferentes.");
} else {
    console.log("As variáveis  numeroDez  e  stringDez  não têm o mesmo valor.");
}

// Fazendo as comparações com a forma reduzida do IF
console.log("\nAgora com a forma reduzida do IF\n");
numeroUm == stringUm ? console.log("As variáveis  numeroUm  e  stringUm  têm o mesmo valor, mas tipos diferentes.") : console.log("As variáveis  numeroUm  e  stringUm  não têm o mesmo valor.");
numeroTrinta === stringTrinta ? console.log("As variáveis numeroTrista e stringTrinta têm  o mesmo valor e mesmo tipo.") : console.log("As variáveis numeroTrinta e stringTrinta não têm o mesmo tipo.");
numeroDez == stringDez ? console.log("As variáveis numeroDez e stringDez têm o mesmo valor, mas tipos diferentes.") : console.log("As variáveis numeroDez e stringDez não têm  o mesmo valor.");