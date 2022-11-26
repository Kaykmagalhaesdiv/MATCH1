/**
 * Variavel com a quantidade permitida de alunos por turma
 */
export const TOTAL_ALUNO_TURMA = 7

/**
 * Class Turma usada para fazer a gestão da turma 
 */
export default class Turma{
    #alunos = [];
    nome = "";

    /**
     * Contrutor da class Turma
     * @param {Nome da turma que está sendo criada} nome 
     * @param {Array com os alunos que serão matriculados na turma} alunos 
     */
    constructor(nome, alunos = []){
        this.nome = nome

        if(alunos.length > TOTAL_ALUNO_TURMA){
            throw new Error("Limite de alunos ")
        }

        this.#alunos = alunos
    }

    /**
     * Função de matricula de aluno na turma, recebe um aluno por parâmetro e cadastra o mesmo na turma
     * @param {Nome do aluno a ser matriculado } nomeAluno 
     */
    async MatricularAluno(nomeAluno){
        if(this.#alunos.length >= TOTAL_ALUNO_TURMA){
            throw new Error("Limite de alunos ")
        }

        await new Promise((resolve) => {
            setTimeout(() => {
                resolve()
            }, 100);
        })
        
        this.#alunos.push(nomeAluno)
    }

    /**
     * Função responsável por retornar os alunos matriculados na turma
     * @returns Retorna uma Array com os alunos matriculados na Turma
     */
    obterAlunosMatriculados(){
        return [...this.#alunos]
    }
}