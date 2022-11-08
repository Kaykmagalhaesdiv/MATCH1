const orderNumber = (count) => {
    let numberLooping = () => {
        return count++
    }
    return numberLooping;
};
const contador = orderNumber(1)

class Alunos {
    nome = '';
    #id = 0;
    endereco = '';
    data_nascimento = Date(Date.now());
    email = '';
    telefone = '';
    avalicoes = [];

    constructor(name){
        this.nome = name;
        this.#id = contador();
    };
};

const aluno1 = new Alunos('Kayk');
const aluno2 = new Alunos('Elis');

console.log(aluno1);
console.log(aluno2);
