{
    let list = ['Sem Cadastro','Leite', 'Ovo', 'Farinha', 'Milho', 'Café'];
    let receiveUser = prompt('Digite o Código do Produto que  (De 1 a 5): ');
    
    if(list[receiveUser] === undefined){
        alert(list[0])
    } else{
        alert(`Usuário digitou ${receiveUser}, "${list[receiveUser]}"`);
    }

    let list_2 = prompt('Você Deseja adicionar algum outro ingrediente a lista? (S/N)').toUpperCase()
    if(list_2 == 'S'){
        let list_receive = prompt('Qual item gostaria de adionar?:');
        list.push(list_receive); 
    } else;
}
