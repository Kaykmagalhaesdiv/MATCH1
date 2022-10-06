const listaUsuarios = [
    {
        id:1,
        nome:"Thiago pereira",
        sexo:"Masculino",
        idade:20,
        email:"fulanodetal@termail.com"
    },
    {
        id:2,
        nome:"Thais Lins",
        sexo:"Feminino",
        idade:19,
        email:"fthaisDetal@termail.com"
    },
    {
        id:3,
        nome:"Mariana Ferreira",
        sexo:"Feminino",
        idade:25,
        email:"marianaferreira@termail.com"
    },
    {
        id:4,
        nome:"Pedro Ivo Silva",
        sexo:"Feminino",
        idade:28,
        email:"manuelabc@termail.com"
    }
];

let input = document.getElementById('valor_digitado');
let btnPesquisar = document.getElementById('btn_pesquisar');
let btnLimpar = document.getElementById('btn_limpar');
let userResult = document.getElementById('user');
let tableBody = document.getElementById('table_body');

let search = () => {
    let inputValue = input.value;

    let encontrar = listaUsuarios.filter((value) => {
       let valor =  value.nome.toLocaleLowerCase()
       if(inputValue == ''){
            return false
       };
        return valor.indexOf(inputValue.toLocaleLowerCase()) != -1;
    })

    let mapear = encontrar.map((valor)=>{
        return `<tr>
                <td>${valor.id}</td>
                <td>${valor.nome}</td>
                <td>${valor.sexo}</td>
                <td>${valor.idade}</td>
                <td>${valor.email}</td> 
            </tr>`;
    })

    if(encontrar.length == 0){
        userResult.removeAttribute('hidden')
        userResult.innerHTML = 'Usuario nao encontrado!'
        tableBody.setAttribute('hidden', 'true')
    } else{
        userResult.setAttribute('hidden', 'true');
        tableBody.innerHTML = mapear.join('');
    }
}

let clean = (element) => {
    input.value = ''
    userResult.setAttribute('hidden', 'true');
    tableBody.innerHTML = '';
    tableBody.removeAttribute('hidden')
    listaUsuarios.forEach(exibirLista)
}


let exibirLista = (element) =>{
    let linha = `<tr>
                <td>${element.id}</td>
                <td>${element.nome}</td>
                <td>${element.sexo}</td>
                <td>${element.idade}</td>
                <td>${element.email}</td>
                </tr>`;
    tableBody.innerHTML += linha;
};
listaUsuarios.forEach(exibirLista)
btnPesquisar.addEventListener('click',search )
btnLimpar.addEventListener('click',clean)