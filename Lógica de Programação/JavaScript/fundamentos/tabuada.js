
const prompt = require('prompt-sync')();
console.log("Digite qual tabuada você quer:")
let tabuada = Number(prompt());

for (let inicioT = 1; inicioT <= tabuada; inicioT++) {
    console.log(`${tabuada} x ${inicioT}`);
    tabuada *= 2;
}
console.log(tabuada)