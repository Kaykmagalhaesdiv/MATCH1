import { EnviarMensagemServers } from "./utils.js";

let input = document.querySelector("#mensagem");
let btnSend = document.querySelector("#enviar");
let primeiraResposta = document.querySelector("#primeiraResposta");

btnSend.addEventListener("click",() =>{
    if(input.value == ""){
        alert("Campo mensagem é obrigratório*");
        return
    };
    let promise = EnviarMensagemServers(input.value);
    Promise.race(promise)
    .then(response =>{
        primeiraResposta.innerHTML = response;
        primeiraResposta.style.color = "green"
    }).catch(error =>{
        primeiraResposta.innerHTML = error;
        primeiraResposta.style.color = "red"
    })
})