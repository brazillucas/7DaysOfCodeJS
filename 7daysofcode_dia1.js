console.log( false == '0' );
console.log( null == undefined );
console.log( " \t\r\n" == 0 );
console.log( ' ' == 0 );


let numeroUm = 1;
let stringUm = '1';
let numeroTrinta = 30;
let streingTrinta = '30';
let numeroDez = 10;
let stringDez = '10';

if (numeroUm === stringUm) {
    console.log("As variáveis  numeroUm  e  stringUm  tem o mesmo valor, mas tipos diferentes.");
} else {
    console.log("As variáveis  numeroUm  e  stringUm  não tem o mesmo valor.");
}

if (numeroTrinta === streingTrinta) {
    console.log("As variáveis  numeroTrinta  e  streingTrinta  tem o mesmo valor e mesmo tipo.");
} else {
    console.log("As variáveis  numeroTrinta  e  streingTrinta  não tem o mesmo tipo.");
}

if (numeroDez === stringDez) {
    console.log("As variáveis  numeroDez  e  stringDez  tem o mesmo valor, mas tipos diferentes.");
} else {
    console.log("As variáveis  numeroDez  e  stringDez  não tem o mesmo valor.");
}