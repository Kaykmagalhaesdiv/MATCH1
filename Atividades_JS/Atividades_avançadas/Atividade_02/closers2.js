const criarContadorNumerico = (count) => {
    let alunos = 0;
    let numberLooping = () => {
        alunos = count++
        console.log(alunos)
    }
    return numberLooping;
};
const contador = criarContadorNumerico (1)

const idPrimeiroAluno = contador()
const idSegundoAluno = contador()
const idTerceiroAluno = contador()

const novoContador = criarContadorNumerico(6)
novoContador()
novoContador()