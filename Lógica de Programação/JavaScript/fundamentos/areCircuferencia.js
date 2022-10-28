/**
 * Calcular a área da circunferencia sabendo que  o valor do raio é 20
 * Calculo é: PI * raio * raio
 * Mostrar no console: O valor da área é: xxx.xxx m
 */

let raio = 20;
const PI = 3.1415;
const calculo = PI * raio * raio

console.log(`O valor da área é: ${calculo.toFixed(2)} ` + 'm2')