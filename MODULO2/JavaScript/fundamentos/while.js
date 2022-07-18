const prompt = require('prompt-sync')();
let numero;
//verificando se o numero e valido
do { //faça
    console.log('Digite um numero válido');
    numero = Number(prompt());
    if (isNaN(numero)) { // verifico se ele nao é um numero! Not a Number NaN
        console.log("Digite um valor númerico!");
    }
} while (numero === 0 || isNaN(numero));
// se o numero é igual a 0 OU se ele nao é um numero! Not a Number NaN

console.log("Número válido! !!!!");