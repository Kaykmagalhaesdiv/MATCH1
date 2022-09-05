{
    let receiveUser= prompt('Informe qual é seu animal de estimação: ')
    let message = `Você escolheu: ${receiveUser}, Total = Ração gratuitamente e Banho e tosa!`
    switch (receiveUser) {
        case 'Cachorro':
        case 'cachorro':
            alert(message);
            break;

        case 'Gato':
        case 'gato':
            alert(message);
            break;

        case 'Coelho':
        case 'coelho':
            alert(message);
            break;

        case 'Rato':
        case 'rato':
            alert(message.replace('Banho e tosa','Gaiolas especiais'));
            break;

        case 'Passaro':
        case 'passaro':
            alert(message.replace('Banho e tosa', 'Implante de Rastreador'));
            break;
            
        case 'Cavalo':
        case 'cavalo':
            alert(message.replace('Banho e tosa', 'Nós enviaremos seu animal para um veterinario especifico'));
            break; 
         
        case 'Cabra':
        case 'cabra':
            alert(message.replace('Banho e tosa', 'Nós enviaremos seu animal para um veterinario especifico'));
            break;
            
        case 'Jumento':
        case 'Jumento':
            alert(message.replace('Banho e tosa', 'Nós enviaremos seu animal para um veterinario especifico'));
            break; 

        default:
            alert('Por favor, informe um animal no singular. Ex:(Cachorro), E não digite numeros.');
        break;
    }
}

