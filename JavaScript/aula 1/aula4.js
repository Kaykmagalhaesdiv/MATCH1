const idades = [12, 20, 15, 17, 19];

const prep = idades.forEach(function(idade, i){
    if(idade > 18){
        return console.log(`${i} - ${idade}`)
    }
})
