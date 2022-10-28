const MSG_ERRO = 'Digite números inteiros entre 2 e 1000';
const QUESTAO = 'Insira um número inteiro entre 2 e 1000: ';

console.log(QUESTAO)
const prompt = require('prompt-sync')();
let valorUsuario = Number(prompt()); // converte o dado em numerico

//Verificando se ele é um numero inteiro.
if(!Number.isInteger(valorUsuario)){
     return console.log("Esse numero não é um inteiro")
}

if(valorUsuario < 1 || valorUsuario > 1000){
    return console.log("Esse numero não está entre o intervalo de 1 a 1000")
}

// Algoritimo
let textoSaida = `Entre os números 1 e ${valorUsuario}:`; 

for(let numero = 1; numero <= valorUsuario; numero++){
    textoSaida += `${numero},` ;
}

console.log(textoSaida)

  
