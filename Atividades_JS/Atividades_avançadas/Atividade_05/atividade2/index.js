// import { Calcular as CalculoJuros } from './Calculos/juros.mjs';
// import { Calcular as CalculoMulta } from './Calculos/multa.mjs';
// let soma = juros.Calcular() + multa.Calcular();

import * as juros from './Calculos/juros.mjs';
import * as multa from './Calculos/multa.mjs';

let soma = juros.Calcular() + multa.Calcular();
console.log(soma);