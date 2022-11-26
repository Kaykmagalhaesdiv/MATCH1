import Turma from '../models/turma-model.js'

/**
 * Array com todas as turmas criadas no sistema
 */
const Turmas = [
    new Turma("Turma 1", ["Aluno 1", "Aluno 2", "Aluno 3", "Aluno 4", "Aluno 5","Aluno 6", "Aluno 7" ]),
    new Turma("Turma 2", ["Aluno 8", "Aluno 9", "Aluno 10", "Aluno 11", "Aluno 12","Aluno 13", "Aluno 14" ]),
    new Turma("Turma 3", ["Aluno 15", "Aluno 16" ]),
]

/**
 * Função resposável por criar uma turma nova, adicionar a lista de turmas 
 * e retornar para o usuário
 * @returns Uma turma vazia 
 */
export async function CriarNovaTurma(){
    let nomeTurma = await new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`Turma ${Turmas.length+1}`)
        }, 2000);
    })

    let turma = new Turma(nomeTurma)
    Turmas.push(turma)
    return turma
}

/**
 * Função responsável por buscar as turmas cadastradas no sistema
 * @returns Array de turmas cadastradas
 */
export async function getTurmas(){
    return [...Turmas]
}
