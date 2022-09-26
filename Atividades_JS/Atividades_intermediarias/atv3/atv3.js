/* ------------ Resgatando o ID dos inputs ------------- */
let username = document.getElementById('username');
let lastname = document.getElementById('last_name')
let cpfUser = document.getElementById('cpf');
let buttonValid = document.getElementById('send');

/* ------------ Invalido e Valido ------------- */
let nameInvalid = document.getElementById('name_invalid')
let namevalid = document.getElementById('name_valid')
let lastNameInvalid = document.getElementById('last_name_invalid')
let lastNamevalid = document.getElementById('last_name_valid')
let cpfInvalid = document.getElementById('cpf_invalid');
let cpfvalid = document.getElementById('cpf_valid');


buttonValid.onclick = () =>{
    /* ------ Armazenando os valores dos inputs nas variaveis ------ */
    let name = username.value;
    let last_name = lastname.value;
    let cpf = cpfUser.value;

    /* ------ Vazio ou Não ------ */
    let voidOrNot = () => {
        if(name == '' && last_name == '' && cpf == ''){
            alert("Você deve preencher o formulario!")
        }
        return false
    }
    
  /* ------ Nome Valido ou Invalido ------ */
   let nome = () =>{
    if(!isNaN(name)){
        nameInvalid.removeAttribute('hidden');
        namevalid.setAttribute('hidden', 'true');
    }else{
        namevalid.removeAttribute('hidden');
        nameInvalid.setAttribute('hidden','true'); 
   }
 }

 /* ------ Sobrenome Valido ou Invalido ------ */
 let sobrenome = () =>{
    if(!isNaN(last_name)){
        lastNameInvalid.removeAttribute('hidden');
        lastNamevalid.setAttribute('hidden', 'true');
    }else{
        lastNamevalid.removeAttribute('hidden');
        lastNameInvalid.setAttribute('hidden','true'); 
   }
 }

/* ------ CPF maior que 11 numeros? ------ */
 let cpfFunction = () =>{
    if(cpf.length == 11){
        cpfvalid.removeAttribute('hidden');
        cpfInvalid.setAttribute('hidden', 'true');
    }else{
        cpfInvalid.removeAttribute('hidden');
        cpfvalid.setAttribute('hidden', 'true');
    }
 }

voidOrNot()
cpfFunction()
nome()
sobrenome()
}

