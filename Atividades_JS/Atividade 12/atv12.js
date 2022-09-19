let resultOperation = (result) =>{
    alert(`O valor do seu Imposto de Renda é de: R$${result}`);
};

let operation = (receivedUser) =>{
    let user = Number(prompt("Please enter your gross salary: ").replace(/\.|\,/g, ''));
    let result = user;
    if(result > 0 && result <= 1903.98){
        receivedUser(result.toFixed(2));

    }else if(result > 1903.98 && result <= 2826.65){
        result = (result * 0.075) - 142.8;
        receivedUser(result.toFixed(2));

    }else if(result > 2826.66 && result <= 3751.05){
        result = (result * 0.15) - 354.8;
        receivedUser(result.toFixed(2));

    }else if(result > 3751.06 && result <= 4664.68){
        result = (result * 0.225) - 636.13;
        receivedUser(result.toFixed(2));

    }else if(result >= 4664.69){
        result = (result * 0.275) - 869.36;
        receivedUser(result.toFixed(2));

    } else{
        alert("Por favor Digite um valor Numero de 4 digitos, sem pontos ou virgula.")
    }
}


operation(resultOperation);