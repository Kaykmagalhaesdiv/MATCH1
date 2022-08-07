const carro = {
    marca: "fiat", // indice : valor
    modelo: "Palio", // indice : valor
    peso: 1100,
    itensObrigatorios : {},
    temOferta: true,
    ligar: function(){
       return
    },
    exibirMarcaModelo: function(){
        return this.marca // Chamar outras propriedades dentro do carro.
     }
};

const estado = {
    nome: "Minas Gerais",
    populacao: "25000",
    sigla: "MG",
    tamanho: 55555445,
    municipios: []
}

console.log(carro.peso)
console.log(carro.ligar())