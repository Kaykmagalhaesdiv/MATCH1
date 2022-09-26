let table = [['','0',''], ['','1',''],['','2',''],['','3',''],
            ['','4',''], ['','5',''], ['','6',''], ['','7',''],
            ['','8',''],['','9',''], ['','10','']];

let receiveUser = parseInt(prompt('Qual número INTEIRO você deseja ver a tabela matematica?'));
if(isNaN(receiveUser)){
    alert('Você deve Adicionar apenas numeros.');
}else{
    for(row of table){
        row[0] = receiveUser;
        let calculate = row[0] * row[1];  
        row[2] = calculate;
    };
};

alert('A lógica da tebela representada foi a seguinte: Usuario digita um numero que ele deseja, em seguida o numero é multiplicado de 0 a 10.');
alert('Cheguei nessa conclusão após ver que o usuario poderia sim escolher o numero que deseja, adicionando este numero ao primeiro [0] elemento da matriz ');
console.log(table)

