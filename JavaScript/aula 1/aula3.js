const idades = [12, 18, 15, 17, 14];

// let resultadoFind = idades.find(function(value){
//     return value > 18
// })  // se encontrar, retorna o primeiro valor encontrado, senao encontrar retorna undefined

let resultadoIncludes = idades.includes("18") //valor fixo

//includes (true ou false)
console.log(resultadoIncludes)

let resultadoSome  = idades.some(function(value){
    return value > 18
})

console.log(resultadoSome) // se encontrar, retorna true, senao encontrar retorna false