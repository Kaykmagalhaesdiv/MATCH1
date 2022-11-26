import Turma, { TOTAL_ALUNO_TURMA } from './models/turma-model.js';
import { CriarNovaTurma } from './services/turma-service.js';
import {getTurmas} from './services/turma-service.js'
let btnMatricula = document.querySelector("#matricular");
let inputMatricula = document.querySelector("#nome");

/**
 * Função responsavel por atualizar a tabela de turmas com os alunos
 */
function atualizarTela(){
    const panelTurmas = document.querySelector(".turmas")

    panelTurmas.innerHTML = ""
    getTurmas().then(turmas => {
        turmas.forEach(turma => {
            let div = document.createElement("div")
            div.classList.add('turma')
            div.innerHTML = `<h2>${turma.nome}</h2>`;

            let alunos = turma.obterAlunosMatriculados().map(aluno => {
                            return `<div>${aluno}</div>`;
                        }).join('')

            div.innerHTML += alunos;
            panelTurmas.appendChild(div)
        })
    })
}

btnMatricula.addEventListener("click",async () =>{
    btnMatricula.setAttribute('disabled','true')
    let inputNomeAluno = inputMatricula.value;
    let classTurma = new Turma();
    let turmas = await getTurmas()
    console.log(turmas.length)
    let matriculou = false;
    for(let i = 0; i < turmas.length; i++){
        let turmaPosition = turmas[i]
        let alunos = turmaPosition.obterAlunosMatriculados();
       if(alunos.length < TOTAL_ALUNO_TURMA){ 
         let matricular = await turmaPosition.MatricularAluno(inputNomeAluno)
         matriculou = true;
         atualizarTela()
         btnMatricula.removeAttribute("disabled")
         return
       }
    }

    if(matriculou == false){
        btnMatricula.setAttribute('disabled','true')
        let newTurma = await CriarNovaTurma();
       await newTurma.MatricularAluno(inputNomeAluno);
       atualizarTela();
       btnMatricula.removeAttribute("disabled");
       return
    }
})
atualizarTela()
