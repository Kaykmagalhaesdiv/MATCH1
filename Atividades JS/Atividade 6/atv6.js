let receiveUser = parseInt(prompt('Digite quantos anos de Aviação você tem: '))
let counter = 0;
while(counter < receiveUser){
    if(receiveUser >= 2 && !isNaN(receiveUser)){
        alert(`Seu tempo de reciclagem é ${receiveUser}, Você tem o tempo limite de 2 anos para ter uma reciclagem, Parabens!. `)
        break;
    }
    alert('Você ainda não tem o tempo mínimo de 2 anos para ter uma reciclagem. ')  
    counter++
} alert('Você deve digitar um Numero!')