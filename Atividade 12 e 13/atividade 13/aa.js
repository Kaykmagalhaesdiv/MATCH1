let input_digitado = document.getElementById('number');
let botaoSalvar = document.getElementById('btn_add');
let botaoLimpar = document.getElementById('btn_remove');
let result = document.getElementById('resultado');

let arrayRecebe = [];

let calculo = () =>{
    let input_valor = input_digitado.value;
    arrayRecebe.push(input_valor);

    let config = arrayRecebe.map((valor) =>{
        let calc = valor * 3;
        return calc;
    })
    result.innerHTML = config;
}

let limpa = () =>{
    result.innerHTML = '';
    arrayRecebe.splice(0,arrayRecebe.length)
}


botaoSalvar.addEventListener('click', calculo)
botaoLimpar.addEventListener('click',limpa)
