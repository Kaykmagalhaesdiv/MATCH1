/**
 * Fazer a leitura de contas a ser pagas por um usuario
 * O programa deve ler a descriçao da conta e o valor da conta.
 * O programa deve acumular as contas e somar os valores e mostrar na o texto do programa conforme abaixo:
 * Aluguel: R$ 1500.00
 * Condomínio: R$ 399.00
 * Energia: R$ 151.35
 * Combustível: R$ 687.12
 * Internet: R$ 145.55
 * IPTU: R$ 200.00
 * Cartão de crédito: R$ 1850.00
 * -------------------------
 * Nesse mês tenho que pagar 7 contas totalizando R$ 4933.02 ;(
 */  

//QUAL A CONDICAO PARA O USUARIO PARAR DE INSERIR INFORMAÇÃO!!!!!?????


const prompt = require('prompt-sync')();
let descricaoConta;
let valorConta;
let outraConta = 'S';

let quantidadeContas = 0;
let totalContas = 0;
let resposta = '';

console.log("---CONTA---");
while (outraConta === 'S') {
    
    console.log('Digita a descrição da conta: ');
    descricaoConta = prompt();

    console.log('Digita o valor da conta: ');
    valorConta = Number(prompt());

    if (isNaN(valorConta)) {
        console.log('O valor digitado é inválido!!!');
        continue; //volta para pergunta do while (outraConta === 'S) ele faz com que o restante do while não seja executado.
    }


    resposta += `${descricaoConta}: R$ ${valorConta} \n`;
    totalContas += valorConta;
    quantidadeContas++;

    console.log('Deseja inserir outra conta? S/N');
    outraConta = prompt();

    if (outraConta !== 'S' && outraConta !== 'N') {
        return console.log('DIGITE S ou N!');
    }

}
console.log('\n\n-------------RESUMO DE CONTAS------------');
console.log(resposta);
console.log('---------------------------------------------')
console.log(`Nesse mês tenho que pagar ${quantidadeContas} contas totalizando R$ ${totalContas}`);