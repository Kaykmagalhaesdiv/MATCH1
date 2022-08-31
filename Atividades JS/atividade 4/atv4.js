{
    let recebeLetra = prompt('Digite uma letra do alfabeto')
    let letraValida = !isNaN (recebeLetra) ? false : true
    recebeLetra = recebeLetra.toLowerCase();

    if(letraValida && recebeLetra.length>1){
        if(recebeLetra =='a' || recebeLetra =='e' || recebeLetra =='i'){
            alert('A letra digitada é uma vogal')
        }else{
            alert('A letra digitada é uma consoante')
        }
    }else{
        alert('Você deve digitar apenas uma letra')
    }
}
