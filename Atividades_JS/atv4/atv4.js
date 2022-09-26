let button  = document.querySelector('button');
let username_1 = document.getElementById('username');
let username_2 = document.getElementById('username_2');
let username_3 = document.getElementById('username_3');
let received_1 = document.getElementById('received_1');
let received_2 = document.getElementById('received_2');
let received_3 = document.getElementById('received_3');

button.onclick = () => {
    let userName_1 = username_1.value;
    let userName_2 = username_2.value;
    let userName_3 = username_3.value;
    let validaNome = isNaN(userName_1 || userName_2 || userName_3) ? true : false;
    let nomes = validaNome;

    let mensage  = (mensagem) => {
        feedbackmensage.removeAttribute('hidden');
        feedbackmensage = mensagem;
    }

    let atribuir = () =>{
        if(nomes){
            received_1.innerHTML += `<span>${userName_1}</span>`
            received_2.innerHTML += `<span>${userName_2}</span>`
            received_3.innerHTML += `<span>${userName_3}</span>`

        } else{
            alert('Por favor, digite apenas letras nos formularios.');
        }
        
    }
    atribuir()
    console.log(nomes)
}