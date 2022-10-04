let name_cadaster = document.getElementById('username');
let email_cadaster = document.getElementById('email')
let cellphone_cadaster = document.getElementById('cellphone');
let button_send = document.getElementById('send');
let button_finish = document.getElementById('finish_cadaster');


let arrayDices = [];

let cleanForm = () => {
    name_cadaster.value = '';
    email_cadaster.value = '';
    cellphone_cadaster.value = '';
}

let sendValue = () => {
    let nameCadasterValue = name_cadaster.value;
    let emailCadasterValue = email_cadaster.value;
    let cellphoneCadasterValue = cellphone_cadaster.value;

    let userDices = {
        name: nameCadasterValue,
        email: emailCadasterValue,
        cellphone: cellphoneCadasterValue
    }

    arrayDices.push(userDices);
    cleanForm()
    console.log(arrayDices)
}

let concludeCadaster = () => {
    let cadaster = document.getElementById('cadastro');
    let listDices = document.getElementById('list');

    cadaster.setAttribute('class','inactive');
    listDices.setAttribute('class','active');
    
}


button_send.addEventListener('click',sendValue);
button_finish.addEventListener('click',concludeCadaster);