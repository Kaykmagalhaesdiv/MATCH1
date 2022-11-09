class Alunos {
    nome;
    data_nascimento;
    #idade;
    #avalicoes = [];

    constructor(name,nascimento){
        this.nome = name;
        this.data_nascimento = nascimento;
        if(!nascimento){
            throw new Error('Data de Nascimento não informada');
        }
    };

    get idade(){
        const today = new Date();
        const birthDate = new Date(this.data_nascimento);
        let age = today.getFullYear() - birthDate.getFullYear();
        const m = today.getMonth() - birthDate.getMonth();
        
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        return age;
    }

    adicionarAvaliacao(value){
        this.#avalicoes.push(value);
    };

    obterMedia(){
        const total = this.#avalicoes.reduce((prev,next) =>{
            return prev + next;
        },0)

        return total / this.#avalicoes.length
    }

    aprovado(){
        const media = this.obterMedia();
        if(media < 7){
            return false
        }
        return true
    }
};

const aluno = new Alunos('Kayk','1983/06/22');
aluno.adicionarAvaliacao(5);
aluno.adicionarAvaliacao(7);
console.log(aluno.obterMedia());
console.log(aluno.aprovado())

const aluno2 = new Alunos('Elis','1990/06/22');
aluno2.adicionarAvaliacao(10);
aluno2.adicionarAvaliacao(20);
console.log(aluno2.obterMedia());
console.log(aluno2.aprovado())

console.log(aluno);
console.log(aluno2);