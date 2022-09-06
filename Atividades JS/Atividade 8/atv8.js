{
    let list = ['Sem Cadastro','Leite', 'Ovo', 'Farinha', 'Milho', 'Café'];
    let receiveUser = prompt('Digite o Código do Produto que  (De 1 a 5): ');
    
    if(list[receiveUser] === undefined){
        alert(list[0])
    } else{
        alert(`Usuário digitou ${receiveUser}, "${list[receiveUser]}"`);
    }
}
