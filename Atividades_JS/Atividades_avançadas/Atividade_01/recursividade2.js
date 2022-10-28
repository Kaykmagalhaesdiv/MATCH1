const clientes = ['Jorge', 'Maria', 'Manoel', 'João', 'Roberto', 'Vera'];

let recursividade = (client,name,index = 0) =>{
    const tempoPadrao = 15;
    const numerodeClientes = client.length;
    if(numerodeClientes === index){
        return null;
    }else if(client[index] === name){
       return (numerodeClientes - index) * tempoPadrao
    }else{
        index++
        return recursividade(client,name,index)
    }
}

console.log(recursividade(clientes,'Jorge'))