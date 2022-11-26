import { ProcessarArquivos } from "./utils.js";
const files = []
for(let i =1;i<=    100;i++){
    files.push({text : `Arquivo ${i}`, id: i, file: `arquivo_${i}.txt`});
}

files.forEach(x => {
    let op = document.createElement("option")
    op.value = x.file
    op.innerText = x.text
    document.querySelector("#arquivos").appendChild(op)
})

let btnSendd = document.querySelector("#processar");
let totalArquivosErros = document.querySelector("#totalArquivosErros");
let totalArquivosSucesso = document.querySelector("#totalArquivosSucesso");
let totalArquivos = document.querySelector("#totalArquivos");

btnSendd.addEventListener("click",() =>{
    let totalOption = document.querySelectorAll("option");
    let listSelected = [];
    let countFails = 0;
    

    for(let i = 0; i < totalOption.length; i++){
        if(totalOption[i].selected){
            listSelected.push(totalOption[i].value)
        }
    }
    
    let promise = ProcessarArquivos(listSelected);
    let total = listSelected.length;
    Promise.allSettled(promise)
    .then(response =>{
        for(let i = 0; i < response.length; i++){
            if(response[i].status == "rejected"){
                countFails++
                totalArquivosErros.innerHTML = countFails;
                totalArquivosErros.style.color = "red"
            }  
        }
        let countSucess = total - countFails;
        totalArquivosSucesso.innerHTML = countSucess;
        totalArquivosSucesso.style.color = "green";

        totalArquivos.innerHTML = total;
        totalArquivos.style.color = "blue"
    })
})
