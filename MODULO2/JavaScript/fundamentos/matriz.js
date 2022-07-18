/**
 *[1, 1] [1, 2] [1, 3] [1, 4]
 *[2, 1] [2, 2] [2, 3] [2, 4]
 *[3, 1] [3, 2] [3, 3] [3, 4]
 

 for (let linha = 1; linha <= 5; linha++) {
    let mostrarLinha = '';
    for (let coluna = 1; coluna <= 4; coluna++) {
        mostrarLinha += `[${linha}, ${coluna}] `;
    }
    console.log(mostrarLinha);
} */


/** Desafio
 * * Montar um programa onde o usuario informa o número de linhas e colunas e exibir a matriz conforme
 * o exemplo abaixo:
 * [1, 1] [1, 2] [1, 3]
 * [2, 1] [2, 2] [2, 3]
 */

 const prompt = require('prompt-sync')();
 console.log("Digite o numero de linhs que queres")
 let usuarioLinha = Number(prompt())
 console.log("Digite o Start da Colun (1)")
 let usuarioColuna = Number(prompt())

for(let linha = 1; linha <= usuarioLinha; linha++){
    let mostrarLinha= ''
    for(let colunas = 1; colunas <= usuarioColuna; colunas++){
        mostrarLinha += `[${linha}, ${colunas}]`
    }
    console.log(mostrarLinha)
}
