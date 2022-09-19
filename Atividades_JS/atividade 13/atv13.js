let list = [];
let quantidadeCPF = Number(prompt('Digite a quantidade CPF que deseja: '));

const result = (resultt) =>{
  alert(`Seus cpf digitados foram ${list}`)
 
};

const validation = (parametro) =>{
  if(isNaN(parametro)){
    alert('Você deve digitar apenas Numero!');
    }
  return false
}

let func1 = (qtd) => {
  for(let i = 1; i <= qtd; i++){
  let msg = (prompt(`Digite o ${i} CPF. OBS:(Sem . e sem -)`));
  list.push(msg);
  if(isNaN(msg) || msg.length > 11 || msg.length < 11){
    alert('Você deve digitar apenas Numero e Apenas 11 numeros.');
    break;
  }
}
  return list;
}

validation(quantidadeCPF);
console.log(func1(quantidadeCPF));
result(func1);