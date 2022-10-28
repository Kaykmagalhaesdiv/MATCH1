const montarTabuada = (numeroDaTabuada) =>{
    let total = 0;
    let tabuada =  function (number1,number2){
        if(number1 <= number2){
            for(let i = number1; i <= number2; i++){
                total = i * numeroDaTabuada
                console.log(`${i} X ${numeroDaTabuada} = ${total}`)
            }
        }
    }
    return tabuada;
};

const tabuada = montarTabuada(10);
tabuada(1,10)